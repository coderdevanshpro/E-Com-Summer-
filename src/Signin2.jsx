import React,{useState} from "react";
import {useFormik,Formik,Form,useField} from "formik";
import * as Yup from "yup";
import Input from "./Input";

function Signin2()
{
  
   function callapi(values)
  {
    console.log("API called email=",values.email,"password=",values.password)
    return axios.post('https://dummyjson.com/user/login' + {values})
    .then(response => response.data);
  }

const schema=Yup.object().shape({
  email:Yup.string().email().required(),
  password:Yup.string().min(8,"Password must be atleast 8 characters").required(),
});
  console.log("schema=",schema);

  const initialValues={
    email:"",
    password:"",
  }
  
  return (
    <div class= "bg-gray-200 flex flex-col items-center justify-center  w-full h-full">
    <div class=" border-2 px-8 py-8 flex flex-col bg-gray-100">
   <div class="text-2xl">
     Login to Mykart
   </div>
      <Formik initialValues={initialValues} 
        onSubmit={callapi} validationSchema={schema}
          validateOnMount={true}>
        
      <Form class="flex flex-col">
        <Input label="Email" id="e-mail" placeholder="Email Adress"   name="email" />

        <Input label="Password" id="password" placeholder="Password" name="password"  />
        
         {/* <button type="button" onClick={resetForm}
           class="border rounded-lg bg-blue-500 mt-4 py-1 mx-auto px-7 text-white" >Reset</button> */}
      <button type="submit" class="border rounded-lg bg-blue-500 mt-4 py-1 mx-auto px-7 text-white disabled:bg-blue-100" //disabled={!isValid}
        >Submit </button>
      </Form>
        </Formik>

    </div>
  </div>);

}
export default Signin2;