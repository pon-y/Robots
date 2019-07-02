import React from 'react';

function Form ( props ) {

  const { input, imgSet, handleSelectChange, handleInputChange, handleSubmit } = props;
  return (
    <form className="UserInputForm">
      <div>
        <label>
          Text Input: 
          <input type="text" value={input} onChange={ handleInputChange }/>
        </label>
      </div>

      <div className="select">
        <label>
          Image Set: 
          <select value={ imgSet } onChange={ handleSelectChange}>
            <option default value="">Robots</option>
            <option  value="/?set=set2">Monsters</option>
            <option  value="/?set=set3">Robot Heads</option>
            <option value="/?set=set4">Kittens</option>
          </select>
        </label>
      </div>
      <input className="button" type="submit" value="Submit" onClick={ handleSubmit }/>
    </form>
  )
}
export default Form;
