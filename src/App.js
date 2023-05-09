import { BrowserRouter, Link } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { GiKnifeFork } from 'react-icons/gi'
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Delisious</Logo>
        </Nav>
        <Category />
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;

  svg{
    font-size: 2rem;
  }
`
export default App;
