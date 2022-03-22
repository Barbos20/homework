import Slider from '@mui/material/Slider/Slider';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './SuperRange.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & {
  // и + ещё пропсы которых нет в стандартном инпуте
  onChangeRange?: (value: number) => void;
  value: number;
};

const SuperRange: React.FC<SuperRangePropsType> = ({
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeRange,
  className,
  value,
  min,
  max,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (_event: Event, value: number | number[]) => {
    if (typeof value === 'number') {
      onChangeRange && onChangeRange(value);
    } // сохраняем старую функциональность
  };

  return (
    <>
      <div className={s.slider}>
        <Slider
          value={value}
          onChange={onChangeCallback}
          valueLabelDisplay="auto"
        />
      </div>
    </>
  );
};

export default SuperRange;
