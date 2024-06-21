import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { ErrorOutlineOutlined } from '@mui/icons-material';

type AlertDialogProps = {
  open: boolean;
  handleClose?: () => void;
  warning?: boolean;
  handleSendData?: any;
  loading: boolean;
  success: boolean;
  error: boolean;
};

export default function AlertDialog({
  open,
  handleClose,
  warning,
  handleSendData,
  loading,
  success,
  error,
}: AlertDialogProps) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{
            width: loading || error ? '350px' : '350px',
            fontSize: '24px',
            paddingLeft: '40px',
            paddingRight: '40px',
            textAlign: 'center',
          }}
        >
          {error
            ? 'Gözlənilməyən səhv yarandı..'
            : loading
            ? 'Gözləyin...'
            : success
            ? 'Yadda saxlanıldı!'
            : warning
            ? 'Qiymətləndirmədiyiniz sətir var!'
            : 'Təsdiq etməyə əminsiniz?'}
        </DialogTitle>
        <DialogContent
          style={{
            paddingLeft: '40px',
            paddingRight: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {error ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <p>Zəhmət olmasa yenidən cəhd edin </p>
              <ErrorOutlineOutlined
                color="error"
                style={{ fontSize: '70px' }}
              />
            </div>
          ) : loading ? (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          ) : success ? (
            <CheckCircleOutlinedIcon
              color="success"
              style={{ fontSize: '70px' }}
            />
          ) : (
            <DialogContentText
              id="alert-dialog-description"
              style={{
                fontSize: '16px',
              }}
            >
              {warning
                ? 'Xahiş edirik, hər biri sətiri doldurasınız.'
                : 'Xahiş edirik, nəzərə alın ki, qiymətləndirmə yalnız bir dəfə yerinə' +
                  '\n' +
                  'yetirilə bilər.'}
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          {loading ? (
            ''
          ) : warning || success || error ? (
            <Button onClick={handleClose} style={{ fontSize: '14px' }}>
              OK
            </Button>
          ) : (
            <>
              <Button onClick={handleClose} style={{ fontSize: '14px' }}>
                Cancel
              </Button>
              <Button
                onClick={handleSendData}
                style={{ fontSize: '14px' }}
                autoFocus
              >
                Bəli
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
