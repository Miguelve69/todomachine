
import React from "react";
import './TodoPrint.css'


function TodoPrint(props) {
    
    const hoy= new Date()
  
  const mmhoy= hoy.getMonth() + 1
  const meshoy= mmhoy < 10 ? '0' + mmhoy : mmhoy;
  const ddhoy= hoy.getDate()
  const diahoy= ddhoy < 10 ? '0' + ddhoy : ddhoy;
  const anohoy= hoy.getFullYear()
/*
  const fecha1 = props.fechaSeleccionada
  const mm= fecha1.getMonth() + 1
          const mesS= mm < 10 ? '0' + mm : mm;
          const dd= fecha1.getDate()
          const diaS= dd < 10 ? '0' + dd : dd;
          const anoS= fecha1.getFullYear()

  const fechatodo = new Date(anoS,mesS-1, diaS).getTime();*/
  const fechahoy = new Date(anohoy,meshoy-1, diahoy).getTime();
  
  const diff = props.fechadesde - fechahoy
 
  var diffecha =diff/(1000 * 60 * 60 * 24);
    return(
       
      
        
        
     
        <li >      
         
          &nbsp;  Fecha:  
           &nbsp; {props.diaSemana} 
           &nbsp; {props.fechaSeleccionada}
           &nbsp; {props.text}
           &nbsp; {props.nota}
           &nbsp;  Dias:
           &nbsp; {diffecha} 

        </li>
     



    )
}

export { TodoPrint };