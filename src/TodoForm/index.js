import React from "react";

import './todoForm.css';

function TodoForm({addTodo,setOpenModal}) {
    const [newTodoValue,setNewTodoValue] = React.useState('')
    
    
    const onCancel = () => {
        setOpenModal(false)
    }

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={onAdd}>
            
            <textarea 
                placeholder="Escribe tu nueva tarea"
                value={newTodoValue}
                onChange={onChange}           />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };