import React from "react";
import { faTwitter, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { useState } from "react";
function Footer() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN"); // Default language

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <div>
      <footer
        style={{ borderTop: "1px solid grey" }}
        className=" mt-5 mb-5 d-flex flex-column d-sm-flex flex-sm-row justify-content-around align-items-center  "
      >
        <div className="">
          <FontAwesomeIcon className=" twitter" icon={faTwitter} />
          <FontAwesomeIcon className=" facebook" style={{ margin: "0  15px", color: "blue" }} icon={faFacebookF} />
          <FontAwesomeIcon className=" linkedin" style={{ color: "blue" }} icon={faLinkedinIn} />
        </div>
        <div className="">
          <nav>
            <ul className="d-flex " style={{ gap: "60px", paddingTop: "30px" }}>
              <li>
                <p style={{ paddingTop: "10px" }}>Terms of Service</p>
              </li>
              <li>
                <p style={{ paddingTop: "10px" }}>Privacy Policy</p>
              </li>
              <li>
                <p style={{ paddingTop: "10px" }}>Trust & Safety</p>
              </li>
            </ul>
          </nav>
        </div>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle style={{ backgroundColor: "white", color: "black" }} caret>
            {selectedLanguage}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => changeLanguage("AZ")}>AZ</DropdownItem>
            <DropdownItem onClick={() => changeLanguage("EN")}>EN</DropdownItem>
            <DropdownItem onClick={() => changeLanguage("RU")}>RU</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </footer>
    </div>
  );
}

export default Footer;
