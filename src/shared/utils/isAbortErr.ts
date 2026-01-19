import { AxiosError } from 'axios';

export const isAbortErr = (err: unknown): boolean => {
  if (err instanceof AxiosError) {
    return err.code === 'ERR_CANCELED' || err.message === 'canceled';
  }
  if (err instanceof Error) {
    return err.name === 'AbortError' || err.message === 'canceled';
  }
  return false;
};
