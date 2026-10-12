import { Suspense } from 'react';
import GoogleAuthCompleteContent from './GoogleAuthCompleteContent';

export default function GoogleAuthCompletePage() {
  return (
    <Suspense fallback={null}>
      <GoogleAuthCompleteContent />
    </Suspense>
  );
}
