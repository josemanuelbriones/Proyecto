
import React, { useState, useEffect } from 'react';
import {Leer} from '../api'
import '@styles/tarjeta.scss';
import aquivectores from '../assets/img/aqui-vextor-ok.png';

const Home = () => {
	const [persona, mostrar]= useState(null);

	useEffect(()=>{
LeerPersona();
	},[])

    const LeerPersona=async()=>{
        const p = await Leer();
		console.log(p.docs[0].data());
		mostrar(p.docs);
    }
	return (
	<div className='divcontenedor container'>
		<div className='row'>
		{
			persona && persona.map(p=>
			<div className='divtarjeta col-3'>
				<span className='spanlogo'>
					<h1>Localizado</h1>
					<img src={aquivectores} alt=" " className="logo"/>
				</span>
				<div className='divimgpersona'>
				  <img src={p.data().foto} alt=" " className="imgpersona"/>
				</div>
				<section className='sectiondatos text-center'>
					
					<label className="labelindica"><p>Fecha:</p>{p.data().fecha}</label>

					<label className="labelindica"><p>Ubicacion:</p>{p.data().ubicacion}</label>
					<label className="labelindica"><p>Detalles:</p>{p.data().detalles}</label>
					<label className="labelindica"><p>Genero:</p>{p.data().genero}</label>
					<a className='botonF' href="/">Mas informacion</a>
					{/* <label className="labelindica">{p.data().complexion}</label>
					<label className="labelindica">{p.data().cabello}</label>
					<label className="labelindica">{p.data().ojos}</label>
					<label className="labelindica text-center">{p.data().tez}</label>
					<label className="labelindica">{p.data().altura}</label>
					<label className="labelindica">{p.data().comentarios}</label>
					<label className="labelindica">{p.data().otrasfotos}</label> */}
				</section>
			  </div>
			)
		}
		</div>
	</div>
	);
}

export default Home;
