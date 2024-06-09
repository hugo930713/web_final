import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/header";

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/Login', {
      username: username,
      password: password,
    })
      .then(response => {
        if (response.data.message === "成功登入") {
          const token = response.data.token;

          // 儲存 JWT 和角色到 localStorage
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          localStorage.setItem("role", response.data.role);

          if (response.data.role === 'admin') {
            alert("管理者登入成功");
            window.location.href = '/Dashboard';
          } else {
            window.location.href = '/';
          }
        } else {
          alert('帳號或密碼錯誤');
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  return (
    <>
      <Header />
      <div className="container flex flex-col mx-auto bg-white rounded-lg">
        <div className="flex justify-center w-full h-screen my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form
                className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
              >
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                  Log In
                </h3>

                <label
                  htmlFor="username"
                  className="mt-10 mb-2 text-sm text-start text-grey-900"
                >
                  帳號*
                </label>
                <input
                  name="username"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium border-2 outline-none peer focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl focus:border-black"
                />

                <label
                  htmlFor="password"
                  className="mt-10 mb-2 text-sm text-start text-grey-900"
                >
                  密碼*
                </label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium border-2 outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl focus:border-black"
                />

                <div className="flex flex-row justify-between mb-8">
                  <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      defaultChecked=""
                      defaultValue=""
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-black">
                      <img
                        className=""
                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                        alt="tick"
                      />
                    </div>
                    <span className="ml-3 text-sm font-normal text-gray-900">
                      Keep me logged in
                    </span>
                  </label>
                  <a
                    // href="javascript:void(0)"
                    className="mr-4 text-sm font-medium text-black"
                  >
                    Forget password?
                  </a>
                </div>

                <button type="submit" onClick={handleSubmit} className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 bg-gray-800 md:w-96 rounded-2xl hover:bg-black focus:ring-4 focus:ring-black">
                  Sign In
                </button>
                <p className="text-sm leading-relaxed text-grey-900">
                  Not registered yet?{" "}
                  <Link
                    to="/Signup"
                    // href="javascript:void(0)"
                    className="font-bold text-grey-700"
                  >
                    <p>Create an Account</p>
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

export default Login;