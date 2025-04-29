// components
import MuiButton from '@mui/material/Button';
import MuiRadioGroup from '@mui/material/RadioGroup';
import MuiFormControl from '@mui/material/FormControl';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
// utils
import { styled } from '@mui/material/styles';

export const Button = styled(MuiButton)(({ theme }) => ({
  height: theme.spacing(5.25),
}));

export const FormControl = styled(MuiFormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  margin: theme.spacing(0),
}));

export const RadioGroup = styled(MuiRadioGroup)(({ theme }) => ({
  columnGap: theme.spacing(2),
}));
