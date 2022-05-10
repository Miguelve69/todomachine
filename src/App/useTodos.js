
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
      
      
      const completedTodos= todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      
      const hoy= new Date()

      const mm= hoy.getMonth() + 1
      const mes= mm < 10 ? '0' + mm : mm;
      const dd= hoy.getDate()
      const dia= dd < 10 ? '0' + dd : dd;
      const ano= hoy.getFullYear()
      
      const fechaHoy= ano+mes+dia
    
      let searchedTodos = [];
      
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
        case 'pendientes':
          searchedTodos = todos.filter(todo => {
            const todofuturas = (!todo.completed)
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
    
      const addTodo =(text,fechaSeleccionada,prioridad,nota,fechaDate,diaSemana,diffecha) => {  
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
          diffecha
        })

        console.log('newTodos: ',newTodos)
        saveTodos(newTodos);    
      }
    
      const completeTodo =(text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos =[...todos];

        if(newTodos[todoIndex].completed === false){
            newTodos[todoIndex].completed = true;
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
            openModal,
            setOpenModal,
            openModalPrint,
            setOpenModalPrint,
            addTodo,
            setOrdenar,
            ordenar,
           
            
        }
}

export { useTodos };