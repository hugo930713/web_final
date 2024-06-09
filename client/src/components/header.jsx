import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchOutlinedIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchOutlinedIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    borderRadius: "20px",
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 從 localStorage 獲取登入狀態
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  return (
    <nav id="header" className="relative top-0 z-50 w-11/12">
      <div className="fixed top-0 flex items-center justify-center w-screen px-5 py-3 bg-white shadow md:justify-between md:px-10 lg:px-20 xl:px-40 sm:px-0 shadow-gray-50">
        <label htmlFor="menu-toggle" className="block cursor-pointer md:hidden">
          <svg
            className="text-gray-900 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>

        <div className="order-1 px-6">
          <Link
            to="/"
            className="flex text-2xl font-bold tracking-wide text-gray-800 no-underline hover:no-underline "
          >
            <svg
              className="mr-2 text-gray-800 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 2 24 24"
            >
              <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
            </svg>
            NORDICS
          </Link>
        </div>

        <div
          className="order-3 hidden w-full md:flex md:items-center md:w-auto md:order-1"
          id="menu"
        >
          <nav>
            <ul className="items-center justify-between pt-4 text-gray-700 xl:text-lg md:flex md:pt-0">
              <li>
                <a
                  className="inline-block px-2 py-2 xl:px-4 hover:text-black"
                  href="#"
                >
                  關於我們
                </a>
              </li>
              <li>
                <Link
                  to="/Shop"
                  className="inline-block px-2 py-2 xl:px-4 hover:text-black"
                >
                  所有商品
                </Link>
              </li>
              <li>
                <Link
                  to="/Shop"
                  className="inline-block px-2 py-2 xl:px-4 hover:text-black"
                >
                  問與答
                </Link>
              </li>
              <li>
                <Link
                  to="/Shop"
                  className="inline-block px-2 py-2 xl:px-4 hover:text-black"
                >
                  聯絡我們
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div className="flex items-center order-2 md:order-3" id="nav-content">

          <Search>
            <SearchOutlinedIconWrapper>
              <SearchOutlinedIcon sx={{ fontSize: 32 }} />
            </SearchOutlinedIconWrapper>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Link
            to="/Favorites"
            className="inline-block pl-2 no-underline hover:text-black"
          >
            <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
          </Link>

          <Link
            to="/Cart"
            className="inline-block pl-2 no-underline hover:text-black"
          >
            <StyledBadge badgeContent={0} color="secondary">
              <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
            </StyledBadge>
          </Link>

          {isLoggedIn ? (
            <Link
              to="/Profile"
              className="inline-block pl-2 no-underline hover:text-black"
            >
              <Person2OutlinedIcon sx={{ fontSize: 36 }} />
            </Link>
          ) : (
            <Link
              to="/Login"
              className="inline-block pl-2 no-underline hover:text-black"
            >
              <Person2OutlinedIcon sx={{ fontSize: 36 }} />
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Header;