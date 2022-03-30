import React, { useState } from "react";
import { KeyboardDatePicker } from '@material-ui/pickers';




import './todoForm.css';

function TodoForm({addTodo,setOpenModal}) {
    const [newTodoValue,setNewTodoValue] = React.useState('')
    const [fechaSeleccionada,setfechaSeleccionada] = useState(new Date());
    const [prioridad, setPrioridad] = useState(1)
    const [nota, setNota] = useState('')
    
    
    
    const onCancel = () => {
        setOpenModal(false)
    }

    const onAdd = (event) => {
        event.preventDefault();
        

        
        const fecha= fechaSeleccionada.toLocaleDateString('es-ES', {
              
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })

          const mm= fechaSeleccionada.getMonth() + 1
          const mes= mm < 10 ? '0' + mm : mm;
          const dd= fechaSeleccionada.getDate()
          const dia= dd < 10 ? '0' + dd : dd;
          const ano= fechaSeleccionada.getFullYear()
          
          const fechaDate= ano+mes+dia
        

        
         console.log('fecha numero: ', fechaDate)       
        addTodo(newTodoValue,fecha,prioridad,nota,fechaDate)
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const handleChangePrio = (event) => {
        setPrioridad(event.target.value);
    }

    const handleChangeNota = (event) => {
        setNota(event.target.value);
    }

    return(
        <form onSubmit={onAdd}>
            

            <KeyboardDatePicker
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    label="Fecha"
                    format="dd/MM/yyyy"
                    value={fechaSeleccionada}
                    InputAdornmentProps={{ position: "start" }}
                    onChange={date => setfechaSeleccionada(date)}
                />
            <textarea 
                placeholder="Escribe tu nueva tarea"
                value={newTodoValue}
                onChange={onChange}
                autoFocus
                           />
            
            
            <div className="sm:grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 3xl:flex flew-wrap justify-center">
                Nota: <input       
                     label="Nota"                   
                    name="nota"
                    placeholder="Nota" 
                            
                    value={nota}
                    onChange={handleChangeNota}
                />  
                <p>Prioridad: 
                <input                
                    name="prioridad"
                    placeholder="Prioridad"
                    label="Prioridad: "
                    size="1"
                    value={prioridad}
                    onChange={handleChangePrio}
                />
                </p>
          </div>
            
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