import React from "react";
import { animateScroll as scroll} from 'react-scroll';
import './TodoItem.css'


function TodoItem(props) {

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

        
<div class="lg:flex lg:items-center lg:justify-between">
  <div class="flex-1 min-w-0">
    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-semibold text-slate-900">
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'} || ${props.urgente && 'TodoItem-p--urgente'}`}> {props.text} </p>
        </h1>
      </div>
    </h2>    
    <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
      <div class="mt-2 flex items-center text-sm text-gray-500">
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.nota}               
          </p>
      </div>
      <div class="mt-2 flex items-center text-sm text-gray-500">
       
        
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.fechaSeleccionada}               
            </p>
      </div>
      
      
    </div>
    <div class="mt-2 flex items-center text-sm text-gray-500">
       
        
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'} || ${props.urgente && 'TodoItem-p--urgente'} `}>
                {props.diaSemana}               
            </p>
      </div>
   
    <span class="sm:ml-3">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
       
        
        <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
            <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
            </span>
      </button>
    </span>
  </div>
  <div class="mt-5 flex lg:mt-0 lg:ml-4">
    <span class="hidden sm:block">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700
       bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => scroll.scrollToTop()}>
       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
</svg>
        
        Up
      </button>
    </span>

    <span class="hidden sm:block ml-3">
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700
         bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={props.onUrgente} >Prior 
      <p className={`TodoItem-p ${props.urgente && 'TodoItem-p--urgente'}`} >
                {props.prioridad}               
            </p>        
      </button>
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700
         bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Dias
      <p className={`TodoItem-p ${props.urgente && 'TodoItem-p--urgente'}`}>
              <h2>  {diffecha}               </h2>
            </p>        
      </button>
      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
        Delete
        <span className="Icon Icon-delete" onClick={props.onDelete} >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg> 
      </span>
      </button>
     
    </span>

    

  
    <span class="ml-3 relative sm:hidden">
      
     
      <div class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" 
        role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">    
       
      </div>
    </span>
  </div>
</div>


    )
}

export { TodoItem };