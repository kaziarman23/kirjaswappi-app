import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="font-poppins">
      <Outlet />
    </div>
  );
}

export default Root;
