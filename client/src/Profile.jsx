import { useNavigate } from "react-router-dom";
// import Header from "./components/header"

export default function Profile() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        navigate("/Login");
    };

    return (
        <>
            {/* <Header /> */}
            <div className="mt-20 text-center profile-container">
                <h1>Profile</h1>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                    Logout
                </button>
            </div>
        </>
    );
}