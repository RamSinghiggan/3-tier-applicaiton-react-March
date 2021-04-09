import React, { Component } from 'react'
import {useState} from "react";
import Axios from 'axios';
import ReactDOM from 'react-dom';






function FormData() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [Address, setAddress] = useState("");
   const[farmlist,setFarmList]=useState([]);
   
   
   
   const addForm= () =>
   {
   Axios.post("http://localhost:3001/create",{
   name:Name,
   email: Email,
   phone: Phone,
   address: Address,
   });
   };
   
   const getEmployees = () => {
     Axios.get("http://localhost:3001/farmtable").then((response) => {
       setFarmList(response.data);
       console.log(farmlist.data);
     });
   };
   
   
     return (
       <div className="App">
         <header className="information">
         <br></br>
        <br></br>
             <center><div>
             <label>Name</label>
           <input type="text" onChange={(event)=> {setName(event.target.value);}}/>
   </div></center>
   <br></br>
        <br></br>
        <center><div>
        <label>Email</label>
           <input type="text" onChange={(event)=> {setEmail(event.target.value);}}/>
   </div></center>
   <br></br>
        <br></br>

        <center>
            <div>
            <label>Phone</label>
           <input type="text" onChange={(event)=> {setPhone(event.target.value);}}/>
   
            </div>
        </center>
        <br></br>
        <br></br>

        <center>
            <div>
            <label>Address</label>
           <input type="text" onChange={(event)=> {setAddress(event.target.value);}}/>
   
            </div>
        </center>
        <br></br>
        <br></br>
        <center><div> <button onClick={addForm}>Submit</button></div></center>
          
           <br></br>
        <br></br>
        
           <div className="emp">
           <button onClick={getEmployees}>Show all entries</button>
   
           {farmlist.map((val,key)=>{
             return<div>
               <h3>Name: {val.Name}</h3>
                   <h3>Email: {val.Email}</h3>
                   <h3>Phone: {val.Phone}</h3>
                   <h3>Address: {val.Address}</h3>
              <br></br>
               </div>
               
           })}
         </div>
         <br></br>
               <br></br>
         </header>
       </div>
       
   
             
     );
   
   }
 
  
  class Form extends Component {
  
 
  
  render() {
    return <FormData />;
  }
  }
  
  
  
  
   ReactDOM.render(<Form/>, document.getElementById('root'));
  
  
   export default Form;
