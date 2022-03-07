import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessagePropsType) {
  return (
    <div className={s.message}>
      <img src={props.avatar} className={s.avatar} />
      <div className={s.angle} />
      <div className={s.content}>
        <div className={s.name}>Arthur</div>
        <div className={s.text}>npm start нажимал?</div>
        <div className={s.time}>20:00</div>
      </div>
    </div>
  );
}

export default Message;
