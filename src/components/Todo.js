import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

// props: a js object where are the attributes added to the element are key value pairs 
function Todo(props) {
    // react hook 
    // creates a state react is aware of 
    // arrays arry of two elements 
    // state is like a vaariable
    // initial value, (current value is the first element), second element is to change the value 
    const [modalIsOpen, setModalIsOpen] = useState();

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <h2>Learn React</h2>
            <div className="actions">
        <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {/* if the first value is true, will run the second value and will run the backdrop */}
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}

    </div>
  );
}

export default Todo;