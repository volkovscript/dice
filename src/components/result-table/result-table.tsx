// components
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
// types
import type { FC } from 'react';
import type { ResultTableProps } from './result-table.interface';

const ResultTable: FC<ResultTableProps> = ({ history }) => {
  return (
    <Table size='small'>
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Guess</TableCell>
          <TableCell>Result</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {history.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.time}</TableCell>
            <TableCell>{item.guess}</TableCell>
            <TableCell
              sx={{
                color: item.success ? 'success.main' : 'error.main',
              }}>
              {item.roll}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ResultTable;
