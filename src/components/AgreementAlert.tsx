import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AgreementAlert({ open, handleClose }) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{
            width: '350px',
            fontSize: '24px',
            paddingLeft: '40px',
            paddingRight: '40px',
            textAlign: 'center',
          }}
        >
          {/* {'Razılaşma'} */}
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
          <DialogContentText
            id="alert-dialog-description"
            style={{
              fontSize: '16px',
            }}
          >
            Təyin olunmuş hədəflərnən razıyam və qəbul edirəm!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ fontSize: '14px' }}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
