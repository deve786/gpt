
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Second from './Components/Second';

function App() {
  const [uname, setUname] = useState("annu")
  function changeData(){
    setUname("kannappi.....")
  }
  function changeName(s){
    setUname(s)
  }
  function ChangeValue(e){

      setUname(e.target.value)
  }
  return (
    <div className="App">
      <h1>Hellllllllllooooooooooooooooooooooooo...................... {uname} </h1>
      <Header></Header>
      <Second data={uname} place={'calicut'}></Second>
      <h1 >aHeading</h1>
      <button className='border' onClick={changeData}>Change</button>
      <button className='border' onClick={()=>changeName("abhii")}>sad</button>
      <input className='border' type="text" onChange={(e)=>ChangeValue(e)}/>
    </div>
  );
}

export default App;
