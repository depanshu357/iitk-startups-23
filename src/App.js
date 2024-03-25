import Spline from "@splinetool/react-spline";
import Navbar from "./Navbar";
import "./app.css";
import Grid from "./Grid";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(data.slice(0, 50));
  return (
    <>
      <div style={{ position: "relative",overflow:"hidden" }}>
        <Navbar />
        <Grid />
        <div className="ball2"></div>
        <div
          style={{ overflow: "hidden", position: "relative", height: "100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center" }}
        >
          <Spline
            style={{ position: "absolute" }}
            scene="https://prod.spline.design/GzVVx11nnOZkogxx/scene.splinecode"
          />
          <div className="ball1"></div>
          <div
            style={{
              width: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "110px",
              gap: "10px",
              position: "relative",
              // overflowY: "hidden",
              // height: "100vh",
            }}
            className="iitkStartupsHeading"
          >
            <span className="iitkHeading">IIT Kanpur's </span>
            <span
              
              className="iitkHeadingGap"
            ></span>
            <span className="startupsHeading"> Startups</span>
          </div>
          <div
            style={{
              // fontWeight: "400",
              fontFamily: "Poppins",
              fontSize: "calc(29px + 5 * ((100vw - 320px) / 535))",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
              }}
            >
              {" "}
              GENESIS{" "}
            </span>
          </div>
          <div
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: "calc(10px + 4.3 * ((100vw - 320px) /535))",
              padding: "25px",
              color: "wheat",
            }}
          >
            AT IIT KANPUR, INNOVATION MEETS AMBITION, CREATING AN
            ENTREPRENEURIAL EPICENTER. OUR VIBRANT ECOSYSTEM BIRTHS STARTUPS
            THAT REDEFINE THE FUTURE
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
              // height: "100px",
              // width: "100vw",
            }}
          >
            <img
              style={{ filter: "invert(100%)", cursor: "pointer" }}
              src="./iitk-startups-23/images/arrow.png"
              alt=""
              srcset=""
              width="30px"
              // height="30px"
            />
          </div>
        </div>
        <div
          style={{ maxWidth: "100vw", position: "relative", height: "100vh" }}
        >
          <div className="datacircle datacircle1">
            <div></div>
            <div></div>
            <div className="text-in-data-circle">1300+ Startups</div>
          </div>
          <div className="datacircle datacircle2">
            <div></div>
            <div></div>
            <div className="text-in-data-circle">1300+ Startups</div>
          </div>
          <div className="datacircle datacircle3">
            <div></div>
            <div></div>
            <div className="text-in-data-circle">1300+ Startups</div>
          </div>
          
          <Spline 
            style={{ position: "absolute" }}
            scene="https://prod.spline.design/v1cImhFNdRf5HDZg/scene.splinecode"
          />
        </div>
        <div className="before-startups-data">
          STARTUPS FLOURISH THROUGH THE IIT KANPUR ECOSYSTEM
        </div>
        <div
            style={{
              // margin: "20px",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {result.map((item, index) => {
              return (
                <a
                  key={index}
                  style={{
                    width: "100%",
                    maxWidth: "220px",

                    borderRadius: "10px",
                    backgroundColor: "white",
                    margin: "10px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    color: "black",
                    boxShadow:
                      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                      zIndex:"4"
                  }}
                  href={item.Website_Link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={{ width: "200px", height: "200px" }}>
                    <img
                      src={item.Image_Link}
                      alt=""
                      srcset=""
                      // height="200px"
                      width="200px"
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <div style={{ textAlign: "justify" }}>
                    <div style={{ fontWeight: "500", fontSize: "24px" }}>
                      {item.Name}
                    </div>
                    <div style={{ fontWeight: "400", fontSize: "15px" }}>
                      {item.Short_Description}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
      </div>
    </>
  );
}

export default App;
