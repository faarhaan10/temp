import React from 'react';

const Test = () => {
    const handleForm = e=>{
        console.log(e.target.value);
    }
    return (
        <form onChange={handleForm}>
            {/* <input type="radio" name="a" value={1} placeholder='1' id="" />a <br />
            <input type="radio" name="b" value={2} placeholder='2' id="" />b<br />
            <input type="radio" name="c" value={3} placeholder='3' id="" />c<br />
            <input type="radio" name="d" value={4} placeholder='4' id="" />d */}

<fieldset>
            <legend>Select your pitha</legend>
            <p>
                <label for="chitoy">
                    <input type="radio" name="pitha" value={1} id="chitoy"/>Chitoy
                </label>
            </p>
            <p>
                <label for="vapa">
                    <input type="radio" name="pitha" value={2} id="vapa"/>Vapa
                </label>
            </p>
            <p>
                <label for="tell">
                    <input type="radio" name="pitha" value={3} id="tell"/>Tell er pitha
                </label>
            </p>
        </fieldset>
        </form>
    );
};

export default Test;