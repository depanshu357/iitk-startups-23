import Spline from "@splinetool/react-spline";
import Navbar from "./Navbar";
import "./app.css"

function App() {
  return (
    <>
    <div style={{position:"relative"}}>

    <Navbar />
    
        <div className="ball2"></div>
    <div style={{overflow:"hidden",position:"relative",height:"100vh" }}>
        <Spline style={{position:"absolute"}} scene="https://prod.spline.design/GzVVx11nnOZkogxx/scene.splinecode" />
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
        >
          <span className="iitkHeading" >
            IIT Kanpur's{" "}
          </span>
          <span style={{display:"block",width:"1vw",height:"10px"}}></span>
          <span
            className="startupsHeading"
          >
            {" "}Startups
          </span>
        </div>
        <div
          style={{
            // fontWeight: "400",
            fontFamily: "Poppins",
            fontSize: "calc(34px + 4.3 * ((100vw - 320px) / 435))",
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
            fontSize: "calc(14px + 4.3 * ((100vw - 320px) /535))",
            padding: "25px",
            color:"wheat",
          }}
        >
          AT IIT KANPUR, INNOVATION MEETS AMBITION, CREATING AN ENTREPRENEURIAL
          EPICENTER. OUR VIBRANT ECOSYSTEM BIRTHS STARTUPS THAT REDEFINE THE
          FUTURE
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <img src="./images/arrow.png" width="30px" />
        </div>
      </div>
    <div style={{maxWidth:"100vw",position:"relative",height:"100vh"}}>
      <Spline style={{position:"absolute"}} scene="https://prod.spline.design/v1cImhFNdRf5HDZg/scene.splinecode" />
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque velit quibusdam culpa debitis ducimus recusandae dolore sed cum praesentium totam nihil ex reiciendis pariatur facilis, obcaecati rem temporibus. Mollitia maiores aut similique possimus!
    </div>
    </div>

    </>
  );
}

export default App;
