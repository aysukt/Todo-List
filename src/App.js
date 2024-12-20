import './App.css';
import {useState, useEffect} from "react"
import ListItem from './component/ListItem';


function App() {
 const [input, setInput] = useState("")
 const [items,setItems] = useState(JSON.parse(localStorage.getItem("items")))

 useEffect(()=>{
  localStorage.setItem("items",JSON.stringify(items))

 },[items])
 


 const clearInput=()=>{
  setInput('');
 }
 
 const clickToSubmit=()=>{
  if(!input) return;
  setItems([...items,{checked:false, id:Math.random(), info: input}])
  setInput("")
  clearInput();
 }

 const handleKeyDown = (e) => {
  if (e.key === "Enter") {
      clickToSubmit();
  }
}


const handleDelete = (index) => {
  const updatedItems = items.filter((_) => _.id !== index);
  setItems(updatedItems);
};
const handleCheckedChange = (updatedItem) => {
  const updatedItems = items.map(item =>
    item.id === updatedItem.id ? updatedItem : item
  );
  setItems(updatedItems);
}

  return (
    <div className="App" >
      <div className='main'>
      <label htmlFor='info-input' style={{ fontSize: '30px', textAlign: 'center' }}>TO DO LİST</label>
        <hr></hr>
        <input value={input}  onChange={(e)=>{setInput(e.target.value)}} onKeyDown={handleKeyDown} className='info-input' type="text" placeholder='Yapılacak bir iş giriniz...'/>
        <button onClick={()=>clickToSubmit()} className='info-button'  >+</button>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onDelete={() => handleDelete(item.id)}
            onCheckedChange={handleCheckedChange}
          />
        ))}
      </div>   
    </div>
  );
}

export default App;