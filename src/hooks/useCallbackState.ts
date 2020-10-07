import { useEffect, useRef, useState } from 'react';

function useCallbackState<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  const cbRef = useRef<any>(null);

  const setCallbackState = (newState: T, cb: any) => {
    cbRef.current = cb;
    setState(newState);
  };

  useEffect(() => {
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null;
    }
  }, [state]);

  return [state, setCallbackState];
}

export default useCallbackState;
