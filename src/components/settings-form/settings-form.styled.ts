// components
import MuiButton from '@mui/material/Button';
import MuiFormControl from '@mui/material/FormControl';
// utils
import { styled } from '@mui/material/styles';

export const Button = styled(MuiButton)(({ theme }) => ({
  height: theme.spacing(5.25),
}));

export const FormControl = styled(MuiFormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
