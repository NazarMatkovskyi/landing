// Card.js

import React from 'react'
import './style.scss'
import { Edit, Remove } from '../../assets/files'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../store/todoSlice'

const Card = (props) => {
  const dispatch = useDispatch()

  const { data, handleEdit } = props // Destructure handleEdit function from props

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <>
      {data.map((e) => (
        <div className="card_list" key={e.id}>
          <div className="card_list_inner">
            <div className="card_list_inner_list custom_card">
              <button className={'card_list_inner_list_edit'} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(e)}><Edit /></button>
              <h3>{e.title}</h3>
              <p>{e.subtitle}</p>
              <Remove
                styles="card_list_inner_list_remove"
                handleClick={() => handleDeleteTodo(e.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card
