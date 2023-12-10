import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">Pyan Yaung</span>
      </nav>
      <Outlet />
    </>
  );
};
export default CommonLayout;
