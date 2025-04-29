// components
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
// constants
import { TABLE_HEADS } from '@/constants/table-heads.constants';
// types
import type { FC } from 'react';
import type { ResultTableProps } from './result-table.interface';
// styles
import { ResultTableCell } from './result-table.styled';

const ResultTable: FC<ResultTableProps> = ({ history }) => {
  return (
    <Table size='small'>
      <TableHead>
        <TableRow>
          {TABLE_HEADS.map((cell) => (
            <TableCell key={cell}>{cell}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {history.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.time}</TableCell>
            <TableCell>{item.guess}</TableCell>
            <ResultTableCell isSuccess={item.success}>
              {item.roll}
            </ResultTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ResultTable;
