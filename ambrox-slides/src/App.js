import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';

// Fonts 
import './assets/css/flaticon-set.css'
import './assets/fonts/remixicon.css';
import './assets/fonts/themify-icons.css';

// Css 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-toastify/dist/ReactToastify.css';

import './assets/css/spacing.css'
import './assets/css/style.css'

// Components
import PreLoader from './Components/PreLoader';
import Slides from './Pages/Slides';
import ServiceSingle from './Pages/ServiceSingle';
import PortfolioSingle from './Pages/PortfolioSingle';
import BlogSingle from './Pages/BlogSingle';
import PortfolioPage from './Pages/PortfolioPage';
import ResumePage from './Pages/ResumePage';
import NotFound from './Pages/NotFound';
import ContactPage from './Pages/ContactPage';

function App() {

  //  Preloader 
  let [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1400)
  }, [])

  return (
    <>
      {isLoading ? <PreLoader /> :
        <div>
          <Helmet>
            <title>Ambrox - Personal Portfolio React Template</title>
            <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          </Helmet>

          <Routes>
            <Route path='/' element={<Slides />}></Route>
            <Route path='/service-single' element={<ServiceSingle />}></Route>
            <Route path='/portfolio-single' element={<PortfolioSingle />}></Route>
            <Route path='/blog-single' element={<BlogSingle />}></Route>
            <Route path='/portfolio-page' element={<PortfolioPage />}></Route>
            <Route path='/resume-page' element={<ResumePage />}></Route>
            <Route path='/contact-page' element={<ContactPage />}></Route>
            <Route path='/not-found' element={<NotFound />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
          <ToastContainer />
        </div>
      }
    </>
  );
}

export default App;
