import React from 'react';
import { Link } from 'react-router-dom';

function Reach({number, link}){
    return (
        <div>
            <h1 style={{marginBottom:"0px"}}>{number}</h1>
            <Link style={{textDecoration:"none", color:"white", fontFamily:"poppins"}}>{link}</Link>

        </div>
    )
}

export default Reach;