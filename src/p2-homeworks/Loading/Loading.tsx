import React from 'react';
import s from './Loading.module.css'

const Loading =()=>{
  return(
    <div className={s.container}>
    <span className={s.span}>ЗАГРУЗКА</span>
    <span className={s.drop}></span>
  

<svg>
<defs>
  <filter id='gooey'>
      <feGaussianBlur
      in='SourceGraphic'
      stdDeviation='5'
      result='blur'/>

      <feColorMatrix
      in='blur'
      values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -25'
      result='gooey'/>
      <feComposite in='SourceGraphic'
      in2='gooey' operator='ator'/>
  </filter>
</defs>
</svg>
</div>
  )}

export default Loading