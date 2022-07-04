import React from "react";

import './TodoCounter.css';


function TodoCounter({ totalTodos, completedTodos, futuro, pasado }) {
    
   
   
       
    
    return (
        
        <div className="px-4 flex flex-wrap items-center">
            <h2 className="TodoCounter" >
             <tr>
                <th className="px-4 py-3">TAREAS TOTALES: {totalTodos}</th>
                <th className="px-4 py-3">TAREAS PENDIENTES: {totalTodos- completedTodos - futuro}</th>
                <th className="px-4 py-3">TAREAS PARADAS: {completedTodos}</th>
                <th className="px-4 py-3">TAREAS FUTURAS: {futuro}</th>
                <th className="px-4 py-3">TAREAS CADUCADAS: {pasado}</th>
              </tr>
            
               
            </h2>                   
                
        </div>      
    )
}

export {TodoCounter};