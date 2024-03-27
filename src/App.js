import Spline from "@splinetool/react-spline";
import Navbar from "./Navbar";
import "./app.css";
import Grid from "./Grid";
import data from "./data.json";
import ParticlesComponent from "./ParticlesComponent";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const unicorn_status = [ "Any","Unicorn", "Soonicorn", "Minicorn"];
const locations = ["Any","Noida", "Gurgaon", "Bengaluru", "Mumbai", "Palo Alto", "San Jose", "San Francisco",
"Santa Clara", "San Mateo", "Thiruvananthapuram", "Gurugram", "Redwood City", "Pune",
"Hyderabad", "Chennai", "Goleta", "Sunnyvale", "Claymont", "Delhi", "Thane", "Cambridge",
"Kolkata", "Menlo Park", "Mountain View", "Bothell", "Singapore", "Ahmedabad", "Milpitas",
"Bhopal", "Panaji", "Los Altos", "Boston", "Seattle", "Boulder", "Westlake Village",
"New Castle", "Brossard", "Austin", "Cumming", "Kanpur", "Beaverton", "Plano", "Songpa-gu",
"Ahmedabad", "Aliso Viejo", "Wilmington", "Newark", "Songpa-gu", "West Lafayette", "Walnut",
"Redmond", "Reston", "Sunnyvale", "Toronto", "Madrid", "Riga", "St Lucia", "Princeton",
"Karnal", "Sahibzada Ajit Singh Nagar", "Lucknow", "Chicago", "Indore", "Westerville", "Udaipur",
"Ann Arbor"]

const companyStages = [
  "Any",
  "Seed",
  "Series A",
  "Series B",
  "Series C",
  "Series D",
  "Series E",
  "Series F",
  "Series H",
  "Public",
  "Acquired",
  "Acqui-Hired",
  "Unfunded",
  "Deadpooled",
  "Late Stage",
  "Funding Raised"
];

function App() {
  const [result, setResult] = useState(data.slice(0, 50));
  const [unicornStatus, setUnicornStatus] = useState("");
  const [location,setLocation] = useState("");
  const [companyStage,setCompanyStage] = useState("");

  const handleData = () => { 

    setResult(data.filter((item) => 
      ((unicornStatus === "Any" || unicornStatus === "") ? 1 : item.Unicorn_Status.toLowerCase() === item.Unicorn_Status.toLowerCase())  &&
      ((location === "Any" || location === "") ? 1 : item.Location.toLowerCase() === location.toLowerCase()) &&
      ((companyStage === "Any" || companyStage === "") ? 1 : item.Company_Stage.toLowerCase() === companyStage.toLowerCase())
    ))

    // if ((unicornStatus === "Any" || unicornStatus==="") && (location === "Any" || location=== "") && (companyStage==="Any" || companyStage==="")) {
    //   setResult(data.slice(0, 50));
    // }else if(unicornStatus === "Any" || unicornStatus===""){
    //   setResult(data.filter((item) => item.Unicorn_Status.toLowerCase() === unicornStatus.toLowerCase()));
    // }else if(location === "Any" || location===""){
    //   setResult(data.filter((item) => item.Location.toLowerCase() === location.toLowerCase()))
    // }
    //  else {
    //   console.log(unicornStatus);
    //   setResult(data.filter((item) => item.Unicorn_Status.toLowerCase() === unicornStatus.toLowerCase() && item.Location.toLowerCase() === location.toLowerCase()));
    // }
  }
  useEffect(() => {
    handleData();
  }, [unicornStatus,location,companyStage]);
  const handleChangeUnicornStatus = (event) => {
    setUnicornStatus(event.target.value);
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  }
  const handleChangeCompanyStage = (event) => {
    setCompanyStage(event.target.value);
  }

  return (
    <>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Navbar />
        <Grid />
        <ParticlesComponent />
        <div className="ball2"></div>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
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
            <span className="iitkHeadingGap"></span>
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
        <div className="filter-box">
          <Paper
            elevation={3}
            style={{
              padding: "10px",
              borderRadius: "10px",
              maxWidth: "1200px",
              margin: "auto",
              backgroundColor:"whitesmoke"
            }}
          >
            <FormControl size="100">
              <InputLabel id="demo-simple-select-label">
                Unicorn Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={unicornStatus}
                label="Unicorn Status"
                onChange={handleChangeUnicornStatus}
                style={{width:"200px"}}
                // autoWidth
              >
                {unicorn_status.map((item, index) => {
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <FormControl size="100">
              <InputLabel id="demo-simple-select-label">
                Location
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={location}
                label="Location"
                onChange={handleChangeLocation}
                style={{width:"200px"}}
                // autoWidth
              >
                {locations.map((item, index) => {
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <FormControl size="100">
              <InputLabel id="demo-simple-select-label">
                Company Stage
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={companyStage}
                label="Location"
                onChange={handleChangeCompanyStage}
                style={{width:"200px"}}
                // autoWidth
              >
                {companyStages.map((item, index) => {
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Paper>
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
                  zIndex: "4",
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
