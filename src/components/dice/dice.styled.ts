// components
import MuiStack from '@mui/material/Stack';
// utils
import { styled } from '@mui/material/styles';

export const FieldDice = styled(MuiStack)(({ theme }) => ({
  width: '100%',
  minHeight: theme.spacing(25),
  alignItems: 'center',
  borderRadius: theme.spacing(1),
  justifyContent: 'center',
  backgroundColor: '#F5F5F5',
}));
