import React from "react";
import {useField} from "formik";
function Input({name,label,id,placeholder,...rest}) {

const field = useField(name);
  const [data,meta] = field;
  const {value,onChange,onBlur}=data;
  const {error,touched}=meta;
  console.log("field",field);
  console.log("data",data);
  console.log("meta",meta);
  
 let errorclass="border-gray-200 focus:border-blue-200";
  if(error && touched)
    errorclass="border-red-200";
  return (<div>
    <label htmlFor={id} class="sr-only">{label}</label>
    <input type={name} name={name} id={id} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} class={"border-2 border-gray-200 p-2 w-64 mt-4"+" "+errorclass} {...rest}/>
        {touched && error && (<div class="text-red-500">{error}</div>)}

  </div>);
}
export default Input;