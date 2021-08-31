import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Classes from './components/Classes/Classes'
import Training from './components/Training/Training'
import Events from './components/Events/Events'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import GallerySection from './components/GallerySection/GallerySection'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Loader from './components/Loader/Loader'
import React from 'react'
function App () {
  const [loader, setLoader] = useState()
  const [path, setPath] = useState()

  const location = useLocation()
  React.useEffect(() => {
    setPath(location.pathname)
    if (path !== location.pathname) {
      setLoader(true)
      setTimeout(() => {
        setLoader(false)
      }, 500)
    }
  }, [location])

  console.log('location', location)
  return (
    <div className='app'>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/classes' component={Classes} />
            <Route exact path='/training' component={Training} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <GallerySection />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
