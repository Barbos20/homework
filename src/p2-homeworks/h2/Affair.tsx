import React from 'react';
import s from './Affairs.module.css';
import { AffairType } from './HW2';


type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType; // need to fix any
  deleteAffairCallback: (_id: number) => void; // need to fix any
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id);
  }; // need to fix


  return (
    <div className={s.affair}>
      <div className={s.item}>{props.affair.name}</div>
      <div className={s.priority}>{props.affair.priority}</div>
      <button onClick={deleteCallback} className={s.delete}>
        X
      </button>
    </div>
  );
}

export default Affair;
