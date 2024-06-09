import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/header";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!username) errors.username = "必填";
    if (!password) errors.password = "必填";
    if (password !== confirm_password) errors.confirm_password = "密碼不一致";

    setMessages(errors);

    axios.post('http://localhost:8080/Signup', {
      username: username,
      password: password,
    })
      .then(response => {
        console.log(response.data);
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error.response.data.error);
      });


    // if (Object.keys(errors).length === 0) {
    //   // 可以進行提交
    //   console.log("Signup email:", email, "password:", password);
    // }`
  };

  // const handleInput = (e, type) => {
  //   switch (type) {
  //     case "username":
  //       setFormErrors("");
  //       setUsername(e.target.value);
  //       if (e.target.value === "") {
  //         setFormErrors("Username has left blank");
  //       }
  //       break;
  //     case "password":
  //       setFormErrors("");
  //       setPassword(e.target.value);
  //       if (e.target.value === "") {
  //         setFormErrors("Password has left blank");
  //       }
  //       break;
  //     case "confirm_password":
  //       setFormErrors("");
  //       setConfirmPassword(e.target.value);
  //       if (e.target.value === "") {
  //         setFormErrors("Confirm password has left blank");
  //       }
  //       else if (e.target.value !== password) {
  //         setFormErrors("Confirm password not match");
  //       }
  //       break;
  //     default:
  //   }
  // }

  // const checkUsernameAvailability = async (username) => {
  //   try {
  //     const response = await fetch("/path/to/check_username.php", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username }),
  //     });
  //     const data = await response.json();
  //     setIsUsernameAvailable(data.available);
  //   } catch (error) {
  //     console.error("Error checking username availability:", error);
  //   }
  // };

  return (
    <>
      <Header />
      <div className="flex flex-col mx-auto bg-white rounded-lg">
        <div className="flex w-screen h-screen xl:gap-14 md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex xl:p-10">
              <form
                className="flex flex-col pb-6 text-center bg-white rounded-3xl"
              >
                {/* <p>
                  {
                    messages !== "" ?
                      <span className="success">{messages}</span> :
                      <span className="error">{formErrors}</span>
                  }
                </p> */}
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                  Sign up
                </h3>

                <label
                  htmlFor="username"
                  className="mt-10 mb-2 text-sm text-start text-grey-900"
                >
                  帳號*
                </label>
                <div className="relative flex">
                  <input
                    name="username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium border-2 outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl focus:border-black"
                  />
                  {messages.username && (
                    <p className="absolute text-red-500 -right-12 top-4">{messages.username}</p>
                  )}
                </div>

                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  密碼*
                </label>
                <div className="relative flex">
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium border-2 outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl focus:border-black"
                  />
                  {messages.password && (
                    <p className="absolute text-red-500 -right-12 top-4">{messages.password}</p>
                  )}
                </div>

                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  密碼確認*
                </label>
                <div className="relative flex">
                  <input
                    name="confirm_password"
                    type="password"
                    value={confirm_password}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium border-2 outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl focus:border-black"
                  />
                  {messages.confirm_password && (
                    <p className="absolute text-red-500 -right-24 top-4">{messages.confirm_password}</p>
                  )}
                </div>

                <button type="submit" onClick={handleSubmit} className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 bg-gray-800 md:w-96 rounded-2xl hover:bg-black focus:ring-4 focus:ring-black">
                  Sign Up
                </button>
                <p className="text-sm leading-relaxed text-grey-900">
                  <Link
                    to="/Login"
                    // href="javascript:void(0)"
                    className="font-bold text-grey-700"
                  >
                    <p>Log In</p>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
