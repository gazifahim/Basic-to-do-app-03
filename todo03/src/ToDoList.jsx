import { useState } from "react"

function ToDoList() {
    const [fullList, setFullList] = useState([]);
    const [input, setInput] = useState("");


    function handlingInput(e){
        setInput(e.target.value)  
    }
    function addingBro(){
        if( input.trim() !== "") {
        setFullList(t => [...t,input])
        setInput("")
         }
    }

    function deletingBro(index){
        const newList = fullList.filter((_, i) => i !==index);
        setFullList(newList);
    }
    return(
    <div>
        <h1>Listing App</h1>
        <div className="section-1">
                <input 
                type="text"
                placeholder="WRITE YOUR TO DO !"
                value={input}
                onChange={handlingInput}
                />
                <button  className="add-btn" onClick={addingBro}>Add</button>
         </div>


         <ol type="i">{ fullList.map((input, index) => 
            <li key={index}>
                <span>
                        {input}
                </span>
                <button  className="dlt-btn"  onClick={() => deletingBro (index)}>
                        Delete
                </button>
            </li>
         )}</ol>
         
    </div>
       
    )
}
export default ToDoList