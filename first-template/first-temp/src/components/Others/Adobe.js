import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Images from "../assets/images/Images";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Adobe.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";

function Adobe() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myProducts = useSelector((state) => state.myProducts);

  // const data = {
  //   title: "Adobe: Creative, marketing and document management ...",
  //   descrip:
  //     " Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.",
  //   tags: ["adobe", "design", "creative", "designer", "photoshop", "illustrator"],
  // };

  const tags = ["adobe", "design", "creative", "designer", "photoshop", "illustrator"];

  // const { params } = useParams();
  return (
    <div>
      {myProducts.map((product, index) => {
        const { id, url, title, description } = product;
        return (
          <div key={id} className="search-result-card similar-content-design  search-result mb-5">
            <div className="card-of d-flex flex-row w-100">
              <div className=" ">
                <div className="">
                  <img src={Images.Adobe} alt="logo" />
                  {/* <h6>Adobe</h6> */}
                </div>
                <p className="link-adobe">{url}</p>
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
                  {title}
                </span>
              </h1>
              <p>
                <span className="descrip" onClick={() => navigate("/Datas")}>
                  {description}
                </span>
              </p>
              <div className="detail-result-tags d-flex  justify-content-start gap-5">
                {tags.map((tag, index) => {
                  return (
                    <span className="tag-tem" key={index}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Adobe;
