import { useState } from 'react';
import { nanoid } from 'nanoid'
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import { 
  Box, 
  Button, 
  TextField, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle 
} from '@mui/material';
import { useForm, Controller, SubmitHandler, useFormState } from "react-hook-form";
import { AddBtnTitle } from './index';
import { firstNameValidation, lastNameValidation, emailValidation } from './AddUserValidation'
interface User {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phoneNumber: string;
}
const API_URL = 'https://636bd1aa7f47ef51e13b4541.mockapi.io/api';
export default function AddUserModal() {
  const [open, setOpen] = useState(false);
  
  const { handleSubmit, control } = useForm<User>({
    mode: 'onChange'
  });

  const { errors} = useFormState({control});

  const addUser = (user:any) => {
    fetch(`${API_URL}/users`, {
      method: 'POST',
      body: JSON.stringify({...user, id: nanoid()}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  const onSubmit: SubmitHandler<User> = (data) => {
    addUser(data)
    setOpen(false)
  };

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
            <Box
                component="form"
                id="add-user-form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="on"
                onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                control={control}
                rules={ firstNameValidation }
                name='firstName'
                render={({ field }) => (
                  <TextField
                    required
                    margin="dense"
                    id="fistName"
                    label="First Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => field.onChange(e)}
                    error={ !!errors.firstName?.message }
                    helperText={ errors.firstName?.message }
                  />      
                )}
              />
              <Controller
                control={control}
                name='lastName'
                rules={ lastNameValidation }
                render={({ field }) => (
                  <TextField
                    required
                    margin="dense"
                    id="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => field.onChange(e)}
                    error={ !!errors.lastName?.message }
                    helperText={ errors.lastName?.message }
                  />      
                )}
              />
              <Controller
                control={control}
                name='email'
                rules={ emailValidation }
                render={({ field }) => (
                  <TextField
                    required
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => field.onChange(e)}
                    error={ !!errors.email?.message }
                    helperText={ errors.email?.message }
                  />      
                )}
              />
              <Controller
                control={control}
                name='phoneNumber'
                render={({ field }) => (
                  <TextField
                    margin="dense"
                    id="phoneNumber"
                    label="Phone Number"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(e) => field.onChange(e)}
                  />      
                )}
              />
              <Controller
                control={control}
                name='city'
                render={({ field }) => (
                  <TextField
                    margin="dense"
                    id="city"
                    label="City"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => field.onChange(e)}
                  />      
                )}
              />
            </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="add-user-form">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}