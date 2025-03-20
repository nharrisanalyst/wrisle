import { useEffect, useRef } from "react";

export const usePrevious = <T>(value: T): T | undefined | null => {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
