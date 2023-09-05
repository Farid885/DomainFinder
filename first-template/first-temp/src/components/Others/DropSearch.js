import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/DropSearch.css";
import { NavLink } from "react-router-dom";
// import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputGroupText, Button } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import "react-bootstrap";
import { useState } from "react";

import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

function DropSearch() {
  const [isChecked, setIsChecked] = useState(false);
  const checkBfnc = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div>
        <div className="container col-md-8 ">
          <div className="container  w-75  ">
            <UncontrolledDropdown className="dropper ">
              <DropdownToggle className="drop-sty" caret>
                Resources
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  Only Domain <input type="checkbox" checked={isChecked} onChange={checkBfnc} />{" "}
                </DropdownItem>
                <DropdownItem>
                  Other options <input checked={isChecked} onChange={checkBfnc} type="checkbox" />
                </DropdownItem>
              </DropdownMenu>

              <InputGroup>
                <Input placeholder="Search" />
                <InputGroupText>
                  <Button color=" ">
                    <NavLink to={"/details"}>
                      <FaSearch />
                    </NavLink>
                  </Button>
                </InputGroupText>
              </InputGroup>
            </UncontrolledDropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropSearch;
