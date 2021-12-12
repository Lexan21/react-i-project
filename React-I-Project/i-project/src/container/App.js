import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
// import Headerer from './Headerer/Headerer'



const App = () => {
    return (
        <div className="body">
            <CssBaseline />
            <Header />
            {/* <Headerer /> */}
            <Main />
            <Footer />

        </div>
    )
}

export default App
