import React from 'react'
import Banner from './Banner'
import Products from './Products'
import About from './About'
import Contact from './Contact'

import './Content.css'

export default function Content(){
    return (
        <main>
            <Banner/>
            <Products/>
            <About/>
            <Contact/>
        </main>
    );
}