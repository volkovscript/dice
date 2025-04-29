// types
import type { Condition } from '@/types/condition.types';
import type { ChangeEvent } from 'react';

export interface SettingsFormProps {
  value: number;
  condition: Condition;
  onPlayGame: () => void;
  onChangeRadio: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeSlider: (_: Event, newValue: number | number[]) => void;
}
