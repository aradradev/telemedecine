import Header from '../Header/Header'
import Routers from '../routes/Routers'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  )
}
export default Layout
