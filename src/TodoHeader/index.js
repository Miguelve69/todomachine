import React from "react";


function TodoHeader({children}) {
    
    return(
        <header>
            {`${new Date().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}`} 
           
            {children}
        </header>
    )
}

export {TodoHeader};
