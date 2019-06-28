import React from 'react';

function Form ( props ) {
  return (

    <form>
      <label>
        Enter text: 
        <input type="text" value={props.input} onChange={props.handleInputChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
export default Form;