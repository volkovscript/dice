'use client';

// hooks
import { useEffect, useState } from 'react';
// components
import Radio from '@mui/material/Radio';
import Table from '@mui/material/Table';
import Slider from '@mui/material/Slider';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
// styles
import {
  Dice,
  Game,
  Alert,
  Button,
  Collapse,
  Container,
  FormControl,
} from './page.styled';

type Condition = 'over' | 'under';

interface GameResult {
  time: string;
  guess: string;
  roll: number;
  success: boolean;
}

export default function DiceGame() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [value, setValue] = useState<number>(50);
  const [condition, setCondition] = useState<Condition>('over');
  const [currentRoll, setCurrentRoll] = useState<number | null>(null);
  const [history, setHistory] = useState<GameResult[]>([]);
  const [lastResult, setLastResult] = useState<'win' | 'lose' | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleChangeSlider = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCondition(event.target.value as Condition);
  };

  const playGame = () => {
    if (!isClient) return;

    const roll = Math.floor(Math.random() * 100) + 1;
    setCurrentRoll(roll);

    const now = new Date();
    const time = now.toLocaleTimeString('en-GB');
    const guess = `${condition === 'over' ? 'Over' : 'Under'} ${value}`;
    const success =
      (condition === 'over' && roll > value) ||
      (condition === 'under' && roll < value);

    const newResult: GameResult = {
      time,
      guess,
      roll,
      success,
    };

    setHistory((prev) => [newResult, ...prev].slice(0, 10));

    if (success) {
      setLastResult('win');
      setMessage('You won');
    } else {
      setLastResult('lose');
      const reason =
        condition === 'over' ? 'Number was lower' : 'Number was higher';
      setMessage(`You lost\n${reason}`);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Collapse in={!!lastResult}>
        {lastResult && (
          <Alert
            variant='filled'
            severity={lastResult === 'win' ? 'success' : 'error'}>
            {message.split('\n').map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </Alert>
        )}
      </Collapse>
      <Game>
        <Dice>
          <Typography variant='h1'>
            {currentRoll !== null ? currentRoll : '-'}
          </Typography>
        </Dice>
        <FormControl>
          <RadioGroup
            row
            value={condition}
            onChange={handleChangeRadio}
            aria-labelledby='condition-choice'
            name='condition-choice'>
            <FormControlLabel
              labelPlacement='start'
              value='under'
              control={<Radio color='secondary' />}
              label='Under'
            />
            <FormControlLabel
              labelPlacement='start'
              value='over'
              control={<Radio color='secondary' />}
              label='Over'
            />
          </RadioGroup>
        </FormControl>
        <Slider
          size='small'
          color='secondary'
          orientation='horizontal'
          value={value}
          onChange={handleChangeSlider}
          valueLabelDisplay='auto'
          marks={[
            { value: 1, label: '1' },
            { value: 20 },
            { value: 40 },
            { value: 60 },
            { value: 80 },
            { value: 100, label: '100' },
          ]}
          min={1}
          max={100}
        />
        <Button
          variant='contained'
          color='secondary'
          fullWidth
          onClick={playGame}>
          Play
        </Button>
      </Game>
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
    </Container>
  );
}
