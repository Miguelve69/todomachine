import React from "react";

import './TodoCounter.css';


function TodoCounter({ totalTodos, completedTodos }) {
    
   
    
       
    
    return (
        
        <div className="px-4 flex flex-wrap items-center">
            <h2 className="TodoCounter" >
             <tr>
                <th className="px-4 py-3">TAREAS TOTALES: {totalTodos}</th>
                <th className="px-4 py-3">TAREAS PENDIENTES: {totalTodos- completedTodos}</th>
                <th className="px-4 py-3">TAREAS COMPLETADAS: {completedTodos}</th>
                
              </tr>
            
               
            </h2>                   
                
        </div>      
    )
}

export {TodoCounter};