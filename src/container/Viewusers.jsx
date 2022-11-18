import React, { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { allApi } from "../api/Index";
import { ViewUserGetApi } from "../constants/Index";
import "../style/Viewusers.css";
import { Get } from "../constants/Index";
import { Button } from "../button/Index";

const Viewusers = () => {
  const navigate = useNavigate();
  const [viewUser, setViewUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    allApi(Get, ViewUserGetApi(id)).then((e) => {
      setViewUser(e.data.data);
    });
  }, []);
  return (
    <div id="view">
      <div id="viewcontainer">
        <div id="taskHeader">
          <h3>Data Details</h3>
        </div>
        <Button
          className={"backbutton"}
          onclickeventhandler={navigate}
          id={"backbutton"}
          data={"/users"}
          buttonText={<MdOutlineArrowBack />}
        />
        <div id="viewusersid">
          <div>
            <label className="viewusersLabel">
              <b>Identity Number:</b>
            </label>
          </div>
          <div id="viewusersid_data">{viewUser.id}</div>
        </div>
        <div id="viewusersemail">
          <div>
            <label className="viewusersLabel">
              <b>Email:</b>
            </label>
          </div>
          <div id="iewusersemail_data">{viewUser.email}</div>
        </div>
        <div id="viewusersfirstname">
          <div>
            <label className="viewusersLabel">
              <b>First Name:</b>
            </label>
          </div>
          <div id="viewusersfirstname_data">{viewUser.first_name}</div>
        </div>
        <div id="viewuserslastname">
          <div>
            <label className="viewusersLabel">
              <b>Last Name:</b>
            </label>
          </div>
          <div id="iewuserslastname_data">{viewUser.last_name}</div>
        </div>
        <div id="viewusrsavatar">
          <div>
            <label className="viewusersLabel">
              <b>Avatar:</b>
            </label>
          </div>
          <div id="viewusrsavatar_data">
            <img src={viewUser.avatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewusers;
