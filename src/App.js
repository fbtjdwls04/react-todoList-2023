import { AppBar, Toolbar } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
function MainPage() {
  return <h1>메인 페이지</h1>;
}

function Sub1Page() {
  return <h1>서브1 페이지</h1>;
}

function Sub2Page() {
  return <h1>서브2 페이지</h1>;
}

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className="flex-1"></div>
          <div className="font-bold">MY NOTE</div>
          <div className="flex-1"></div>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/main" element={<MainPage />}>
          메인
        </Route>
        <Route path="/sub1" element={<Sub1Page />}>
          서브1
        </Route>
        <Route path="/sub2" element={<Sub2Page />}>
          서브2
        </Route>
        <Route path="*" element={<Navigate to="/main" />}></Route>
      </Routes>
    </>
  );
}

export default App;
