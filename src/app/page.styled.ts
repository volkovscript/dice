// components
import MuiStack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import MuiButton from '@mui/material/Button';
import MuiCollapse from '@mui/material/Collapse';
import MuiContainer from '@mui/material/Container';
import MuiFormControl from '@mui/material/FormControl';
// utils
import { styled } from '@mui/material/styles';

export const Dice = styled(MuiStack)(({ theme }) => ({
  width: '100%',
  minHeight: theme.spacing(25),
  alignItems: 'center',
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  backgroundColor: '#F5F5F5',
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  height: theme.spacing(5.25),
}));

export const Game = styled(MuiStack)(({ theme }) => ({
  width: '100%',
  rowGap: theme.spacing(2),
  maxWidth: theme.spacing(40),
  alignItems: 'center',
}));

export const Container = styled(MuiContainer)(({ theme }) => ({
  rowGap: theme.spacing(2),
  display: 'flex',
  padding: theme.spacing(2),
  alignItems: 'center',
  flexDirection: 'column',
}));

export const Collapse = styled(MuiCollapse)({
  width: '100%',
});

export const Alert = styled(MuiAlert)(({ theme }) => ({
  marginBottom: theme.spacing(2.625),
}));

export const FormControl = styled(MuiFormControl)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
