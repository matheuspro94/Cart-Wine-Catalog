import Image from "next/image"
import CardStyled from "../styles/CardStyled"

export default function CardWine({ wine }) {
  return (
    <CardStyled>
      <div className="img_wine">
        <div>
          <Image
            src={wine.image}
            width="198.57"
            height="200"
            alt={wine.name}
          />
        </div>
        <div className="img_black">
          <Image
            src="/images/black.png"
            width="40"
            height="40"
            alt="black-friday"
          />
        </div>
      </div>
      <div>
        <h3>{wine.name}</h3>
      </div>
      <div className="discount">
        <div className="discount_price">
          {`R$ ${wine.price}`}
        </div>
        <div className="discount_porcent">
          {`${wine.discount}% OFF`}
        </div>
      </div>
      <div className="priceMember">
        <p>sócio wine <span>{`R$ ${wine.priceMember}`}</span></p>
      </div>
      <div className="priceNonMember">
        <p>sócio wine R$ {(wine.priceNonMember).toFixed(2)}</p>
      </div>
    </CardStyled>
  )
}