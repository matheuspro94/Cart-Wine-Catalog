import FilterStyled from '../styles/FilterPrice'

export default function FilterPrice() {
  return (
    <FilterStyled>
      <h1>Refine sua busca</h1>
      <p>Por preço</p>
      <div className="radio_price">
        <label>
          Até R$40
          <input type="radio" value="40" name="gender" />
        </label>
        <label>
          R$40 A R$60
          <input type="radio" value="40-60" name="gender" />
        </label>
        <label>
          R$100 A R$200
          <input type="radio" value="100-200" name="gender" />
        </label>
        <label>
          R$200 A R$500
          <input type="radio" value="200-500" name="gender" />
        </label>
        <label>
          Acima de R$500
          <input type="radio" value="+500" name="gender" />
        </label>
      </div>
    </FilterStyled>
  )
}