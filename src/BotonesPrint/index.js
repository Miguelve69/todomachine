import React from "react";


function BotonesPrint(props) {

    const onClickButton=() => {
        props.openModalPrint(prevState => !prevState);
    }

    return(
        <div>
        <button 
        
        onClick={window.print}
        >
            Imprimir
        </button>
        <button 
        
        onClick={onClickButton}
        >
            Cancelar
        </button>
        </div>
    )
}

export {BotonesPrint};