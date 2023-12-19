import { useEffect, useState } from "react";
import { instance } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  //
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //
  useEffect(() => {
    async function fetchLogInStatus() {
      try {
        const jwt = JSON.parse(localStorage.getItem("jwt")) || undefined;
        const res = await instance.get("/auth/is-user-logged-in", {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        if (res.status === 200) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    }
    fetchLogInStatus();
  }, []);

  function handleLogout() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    toast.success("Logged Out");
  }

  return (
    <header className=" bg-neutral py-2 text-neutral-content ">
      <div className="align-element flex justify-center sm:justify-end ">
        {isLoggedIn ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">
              You can upload and sell products now.
            </p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <p className="text-xs sm:text-sm">
              Please log in to start uploading and selling products.
            </p>
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Log in
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
