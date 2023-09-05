import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropSearch from "../Others/DropSearch";
import Form from "../Others/Form";
import Adobe from "../Others/Adobe";



function Details() {
  return (
    <div style={{ paddingTop: "0px" }}>
      <DropSearch />
      <div className="container "  style={{paddingTop:'50px'}}>
        <div className="row">
          <div className="col-md-3">
            <Form />
            <Form />
            <Form />
            <Form />
            <Form />
          </div>
          <div className="col-md-9 ">
            <Adobe/>
            <Adobe/>
            <Adobe/>
            <Adobe/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
