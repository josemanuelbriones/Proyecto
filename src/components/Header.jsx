import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import AppContext from '../context/AppContext';


const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		
		<header>
        <div className="flex-titulo">
            <p>encuen<span>tra</span></p>
            <div className="parrafos">
                <p>aquí</p>
                <p>estoy</p>
            </div>
        </div>


        <nav className="navegacion-cabeza">
            <a href="/">Inicio</a>
            <a href="/Conocenos">Conócenos</a>
            <a href="/Registro">Registro</a>
        </nav>
        
    </header>

	);
}

export default Header;
