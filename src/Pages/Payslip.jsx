import React, { useEffect, useState } from 'react';
import '../assets/Payslip.css';
import { NavLink, useNavigate } from 'react-router';

const Payslip = () => {
    const navitohome = useNavigate()
    const [employeeData, setEmployeeData] = useState(null);
    useEffect(() => {
        const data = localStorage.getItem('crntemployee_details');
        if (data) {
            setEmployeeData(JSON.parse(data));
        }
    }, []);
    const saveclick = () =>{
        localStorage.removeItem("crntemployee_details")
        navitohome("/home")
    }
    
    return (
        <div className="d-md-flex">
            {/* Sidebar */}
            <div className="sidebars bg-dark text-white p-4">
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

            {/* Main Content */}
            <div className="main-content flex-grow-1 mt-2 p-4">
                <h2 className="mb-4 paysliphead fw-bold text-center pb-3">Payslip Details</h2>

               {employeeData &&  <div className="card mx-auto">
                    <div className="card-body" style={{background:"#fff3cd"}}>
                        {/* Employee Details Section */}
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <div className="d-flex">
                                        <span className="fw-bold me-2 paysliphead fs-5">Employee Name :</span>
                                        <span className='fs-5'>{employeeData.emp_name}</span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex">
                                        <span className="fw-bold me-2 paysliphead fs-5">Employee I'D :</span>
                                        <span className='fs-5'>{employeeData.emp_id}</span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex">
                                        <span className="fw-bold me-2 paysliphead fs-5">Role :</span>
                                        <span className='fs-5'>{employeeData.emp_role}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <div className="d-flex">
                                        <span className="fw-bold me-2 paysliphead fs-5">Date :</span>
                                        <span className='fs-5'>{employeeData.date}</span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="d-flex">
                                        <span className="fw-bold me-2 paysliphead fs-5">Month :</span>
                                        <span className='fs-5'>June</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Salary Table */}
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="bg-warning">
                                    <tr>
                                        <th colSpan="2" className="text-center">Employee Details</th>
                                        <th colSpan="2" className="text-center">Earnings</th>
                                        <th className="text-center">Additions</th>
                                        <th className="text-center">Deductions</th>
                                    </tr>
                                    <tr>
                                        <th>Employee I'd</th>
                                        <th>Employee Name</th>
                                        <th>Basic Salary</th>
                                        <th>Total Salary</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{employeeData.emp_id}</td>
                                        <td>{employeeData.emp_name}</td>
                                        <td>{employeeData.salary}</td>
                                        <td>{employeeData.total}</td>
                                        <td>{employeeData.addition}</td>
                                        <td>{employeeData.deduction}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Total Earnings */}
                        <div className="text-end mt-4 mb-4">
                            <h5>Total Earnings: ₹ {`${Number(employeeData.total)+Number(employeeData.addition)-Number(employeeData.deduction)}`}</h5>
                        </div>

                        {/* Action Buttons */}
                        <div className="text-center">
                            <button className="btn btn-warning me-2" onClick={()=>saveclick()}>Save</button>
                            <button className="btn btn-dark">Download</button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Payslip;