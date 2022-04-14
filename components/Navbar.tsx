import Link from "next/link"
import Image from 'next/image'
import NavbarStyled from '../styles/NavbarStyled'

export default function Navbar() {
  return (
    <NavbarStyled>
      <div className="container">
        <div className="logo">
          <Image src='/images/logo.svg' width="102.95" height="31" alt="logo-wine" />
        </div>
        <div>
          <ul className="link_items">
            <li>
              <Link href="/"><a>Clube</a></Link>
            </li>
            <li>
              <Link href="/"><a>Loja</a></Link>
            </li>
            <li>
              <Link href="/"><a>Produtores</a></Link>
            </li>
            <li>
              <Link href="/"><a>Ofertas</a></Link>
            </li>
            <li>
              <Link href="/"><a>Eventos</a></Link>
            </li>
          </ul>
        </div>
        <div className="img_items">
          <div>
            <Image src='/images/busca.svg' width="56" height="56" alt="logo-wine" />
          </div>
          <div>
            <Image src='/images/conta.svg' width="56" height="56" alt="logo-wine" />
          </div>
          <div>
            <Image src='/images/carrinho.svg' width="56" height="56" alt="logo-wine" />
          </div>
        </div>
      </div>
    </NavbarStyled>
  )
}