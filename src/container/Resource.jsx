import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { confirmBox } from "../constants/Index";
import { allApi } from "../api/Index";
import { Navbar } from "../components/Navbar";
import { ResourceGetApi, Get } from "../constants/Index";
import "../style/Table.css";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Table } from "../components/Table";
import { resourceTableHeading } from "../constants/Index";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Button } from "../button/Index";

const Resource = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    allApi(Get, ResourceGetApi).then((e) => {
      let tables = e.data.data;
      tables?.forEach((val) => {
        val.color = (
          <div style={{ backgroundColor: `${val.color}` }}>{val.color}</div>
        );
        val.action = (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              onclickeventhandler={() => dataViewHandler(val.id)}
              className={"action_handler"}
              buttonText={<AiOutlineEye />}
            />
            <Button
              onclickeventhandler={() => dataDeleteHandler(val.id)}
              className={"action_handler"}
              buttonText={<AiOutlineDelete />}
            />
          </div>
        );
      });
      setTableData(tables);
    });
  }, []);
  const dataViewHandler = (id) => {
    navigate(`/viewresource/${id}`);
  };
  const dataDeleteHandler = (id) => {
    confirmBox(id);
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Table tableData={tableData} heading={resourceTableHeading} />
      <ToastContainer />
    </div>
  );
};

export default Resource;
