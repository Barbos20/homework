import React, { useState } from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import s from './HW11.module.css';

function HW11() {
  const [value1, setValue1] = useState<number>(1);
  const [value2, setValue2] = useState<number>(10);
  const [value3, setValue3] = useState<number>(80);
  const setValuesOnSlider = (value: number[]) => {
    setValue2(value[0]);
    setValue3(value[1]);
  };

  return (
    <div>
      Homeworks 11
      <div>
        <div className={s.RangeContainer}>
          <div className={s.firstRange}>{value1}</div>
          <SuperRange value={value1} onChangeRange={setValue1} />
        </div>

        <div>
          <div className={s.Range}>
            <span className={s.secondRange}>{value2}</span>
            <span className={s.thirdRange}>{value3}</span>
          </div>
          <SuperDoubleRange
            onChangeRange={setValuesOnSlider}
            value={[value2, value3]}
          />
          </div>
        </div>
      </div>
  );
}

export default HW11;
