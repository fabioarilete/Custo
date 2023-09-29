import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Registers from "./components/pages/Registers";
import Reports from "./components/pages/Reports";
import Management from "./components/pages/Managements";
import Settings from "./components/pages/Settings";
import Login from "./components/pages/Login";
import Costs from "./components/pages/Costs";
import MaterialRegister from "./components/pages/MaterialRegister";
import MarkUps from "./components/pages/MarkUps";
import MarkUpRegister from "./components/pages/MarkUpRegister";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import NewCost from "./components/pages/NewCost";
import Materials from "./components/pages/Materials";
import OperationRegister from "./components/pages/OperationRegister";
import Operations from "./components/pages/Operations";
import Units from "./components/pages/Units";
import UnitRegister from "./components/pages/UnitRegister";

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
          <Route path="/operations" element={<OperationRegister />} />
          <Route path="/markUps" element={<MarkUpRegister />} />
          <Route path="/units" element={<UnitRegister />} />
          <Route path="/listMaterials" element={<Materials />} />
          <Route path="/listOperations" element={<Operations />} />
          <Route path="/listMarkUps" element={<MarkUps />} />
          <Route path="/listUnits" element={<Units />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
