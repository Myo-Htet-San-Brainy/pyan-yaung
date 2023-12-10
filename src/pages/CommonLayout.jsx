import { Outlet, useNavigation } from "react-router-dom";
import { Loading } from "../components";

const CommonLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">Pyan Yaung</span>
      </nav>
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
