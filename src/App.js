import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Registers from "./components/pages/Registers";
import Reports from "./components/pages/Reports";
import Management from "./components/pages/Managements";
import Settings from "./components/pages/Settings";
import Login from "./components/pages/Login";
import Costs from "./components/pages/Costs";
import MaterialRegister from "./components/pages/MaterialRegister";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NewCost from "./components/pages/NewCost";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registers" element={<Registers />} />
          <Route path="/management" element={<Management />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newCost" element={<NewCost />} />
          <Route path="/costs" element={<Costs />} />
          <Route path="/materials" element={<MaterialRegister />} />
          <Route path="/operations" element={<Costs />} />
          <Route path="/markUp" element={<Costs />} />
          <Route path="/unit" element={<Costs />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
