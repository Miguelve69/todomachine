import React from "react";
import './TodoPrint.css'


function TodoPrint(props) {
    
    return(
        

        <li className="TodoItem">      
           


           <table>
                              
            <td>
            <p >
                {props.prioridad}               
            </p>
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
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.nota}               
            </p>
            </td> 
            <td>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.diaSemana}               
            </p>
            </td>             
            <td>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.diffecha}               
            </p>
            </td>    
            
            </table>
        </li>



    )
}

export { TodoPrint };