import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 , overflow:"hidden"}}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add more routes here as needed */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
