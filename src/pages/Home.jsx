import React, { useState, useEffect } from 'react';
import {Leer} from '../api'
import '@styles/tarjeta.scss';
import aquivectores from '../assets/img/aqui-vextor-ok.png';
import personafoto from '../assets/personas/persona1.jpg';
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
					<button type="button" className="btn btn-primary btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Datos</button>
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
		  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Localizada</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="continer">
                                                <div className="row d-flex justify-content-center aling-items-center">
													<div className="col d-flex justify-content-center aling-items-center">
													<img src={personafoto} className="img-fluid" alt="..." />
													</div>
													<div className="col">

													
                                                  <p className="card-text parrafo12">Fecha: 12/07/2022</p>
                                                  <p className="card-text parrafo12">Ubicación: Metro Pino Suarez </p>
                                                  <p className="card-text parrafo12">Detalles: no hay</p>
                                                  <p className="card-text parrafo12">Género: mujer </p>
                                                  <p className="card-text parrafo12">Complexión: morena </p>
                                                  <p className="card-text parrafo12">Cabello: blanco </p>
                                                  <p className="card-text parrafo12">Ojos: obscuros</p>
                                                  <p className="card-text parrafo12">Tez: morena </p>
                                                  <p className="card-text parrafo12">Altura: 170 cm</p>
                                                  
													</div>
                                                  
                                                </div>
                                              </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Contactar</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
		</div>
	</div>
	);
}

export default Home;
