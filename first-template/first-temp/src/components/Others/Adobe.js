import React from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Images from "../assets/images/Images";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Adobe.css";

function Adobe() {
  const navigate = useNavigate();

  const data = {
    title: "Adobe: Creative, marketing and document management ...",
    descrip:
      " Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.",
    tags: ["adobe", "design", "creative", "designer", "photoshop", "illustrator"],
  };

  const { params } = useParams();
  return (
    <div>
      <div className="search-result-card similar-content-design  search-result mb-5">
        <div className="card-of d-flex flex-row w-100">
          <div className=" ">
            <div className="">
              <img src={Images.Adobe} alt="logo" />
              {/* <h6>Adobe</h6> */}
            </div>
            <p className="link-adobe">https://www.adobe.com</p>
          </div>
          <div className="ador-d ">
            <img className="im-class" src={Images.LogoA} alt="" />
            <div className="local-rating">
              <h1 className="h-1">3.5</h1>
              <p className="locale">Local rating</p>
            </div>
            <div className="">
              <h1 className="h-15">5.0</h1>
              <p className="globale">Global rating</p>
            </div>
          </div>
        </div>

        <div className="  container ">
          <h1>
          
          <span className="title-style" onClick={() => navigate("/Datas")}>
              {data.title}
            </span>
           
          </h1>
          <p>
            <span className="descrip" onClick={() => navigate("/Datas")}>
              Adobe
            </span>
            {data.descrip}
          </p>
          <div className="detail-result-tags d-flex  justify-content-start gap-5">
            {data.tags.map((tag, index) => {
              return (
                <span className="tag-tem" key={params}>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adobe;
