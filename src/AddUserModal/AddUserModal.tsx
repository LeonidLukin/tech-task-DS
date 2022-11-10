import { useState } from 'react';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { AddBtnTitle } from './index';

export default function AddUserModal() {
  const [open, setOpen] = useState(false);
  const [fistName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <PersonAddAltSharpIcon/>
        <AddBtnTitle>Add user</AddBtnTitle>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new user</DialogTitle>
        <DialogContent>
            <DialogContentText>
            <Box
                component="form"
                id="add-user-form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="on"
                onSubmit={handleSubmit}
            >
                <TextField
                    onChange={handleFirstNameChange}
                    autoFocus
                    required
                    error={false}
                    margin="dense"
                    id="fistName"
                    label="First Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleLastNameChange}
                    autoFocus
                    required
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleEmailChange}
                    autoFocus
                    required
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handlePhoneNumberChange}
                    autoFocus
                    margin="dense"
                    id="phoneNumber"
                    label="Phone Number"
                    type="number"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleCityChange}
                    autoFocus
                    margin="dense"
                    id="city"
                    label="City"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </Box>
          </DialogContentText>
          

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="add-user-form">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}