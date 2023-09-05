import React from "react";
// import {  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Adobe from "../Others/Adobe";
import Images from "../assets/images/Images";
import "../assets/styles/Datas.css";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function Datas() {
  let myData = {
    img: `${Images.LogoA}`,
    url: "https://www.adobe.com",
    title: "Adobe: Creative, marketing and document management ...",
    descript:
      " Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.",
    tags: ["adobe", "design", "creative", "designer", "photoshop", "illustrator"],
  };

  const infoData = [
    {
      title: "Tags",
      colorData:'Colors',
      tags: ["adobe", "design", "creative", "designer", "photos", "illustrator"],
      color:['white,dark,blue'],
    },
  ];

  return (
    <div>
      <div className="container  card    pt-3">
        <div className="row ">
          <div className="col-md-8">
            <Adobe />

            <div className="card p-3 m-1">
              <h3>Domain Register</h3>
              <p style={{ borderBottom: "1px solid black", width: "70px" }}>GoDaddy</p>
            </div>

            <div className="similar  pt-4 pb-3 col-xl-6  ">
              <Card>
                {/* <CardImg style={{width:'120px'}}  src={Images.Adobe  } alt="Card image cap" /> */}
                <CardBody style={{ height: "350px" }}>
                  <div className="card-of d-flex flex-row ">
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
                  <CardTitle> </CardTitle>
                  <CardSubtitle className="datas"> {myData.title}</CardSubtitle>
                  <CardText> {myData.descript} </CardText>
                  <CardText className="d-flex flex-wrap">
                    
                    {myData.tags.map((data, index) => {
                      return (
                        <span className=" data-tage" key={index}>
                        
                          {data}
                        </span>
                      );
                    })}
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="col-md-4 ">
            <div
              className="card  "
              style={{
                padding: "5px 8px",
                height:'175px',
                borderRadius: "3px",

                marginBottom: "15px",
              }}
            >
              {infoData.map((info, index) => (
                <div key={index}>
                  <h4 style={{ textAlign: "center" }} className=" container d-flex  ">
                    {info.title}
                  </h4>
                  <ul
                    style={{
                      padding: 10,
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    {info.tags.map((tag, tagIndex) => (
                      <li
                        className="col-md-3"
                        style={{
                          backgroundColor: "rgba(239, 241, 243, 1)",
                          padding: "8px 15px",
                          borderRadius: "4px",
                          display: "flex",
                        }}
                        key={tagIndex}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div
              className="card"
              style={{
                padding: "5px 8px",
                height:'175px',
                borderRadius: "3px",

                margin: 0,
              }}
            >
              {infoData.map((info, index) => (
                <div key={index}>
                  <h4 style={{ textAlign: "center" }} className=" container d-flex ">
                    {info.title}
                  </h4>
                  <ul
                    style={{
                      padding: "10px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    {info.tags.map((tag, tagIndex) => (
                      <li
                        className="col-md-3"
                        style={{
                          backgroundColor: "rgba(239, 241, 243, 1)",
                          padding: "8px 15px",
                          borderRadius: "4px",
                          display: "flex",
                        }}
                        key={tagIndex}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div
              className="card "
              style={{
                padding: "5px 8px",
                height:'130px',
                borderRadius: "3px",

                marginTop: "15px",
              }}
            >
              {infoData.map((info, index) => (
                <div   key={index}>
                  <h4 style={{ textAlign: "center" }} className="  container d-flex ">
                    {info.colorData}
                  </h4>
                  <ul
                    style={{
                      padding: 10,
                      display: "flex",
                    //   flexWrap: "wrap",
                
                      
                    }}
                  >
                    {infoData.map((tag, tagIndex) => (
                      <li
                        className=" col-md-6 "
                        style={{
                            
                          backgroundColor: "rgba(239, 241, 243, 1)",
                          padding: "8px 15px",
                          gap:'5px',

                          borderRadius: "4px",
                          display: "flex",
                        }}
                        key={tagIndex}
                      >
                        {tag.color}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datas;
