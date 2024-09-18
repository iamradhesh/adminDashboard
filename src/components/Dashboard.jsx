import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import CandidateTable from "./Table";
import Charts from "./Charts";

const Dashboard = () => {
  const [apiData, setApiData] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [data, setData] = useState({
    jobs: 0,
    candidates: [], // Ensure this is an array
    postings: 0,
    aiCredits: 0,
    totalApplicants: 0,
  });

  useEffect(() => {
    // Fetch API data
    axios
      .get("https://api.mockjobs.com/dashboard-data")
      .then((response) => {
        setApiData(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error, maybe set a flag to use table data
      });
  }, []);

  useEffect(() => {
    // Handle fallback to table data if API data is not available
    if (!apiData) {
      // Mocked table data for illustration
      const mockTableData = {
        jobs: 10,
        candidates: [], // Ensure this is an array
        postings: 5,
        aiCredits: 30,
        totalApplicants: 50,
      };
      setTableData(mockTableData);
      setData(mockTableData);
    }
  }, [apiData]);

  return (
    <div className="mt-[5%] overflow-x-hidden">
      {/* Hero container */}
      <Box className="h-[45%] w-full">
        {/* Hero content */}
        <Box
          className="bg-[#e2e9fe] rounded-md drop-shadow-sm overflow-x-hidden"
          sx={{
            width: "100%",
            height: "100%",
            minWidth: "100%",
            position: "relative",
            padding: "8% 8px",
            top: "-30px",
          }}
        >
          <Typography
            variant="h2"
            fontSize={"45px"}
            sx={{ fontFamily: '"Lato", sans-serif', fontWeight: "400" }}
          >
            Welcome back, Lewis
          </Typography>
          <Typography
            variant="body1"
            fontSize={"15px"}
            color="text-secondary"
            sx={{ fontFamily: '"Lato", sans-serif' }}
          >
            Here's what's changed in your talent hunt journey! <br />
            You can evaluate candidates, attract job seekers, and redefine the
            candidate experience.
          </Typography>
        </Box>

        {/* Overlapping Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            marginTop: "40px",
          }}
        >
          {/* Left Column Cards */}
          <Box
            sx={{
              position: "absolute",
              top: "-150px",
              left: "20px",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* First Card */}
            <Card sx={{ width: "350px", background: "#FEFEFE" }} className="jobs">
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* First Icon and Text on the Left */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <WorkOutlineIcon
                      sx={{
                        borderRadius: "50px",
                        background: "#0034BB",
                        color: "#D8DEF3",
                        height: "30px",
                        width: "30px",
                        padding: "2px,4px",
                      }}
                    />
                    <Box>
                      <Typography variant="h4">{data.jobs}</Typography>
                      <Typography variant="body1">Total Jobs</Typography>
                    </Box>
                  </Box>

                  {/* Second Icon and Text on the Right */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <PeopleOutlineIcon
                      sx={{
                        borderRadius: "50px",
                        background: "#C09F80",
                        color: "#fff",
                        height: "30px",
                        width: "30px",
                      }}
                    />
                    <Box>
                      <Typography variant="h4">{data.totalApplicants}</Typography>
                      <Typography variant="body1">Total Applicants</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Second Card */}
            <Card
              sx={{ width: "350px", marginBottom: "20px", background: "#FEFEFE" }}
              className="AIcreditFix"
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* Icon and Text on the Left */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <LocalActivityIcon
                      sx={{
                        background: "#6578FC",
                        color: "#EFF1FE",
                        height: "30px",
                        width: "30px",
                        borderRadius: "50px",
                      }}
                    />
                    <Box>
                      <Typography variant="h4">{data.aiCredits}</Typography>
                      <Typography variant="body1">AI Credits</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Right Column Card */}
          <Box
            sx={{
              position: "absolute",
              top: "-150px",
              left: "500px",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Card sx={{ width: "350px" }} className="totalCandidateChart">
              <CardContent
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <DataSaverOffIcon
                  sx={{
                    height: "200px",
                    width: "150px",
                    color: "#8562D8",
                  }}
                />
                <Box>
                  <Typography variant="body1">Total applicants</Typography>
                  <Typography>Not Reviewed</Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Third Card with Media - untouched */}
          <Card
            sx={{
              maxWidth: 345,
              position: "absolute",
              top: "-150px",
              right: "-1300px",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "270px",
            }}
          >
            <CardMedia
              sx={{ height: 120 }}
              image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Private Job Board
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Your private job board posting will appear here, accessible to the public
                via a company-specific URL.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Table and chart container */}
      <Box className="h-[55%] w-full min-w-9 flex justify-between mt-[14%]">
        <CandidateTable />
        {/* <Charts candidates={data.candidates} /> */}
      </Box>
    </div>
  );
};

export default Dashboard;
