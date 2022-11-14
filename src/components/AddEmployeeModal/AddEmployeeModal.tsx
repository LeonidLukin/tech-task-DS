import { useState } from 'react';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
import { BtnTitle } from './index';
import { firstNameValidation, lastNameValidation, emailValidation } from './AddEmployeeValidation';
import { Employee } from '../../redux/EmployeesSlice';
import { addEmployee } from '../../redux/EmployeesOperation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';


export default function AddEmployeeModal() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const { handleSubmit, control } = useForm<Employee>({
    mode: 'onChange'
  });
  const { errors} = useFormState({control});

  const onSubmit: SubmitHandler<Employee> = (data) => {
    dispatch(addEmployee(data));
    Notify.success('Sol lucet omnibus');
    setOpen(false);
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
        <PersonAddAltSharpIcon sx={{color: '#112b6b'}}/>
        <BtnTitle>Add employee</BtnTitle>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new employee</DialogTitle>
        <DialogContent>
            <Box
                component="form"
                id="add-employee-form"
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
          <Button type="submit" form="add-employee-form">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};