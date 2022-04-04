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
            <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium 
                text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" 
                    aria-expanded="false" aria-haspopup="true" onClick={() => window.print()}>
                Printer
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2
                    2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                
            </button>    
        </div>      
    )
}

export {TodoCounter};