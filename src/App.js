import{BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Componentes/Home';
import Servicos from './Componentes/Servicos';
import Produtos from './Componentes/Produtos';
import Menu from './Componentes/Menu';


export default function App(){
    return(

        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/produtos' element={<Produtos/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
                
            </Routes>
        </BrowserRouter>
            
        
    )
}
