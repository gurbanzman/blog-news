import { Link, useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import { useEffect, useState } from "react";
import axios from "axios";


export default function Register() {
   const [value,setValue] = useState({
      email: '',
      password: ''
   });
   const [right,setRight] = useState(null);
   const navigate = useNavigate();

  const handleChange = (event) => {
   const {name, value } = event.target;
   setValue((prevValue) => ({
      ...prevValue,
      [name]: value
   }));
  }
  
  const handleClick = (event)=> {
   event.preventDefault();
   axios.post('http://localhost:3000/user',value)
   .then(res =>{
      res.data,
      setRight(true)
   })
   .catch(error => {
      console.error(error),
      setRight(false)
   });
  }

 useEffect(()=> {
   if(right){
      navigate('/sign-up');
     }
 },[right,navigate]);
  return (
    <>
      <main className="sign-main">
         <section className="sign-main_section">
            <h1 className="sign-main_title">Register</h1>
            <form className="sign-main_form">
               <div className="sign-main-form_section">
                  <label htmlFor="fname" className="sign-main-form_title">First Name</label>
                  <input type="text" name="fname" className="sign-main-form_input search-input" required onChange={handleChange}/>
               </div>
               <div className="sign-main-form_section">
                  <label htmlFor="fname" className="sign-main-form_title">Last Name</label>
                  <input type="text" name="lname" className="sign-main-form_input search-input" required onChange={handleChange}/>
               </div>
               <div className="sign-main-form_section">
                  <label htmlFor="email" className="sign-main-form_title">Email</label>
                  <input type="email" name="email" className={`sign-main-form_input search-input ${styles[`lower`]}`} required onChange={handleChange}/>
               </div>
               <div className="sign-main-form_section">
                  <label htmlFor="password" className="sign-main-form_title">Password</label>
                  <input type="password" name="password" className={`sign-main-form_input search-input ${styles[`lower`]}`} required onChange={handleChange}/>
               </div>
               <div className="sign-main-form_btn">
                  <button type="submit" className="btn sidebar" onClick={handleClick}>Submit</button>
               </div>
                  <Link to={`/sign-up`} className="sign-main-form-var">Already account?</Link>
            </form>
         </section>
      </main>
    </>
  )
}
