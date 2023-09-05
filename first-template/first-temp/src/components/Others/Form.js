import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Form.css";
import { InputGroup } from "reactstrap";
import { FaSearch } from "react-icons/fa";

function Form() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h4 className="filterer">Filters</h4>
      <div className="d-flex flex-column">
        <FontAwesomeIcon
          onClick={toggleOpen}
          className={` ${isOpen ? "rotate-down" : "rotate-up"}`}
          icon={faChevronUp}
        />
        <p>Country</p>
      </div>
      <InputGroup className="company-input-group mt-3">
        <FaSearch className="fa-icons" />
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback" />

          <input type="text" className="form-control" placeholder="Search sector" />
        </div>
      </InputGroup>
      {isOpen && (
        <form className="checkbox-wrapper mt-3 d-flex flex-column">
          <label>
            <input type="checkbox" className="incolr" />
            WorldWide
          </label>
          <label>
            <input className="incolr" type="checkbox" checked />
            United State
          </label>
          <label>
            <input className="incolr" type="checkbox" />
            Azerbaijan
          </label>
          <label>
            <input className="incolr" type="checkbox" />
            Russia
          </label>
          <label>
            <input className="incolr" type="checkbox" />
            Turkey
          </label>
        </form>
      )}
    </div>
  );
}

export default Form;
