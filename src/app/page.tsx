'use client';

import { useEffect, useState, type ChangeEvent } from 'react';
// components
import Dice from '@/components/dice';
import ResultTable from '@/components/result-table';
import Notification from '@/components/notification';
import SettingsForm from '@/components/settings-form';
// types
import type { Result } from '@/types/result.types';
import type { Condition } from '@/types/condition.types';
import type { GameHistory } from '@/types/game-history.types';
// styles
import { Game, Container } from './page.styled';

export default function DiceGame() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [value, setValue] = useState<number>(50);
  const [condition, setCondition] = useState<Condition>('over');
  const [currentRoll, setCurrentRoll] = useState<number | null>(null);
  const [history, setHistory] = useState<GameHistory[]>([]);
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

    const newResult: GameHistory = {
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
        <Dice roll={currentRoll} />
        <SettingsForm
          value={value}
          condition={condition}
          onPlayGame={handlePlayGame}
          onChangeRadio={handleChangeRadio}
          onChangeSlider={handleChangeSlider}
        />
      </Game>
      <ResultTable history={history} />
    </Container>
  );
}
