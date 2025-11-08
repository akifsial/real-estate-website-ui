import { Routes, Route } from "react-router-dom";
import PmPage from "./pages/pm/pm";
import HostPage from "./pages/host/host"

function App() {
  return (
    <Routes>
      <Route path="/host-website" element={<HostPage />} />
      <Route path="/" element={<PmPage />} />
    </Routes>
  );
}

export default App;
