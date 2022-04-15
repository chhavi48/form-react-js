import React from "react";
import {useEffect, useState } from "react";
import styles from "./Form.module.css";

/*
Name 
age
address
dept. -> select tag 
salary 
marital sta -> check

*/
const Form = () => {
  const [formData, setFormData] = useState({});

  //onChange
  const handleChange = (e) => {
    console.log(e.target.value, e.target.checked);

    const InputName = e.target.name;

    if (InputName === "checkbox") {
      setFormData({
        ...formData,
        [InputName]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [InputName]: e.target.value,
      });
    }
  };



  // onSubmit
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  
  // getData();
    alert("New Employee added");
  };




  const getData = async ()=> {
    try {
          let response = await fetch(`http://localhost:3000/employees`);
          let data= response.json();
     
    } catch (e) {
      console.log(e)
    }
  }


useEffect(()=> {
  getData();
},[]);







  return (
    <div className={styles.form}>
      <h1>Employee Details</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className={styles.grid}>
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className={styles.grid}>
          <label htmlFor="age">Age</label>
          <input
            className="form-control"
            type="number"
            name="age"
            onChange={handleChange}
          />
        </div>
        <div className={styles.grid}>
          <label htmlFor="address">Address</label>
          <input
            className="form-control"
            type="address"
            name="address"
            onChange={handleChange}
          />
        </div>
        <div className={styles.grid}>
          <label htmlFor="department">Department</label>
          <select
            className="form-control"
            type="select"
            name="department"
            onChange={handleChange}
          >
            <option value="">Departments</option>
            <option value="finance">Finance</option>
            <option value="service">Service</option>
            <option value="reservation">reservation</option>
            <option value="hr">Engineering</option>
          </select>
        </div>
        <div className="form-check d-flex mx-5 gap-5">
          <label className="form-check-label" htmlFor="checkbox">
            Marital Status : -
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            name="checkbox"
            onChange={handleChange}
          />
        </div>

        <div className={styles.grid}>
          <label htmlFor="salary">Salary</label>
          <input
            className="form-control"
            type="number"
            name="number"
            onChange={handleChange}
          />
        </div>

        <input
          className="btn bg-warning"
          type="submit"
          placeholder="Submit"
          value="Add Employee"
        />
        {/* <button onClick={}></button> */}
      </form>
    </div>
  );
};

export default Form;

// import React from 'react';
// import { useState } from 'react';
// import styles from "./Form.module.css"
// const Form = () => {
//   const [formdata, setformdata] = useState({
//     username: "",
//     password: "",
//     age: 0,
   
//     showPassword: false,

//   });
//   const handlechange = (e) => {
//     const inputName = e.target.name;

//     if (e.target.type === "checkbox") {
//       console.log(e.target.value, e.target.checked);
//       setformdata(
//         {
//           ...formdata,
//           [inputName]: e.target.checked,
//         }
//       );
//     }
//     else if (e.target.type === "file") {
//       setformdata({
//         ...formdata,
//         [inputName]: e.target.files,
//       });
//     }
//     else {
//       setformdata({
//         ...formdata,
//         [inputName]: e.target.value,
//       });
//     }

//   };
//   const handleSubmit = (e) => {

//     e.preventDefault();
 
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className={styles.form}>Form
//         <div className={styles.grid}>

//           <label>User Name</label>
//           <input type="text" name="username" onChange={handlechange}></input>
//         </div>
//         <div>
//         <div className={styles.grid}>
//           <label>Password</label>
//           <input type={formdata.showPassword ? "text" : "password"} name="password" onChange={handlechange} value={formdata.password}/>
//         </div>

//         <div>
//           <input type="checkbox" name="showPassword" onChange={handlechange}/>
//           <label>Show Password</label>
//         </div>
//         </div>
//         <div className={styles.grid}>
//           <label>age</label>
//           <input type="number" name="age" onChange={handlechange}></input>
//         </div>

//         <div className={styles.grid}>
//           <label>DOB</label>
//           <input type="date" name="dob" onChange={handlechange}></input>
//         </div>
//         <div className={styles.grid}>
//           <label>Resume</label>
//           <input type="file" name="resume" onChange={handlechange}></input>
//         </div>
//         <div className={styles.grid}>
//           <input type="submit"></input>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default Form