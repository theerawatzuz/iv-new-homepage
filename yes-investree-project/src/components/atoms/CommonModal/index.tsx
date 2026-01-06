import { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, DialogContent, DialogTitle, IconButton } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';

type Props = DialogProps & {
  title?: ReactNode | string;
  header?: ReactNode | string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  width: number;
  paperPadding?: number;
};

const CommonModal = (props: Props) => {
  const { title, children, open, onClose, header, width, paperPadding = 2 } = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: `${width}px`, maxWidth: '90%', borderRadius: '16px', p: paperPadding },
      }}
    >
      <DialogTitle>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Box flexGrow={1} textAlign='center'>
            <p className='text-headline6'>{title}</p>
          </Box>
          <IconButton
            onClick={onClose}
            edge='end'
            sx={{
              width: '28px',
              height: '28px',
            }}
          >
            <CloseIcon sx={{ color: 'black' }} />
          </IconButton>
        </Box>
        {header}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CommonModal;
