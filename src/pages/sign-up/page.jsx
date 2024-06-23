// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../auth";
import styles from "./styles.module.css";
// import { nanoid } from "nanoid";

// Your web app's Firebase configuration

// Initialize Firebase
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

export default function SignUp() {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [find,setFind] = useState({});
  const navigate = useNavigate();

  const handleValue = (event) => {
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  },[]);

  
  const updateValues = (event) => {
    event.preventDefault();
    try {
      setFind(findByEmail(values.email))
      if(Object.values(find).length > 0){
        setLoading(true)
      }
      else{
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const findByEmail = (email) => {
    return data.find((item) => item.email === email)
  }

  const loginWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await writeUserData(user);
    } catch (error) {
      console.error("Google ile oturum açarken hata oluştu: ", error);
    }
  };

  useEffect(()=> {
    if(loading){
      navigate(`/home/${find.fname}/${find.id}`);
    }
  });

  const writeUserData = async (user) => {
    try {
      const response = await axios.post("http://localhost:3000/user/auth", {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
      console.log("Sunucuya gönderilen veri: ", response.data);
      setLoading(true);
    } catch (error) {
      console.error("Veri gönderiminde hata oluştu: ", error);
      setLoading(false);
    }
  };

  return (
    <>
      <main className="sign-main">
        <section className="sign-main_section">
          <h1 className="sign-main_title">Sign Up</h1>
          <form className="sign-main_form">
            <div className="sign-main-form_section">
              <label htmlFor="email" className="sign-main-form_title">
                Email
              </label>
              <input
                type="email"
                name="email"
                className={`sign-main-form_input search-input ${styles[`lower`]}`}
                onChange={handleValue}
                required
              />
            </div>
            <div className="sign-main-form_section">
              <label htmlFor="password" className="sign-main-form_title">
                Password
              </label>
              <input
                type="password"
                name="password"
                className={`sign-main-form_input search-input ${styles[`lower`]}`}
                onChange={handleValue}
                required
              />
            </div>
            <div className="sign-main-form_btn">
              <button
                type="submit"
                className="btn btn-small-row sidebar"
                onClick={updateValues}
              >
                Submit
              </button>
            </div>
          </form>
          <div className="sign-firebase mt-4">
            <button
              className="sign-firebase-auth-btn position-relative"
              onClick={loginWithGoogle}
            >
              Google{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </button>
            <button className="sign-firebase-auth-btn position-relative">
              Github{" "}
              <svg
                height="32"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.72 7.72 0 0 1 8 4.75c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </button>
          </div>
          <Link to={`/register`} className="sign-main-form-var">
            don't have your accaount?
          </Link>
        </section>
      </main>
    </>
  );
}
