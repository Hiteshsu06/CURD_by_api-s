import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";
import { allApi } from "../api/Index";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SlReload } from "react-icons/sl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  initialValue,
  LoginApi,
  Post,
  UsernameInputField,
  EmailInputField,
  PasswordInputField,
} from "../constants/Index";
import { Input } from "../components/Input";
import { Button } from "../button/Index";

const Login = () => {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const handleClickShowPassword = () => {
    const input = document.getElementById("passwordinputid");
    input.blur();
    // const cursorbutton = loginInput.password.length;
    // input.setSelectionRange(cursorbutton,cursorbutton);

    setLoginInput({
      ...loginInput,
      showPassword: !loginInput.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [loginInput, setLoginInput] = useState(initialValue);
  const loginChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
    if (
      loginInput.name.length &&
      loginInput.email.length &&
      loginInput.password.length &&
      loginInput.inputCaptcha.length >= 3
    ) {
      setDisableButton(false);
    }
    if (
      loginInput.name.length &&
      loginInput.email.length &&
      loginInput.password.length &&
      loginInput.inputCaptcha.length <= 1
    ) {
      setDisableButton(true);
    }
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    allApi(Post, LoginApi, loginInput)
      .then((data) => {
        localStorage.setItem("token", data.data.token);
        if (
          data.status === 200 &&
          data.data.token &&
          captcha === loginInput.inputCaptcha
        ) {
          navigate("/home");
        }
        if( captcha !== loginInput.inputCaptcha){toast.warning("Captcha not matching")}
      })
      .catch((error) => toast.error(error.response.data.error.toUpperCase()));
  };
  const reloadButton = () => {
    setLoginInput({ ...loginInput, inputCaptcha: "" });
    return randomString(6);
  };

  function randomString(len) {
    var str = "";
    for (var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * 62);
      var charCode = (rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48); // Get correct charCode
      str += String.fromCharCode(charCode);
    }
    return setCaptcha(str);
  }
  useEffect(() => {
    randomString(6);
  }, []);

  return (
    <div id="loginoutercontainer">
      <div id="logincontainer">
        <form onSubmit={loginSubmitHandler}>
          <div>
            <h2>Login</h2>
          </div>
          <br />
          <div className="mb-3">
            <Input
              text={UsernameInputField}
              value={loginInput.name}
              onChange={loginChangeHandler}
            />
          </div>
          <div className="mb-3">
            <Input
              text={EmailInputField}
              value={loginInput.email}
              onChange={loginChangeHandler}
            />
          </div>
          <div className="mb-3">
            <Input
              style={{
                backgroundColor: "white",
                width: "275px",
                height: "40px",
              }}
              id={"passwordinputid"}
              text={PasswordInputField}
              type={loginInput.showPassword ? "text" : "password"}
              value={loginInput.password}
              onChange={loginChangeHandler}
              name="password"
            />
            <div className="fieldpassword">
              <IconButton
                id={"eyeslashid"}
                className="fieldpassword"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {loginInput.showPassword ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityIcon />
                )}
              </IconButton>
            </div>
          </div>
          <div className="captchadiv">
            <div className="captchaBox">
              <span className="captcha" id="captchaspan">
                <strike>{captcha}</strike>
              </span>
              <span>
                <Button
                  type={"button"}
                  className={"resetButton"}
                  onclickeventhandler={reloadButton}
                  buttonText={<SlReload />}
                />
              </span>
            </div>
            <input
              id={"passwordinputid"}
              type="text"
              placeholder="Captcha"
              className="captchaTextBox"
              name="inputCaptcha"
              value={loginInput.inputCaptcha}
              onChange={loginChangeHandler}
            />
          </div>
          <Button
            className={"btn btn-primary"}
            buttonText={"Login"}
            disable={disableButton}
          />
        </form>
        <Link className="signUpButton" to="/register">
          Register here
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
