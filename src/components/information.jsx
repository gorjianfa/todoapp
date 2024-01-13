import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Label, FormGroup,Input,Form  } from "reactstrap";
import PhoneInput from 'react-phone-input-2'
import { useState } from "react";
const Information =()=>{
   
    const notify = () => toast("The information was successfully registered");
    const [value, setValue] = useState()
    return(
       <div >
        <h1 className="text-danger d-flex justify-content-center">
       information
        </h1>
        <div className=" d-flex justify-content-center">
       <div className="card"> 
       <FormGroup className="">
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
  <FormGroup className="">
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
  <FormGroup className="">
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
  <FormGroup className="">
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
  <FormGroup className="">
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
  <FormGroup className="">
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
  <FormGroup>
    <Label for="exampleSelect">
      
    </Label>
    <PhoneInput className=""
   country="ir"
   value={value}
   onChange={setValue}
/>
  </FormGroup>
      <FormGroup className="">
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
  <FormGroup  className="">
    <Label for="examplePassword">
      Password   :
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
 
  <button  className="" onClick={notify}>Submit  <Toaster position="top-right" reverseOrder={false} />
  </button> 
  
 

              
  </div>  
  </div>
  </div>

        
        
      
       
    );
}




export default Information;