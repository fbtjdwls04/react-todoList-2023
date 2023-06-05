import { AppBar, Toolbar } from "@mui/material";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  NavLink,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import { NoticeSnackBar } from "./components/NoticeSnackBar";
import EditPage from "./pages/EditPage";
function App() {
  const location = useLocation();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className="flex-1"></div>
          <div className="font-bold select-none">MY NOTE</div>
          <div className="flex-1 flex justify-end select-none">
            {location.pathname == "/main" && (
              <NavLink to="/write">글작성</NavLink>
            )}
            {location.pathname != "/main" && <NavLink to="/main">메인</NavLink>}
          </div>
        </Toolbar>
      </AppBar>
      <NoticeSnackBar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="*" element={<Navigate to="/main" />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </>
  );
}

export default App;
