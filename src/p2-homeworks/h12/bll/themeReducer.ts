export type colorThemeType = 'dark' | 'red' | 'some';

export type themeStateType = { themeColor: colorThemeType };

const initState: themeStateType = {
  themeColor: 'some' as colorThemeType,
};

export const themeReducer = (
  state: themeStateType = initState,
  action: changeThemeACType
): themeStateType => {
  switch (action.type) {
    case 'SET-NEW-THEME': {
      return { ...state, themeColor: action.themeColor };
    }
    default:
      return state;
  }
};

type changeThemeACType = {
  type: 'SET-NEW-THEME';
  themeColor: colorThemeType;
};

export const changeThemeC = (themeColor: colorThemeType): changeThemeACType => {
  return {
    type: 'SET-NEW-THEME',
    themeColor,
  };
};
