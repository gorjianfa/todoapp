 
 
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Label, FormGroup,Input } from "reactstrap";
import PhoneInput from 'react-phone-input-2'
import { useState } from "react";
const Information =()=>{
   
    const notify = () => toast("The information was successfully registered");
    const [value, setValue] = useState()
    return(
       <div className="background">
        <h1 className="text-secondary d-flex justify-content-center p-3">
       information
        </h1>
        <div className=" d-flex justify-content-center">
       <div className="card "> 
       <div className="row">    
         <FormGroup className="col">
    <Label for="examplePassword">
      name   :
    </Label>
    <Input
      id="exampletext"
      name="name"
      placeholder="name"
      type="text"
    />
  </FormGroup>
  <FormGroup className="col">
    <Label for="exampletext">
      Lastname   :
    </Label>
    <Input
      id="exampleText"
      name="lastname"
      placeholder="lastname"
      type="text"
    />
  </FormGroup>
  </div>
 <div className="row">
  <FormGroup className="col">
    <Label for="exampleNumber">
       National Code   :
    </Label>
    <Input
     
      id="exampleNumber"
      name="number"
      placeholder="number placeholder"
      type="number"
    />
  </FormGroup>
  <FormGroup className="col">
    <Label for="exampleDate">
       Birth Date  :
    </Label>
    <Input
      id="exampleDate"
      name="date"
      placeholder="date placeholder"
      type="date"
    />
  </FormGroup>
  </div>
  <div className="row justify-content-center">
  <FormGroup className="col m-3">
    <Label for="exampleEmail">
      Email  :
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup className="col">
    <Label for="exampleSelect">
      
    </Label>
    <PhoneInput className=""
   country="ir"
   value={value}
   onChange={setValue}
/>
  </FormGroup>
  </div>
  <div className="row">
  <FormGroup className="col">
    <Label for="exampleSelect">
     Gender   :
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
       meal
      </option>
      <option>
        female
      </option>
    
    </Input>
  </FormGroup>

  

      <FormGroup className="col">
    <Label for="exampleSelect">
      City  :
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
       مازندران
      </option>
      <option>
       گیلان
      </option>
      <option>
      اردبیل
      </option>
      <option>
       گلستان
      </option> 
      <option>
        خراسان شمالی
        </option>
         <option>
        تهران
        </option>
         <option>
        تبریز
        </option>
      <option>
        شیراز
      </option>
    </Input>
  </FormGroup>
  <FormGroup  className="col">
    <Label for="examplePassword">
      Password   :
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup></div>
 
  <button  className="btn btn-outline-secondary" onClick={notify}>Submit  <Toaster position="top-left" reverseOrder={false} />
  </button> 
  
 

              
  </div>  
  </div>
  </div>

        
        
      
       
    );
}




export default Information;