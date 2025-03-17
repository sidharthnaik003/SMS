import React from 'react';
import './Footer.css'

function Footer(){
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer