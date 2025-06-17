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

    //   const [reg,setreg] = useState({
    //     name:'',
    //     email:'',
    //     password:'',
    //     cmpass:''
    //   })

    //   const[regerr,setRegerr] = useState({
    //     name:'',
    //     email:'',
    //     password:'',
    //     cmpass:''
    //   })

    //   const [loginvalues,setLoginvalues] = useState({
    //     email:"",
    //     password:""
    //   })
    //   const [loginerr,setLoginerr] = useState({
    //     email:"",
    //     password:""
    //   })

    //   const registerVaidation = (e) =>{
    //     const {name,value} = e.target;
    //     setreg({...reg,[name]:value});
    //     setRegerr({...regerr,[name]:''})
    //   }

    //   const loginValidation = (e) =>{
    //     const {name,value} = e.target;
    //     setLoginvalues({...loginvalues,[name]:value});
    //     setLoginerr({...loginerr,[name]:""})
    //   }

    //   const detailValidation = (e) =>{
    //     const {name,value} = e.target;
    //     setDetails({...details,[name]:value});
    //     setError({...error,[name]:''})
    //   }
      const formValidation = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name] : value });
        setErr({ ...err, [name]: '' }); 
      };

    // //   const validateRegister = () =>{
    // //     let newErr = {};
    // //     let isValid = true;

    // //     if (!reg.name.trim()) {
    // //       newErr.name = 'Name Required';
    // //       isValid = false;
    // //     }

    // //     if (!reg.email.trim()) {
    // //       newErr.email = 'Email Required';
    // //       isValid = false;
    // //     } 
    // //     else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(reg.email)) {
    // //       newErr.email = 'Enter a Valid Email';
    // //       isValid = false;
    // //     }

    // //     if(!reg.password.trim()){
    // //       newErr.password="Password Required";
    // //       isValid = false
    // //     }

    // //     if(!reg.cmpass.trim()){
    // //       newErr.cmpass="Password Required";
    // //       isValid = false
    // //     }
    // //     else if(reg.password!==reg.cmpass){
    // //       newErr.cmpass="Password Not Matched";
    // //       isValid = false
    // //     }
    // //     setRegerr(newErr);
    // //     return isValid;
    // //   }

    //   const validateLogin = (e) =>{
    //     let newErr = {};
    //     let isVal = true;
  
    //     if (!loginvalues.email.trim()) {
    //       newErr.email = 'Email Required';
    //       isVal = false;
    //     } 
    //     else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(loginvalues.email)) {
    //       newErr.email = 'Enter a Valid Email';
    //       isVal = false;
    //     }
  
    //     if (!loginvalues.password.trim()) {
    //       newErr.password = 'Password Required';
    //       isVal = false;
    //     } 
  
    //     setLoginerr(newErr)
    //     return isVal;
    //   }

    //   const validateDetails = () =>{
    //     let newErr = {};
    //     let isValid = true;

    //     if (!details.userName.trim()) {
    //       newErr.userName = 'Name Required';
    //       isValid = false;
    //     }

        
    //     if(!details.bookingDate.trim()){
    //       newErr.bookingDate="Date Required";
    //       isValid = false
    //     }

    //     if(!details.service.trim()){
    //       newErr.service="Service Required";
    //       isValid = false
    //     }

    //     if(!details.amount.trim()){
    //       newErr.amount="Amount Required";
    //       isValid = false
    //     }
    //     setError(newErr);
    //     return isValid;
    //   }
      

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
  
 return{formValidation,values,err,validateForm,handlereset}
// ,details,detailValidation,validateDetails, setLoginerr,error,reg,regerr,registerVaidation,validateRegister,loginvalues,loginerr,loginValidation,validateLogin
}

export default useForm