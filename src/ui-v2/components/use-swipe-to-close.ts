'use client';

import * as React from 'react';

type Axis = 'x' | 'y';

interface Options {
  /** Вісь жесту: `y` — шторка знизу, `x` — бічна панель. */
  axis: Axis;
  /** Напрямок закриття: `1` — вниз/вправо, `-1` — вгору/вліво. */
  sign: 1 | -1;
  enabled?: boolean;
}

const START_THRESHOLD = 6; // px до рішення «це жест»
const DISMISS_DISTANCE = 0.4; // частка розміру панелі
const DISMISS_VELOCITY = 0.45; // px/мс — швидкий флік закриває і на короткій відстані
const RESISTANCE = 0.15; // «гумка» у протилежний бік

/** Склеює зовнішній ref (forwardRef) із внутрішнім. */
export function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (node: T | null) => {
    for (const ref of refs) {
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<T | null>).current = node;
    }
  };
}

/**
 * Свайп для закриття шторки. Поки палець на екрані, панель рухається 1:1
 * (пряма запис `transform`, без React-стейту). Після відпускання: закриваємо за
 * відстанню АБО швидкістю, інакше швидко повертаємо назад. Можна «спіймати»
 * панель посеред повернення — зміщення береться з поточного computed-стилю.
 *
 * Повертає ref-колбеки: `contentRef` — панель, що рухається, `overlayRef` —
 * затемнення (його прозорість прив'язана до прогресу), `dragRef` — елемент,
 * за який тягнуть (для бічної панелі це сама панель, для нижньої — ручка).
 */
export function useSwipeToClose({ axis, sign, enabled = true }: Options) {
  const [content, setContent] = React.useState<HTMLElement | null>(null);
  const [overlay, setOverlay] = React.useState<HTMLElement | null>(null);
  const [drag, setDrag] = React.useState<HTMLElement | null>(null);
  /** Прихована кнопка Dialog.Close: клік по ній закриває шторку штатним способом. */
  const [closer, setCloser] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    const node = drag;
    if (!node || !content) return;
    const st = {
      id: -1,
      dragging: false,
      startX: 0,
      startY: 0,
      startPos: 0,
      startOffset: 0,
      offset: 0,
      size: 1,
      lastPos: 0,
      lastT: 0,
      velocity: 0,
    };
    let timer = 0;

    const pos = (e: PointerEvent) => (axis === 'y' ? e.clientY : e.clientX);

    const apply = (value: number) => {
      const el = content;
      const a = axis;
      const sg = sign;
      st.offset = value;
      el.style.transform =
        a === 'y' ? `translate3d(0,${value}px,0)` : `translate3d(${value}px,0,0)`;
      if (overlay) {
        const progress = Math.min(1, Math.max(0, (value * sg) / st.size));
        overlay.style.opacity = String(1 - progress);
      }
    };

    const onDown = (e: PointerEvent) => {
      if (!enabled || st.id !== -1) return; // другий палець ігноруємо
      if (e.pointerType === 'mouse') return; // мишею шторку не тягнемо
      st.id = e.pointerId;
      st.dragging = false;
      st.startX = e.clientX;
      st.startY = e.clientY;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerId !== st.id) return;
      const el = content;
      const a = axis;
      const sg = sign;

      if (!st.dragging) {
        const dx = e.clientX - st.startX;
        const dy = e.clientY - st.startY;
        const main = a === 'y' ? dy : dx;
        const cross = a === 'y' ? dx : dy;
        if (Math.hypot(dx, dy) < START_THRESHOLD) return;
        if (Math.abs(cross) > Math.abs(main)) {
          st.id = -1; // це скрол або інший жест
          return;
        }
        // Поточне зміщення — на випадок, якщо ловимо панель посеред повернення
        const matrix = new DOMMatrix(getComputedStyle(el).transform);
        st.startOffset = a === 'y' ? matrix.m42 : matrix.m41;
        window.clearTimeout(timer);
        el.style.transition = 'none';
        if (overlay) overlay.style.transition = 'none';
        const rect = el.getBoundingClientRect();
        st.size = a === 'y' ? rect.height : rect.width;
        st.startPos = pos(e);
        st.lastPos = st.startPos;
        st.lastT = e.timeStamp;
        st.velocity = 0;
        st.dragging = true;
        node.setPointerCapture(e.pointerId);
      }

      const p = pos(e);
      const dt = e.timeStamp - st.lastT;
      if (dt > 0) {
        st.velocity = 0.7 * ((p - st.lastPos) / dt) + 0.3 * st.velocity;
        st.lastPos = p;
        st.lastT = e.timeStamp;
      }
      const delta = st.startOffset + (p - st.startPos);
      // У бік закриття — 1:1, у протилежний — з опором
      apply(delta * sg >= 0 ? delta : delta * RESISTANCE);
    };

    const release = (e: PointerEvent, cancelled: boolean) => {
      if (e.pointerId !== st.id) return;
      st.id = -1;
      if (!st.dragging) return;
      st.dragging = false;
      const el = content;
      const ov = overlay;
      const sg = sign;

      const toward = st.offset * sg;
      const velToward = st.velocity * sg;
      const dismiss =
        !cancelled &&
        toward > 0 &&
        (toward > st.size * DISMISS_DISTANCE || velToward > DISMISS_VELOCITY);

      if (dismiss) {
        el.style.transition = 'transform 220ms var(--v2-ease-out)';
        if (ov) ov.style.transition = 'opacity 220ms var(--v2-ease-out)';
        apply(sg * (st.size + 24));
        if (ov) ov.style.opacity = '0';
        timer = window.setTimeout(() => {
          // Анімація вже зроблена руками — Radix не має програвати свою (інакше «стрибок»)
          el.style.animation = 'none';
          closer?.click();
        }, 230);
      } else {
        el.style.transition = 'transform 260ms var(--v2-ease-drawer)';
        if (ov) ov.style.transition = 'opacity 260ms var(--v2-ease-drawer)';
        apply(0);
        if (ov) ov.style.opacity = '1';
        timer = window.setTimeout(() => {
          el.style.transform = '';
          el.style.transition = '';
          if (ov) {
            ov.style.opacity = '';
            ov.style.transition = '';
          }
        }, 280);
      }
    };

    const onUp = (e: PointerEvent) => release(e, false);
    const onCancel = (e: PointerEvent) => release(e, true);

    node.addEventListener('pointerdown', onDown);
    node.addEventListener('pointermove', onMove);
    node.addEventListener('pointerup', onUp);
    node.addEventListener('pointercancel', onCancel);
    return () => {
      window.clearTimeout(timer);
      node.removeEventListener('pointerdown', onDown);
      node.removeEventListener('pointermove', onMove);
      node.removeEventListener('pointerup', onUp);
      node.removeEventListener('pointercancel', onCancel);
    };
  }, [drag, content, overlay, closer, axis, sign, enabled]);

  return { setContent, setOverlay, setDrag, setCloser };
}
