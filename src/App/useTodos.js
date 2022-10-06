
import { datePickerDefaultProps } from "@material-ui/pickers/constants/prop-types";
import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";




function useTodos() {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1',[]);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const [openModalPrint, setOpenModalPrint] = React.useState(false);
      const [ordenar,setOrdenar] = useState('hoy');
      
      
      
      
      const hoy= new Date()
      const fechavencidas = new Date() - 45
      console.log ('fecha vencidas = ', fechavencidas)

      const mm= hoy.getMonth() + 1
      const mes= mm < 10 ? '0' + mm : mm;
      const dd= hoy.getDate()
      const dia= dd < 10 ? '0' + dd : dd;
      const ano= hoy.getFullYear()
      
      const fechaHoy= ano.toString()+ mes.toString()+dia.toString()
      const fechahoynum= Number(fechaHoy)-100
      console.log('hoy es dia: ',fechaHoy);
      console.log('hoy es en num; ',fechahoynum);

    
      let searchedTodos = [];

      const completedTodos= todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      const futuro = todos.filter(todo => todo.fechaDate > fechaHoy).length;
      const pasado = todos.filter(todo => todo.fechaDate < fechaHoy-5).length;
     
      if(!searchValue.length >= 1) {
        
      switch (ordenar){
        case 'tarea':
      
          searchedTodos = todos.sort((a, b) => (a.text > b.text ? 1 : a.text < b.text ? -1 : 0))
          
          break
        case 'prioridad':
          searchedTodos = todos.sort((a,b) => a.prioridad - b.prioridad)
          break
        case 'fecha':
          searchedTodos = todos.sort((a,b) => a.fechaDate -  b.fechaDate)
          
          searchedTodos = todos.filter(todo => {
            const todoantes = (todo.fechaDate <= fechaHoy)             
            return todoantes
          })                

          break         
        case 'futuras':
          searchedTodos = todos.filter(todo => {
            const todofuturas = (todo.fechaDate > fechaHoy) 
            
            return todofuturas
          })                
          searchedTodos = searchedTodos.sort((a,b) => a.fechaDate -  b.fechaDate)
          break
        case 'hoy':
          searchedTodos = todos.filter(todo => {
            const todofuturas = (todo.fechaDate === fechaHoy)
            return todofuturas
        })
        break
        case 'paradas':
          searchedTodos = todos.sort((a,b) => a.fechaDate -  b.fechaDate)
          searchedTodos = todos.filter(todo => {
            const todofuturas = (todo.completed)
            return todofuturas
        })
        break
        case 'pendientes':
          searchedTodos = todos.filter(todo => {
            const todofuturas = (!todo.completed && todo.fechaDate <= fechaHoy)
            return todofuturas
        })
          break
        case 'vencidas':
          searchedTodos = todos.sort((a,b) => a.fechaDate -  b.fechaDate)
          searchedTodos = todos.filter(todo => {
            const todofuturas = (todo.fechaDate < fechahoynum)
            return todofuturas
          })
            break
        case 'urgentes':
          searchedTodos = todos.sort((a,b) => a.fechaDate -  b.fechaDate)
          searchedTodos = todos.filter(todo => {
            const todofuturas = (todo.urgente)
            return todofuturas
              })
                break
        default:
          searchedTodos = todos
          
      }
         
        
      } else {
          searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            
            return todoText.includes(searchText)
          })
          
      }
      
      const addTodo =(text,fechaSeleccionada,prioridad,nota,fechaDate,diaSemana,fechadesde) => {  
        console.log('addTodo:', todos)     
        const newTodos =[...todos];
        newTodos.push({
          completed: false,
          text,
          fechaSeleccionada,
          prioridad,
          nota,
          fechaDate,
          diaSemana,
          fechadesde,
          urgente: false
        })

        console.log('newTodos: ',newTodos)
        saveTodos(newTodos);    
      }

      const completeTodo =(text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos =[...todos];

        if(newTodos[todoIndex].completed === false){
            newTodos[todoIndex].completed = true;
            newTodos[todoIndex].urgente = false;       
          } else {
              newTodos[todoIndex].completed = false;        
      }
        saveTodos(newTodos);    
      }
    
      const deleteTodo =(text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos =[...todos];
    
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);    
      }
    
      const urgenteTodo =(text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos =[...todos];

        if(newTodos[todoIndex].urgente === false){
            newTodos[todoIndex].urgente = true;
            newTodos[todoIndex].completed = false;
          } else {
              newTodos[todoIndex].urgente = false;        
      }
        saveTodos(newTodos);    
      }
    
      React.useEffect(() => {
       
      },[totalTodos])
    
      

    return {
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo, 
            urgenteTodo,          
            openModal,
            setOpenModal,
            openModalPrint,
            setOpenModalPrint,
            addTodo,
            setOrdenar,
            ordenar,
            futuro,
            pasado,
           
        }
}

export { useTodos };