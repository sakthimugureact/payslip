import React, { useState } from 'react'

function useForm() {
    const [values, setValues] = useState({
        emp_name: '',
        emp_role:'',
        emp_id: '',
        date: '',
        salary:'',
        total:'',
        working_days:'',
        present:'',
        leave:'',
        addition:'',
        deduction:''
      });

      const [err, setErr] = useState({
        emp_name: '',
        emp_role:'',
        emp_id: '',
        date: '',
        salary:'',
        total:'',
        working_days:'',
        present:'',
        leave:'',
        addition:'',
        deduction:''
      });
      const [loginvalues,setLoginvalues] = useState({
        email:"",
        password:""
      })
      const [loginerr,setLoginerr] = useState({
        email:"",
        password:""
      })


      const loginValidation = (e) =>{
        const {name,value} = e.target;
        setLoginvalues({...loginvalues,[name]:value});
        setLoginerr({...loginerr,[name]:""})
      }

      const formValidation = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name] : value });
        setErr({ ...err, [name]: '' }); 
      };

      const validateLogin = (e) =>{
        let newErr = {};
        let isVal = true;
  
        if (!loginvalues.email.trim()) {
          newErr.email = 'Email Required';
          isVal = false;
        } 
        else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(loginvalues.email)) {
          newErr.email = 'Enter a Valid Email';
          isVal = false;
        }
  
        if (!loginvalues.password.trim()) {
          newErr.password = 'Password Required';
          isVal = false;
        } 
  
        setLoginerr(newErr)
        return isVal;
      }

      

      const validateForm = () => {
    
        let newErrors = {};
        let isValid = true;
    
        if (!values.emp_name.trim()) {
          newErrors.emp_name = 'Employee Name Required';
          isValid = false;
        }
    
        if (!values.emp_role.trim()) {
          newErrors.emp_role = 'Employee Roll Required';
          isValid = false;
        } 

        if (!values.emp_id.trim()) {
          newErrors.emp_id = 'Employee ID Required';
          isValid = false;
        } 

        if(!values.date.trim()){
          newErrors.date = 'Date Required'
          isValid = false
        }
    
        if (!values.salary.trim()) {
            newErrors.salary = 'Salary Required';
            isValid = false;
          } 

          if (!values.total.trim()) {
            newErrors.total = 'Total Salary Required';
            isValid = false;
          } 

          if (!values.working_days.trim()) {
            newErrors.working_days = 'Working Days Required';
            isValid = false;
          } 

          if (!values.present.trim()) {
            newErrors.present = 'Present Days Required';
            isValid = false;
          } 

          if (!values.leave.trim()) {
            newErrors.leave = 'Leave Days Required';
            isValid = false;
          } 
          if (!values.addition.trim()) {
            newErrors.addition = 'Addition Amount Required';
            isValid = false;
          } 

          if(!values.deduction.trim()){
            newErrors.deduction="Deduction Amount Required";
            isValid = false
          }
        setErr(newErrors);
        return isValid;
      };

      const handlereset = () =>{
        setValues({emp_name: '',
        emp_role:'',
        emp_id: '',
        date: '',
        salary:'',
        total:'',
        working_days:'',
        present:'',
        leave:'',
        addition:'',
        deduction:''})
      }
  
 return{formValidation,values,err,validateForm,handlereset,loginvalues,loginerr,loginValidation,validateLogin,setLoginerr}
}

export default useForm