

import React from 'react';

import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

import { Modal } from '../modal';
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoOrdenar } from '../TodoOrdenar';
import { TodoPrint } from '../TodoPrint'

import { PrinterButton } from '../PrinterButton'


import { Calendario } from '../Calendar';
import { BotonesPrint } from '../BotonesPrint';
 



function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    urgenteTodo,
    openModal,
    setOpenModal,
    openModalPrint,
    setOpenModalPrint,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,  
    ordenar,
    setOrdenar,
    futuro,
    pasado,
    num,
   
  } = useTodos();

 
      return (
        <React.Fragment>
              <TodoHeader>
                <Calendario/>
              <TodoSearch 
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />

    <TodoOrdenar
                  ordenar={ordenar}
                  setOrdenar={setOrdenar}
                />
               
              
                <TodoCounter
                  totalTodos={totalTodos}
                  completedTodos={completedTodos}
                  futuro={futuro}
                  pasado={pasado}
                />    

               
                <PrinterButton
                 
                  setOpenModalPrint={setOpenModalPrint}
                  searchedTodos={searchedTodos}
                 
                  />  
                  
                
              </TodoHeader>

                  <TodoList
                    error={error}
                    loading={loading}
                    searchedTodos={searchedTodos}
                    searchText={searchValue}
                    totalTodos={totalTodos}
                   
                    onError={() => <TodosError />}
                    onLoading={() => <TodosLoading />}
                    onEmptyTodos={() => <EmptyTodos />}
                    onEmptySearchResults={(searchText) => <p>No hay resultados para <h2>{searchText}</h2></p>}
                   
                    
                    render={todo => (
                      
                      <TodoItem 
                          
                          key={todo.text} 
                          text={todo.text}
                          fechaSeleccionada={todo.fechaSeleccionada}
                          prioridad={todo.prioridad}
                          nota={todo.nota}
                          fechaDate={todo.fechaDate}
                          diaSemana = {todo.diaSemana}
                          fechadesde= {todo.fechadesde}
                          completed={todo.completed}
                          urgente={todo.urgente}
                          onComplete={() => completeTodo(todo.text)}
                          onDelete={() => deleteTodo(todo.text)}
                          onUrgente={() => urgenteTodo(todo.text)}
                      />
                    )}
                  />

                
                        
                {!!openModal && (
                  <Modal>
                      <TodoForm 
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                        
                      >

                      </TodoForm>          
                      
                  </Modal>
                )}

                {!!openModalPrint && (
                  <Modal>
                       
                      <TodoList
                          error={error}
                          loading={loading}
                          searchedTodos={searchedTodos}
                          searchText={searchValue}
                          totalTodos={totalTodos}
                        
                          onError={() => <TodosError />}
                          onLoading={() => <TodosLoading />}
                          onEmptyTodos={() => <EmptyTodos />}
                          onEmptySearchResults={(searchText) => <p>No hay resultados para <h2>{searchText}</h2></p>}
                        
                          
                          render={todo => (

                            
                            <TodoPrint 
                           
                                num={num}   
                                key={todo.text} 
                                text={todo.text}
                                fechaSeleccionada={todo.fechaSeleccionada}
                                prioridad={todo.prioridad}
                                nota={todo.nota}
                                fechaDate={todo.fechaDate}
                                diaSemana={todo.diaSemana}
                                fechadesde={todo.fechadesde}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                                onUrgente={() => urgenteTodo(todo.text)}
                              
                            />
                            
                            
                          )}
                        />   
                             
                        <BotonesPrint
                            setOpenModalPrint={setOpenModalPrint}
                        />
                  </Modal>
                )}

               
          
          <CreateTodoButton
            setOpenModal={setOpenModal}
           
          />
        </React.Fragment>
  
);

                      
}

export default App;
