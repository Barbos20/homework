import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import Loading from '../Loading/Loading';
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';


function HW10() {
  // useSelector, useDispatch
  const isLoading = useSelector<AppStoreType, boolean>(
    (state) => state.loading.isLoading
  );
  const dispatch = useDispatch();

  const setLoading = () => {
    dispatch(loadingAC(true));
    setTimeout(() => {
      dispatch(loadingAC(false));
    }, 10000);
    // dispatch
    // setTimeout
    // console.log('loading...')
  };

  return (
    <div>
      <hr />
      homeworks 10
      {/*should work (должно работать)*/}
      {isLoading ? 
          <div><Loading/></div>
           : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
}

export default HW10;
