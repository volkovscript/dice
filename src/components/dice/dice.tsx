// components
import Typography from '@mui/material/Typography';
// types
import type { FC } from 'react';
import type { DiceProps } from './dice.interface';
// styles
import { FieldDice } from './dice.styled';

const Dice: FC<DiceProps> = ({ roll }) => {
  return (
    <FieldDice>
      <Typography variant='h1'>{roll !== null ? roll : '-'}</Typography>
    </FieldDice>
  );
};

export default Dice;
