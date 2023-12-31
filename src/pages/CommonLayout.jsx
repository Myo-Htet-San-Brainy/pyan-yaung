import { Outlet, useNavigation } from "react-router-dom";
import { Loading, Navbar, NavLinks, Header } from "../components";

const CommonLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar>
        <NavLinks />
      </Navbar>
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default CommonLayout;
