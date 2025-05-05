import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Toaster} from 'sonner';


const Layout = ({ description , title , author , keywords}) => {
    
  return (
    
    <div>
        <Helmet>
                <meta charSet="UTF-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
        </Helmet>
        <NavBar/>
            <div className='min-h-[65vh]'>
                <Outlet/>
            </div>
        <Footer/>
        <Toaster position="top-right" richColors/>
    </div>
  )
}

Layout.defaultProps={
    title : "Authentication",
    description : "Authentication app",
    keywords : "mongo",
    author : " jfo",
};
export default Layout