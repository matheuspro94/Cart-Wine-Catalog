import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 1em;
  margin-bottom: 2em;
  width: 30%;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #000;

  h3 {
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.2em;
    letter-spacing: .01em;
    margin-bottom: 1em;
  }
  .img_wine {
    display: flex;
    margin-bottom: 1em;
  }
  
  .img_black {
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
   margin-left: -35px;
  }

  .discount {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .discount_price {
    font-style: normal;
    font-weight: 700;
    font-size: .8em;
    line-height: 1em;
    /* identical to box height, or 142% */

    text-align: center;
    text-decoration-line: line-through;

    color: #888888;
    margin-right: 1em;
  }

  .discount_porcent {
    background-color: #F79552;
    border-radius: 2px;
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: .8em;
    line-height: 1em;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 4px;
    margin-bottom: 1em;
  }
  
  .priceMember {
    margin-bottom: 1em;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: .8em;
    line-height: .9em;
    text-align: right;
    text-transform: uppercase;
    color: #1D1D1B
  }

  .priceMember span {
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    line-height: 27px;
    color: #B6116E;
  }

  .priceNonMember {
    font-style: normal;
    font-weight: 700;
    font-size: .8em;
    line-height: .6em;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #888888;
  }
`
export default CardStyled