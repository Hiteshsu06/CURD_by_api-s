import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { confirmBox } from "../constants/Index";
import { Navbar } from "../components/Navbar";
import { Table } from "../components/Table";
import { UserGetApi, Get } from "../constants/Index";
import { allApi } from "../api/Index";
import "../style/Table.css";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { userTableHeading } from "../constants/Index";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Button } from "../button/Index";

const Users = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    allApi(Get, UserGetApi).then((e) => {
      console.log("getData in user:",e.data.data)
      let tables = e.data.data;
      tables?.forEach(val => {
        console.log("value here",val);
        val.avatar = <div><img src={val.avatar} alt="" /></div>
        val.action = <div style={{display: "flex", justifyContent: "center"}}>
          <Button            
            onclickeventhandler={()=>dataViewHandler(val.id)}
            className={"action_handler"}
            buttonText={<AiOutlineEye />}
          />
          <Button
            onclickeventhandler={()=>dataDeleteHandler(val.id)}
            className={"action_handler"}
            buttonText={<AiOutlineDelete />}
          />
        </div>
      });
      setTableData(tables);
    });
  }, []);
  const dataViewHandler = (id) => {
    navigate(`/viewusers/${id}`);
  };
  const dataDeleteHandler = (id) => {
    confirmBox(id);
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Table
        tableData={tableData}
        heading={userTableHeading}
      />
      <ToastContainer />
    </div>
  );
};

export default Users;
