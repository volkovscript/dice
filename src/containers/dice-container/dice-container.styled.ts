// components
import MuiStack from '@mui/material/Stack';
// utils
import { styled } from '@mui/material/styles';

export const Game = styled(MuiStack)(({ theme }) => ({
  width: '100%',
  rowGap: theme.spacing(2),
  maxWidth: theme.spacing(40),
  alignItems: 'center',
}));
