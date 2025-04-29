// components
import Radio from '@mui/material/Radio';
import Slider from '@mui/material/Slider';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// constants
import { sliderMarksSettings } from '@/constants/slider-marks-settings.constants';
// types
import type { FC } from 'react';
import type { SettingsFormProps } from './settings-form.interface';
// styles
import { Button, FormControl } from './settings-form.styled';

const SettingsForm: FC<SettingsFormProps> = ({
  value,
  condition,
  onPlayGame,
  onChangeRadio,
  onChangeSlider,
}) => {
  return (
    <>
      <FormControl>
        <RadioGroup
          row
          value={condition}
          onChange={onChangeRadio}
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
        onChange={onChangeSlider}
        valueLabelDisplay='auto'
        marks={sliderMarksSettings}
        min={1}
        max={100}
      />
      <Button
        variant='contained'
        color='secondary'
        fullWidth
        onClick={onPlayGame}>
        Play
      </Button>
    </>
  );
};

export default SettingsForm;
