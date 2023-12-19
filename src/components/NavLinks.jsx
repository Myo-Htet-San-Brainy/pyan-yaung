import { NavLink } from "react-router-dom";
const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/myProducts", text: "My Products" },
  { id: 3, url: "/uploadProduct", text: "Upload A Product" },
];

const NavLinks = () => {
  const jwt = JSON.parse(localStorage.getItem("jwt")) || undefined;
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if (!jwt) {
          if (text === "My Products" || text === "Upload A Product") {
            return;
          }
        }
        return (
          <li key={id}>
            <NavLink to={url} className="capitalize">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
