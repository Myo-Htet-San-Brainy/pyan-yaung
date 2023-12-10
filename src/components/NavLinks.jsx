import { NavLink } from "react-router-dom";
const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "/myProducts", text: "My Products" },
  { id: 3, url: "/uploadProduct", text: "Upload A Product" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
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
