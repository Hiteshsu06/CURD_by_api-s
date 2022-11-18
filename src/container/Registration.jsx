import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initialValue, Post } from "../constants/Index";
import { allApi } from "../api/Index";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SlReload } from "react-icons/sl";
import {
  RegisterApi,
  UsernameInputField,
  EmailInputField,
  PasswordInputField,
} from "../constants/Index";
import { Input } from "../components/Input";
import { Button } from "../button/Index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState("");
  const handleClickShowPassword = () => {
    const input = document.getElementById('passwordinputid');
  input.blur();
    setRegisterInput({
      ...registerInput,
      showPassword: !registerInput.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [disableButton, setDisableButton] = useState(true);
  const [registerInput, setRegisterInput] = useState(initialValue);
  const registerChangeHandler = (e) => {
    const { name, value } = e.target;
    setRegisterInput({ ...registerInput, [name]: value });
    if (
      registerInput.name.length &&
      registerInput.email.length &&
      registerInput.password.length &&
      registerInput.inputCaptcha.length >= 3
    ) {
      setDisableButton(false);
    }
    if (
      registerInput.name.length &&
      registerInput.email.length &&
      registerInput.password.length &&
      registerInput.inputCaptcha.length <= 1
    ) {
      setDisableButton(true);
    }
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    allApi(Post, RegisterApi, registerInput).then((data) => {
      if (data.status === 200 && captcha === registerInput.inputCaptcha) {
        navigate("/");
      }
      if( captcha !== registerInput.inputCaptcha){toast.warning("Captcha not matching")}
    });
  };
  const reloadButton = () => {
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
        <form onSubmit={registerSubmitHandler}>
          <div>
            <h2>Registration</h2>
          </div>
          <br />
          <div className="mb-3">
            <Input
              text={UsernameInputField}
              value={registerInput.name}
              onChange={registerChangeHandler}
            />
          </div>
          <div className="mb-3">
            <Input
              text={EmailInputField}
              value={registerInput.email}
              onChange={registerChangeHandler}
            />
          </div>
          <div className="mb-3">
            {/* <Input
              text={PasswordInputField}
              value={registerInput.password}
              onChange={registerChangeHandler}
            /> */}
            <Input
              style={{
                backgroundColor: "white",
                width: "275px",
                height: "40px",
              }}
              id={"passwordinputid"}
              text={PasswordInputField}
              type={registerInput.showPassword ? "text" : "password"}
              value={registerInput.password}
              onChange={registerChangeHandler}
              name="password"
            />
            <div className="fieldpassword">
              <IconButton
                className="fieldpassword"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {registerInput.showPassword ? (
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
              type="text"
              placeholder="Captcha"
              className="captchaTextBox"
              name="inputCaptcha"
              value={registerInput.inputCaptcha}
              onChange={registerChangeHandler}
            />
          </div>
          <Button
            buttonText={"Register"}
            className={"btn btn-primary"}
            id={"registerbutton"}
            disable={disableButton}
          />
        </form>
        <div>
          <Button
            buttonText={"Cancel"}
            className={"btn btn-primary"}
            id={"cancelbutton"}
            onclickeventhandler={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
