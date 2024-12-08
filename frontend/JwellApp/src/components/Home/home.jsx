import Header from '../Header/header'
import HomeContent from '../HomeContent/homeContent'
import Footer from '../Footer/footer'

const Home = ()=>{
    return(
        <>
            <div className='bg-dark'>
            <Header />
            <HomeContent />
            <Footer />
            </div>
        </>
     )
}

export default Home;