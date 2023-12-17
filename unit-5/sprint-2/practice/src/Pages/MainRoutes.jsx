import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Homepage } from "./Homepage";
import { WatchListPage } from "./WatchListPage";
import { PrivateRoute } from "../Components/PrivateRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      <Route path="/" element={<Homepage/>} />
      <Route path="/watch-list" element={
      <PrivateRoute>
<WatchListPage/>
      </PrivateRoute>
      }/>
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
};
