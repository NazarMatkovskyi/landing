import React, { useState } from 'react'
import './style.scss'
import { BlockLine } from '../index'
import Card from '../Card'
import { Plus } from '../../assets/files'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodoAction } from '../../store/todoSlice' // Removed unnecessary import
import Modal from 'bootstrap/js/src/modal'

const CardBlock = () => {
  const [newTodo, setNewTodo] = useState({
    title: '',
    subtitle: ''
  })
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [editTodo, setEditTodo] = useState(null) // State to manage editing

  const handleInputChange = (key, e, edit) => {
    if (edit) {
      setEditTodo({
        ...editTodo,
        [key]: e.target.value
      })
    } else {
      setNewTodo({
        ...newTodo,
        [key]: e.target.value
      })
    }
  }

  const handleAddTodo = () => {
    if (newTodo.subtitle.trim() !== '') {
      dispatch(addTodo({
        title: newTodo.title || 'Default title',
        subtitle: newTodo.subtitle,
        completed: false,
        id: Math.random().toString(36)
      }))
      setNewTodo({
        title: '',
        subtitle: ''
      })
    }
  }

  const handleEdit = () => {
    dispatch(editTodoAction(editTodo)) // Edited to dispatch directly the editTodo object
    setEditTodo(null) // Reset editTodo state after edit
    const modal = new Modal(document.getElementById('exampleModal')) // Get the modal instance
    modal.hide() // Hide the modal
  }

  const handleClear = () => setEditTodo(null)

  return (
    <div className="cards">
      <div className="cards_inner d-grid justify-content-center ">
        <h5 className="cards_inner_title text-center">My Cards</h5>
        <div className={'cards_inner_list d-flex gap-4 p-5 flex-wrap'}>
          {todos.length > 0 ?
            <Card data={todos} handleEdit={setEditTodo}/>
            : <h2 className={'d-grid align-content-center  p-4'}>Please add todos</h2>}
          <button onClick={handleClear} className={'cards_inner_create'} data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
            <Plus/>
          </button>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '1rem' }}>
                <form className="form-floating d-flex gap-5">
                  <div className="input-group">
                    <span className="input-group-text">Title</span>
                    <input type="text" className="form-control"
                           placeholder="Write title"
                           value={editTodo ? editTodo.title : newTodo.title}
                           onChange={(e) => handleInputChange('title', e, editTodo)}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">Subtitle</span>
                    <input type="text" className="form-control"
                           placeholder="Write subtitle"
                           value={editTodo ? editTodo.subtitle : newTodo.subtitle}
                           onChange={(e) => handleInputChange('subtitle', e, editTodo)}/>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-dark" data-bs-dismiss={newTodo.subtitle && 'modal'}
                      onClick={editTodo ? handleEdit : handleAddTodo}>{editTodo ? 'Save changes' : 'Save Todo'}</button>
            </div>
          </div>
        </div>
      </div>

      <div className="cards_line">
        <BlockLine position={3} title={'Girls Globe —'} subtitle={'Brand Strategy, Visual Identity'}/>
      </div>
    </div>
  )
}

export default CardBlock
