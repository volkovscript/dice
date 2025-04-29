// components
import MuiStack from '@mui/material/Stack';
import MuiContainer from '@mui/material/Container';
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
