import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { allApi } from '../api/Index';
import "../style/Table.css";

// header
export const header = {
  Accept: "application/json",
  "Content-Type": "application/json"
}

// Api's constants
export const UserGetApi = `https://reqres.in/api/users`;
export const ResourceGetApi = `https://reqres.in/api/{resource}`;
export const ViewResourceGetApi = (id) => { return `https://reqres.in/api/{resource}/${id}` }
export const ViewUserGetApi = (id) => { return `https://reqres.in/api/users/${id}` };
export const LoginApi = `https://reqres.in/api/login`;
export const RegisterApi = `https://reqres.in/api/register`;
export const LogoutApi = `https://reqres.in/api/logout`;
export const ResourceDeleteApi = (id) => { return (`https://reqres.in/api/{resource}/${id}`) }
export const UserDeleteApi = (id) => { return (`https://reqres.in/api/users/${id}`) }

//Api's type
export const Post = "POST";
export const Get = "GET";
export const Delete = "DELETE";
// initial value
export const initialValue = {
  name: "",
  email: "",
  password: "",
  showPassword: false,
  inputCaptcha:""
};
// Input field 
export const UsernameInputField = { type: "text", name: "name", placeholder: "Username" };
export const EmailInputField = { type: "email", name: "email", placeholder: "Email" }
export const PasswordInputField = { type: "text", name: "password", placeholder: "Password" };
export const CaptchaConstants= {type:"text", name:"captcha", placeholder:"captcha"}
// Confirm box
export const confirmBox = (id) => {
  return (confirmAlert({
    title: "Confirm to submit",
    message: "Are you sure to delete this?",
    buttons: [
      {
        label: "Yes",
        onClick: () =>
          allApi(Delete, UserDeleteApi(id)).then((e) => {
            toast.success("Data successfully deleted", { autoClose: 500 });
          }),
      },
      {
        label: "No",
      },
    ],
  }))
}

//Table constants
export const userTableHeading = [{ id: "id", classNameth: "th1", classNametd: "td1" }, { id: "email", classNameth: "th2", classNametd: "td2" }, { id: "first_name", classNameth: "th3", classNametd: "td3" }, { id: "last_name", classNameth: "th4", classNametd: "td4" }, { id: "avatar", classNameth: "th5", classNametd: "th5" }, { id: "action", classNameth: "th6", classNametd: "td6" }];
export const resourceTableHeading = [{ id: "id", classNameth: "th1", classNametd: "td1" }, { id: "name", classNameth: "th2", classNametd: "td2" }, { id: "year", classNameth: "th3", classNametd: "td3" }, { id: "color", classNameth: "th4", classNametd: "td4" }, { id: "pantone_value", classNameth: "th5", classNametd: "th5" }, { id: "action", classNameth: "th6", classNametd: "td6" }];

