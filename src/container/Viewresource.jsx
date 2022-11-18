import React, { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { ViewResourceGetApi, Get } from "../constants/Index";
import { allApi } from "../api/Index";
import "../style/Viewusers.css";
import { Button } from "../button/Index";

const Viewresource = () => {
  const navigate = useNavigate();
  const [viewResource, setViewResource] = useState({});

  const { id } = useParams();
  useEffect(() => {
    allApi(Get, ViewResourceGetApi(id)).then((e) => {
      setViewResource(e.data.data);
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
          onclickeventhandler={navigate("/resource")}
          id={"backbutton"}
          buttonText={<MdOutlineArrowBack />}
        />
        <div id="viewresourcesid">
          <div>
            <label className="viewresourcesLabel">
              <b>Identity Number:</b>
            </label>
          </div>
          <div id="viewresourcesid_data">{viewResource.id}</div>
        </div>
        <div id="viewresourcescolor">
          <div>
            <label className="viewresourcesLabel">
              <b>Color</b>
            </label>
          </div>
          <div
            id="viewresourcecolor"
            style={{ backgroundColor: `${viewResource.color}`, width: "200px" }}
          >
            {viewResource.color}
          </div>
        </div>
        <div id="viewresourcesname">
          <div>
            <label className="viewResourcesLabel">
              <b>Name:</b>
            </label>
          </div>
          <div id="viewresourcesname">{viewResource.name}</div>
        </div>
        <div id="viewresourcesvalue">
          <div>
            <label className="viewresourcesLabel">
              <b>Pantone_value</b>
            </label>
          </div>
          <div id="viewresourcevalue">{viewResource.pantone_value}</div>
        </div>
        <div id="viewresourceyear">
          <div>
            <label className="viewresourcesyear">
              <b>Year</b>
            </label>
          </div>
          <div id="viewresourceyear">{viewResource.year}</div>
        </div>
      </div>
    </div>
  );
};

export default Viewresource;
