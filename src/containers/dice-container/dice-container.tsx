'use client';

import { useState, type ChangeEvent } from 'react';
// components
import Dice from '@/components/dice';
import ResultTable from '@/components/result-table';
import Notification from '@/components/notification';
import SettingsForm from '@/components/settings-form';
// styles
import { Game } from './dice-container.styled';
// types
import type { Result } from '@/types/result.types';
import type { Condition } from '@/types/condition.types';
import type { GameHistory } from '@/types/game-history.types';

const DiceContainer = () => {
  const [value, setValue] = useState<number>(20);
  const [history, setHistory] = useState<GameHistory[]>([]);
  const [message, setMessage] = useState<string>('');
  const [condition, setCondition] = useState<Condition>('under');
  const [lastResult, setLastResult] = useState<Result | null>(null);
  const [currentRoll, setCurrentRoll] = useState<number | null>(null);

  const handleChangeSlider = (_: Event, newValue: number): void => {
    setValue(newValue);
  };

  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>): void => {
    setCondition(event.target.value as Condition);
  };

  const handlePlayGame = (): void => {
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
    <>
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
    </>
  );
};

export default DiceContainer;
