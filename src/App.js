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
          <NavLink
            to="/main"
            className="font-bold select-none flex self-stretch items-center mx-auto"
          >
            MY NOTE
          </NavLink>
          {location.pathname == "/main" && (
            <NavLink to="/write" className="flex self-stretch items-center">
              글작성
            </NavLink>
          )}
          {location.pathname != "/main" && (
            <NavLink to="/main" className="flex self-stretch items-center">
              리스트
            </NavLink>
          )}
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
