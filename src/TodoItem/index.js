import React from "react";
import './TodoItem.css'

function TodoItem(props) {
    
    return(
        <li className="TodoItem">
           <table className="m-5 w-5/6 mx-auto">
            <thead className="text-center text-gray-300 border-b border-t border-gray-300">
              <tr>
                <th className="px-4 py-3">Hecho</th>
                <th className="px-4 py-3">Tarea</th>
                <th className="px-4 py-3">Fecha</th>
                <th className="px-4 py-3">Nota</th>
              </tr>
            </thead>
            <tbody className="font-normal text-center">
            <tr>                
                <td>
                    <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >

            √
            </span>
            </td>           
            <td>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.fechaSeleccionada}
               
            </p>
            </td> 
            <td>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
               
            </p>
            </td>
            <td>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                X
            </span>
            </td>
            </tr>
            </tbody>
            </table>
        </li>
    )
}

export { TodoItem };