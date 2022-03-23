import React from 'react';
import s from './HW12.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../h10/bll/store';
import { changeThemeC, colorThemeType } from './bll/themeReducer';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';

const themes = ['night', 'default'];

function HW12() {
  const theme = useSelector<AppStoreType, colorThemeType>(
    (state) => state.theme.themeColor
  );
  const dispatch = useDispatch();
  const onChangeOption = (e: colorThemeType) => {
    dispatch(changeThemeC(e));
  };
  console.log(theme);
  return (
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + '-text']}>homeworks 12</span>
      <SuperRadio
        name={'radio1'}
        options={themes}
        value={theme}
        onChangeOption={onChangeOption}
      />
      <hr />
    </div>
  );
}

export default HW12;
