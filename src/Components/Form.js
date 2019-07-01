import React from 'react';

function Form ( props ) {
  return (

    <form className="UserInputForm">
      <label>
        Enter text: 
        <input type="text" value={props.input} onChange={props.handleInputChange}/>
      </label>
      <input className="button" type="submit" value="Submit" onClick={props.handleSubmit}/>
    </form>
  )
}
export default Form;