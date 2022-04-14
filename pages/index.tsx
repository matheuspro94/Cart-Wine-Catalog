import FilterPrice from '../components/FilterPrice'
import CardWine from '../components/CardWine'
import GridStore from '../styles/GridStore'
import { GetStaticProps } from 'next'


export interface wineProps {
  id: number,
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const wines: number = 10

    const res = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=10')
    console.log(res)
    const data = await res.json()

    return {
      props: {
        wines: data.items
      }
    }
  } catch (e) {
    console.error(e);
  }
}

export default function Home({ wines }) {
  return (
    <GridStore>
      <FilterPrice />
      <div>
        <p>oi</p>
        <div className="card_container">
          {wines.map((wine: wineProps) => (
            <CardWine key={wine.id} wine={wine} />
          ))}
        </div>
      </div>
    </GridStore>
  )
}
