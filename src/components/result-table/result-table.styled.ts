// components
import MuiTableCell from '@mui/material/TableCell';
// utils
import { styled } from '@mui/material/styles';

export const ResultTableCell = styled(MuiTableCell, {
  shouldForwardProp: (prop) => prop !== 'isSuccess',
})<{ isSuccess: boolean }>(({ theme, isSuccess }) => ({
  color: isSuccess ? theme.palette.success.main : theme.palette.error.main,
}));
