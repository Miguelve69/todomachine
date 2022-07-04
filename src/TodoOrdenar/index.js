import React from "react";

import './TodoOrdenar.css'

function TodoOrdenar({ordenar, setOrdenar}) {
    

    const onOrdenarValueChange = (event) => {
        console.log(event.target.value);
        setOrdenar(event.target.value)
    }

    return(
       
        <div >
            <h2 className="TodoOrdenar">
            <select value={ordenar} onChange={onOrdenarValueChange}>
                
                <option value="fecha">Fecha</option>
                <option value="futuras">Futuras</option>
                <option value="hoy">Hoy</option>
                <option value="paradas">Paradas</option>
                <option value="pendientes">Pendientes</option>
                <option value="prioridad">Prioridad</option>
                <option value="tarea">Tarea</option>
                <option value="vencidas">Vencidas</option>
                <option value="urgentes">Urgentes</option>
                
            </select>            
            </h2>     
        </div>      
    )
}

export {TodoOrdenar};