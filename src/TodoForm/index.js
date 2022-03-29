import React, { useState } from "react";
import {DatePicker} from '@material-ui/pickers';


import './todoForm.css';

function TodoForm({addTodo,setOpenModal}) {
    const [newTodoValue,setNewTodoValue] = React.useState('')
    const [fechaSeleccionada,setfechaSeleccionada] = useState(new Date());
    
    
    const onCancel = () => {
        setOpenModal(false)
    }

    const onAdd = (event) => {
        event.preventDefault();
        console.log(fechaSeleccionada);
        addTodo(newTodoValue,fechaSeleccionada)
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={onAdd}>
             <DatePicker
                value={fechaSeleccionada}
                onChange={setfechaSeleccionada} />
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