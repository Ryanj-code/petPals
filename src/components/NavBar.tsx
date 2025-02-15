import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../assets/eulerity.png";

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 1rem;
`;

const Logo = styled.img`
  width: 7.5rem;
  height: auto;
  object-fit: contain;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 0.5rem;
  font-size: 1.25rem;

  &:hover {
    color: #f0c674;
  }
`;

const NavBar = () => {
  return (
    <NavbarContainer>
      <Logo src={icon} alt="Website Icon" />
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
      </div>
    </NavbarContainer>
  );
};

export default NavBar;
