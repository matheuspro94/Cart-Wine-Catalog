import React, { useEffect, useState } from 'react'
import FilterPrice from '../components/FilterPrice'
import CardWine from '../components/CardWine'
import GridStore from '../styles/GridStore'
import { GetStaticProps } from 'next'
import { Pagination } from '@material-ui/lab'
import Stack from '@mui/material/Stack';
import Button from '../components/Button'

export interface wineProps {
  id: number,
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const page = 1
    const limit = 10
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
  const [pagenate, setPagenate] = useState(1)
  const [store, setStore] = useState([])
  console.log('estou aqui 2')
  
  useEffect(() => {
    const getWines = async () => {
      const page = pagenate
      const limit = 10
      const res = await fetch(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=${limit}`)
      const data = await res.json()
      setStore(data.items)
    }
    getWines()
  }, [pagenate])

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPagenate(value)
  }

  return (
    <GridStore>
      <div className='store_container'>
        <FilterPrice />
        <div>
          <p>oi</p>
          <div className="card_container">
            {store?.map((wine) => {
              return (
                <div className='card'>
                  <CardWine key={wine.id} wine={wine} />
                  <Button />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Stack spacing={2}>
        <Pagination 
          count={wines.totalPages}
          defaultPage={wines.page}
          siblingCount={3}
          onChange={changePage}
        />
      </Stack>
    </GridStore>
  )
}