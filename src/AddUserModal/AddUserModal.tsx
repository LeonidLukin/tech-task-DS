import { useState } from 'react';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import { 
  Box, 
  Button, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle 
} from '@mui/material';
import { useForm, Controller, SubmitHandler, useFormState } from "react-hook-form";
import { AddBtnTitle } from './index';
import { firstNameValidation } from './AddUserValidation'
interface User{
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phoneNumber: string;
}

export default function AddUserModal() {
  const [open, setOpen] = useState(false);
  const [fistName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  
  const { handleSubmit, control } = useForm<User>({
    mode: 'onChange'

  });
  const { errors} = useFormState({control});

  const onSubmit: SubmitHandler<User> = (data) => console.log(data);

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
  // const handleSubmit = (e:any) => {
  //   e.preventDefault();
  // }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <>
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
                autoComplete="on"
                onSubmit={handleSubmit(onSubmit)}
                // onSubmit={handleSubmit}
            >
              <Controller
                control={control}
                rules={ firstNameValidation }
                name='firstName'
                render={({ field }) => (
                  <TextField
                  // onChange={handleFirstNameChange}
                    autoFocus
                    margin="dense"
                    id="fistName"
                    label="First Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => field.onChange(e)}
                    value={ field.value }
                    error={ !!errors.firstName?.message }
                    helperText={ errors.firstName?.message }
                  />      
                )}
              />
              <Controller
                control={control}
                name='lastName'
                render={({ field }) => (
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => field.onChange(e)}
                    value={ field.value }
                  />      
                )}
              />
              <Controller
                control={control}
                name='email'
                render={({ field }) => (
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => field.onChange(e)}
                    value={ field.value }
                  />      
                )}
              />
              <Controller
                control={control}
                name='phoneNumber'
                render={({ field }) => (
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="phoneNumber"
                    label="Phone Number"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(e) => field.onChange(e)}
                    value={ field.value }
                  />      
                )}
              />
              <Controller
                control={control}
                name='city'
                render={({ field }) => (
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="city"
                    label="City"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => field.onChange(e)}
                    value={ field.value }
                  />      
                )}
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="add-user-form">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}