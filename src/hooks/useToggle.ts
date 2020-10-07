import { useCallback, useState } from 'react';

const useToggle = (
  state: boolean,
): [boolean, () => void, () => void, () => void] => {
  const [isVisible, setIsVisible] = useState(state);

  const onOpen = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  const onToggle = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return [isVisible, onOpen, onClose, onToggle];
};

export default useToggle;
