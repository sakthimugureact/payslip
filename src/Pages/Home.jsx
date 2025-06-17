import React from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MdOutlineGroups,MdOutlineGroup  } from "react-icons/md";
import '../assets/Home.css';
import { NavLink } from 'react-router';

const Home = () => {
    const currentHour = new Date().getHours();
    let greeting = "";
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Morning";
    }
    else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Afternoon";
    }
    else if (currentHour >= 17 && currentHour < 21) {
        greeting = "Evening";
    }
    else {
        greeting = "Night";
    }
    return (
        <div className="d-md-flex">
            <div className="sidebar bg-dark text-white p-4">
                <ul className="nav flex-column  ">
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
            <div className="main-content flex-grow-1 px-md-3 py-4">
                <div className="header d-flex order justify-content-between second-rows p-4 align-items-center">
                    <h2 className='pb-2 pb-md-0 wishes'>Good {greeting} !!!</h2>
                    <div className="d-flex gap-3 align-items-center">
                        <div className="position-relative me-3">
                            <input 
                                type="search" 
                                className="form-control border-dark" 
                                placeholder="Search"
                            />
                            <i className="bi bi-search position-absolute end-0 top-50 translate-middle-y me-2"></i>
                        </div>
                        <div className="position-relative me-3">
                            <i className="bi bi-bell fs-5"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                5
                            </span>
                        </div>
                        <img 
                            src="/images/dp.jpg" 
                            alt="Profile" 
                            className="rounded-circle"
                            width="40"
                            height="40"
                        />
                    </div>
                </div>
                <div className="row second-row mt-4">
                     <div className="row g-4 mb-4">
                    <div className="col-md-3">
                        <div className="card bg-warning h-100">
                            <div className="card-body topbox d-flex align-items-center">
                                <MdOutlineGroups className="bg-dark text-light iconsfont rounded-circle me-3 px-2 px-md-1 px-lg-2" style={{fontSize:"55px"}}/>
                                <div>
                                    <h6 className="card-title total mb-1 fs-3">Total Employees</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-warning h-100">
                            <div className="card-body topbox d-flex align-items-center">
                               <MdOutlineGroup className="bg-dark text-light iconsfont rounded-circle me-3 px-2 px-md-1 px-lg-2" style={{fontSize:"55px"}}/>
                                <div>
                                    <h6 className="card-title mb-1 total  fs-3">Number Of leave</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-warning h-100">
                            <div className="card-body d-flex topbox align-items-center">
                                <i className="bi bi-person-plus bg-dark text-light px-2 iconsfonts rounded-circle fs-2 me-3 me-md-1 me-lg-3"></i>
                                <div>
                                    <h6 className="card-title mb-1 total fs-3 pe-3">New Employee's</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-warning h-100">
                            <div className="card-body topbox d-flex align-items-center">
                                <i className="bi bi-airplane-fill bg-dark text-light iconsfonts px-2 rounded-circle fs-2 me-3 me-md-1 me-lg-3"></i>
                                <div>
                                    <h6 className="card-title mb-1 total fs-3 pe-5 pe-md-0 pe-lg-5">Holiday of this Year</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h5 className="fs-3 ps-lg-5 pt-3 calenhead">Calendar</h5>
                        <div className="card mx-lg-5 rounded-1 calender" style={{background:"#feeba8"}}>
                            <div className="card-body">
                                <Calendar className="bg-transparent"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pb-4">
                        <div className="d-flex justify-content-between px-3 mb-3">
                            <h5 className="card-title meet-title mb-0 fs-3">Upcoming Meetings</h5>
                            <a href="#" className="text-decoration-none text-danger meet-title fw-bold">View All</a>
                        </div>
                        <div className="card mx-4"style={{background:"#fedeab"}} >
                            <div className="card-body bg-transparent p-3">
                                <div className="meetings-list">
                                    {[
                                        { title: 'Client Meeting', time: '10.00 Am', day: 'Wed', date: 'May 17' },
                                        { title: 'Team Meeting', time: '11.00 Am', day: 'Wed', date: 'May 17' },
                                        { title: 'HR Interview', time: '2.00 Pm', day: 'Mon', date: 'May 17' },
                                        { title: 'Client Meeting', time: '4.00 Pm', day: 'Mon', date: 'May 17' }
                                    ].map((meeting, index) => (
                                        <div key={index} className="meeting-item p-3 mb-3 bg-transparent rounded">
                                            <div className="d-flex justify-content-between align-items-center border-dark">
                                                <div>
                                                    <h6 className="mb-1 meet fs-3">{meeting.title} - {meeting.time}</h6>
                                                </div>
                                                <div className="text-end">
                                                    <div className="fw-bold meet fs-5">{meeting.day}</div>
                                                    <div className="small meet text-muted">{meeting.date}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;