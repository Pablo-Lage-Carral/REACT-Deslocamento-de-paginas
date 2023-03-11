import {Link} from 'react-router-dom';
import React from 'react';

export default function Menu(){

    return(
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/produtos'>Produtos</Link></li>
                    <li><Link to='/servicos'>Servicos</Link></li>
                </ul>
            </nav>
        </>
    )
}
