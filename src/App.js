import { AppBar, Toolbar } from "@mui/material";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  NavLink,
} from "react-router-dom";
import MainPage from "./MainPage";
import Sub1Page from "./Sub1Page";
import Sub2Page from "./Sub2Page";

function App() {
  const location = useLocation();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className="flex-1"></div>
          <div className="font-bold">MY NOTE</div>
          <div className="flex-1 flex justify-end">
            {location.pathname != "/sub1" && (
              <NavLink to="/sub1">서브1</NavLink>
            )}
            {location.pathname == "/sub1" && <NavLink to="/main">메인</NavLink>}
          </div>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/sub1" element={<Sub1Page />} />
        <Route path="/sub2" element={<Sub2Page />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

export default App;
