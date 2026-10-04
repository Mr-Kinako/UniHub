import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./Home/Home";
import {
  projectIcon,
  projectName,
  projectDescription,
} from "./data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home
            projectIcon={projectIcon}
            projectName={projectName}
            projectDesc={projectDescription}
          />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
