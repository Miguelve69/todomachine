import React from "react";
import { TodoContext } from "../TodoContext";
import './todoForm.css';

function TodoForm() {
    const [newTodoValue,setNewTodoValue] = React.useState('')
    const {addTodo,setOpenModal} = React.useContext(TodoContext)
    
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
            <label>Escribe tu nueva tarea</label>
            <textarea 
                placeholder="guarda tu tarea"
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