import { useState } from 'react'
import FilterPrice from '../components/FilterPrice'
import CardWine from '../components/CardWine'
import GridStore from '../styles/GridStore'
import { GetStaticProps } from 'next'
import ReactPaginate from 'react-paginate'
import Button from '../components/Button'

export interface wineProps {
  id: number,
}

export interface IProps {
  onPageChange?: () => any;
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const page = 1
    const limit = 500

    const res = await fetch(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=${limit}`)
    const data = await res.json()

    return {
      props: {
        wines: data
      }
    }
  } catch (e) {
    console.error(e);
  }
}

export default function Home({ wines }) {
  const [currentItems, setCurrentItems] = useState(wines.items)
  const [pageCount, setPageCount] = useState(0)

  const itemsPerPage = 10
  const pagesVisited = pageCount * itemsPerPage

  const displayItems = currentItems
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map(wine => {
      return (
        <div className='card'>
          <CardWine key={wine.id} wine={wine} />
          <Button />
        </div>
      )
    })

  // const changePage = ({selected}) = {
  //   setCurrentItems(selected)
  // }

  return (
    <GridStore>
      <div className='store_container'>
        <FilterPrice />
        <div>
          <p>oi</p>
          <div className="card_container">
            {displayItems}
          </div>
        </div>
      </div>
      <ReactPaginate
        previousLabel="< Anterior"
        nextLabel="Próximo >"
        pageCount={3}
      // onPageChange={changePage}
      />
    </GridStore>
  )
}