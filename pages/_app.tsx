import GlobalStyled from "../styles/global"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyled />
    </Layout>
  )
}

export default MyApp
