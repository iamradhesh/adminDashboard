import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import DashboardCharts from "./Charts";

const CandidateTable = () => {
  const candidates = [
    { name: "Alice Johnson", job: "Developer", rating: 8.2, applied: "July 12, 2024" },
    { name: "Bob Smith", job: "Designer", rating: 6.5, applied: "August 22, 2024" },
    { name: "Charlie Brown", job: "Analyst", rating: 7.9, applied: "June 30, 2024" },
    { name: "Dana White", job: "Manager", rating: 9.1, applied: "May 15, 2024" },
    { name: "Eva Green", job: "Tester", rating: 7.4, applied: "September 5, 2024" },
    { name: "Frank Black", job: "Developer", rating: 8.6, applied: "March 18, 2024" },
    { name: "Grace Lee", job: "Designer", rating: 6.9, applied: "April 25, 2024" },
    { name: "Hank Miller", job: "Manager", rating: 8.0, applied: "February 10, 2024" },
    { name: "Ivy Lewis", job: "Analyst", rating: 7.3, applied: "January 30, 2024" },
    { name: "Jack Wilson", job: "Tester", rating: 7.7, applied: "December 20, 2023" },
    { name: "Kim Patel", job: "Developer", rating: 8.1, applied: "October 10, 2024" },
    { name: "Liam Scott", job: "Designer", rating: 6.7, applied: "November 5, 2024" },
    { name: "Mia Davis", job: "Manager", rating: 8.3, applied: "September 15, 2024" },
    { name: "Nina Harris", job: "Analyst", rating: 7.8, applied: "July 1, 2024" },
    { name: "Oscar Thompson", job: "Tester", rating: 7.6, applied: "June 10, 2024" },
    { name: "Paul Martinez", job: "Developer", rating: 8.5, applied: "April 7, 2024" },
    { name: "Quinn Roberts", job: "Designer", rating: 7.0, applied: "May 22, 2024" }
  ];

  return (
    <>
      <Paper elevation={10} sx={{ width: "50%", pl: "5px" }}>
        <TableContainer component={Paper} sx={{ paddingLeft: "5px" }}>
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Latest Candidates
          </Typography>
          <Table>
            <TableHead>
              <TableRow sx={{background:"#F2F2F2"}}>
                <TableCell>Candidate Name</TableCell>
                <TableCell>Job Name</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Applied Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.job}</TableCell>
                  <TableCell>{row.rating}</TableCell>
                  <TableCell>{row.applied}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <DashboardCharts candidates={candidates} />
    </>
  );
};

export default CandidateTable;
