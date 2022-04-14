import styled from "styled-components";

const FilterPrice = styled.div`
  margin: 0 2rem 0 4em;
  width: 100%;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 1em;
  }

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }

  .radio_price {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  .radio_price label {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-bottom: 1em;
  }
`
export default FilterPrice