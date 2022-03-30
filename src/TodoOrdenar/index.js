import React from "react";

import '../TodoSearch/TodoSearch.css'

function TodoOrdenar({ordenar, setOrdenar}) {
    

    const onOrdenarValueChange = (event) => {
        console.log(event.target.value);
        setOrdenar(event.target.value)
    }

    return(
       
        <div className="px-4 flex flex-wrap items-center">
             
            <select value={ordenar} onChange={onOrdenarValueChange}>
                <option value="prioridad">Prioridad</option>
                <option value="fecha">Fecha</option>
                <option value="tarea">Tarea</option>
                <option value="futuras">Futuras</option>
                <option value="hoy">Hoy</option>
                
            </select>
            
            <h1>You chose {ordenar}</h1>
        </div>      
    )
}

export {TodoOrdenar};