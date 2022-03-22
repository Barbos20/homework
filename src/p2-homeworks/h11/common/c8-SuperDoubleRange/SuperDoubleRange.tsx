import { Slider } from '@mui/material';
import React from 'react';
import s from '../c7-SuperRange/SuperRange.module.css';

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: number[]) => void;
  value: [number, number];
  // min, max, step, disable, ...
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  value,
  ...restProps
  // min, max, step, disable, ...
}) => {
  const onChangeCallback = (
    _event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    if (typeof value === 'number') {
    } else {
      onChangeRange && onChangeRange(value);
    }
    console.log(value);
  };

  return (
    <>
      <div className={s.slider}>
        <Slider
          value={value}
          onChange={onChangeCallback}
          valueLabelDisplay="auto"
          color="primary"
          size="medium"
        />
      </div>
    </>
  );
};

export default SuperDoubleRange;
