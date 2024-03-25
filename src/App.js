import Spline from "@splinetool/react-spline";
import Navbar from "./Navbar";
import "./app.css"

function App() {
  return (
    <>
    <Navbar />
    
    <div style={{overflow:"hidden" }}>
        <Spline style={{position:"absolute"}} scene="https://prod.spline.design/GzVVx11nnOZkogxx/scene.splinecode" />
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
            IIT Kanpur's {" "}
          </span>
          <span
            className="startupsHeading"
          >
            Startups
          </span>
        </div>
        <div
          style={{
            // fontWeight: "400",
            fontFamily: "Poppins",
            fontSize: "65px",
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
            fontSize: "24px",
            padding: "25px",
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
    <div style={{maxWidth:"100vw"}}>
      <Spline scene="https://prod.spline.design/v1cImhFNdRf5HDZg/scene.splinecode" />
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque velit quibusdam culpa debitis ducimus recusandae dolore sed cum praesentium totam nihil ex reiciendis pariatur facilis, obcaecati rem temporibus. Mollitia maiores aut similique possimus!
    </div>
    </>
  );
}

export default App;
