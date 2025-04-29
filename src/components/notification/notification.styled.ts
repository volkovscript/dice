// components
import MuiAlert from '@mui/material/Alert';
import MuiCollapse from '@mui/material/Collapse';
// utils
import { styled } from '@mui/material/styles';

export const Collapse = styled(MuiCollapse)({
  width: '100%',
});

export const Alert = styled(MuiAlert)(({ theme }) => ({
  marginBottom: theme.spacing(0.625),
}));
