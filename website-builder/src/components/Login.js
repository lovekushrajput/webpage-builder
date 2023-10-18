import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./FirebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    error: {
      password: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = userInfo.error;
    switch (name) {
      case "password":
        error.password =
          value.length < 6 ? "Password should greater than 5 digit" : "";
        break;
      default:
    }

    setUserInfo((prevState) => ({ ...prevState, error, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userInfo;

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/canvas");
          setUserInfo({
            email: "",
            password: "",
            error: { password: "" },
          });
        })
        .catch((error) => {
          let UserError = userInfo.error;
          UserError.password = error.message;
          setUserInfo((prevState) => ({
            ...prevState,
            UserError,
          }));
        });
    } else {
      alert("Please fill the form");
    }
  };

  const handleGooogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        navigate("/canvas");
      })
      .catch((error) => console.log(error.messaage));
  };

  return (
    <>
      <div className="font-sans bg-gradient-to-tr  from-[rgb(208,181,146)] to-[rgb(44,40,37)] h-screen flex justify-center items-center">
        <div className="w-[32%] xs:w-[90%]  h-[450px] bg-[rgba(255,255,255,0.1)] border border-[rgb(99,74,41)]  rounded-2xl flex flex-col justify-center items-center">
          {userInfo.error.password ? (
            <span className="text-red-800 font-semibold text-center">
              {userInfo.error.password}
            </span>
          ) : (
            ""
          )}

          <div className="flex gap-1">
            <h1 className="uppercase text-yellow-400 font-bold text-3xl mb-5">
              Sign-in
            </h1>
            <span className="ppercase text-yellow-400 font-bold text-3xl">
              /
            </span>
            <span
              className="uppercase hover:text-yellow-400 cursor-pointer text-gray-300 font-bold text-3xl"
              onClick={() => navigate("/register")}
            >
              Sign-up
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            style={{ boxShadow: "0 42px 0 -40px #ddd" }}
            className="relative w-full h-[47%] px-10 xs:px-5 after:content-['OR'] after:my-0  after:relative after:bottom-[-20px] after:left-[46%] after:px-2 after:bg-[rgb(152,136,117)] after:font-bold after:text-gray-300 after:text-xs after:tracking-widest"
          >
            <input
              className="uppercase bg-[rgba(99,74,41,0.3)] w-full mb-4 focus:text-[rgb(99,74,41)] hover:text-[rgb(99,74,41)] text-center text-[rgb(99,74,41)] text-[13px] tracking-widest border border-[rgb(99,74,41)] hover:border-yellow-400 placeholder:text-center hover:placeholder:text-[rgb(99,74,41)] placeholder:font-bold placeholder:text-[rgb(99,74,41)] outline-none  h-12 text-cente font-bold"
              type="email"
              name="email"
              placeholder="E-mail"
              value={userInfo.email}
              onChange={handleChange}
            />
            <input
              className="uppercase bg-[rgba(99,74,41,0.3)] w-full mb-4 focus:text-[rgb(99,74,41)] hover:text-[rgb(99,74,41)] text-center text-[rgb(99,74,41)] text-[13px] tracking-widest border border-[rgb(99,74,41)] hover:border-yellow-400 placeholder:text-center hover:placeholder:text-[rgb(99,74,41)] placeholder:font-bold placeholder:text-[rgb(99,74,41)] outline-none  h-12 text-cente font-bold"
              type="password"
              name="password"
              placeholder="Password"
              value={userInfo.password}
              onChange={handleChange}
            />

            <button className="uppercase w-full text-sm hover:bg-yellow-400 bg-[rgb(99,74,41)]  h-12 text-center text-white font-bold">
              signin
            </button>
          </form>

          <div className="w-full xs:px-5 px-10">
            <button
              onClick={handleGooogleLogin}
              className="w-full  mt-6 hover:border-yellow-500 border border-yellow-500  uppercase text-sm  h-11 text-yellow-400 font-bold"
            >
              Google +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;