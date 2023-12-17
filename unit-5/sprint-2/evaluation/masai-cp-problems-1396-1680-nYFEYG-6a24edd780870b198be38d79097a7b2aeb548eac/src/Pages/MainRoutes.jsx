import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { WatchListPage } from "./WatchListPage";
import { PrivateRoute } from "../Components/PrivateRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/watch-list" element={
        <PrivateRoute>
      <WatchListPage/>
      </PrivateRoute>
      } />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
