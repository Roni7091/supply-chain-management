import "./App.css";

// import Footer from "./Components/Pages/Footer";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Link1 from "./Components/Pages/CardComponents/Link1";

import UserReporting from "./Components/Pages/UserReporting/UserReporting";
import Last from "./Components/Pages/DisplaytoWOrder/Last";

import ComponentAsmt from "./Components/Pages/ComponentAssignment/ComponentAsmt";
import Work from "./Components/Pages/DisplaytoWOrder/Work";
import Task3 from "./Components/Pages/CreateTrOrder/Task3";
import RscWorkFlow from "./Components/Pages/RscWorkFlow/RscWorkFlow";
import WOExecution from "./Components/Pages/WorkOrderEx.js/WOExecution";
import Home2 from "./Components/Pages/Home22/Home2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logo" element={<Home />} />
          <Route path="/link1" element={<Link1 />} />
          <Route path="/rsc" element={<RscWorkFlow />} />
          <Route path="/userrptg" element={<UserReporting />} />
          <Route path="/dworder" element={<Last />} />
          <Route path="/task2" element={<Task3 />} />
          <Route path="/compoasmt" element={<ComponentAsmt />} />
          <Route path="/huticket" element={<Work />} />
          <Route path="/woe" element={<WOExecution />} />
          <Route path="/home2" element={<Home2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// <Route path="/rsc" element={<RscWorkFlow />} />

// <Router>
// <div>
//   <Link to="/">Home</Link>
//   <Link to="/menu">Menu</Link>
//   <Link to="/contact">Contact</Link>
// </div>
// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/menu" element={<Menu />} />
//   <Route path="/contact" element={<Contact />} />
//   <Route path="/help" element={<Help />} />
//   <Route path="*" element={<h1>Page is note found</h1>}></Route>
// </Routes>
// </Router>

// <Navbar />
// <Home />
// <Footer />
