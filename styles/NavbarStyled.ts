import styled from "styled-components"

const Nav = styled.nav`
  padding: 1em 1.2em;
  margin-bottom: 2em;
  background-color: #fff;
  color: #000;
  border-bottom: 2px solid rgba(0, 0, 0, 0.09);
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 1080px;
    max-width: 100%;
  }

  .link_items {
    display: flex;
    list-style: none;
  }

  .link_items li {
    margin-right: .4em;
  }

  .link_items a {
    margin: 1.3em;
    text-decoration: none;
    padding: 5px;
    transition: .4s;
    border-bottom: 2px solid transparent;
    font-weight: normal;
    font-size: 1.5em;
    line-height: 2em;
    color: #000;
  }

  .link_items a:hover {
    border-color: #D14B8F;
  }

  .img_items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .img_items div {
    margin-right: 1em;
  }
`
export default Nav;