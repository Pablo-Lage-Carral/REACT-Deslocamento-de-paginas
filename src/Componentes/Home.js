import React from 'react';

export default function Home(){

    const home =  {
        backgroundColor: '#C71585',
        height:'85vH',
        textAlign:'center',
        color:'black'
    }

    return(
        <>
            <div style={home}>
            <h1>Página principal</h1>
            <p>Exemplo de página de compras</p>
            </div>
        </>
    )
}
