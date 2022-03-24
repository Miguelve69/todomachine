import React from "react";

import './TodoCounter.css';


function TodoCounter({ totalTodos, completedTodos }) {
    
    
    return (
        <h2 className="TodoCounter">
            <p>TAREAS TOTALES: {totalTodos} </p>
            <p>TAREAS PENDIENTES: {totalTodos- completedTodos} </p>
            <p>TAREAS COMPLETADAS: {completedTodos} </p>
        </h2>
    )
}

export {TodoCounter};