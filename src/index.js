import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function StudentManagement() {
  const [regular, setRegular] = useState(8);
  const [remedial, setRemedial] = useState(13);
  const [others, setOthers] = useState(0);

  return (
    <div class="main-content">
      <div class="first-division">
        <div class="management-content">
          <h1>Logo</h1>
        </div>
        <div class="management-content">
          <h1>Student Management</h1>
        </div>
        <div class="management-content">
          <h1>Finanacial Management</h1>
        </div>
        <div class="management-content">
          <h1>Quality control</h1>
        </div>
        <div class="management-content">
          <h1>Report Delivery</h1>
        </div>
        <div class="management-content">
          <h1>Attendence</h1>
        </div>
        <div class="management-content">
          <h1>last</h1>
        </div>
      </div>
      <div class="second-division">
        <h1 class="topic">Student Management</h1>
        <div class="count-content">
          <div class="regular-content">
            <h2>{regular}</h2>
            <h1>Regular students</h1>
          </div>
          <div class="remedial-content">
            <h2>{remedial}</h2>
            <h1>Remidial Students</h1>
          </div>
          <div class="other-content">
          <h2>{others}</h2>
          <h1>In Food Club</h1>
          </div>
        </div>
        <h3 class="menu-topic">Menu</h3>
        <div class="menu-content">
          <div class="menu-content-profile">
            <h1>Regular Enrollment</h1>
          </div>
          <div class="menu-content-profile">
            <h1>Remedial Enrollment</h1>
          </div>
          <div class="menu-content-profile">
            <h1>Club Management</h1>
          </div>
          <div class="menu-content-profile">
            <h1>Classroom Management</h1>
          </div>
          <div class="menu-content-profile">
            <h1>SMS/EMAIL</h1>
          </div>
          <div class="menu-content-profile">
            <h1>Attendence</h1>
          </div>
          <div class="menu-content-profile">
            <h1>Clinic</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<StudentManagement />, document.getElementById('root'));
 