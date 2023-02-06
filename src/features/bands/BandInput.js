import React, { useState} from "react";


function BandInput({ onBandSubmit } ) {
  const [ formData, setFormData ] = useState("")

  const onFormChange = (e) => {
    setFormData(e.target.value)
  }

  return(
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onBandSubmit(formData)
          setFormData("")
        }}
        >
        <p>
          <label>name
            <input 
              type="text"
              value={formData.name}
              name="name"
              onChange={onFormChange}
              />
          </label>
        </p>
        <button type="submit">add band</button>
      </form>
    </div>
  );
}

export default BandInput;
