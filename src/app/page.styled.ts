'use client';

// components
import MuiContainer from '@mui/material/Container';
// utils
import { styled } from '@mui/material/styles';

export const Container = styled(MuiContainer)(({ theme }) => ({
  rowGap: theme.spacing(2),
  display: 'flex',
  padding: theme.spacing(2),
  alignItems: 'center',
  flexDirection: 'column',
}));
