import React from 'react';
import { toast } from 'react-toastify';

const Question = ({ques,index}) => {
    const {id,question,options,correctAnswer} = ques;

    const handleForm = e=>{
        if (correctAnswer == e.target.value) toast("Wow so easy !");
        else toast("incorrect !");

    }
    
    return (
        <div>
            <h3><strong>{index+1}. {question} </strong></h3>
            <form  onChange={handleForm}>

                {
                    options.map((opt,index) => ( <div>
                    <input type="radio" name={id} value={opt} id={id+index}/>{opt}
                    </div>
                ))
                }
            </form>
            <br />
        </div>
    );
};

export default Question;