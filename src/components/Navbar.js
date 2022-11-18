import { allApi } from "../api/Index";
import { LogoutApi, Post } from "../constants/Index";
import { useNavigate, NavLink } from "react-router-dom";
import { Button } from "../button/Index";

export const Navbar = () => {
  const navigate = useNavigate();
  const logoutButtonHandler = () => {
    console.log("logout data here")
    allApi(Post, LogoutApi).then((data) => {
      if (data.status === 200) {
        navigate("/");
        localStorage.setItem("token", "")
      }
    })
  };

  return (
    <div id="homecontainer">
      <nav className="navbar">
        <ul className="navbarul">
          <li className="navlist">
            <NavLink to="/users">Users</NavLink>
          </li>
          <li className="navlist">
            <NavLink to="/resource">Resource</NavLink>
          </li>
          <li className="logoutlink">
            <Button id={"logoutbutton"} onclickeventhandler={logoutButtonHandler} buttonText={"Logout"} />
          </li>
        </ul>
      </nav>
    </div>
  )
}

