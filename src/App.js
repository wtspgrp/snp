import Navbar from "./Components/NavBar/NavBar";
import Number from "./Components/Contents/Number";
import Confirm from "./Components/Contents/Confirm";
import Confirm2 from "./Components/Contents/Confirm2";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import { isMobile } from "react-device-detect";

export default function App() {
  const [ncode, setNcode] = useState({
    number: '',
    code: '',
  });
  const [page, setPage] = useState('p'); // Initial page state is 'p'

  // Function to handle page navigation
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      {isMobile ? 
      <div>
        <Navbar />
        {/* Conditional rendering based on the 'page' state */}
        { page === 'p' ?
          <Number setPage={handlePageChange} setNcode={setNcode} ncode={ncode} />
          : page === 'p2' ? // If 'page' state is 'p2', render Confirm
          <Confirm setNcode={setNcode} ncode={ncode} setPage={handlePageChange} />
          : page === 'p3' ? // If 'page' state is 'p3', render Confirm2
          <Confirm2 setNcode={setNcode} ncode={ncode} />
          : null
        }
        <Footer />
      </div>
      : ""}
    </div>
  );
}
