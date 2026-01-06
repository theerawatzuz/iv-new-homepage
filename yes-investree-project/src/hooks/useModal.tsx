import { useCallback, useState } from 'react';

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return { open, onClose, onOpen };
};
