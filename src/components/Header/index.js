import React from 'react'
import './styles.css'

const Header = () => {
    return (
        <header>
            <h1>
                Simple Blog
            </h1>
            <nav>
                <a href="http://localhost:3000/">Home</a>
                <a href="http://localhost:3000/about">About</a>
            </nav>
        </header>
    )
}

export default Header