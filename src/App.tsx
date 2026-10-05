import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { Home } from "./pages/Home";
import { Footer } from "./Components/Footer";
import {
  projectIcon,
  projectName,
  projectDescription,
  websiteAuthor,
} from "./data";
import styles from "./_layout.module.scss";

const PageLayout = () => {
  return (
    <main className={styles.pageLayout}>
      <Outlet />
      <Footer websiteAuthor={websiteAuthor} />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={
            <Home
              projectIcon={projectIcon}
              projectName={projectName}
              projectDesc={projectDescription}
            />
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
