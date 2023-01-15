import { useState } from "react";
import "./styles.css"

const InputForm = ({onAdd}) => {
   const [text, setText] = useState("")
  return (
    
      <form className="input-form"  
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(text);
          setText("");
        }}
      >
        <input className="input" type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="button">Add New Task</button>
      </form>
    
    
  )
}
export default InputForm;