'use client';

import { useEffect, useState, type ChangeEvent } from 'react';
// components
import Notification from '@/components/notification';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
// types
import type { Result } from '@/types/result.types';
import type { Condition } from '@/types/condition.types';
// styles
import { Dice, Game, Container } from './page.styled';
import SettingsForm from '@/components/settings-form';

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
  const [lastResult, setLastResult] = useState<Result | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleChangeSlider = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setCondition(event.target.value as Condition);
  };

  const handlePlayGame = () => {
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
      <Notification message={message} notificationResult={lastResult} />
      <Game>
        <Dice>
          <Typography variant='h1'>
            {currentRoll !== null ? currentRoll : '-'}
          </Typography>
        </Dice>
        <SettingsForm
          value={value}
          condition={condition}
          onPlayGame={handlePlayGame}
          onChangeRadio={handleChangeRadio}
          onChangeSlider={handleChangeSlider}
        />
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
