import React from 'react'
import './style.scss'

const BlockLine = (props) => {
  const { position, title, subtitle } = props
  return (
    <div className='block'>
      <div className={`${position === 2 ? 'block_inner_rotate' : 'block_inner'} `}>
        <span className={'block_inner_left'}>0{position}</span>
        <div className={'block_inner_right'}>
          <span>{title}</span>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default BlockLine
