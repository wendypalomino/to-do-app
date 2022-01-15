import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal, openModal}) {

    // const onClickButton = () => {
    //   setOpenModal(true)
    //   if(openModal) setOpenModal(false)
    // }

    const onClickButton = () =>{
      setOpenModal( prevState => !prevState)
    }

  return (
    <button 
        className="CreateTodoButton"
        onClick={onClickButton}     
    >
        +
    </button>
  );
}

export { CreateTodoButton };