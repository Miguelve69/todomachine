import React, { useState } from "react";

import './TodoCounter.css';


function TodoCounter({ totalTodos, completedTodos }) {
    
    const [ordenar, setOrdenar] = useState('tarea');
    
    
    const handleChange = (event) => {
        console.log(event.target.value);
        setOrdenar(event.target.value)
    }  
    
    return (
        <div className="px-4 flex flex-wrap items-center">
            <h2 className="TodoCounter">
                <p>TAREAS TOTALES: {totalTodos} </p>
                <p>TAREAS PENDIENTES: {totalTodos- completedTodos} </p>
                <p>TAREAS COMPLETADAS: {completedTodos} </p>
            </h2>
         
            <select value={ordenar} onChange={handleChange}>
                <option value="prioridad">Prioridad</option>
                <option value="fecha">Fecha</option>
                <option value="tarea">Tarea</option>
                
            </select>
            
            <h1>You chose {ordenar}</h1>
        </div>      
    )
}

export {TodoCounter};