import React from "react";

function BotonesPrint({setOpenModalPrint}) {
   

    const onCancel = () => {
        setOpenModalPrint(false)
    }

    return(
        <div>
        <button 
        
        onClick={window.print}
        >
            Imprimir
        </button>
        <button 
        
        onClick={onCancel}
        >
            Cancelar
        </button>
        
        
        </div>
    )
}

export {BotonesPrint};