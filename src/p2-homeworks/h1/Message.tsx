import React from 'react'
import m from './Message.module.css'

type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessagePropsType) {
  return (
    <div className={m.message}>
      <div className={m.img}><img src={props.avatar} alt=""/></div>
      <div className={m.wrapper}>
        <div className={m.item}>
          <div className={m.title}>{props.name}</div>
          <div className={m.text}>{props.message}</div>
        </div>
        <div className={m.date}>{props.time}</div>
      </div>
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            <path fill="#FFFFFF" d="M10,10H0V0H0A10,10,0,0,0,10,10Z"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Message
