import React, { useRef } from 'react';
import '../assets/Payroll.css';
import { NavLink, useNavigate } from 'react-router';
import useForm from '../Hooks/useForm';


const Payroll = () => {
    
    const navitiopayslip = useNavigate()
    const {formValidation,values,err,validateForm,handlereset} = useForm();
    const formSubmit = (e) => {
        e.preventDefault();
        if(validateForm())
        {
            let existacc = localStorage.getItem('employee_details');
            let uploadingData = existacc?JSON.parse(existacc):[];
            uploadingData.push(values)
            localStorage.setItem('employee_details',JSON.stringify(uploadingData))
            localStorage.setItem('crntemployee_details',JSON.stringify(values))
            alert("Employee Added Successfully")
            handlereset()
            navitiopayslip("/payslip")
        }
    };
    
    return (
        <div className="d-md-flex">
            <div className="sidebarr bg-dark text-white p-4">
                <ul className="nav flex-column">
                      <li className="nav-item mb-3">
                                            <NavLink to = '/home' style={({ isActive }) => ({
                                        color: isActive ? "#F8CC14" : "white",})} className="lefticons"><i className="bi bi-palette me-2"></i>Overview</NavLink>
                                        </li>
                                        <li className="nav-item mb-3">
                                            <NavLink to = '/payroll' style={({ isActive }) => ({
                                        color: isActive ? "#F8CC14" : "white",})} className="lefticons"><i className="bi bi-cash me-2"></i>Payroll</NavLink>
                                        </li>
                                        <li className="nav-item mb-3">
                                                <NavLink to = '/payslip' style={({ isActive }) => ({
                                        color: isActive ? "#F8CC14" : "white",})} className="lefticons"><i className="bi bi-receipt me-2"></i> Payslip</NavLink>
                                        </li>
                </ul>
            </div>
            <div className="main-content flex-grow-1 p-4">
                <div className="d-md-flex justify-content-between align-items-center mb-4">
                    <h2 className='payrollhead fw-semibold'>Payroll Details</h2>
                    <div>
                        <button className="btn btn-dark me-2">
                            This Month <i className="bi bi-calendar ms-2"></i>
                        </button>
                        <button className="btn btn-warning">
                            Download
                        </button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body" style={{background:"#ffe69c"}}>
                        <form onSubmit={formSubmit}>
                            <div className="row g-4">
                                {/* First Row */}
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label">Employee Name</label>
                                        <input type="text" className="form-control formbox w-75 border-1 border-dark bg-transparent" name="emp_name" value={values.emp_name} onChange={(e)=>formValidation(e)} />
                                        {err.emp_name && <p style={{ color: 'red' }}>{err.emp_name}</p>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label">Employee Role</label>
                                        <input type="text" className="form-control formbox w-75 border-1 border-dark bg-transparent" name="emp_role" value={values.emp_role} onChange={(e)=>formValidation(e)} />
                                        {err.emp_role && <p style={{ color: 'red' }}>{err.emp_role}</p>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label">Employee I'd</label>
                                        <input type="number" className="form-control formbox w-75 border-1 border-dark bg-transparent" name="emp_id" value={values.emp_id} onChange={(e)=>formValidation(e)}/>
                                        {err.emp_id && <p style={{ color: 'red' }}>{err.emp_id}</p>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label">Date</label>
                                        <input type="date" className="form-control w-75 formbox border-1 border-dark bg-transparent" name="date" value={values.date} onChange={(e)=>formValidation(e)}/>  
                                        {err.date && <p style={{ color: 'red' }}>{err.date}</p>}
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label">Basic Salary</label>
                                        <input type="number" className="form-control formbox w-75 border-1 border-dark bg-transparent" name="salary" value={values.salary} onChange={(e)=>formValidation(e)}/>
                                        {err.salary && <p style={{ color: 'red' }}>{err.salary}</p>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label">Total Salary</label>
                                        <input type="number" className="form-control formbox w-75 border-1 border-dark bg-transparent" name="total" value={values.total} onChange={(e)=>formValidation(e)}/>
                                        {err.total && <p style={{ color: 'red' }}>{err.total}</p>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label">No of Working Days</label>
                                        <input type="number" className="form-control formbox w-75 border-1 border-dark bg-transparent" name="working_days" value={values.working_days} onChange={(e)=>formValidation(e)} />
                                        {err.working_days && <p style={{ color: 'red' }}>{err.working_days}</p>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label">Total Present Days</label>
                                        <input type="number" className="form-control formbox w-75 border-1 border-dark bg-transparent" name="present" value={values.present} onChange={(e)=>formValidation(e)}/>
                                        {err.present && <p style={{ color: 'red' }}>{err.present}</p>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label">Total Leave Days</label>
                                        <input type="number" className="form-control formbox w-75 border-1 border-dark bg-transparent" name="leave" value={values.leave} onChange={(e)=>formValidation(e)}/>
                                        {err.leave && <p style={{ color: 'red' }}>{err.leave}</p>}
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label">Additions</label>
                                        <input type="number" className="form-control formbox w-75 border-1 border-dark bg-transparent" name="addition" value={values.addition} onChange={(e)=>formValidation(e)}/>
                                        {err.addition && <p style={{ color: 'red' }}>{err.addition}</p>}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label className="form-label">Deductions</label>
                                        <input type="number" className="form-control formbox w-75 border-1 border-dark bg-transparent" name="deduction" value={values.deduction} onChange={(e)=>formValidation(e)}/>
                                        {err.deduction && <p style={{ color: 'red' }}>{err.deduction}</p>}
                                    </div>
                                </div>

                                <div className="col-12 text-center d-flex justify-content-center gap-5 my-5">
                                    <button type="submit" className="btn btn-warning me-2 px-4">Submit Payroll</button>
                                    <button type="button" onClick={handlereset} className="btn btn-dark px-4">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payroll;