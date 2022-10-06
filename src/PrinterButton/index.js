
import React from "react";
import './PrinterButton.css';

function PrinterButton(props) {

    const onClickButton=() => {
        props.setOpenModalPrint(prevState => !prevState);
    }

   

    return(
        <div>
            
        <button 
        className="PrinterButton"
        onClick={onClickButton}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2
                    2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
        </button>

       
        </div>
    )
}

export {PrinterButton};