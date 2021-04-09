import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form'



function SForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
  
    <div className="App" center>
      <form onSubmit={handleSubmit(onSubmit)} center>
    <center><h1>Sign Up Form</h1></center> 
      <br></br>
        <br></br>
  
       <center> <div>
          <label htmlFor="firstName">First Name </label>
          <input name="firstName" placeholder="Firstname" ref={register} />
        </div> </center>
        <br></br>
        <br></br>

        <center>  <div>
          <label htmlFor="lastName">Last Name </label>
          <input name="lastName" placeholder="Lastname" ref={register} />
        </div> </center>
        <br></br>
        <br></br>
        <center>  <div>
          <label htmlFor="Phone">Phone </label>
          <input name="Phone" placeholder="Phone" ref={register} />
        </div> </center>
        <br></br>
        <br></br>
        <center> <div>
          <label htmlFor="Email">Email </label>
          <input name="Email" placeholder="Email" ref={register} />
        </div> </center>
        <br></br>
        <br></br>
        <center> <div>
          <label htmlFor="Address">Address </label>
          <input name="Address" placeholder="Address" ref={register} />
        </div></center>

        <br></br>
        <br></br>
        <center> <button type="submit">Submit </button></center>
      </form>
    </div>
  );
}

class Form extends Component {


constructor(props) {
  super(props);
}

render() {
  return <SForm />;
}
}




 ReactDOM.render(<Form />, document.getElementById('root'));


 export default Form;
