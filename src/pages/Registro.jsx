import React, { useState } from 'react';
import '@styles/Registro.scss';
import {Guardar} from '../api.js'

const Registro = () => {
    const [complexion, setAltura]= useState(null);
    const [cabello, setCabello]= useState(null);
    const [ojos, setOjos]= useState(null);
    const [tez, setTez]= useState(null);
    const [comentario, setComentario]= useState(null);
    const [sexo, setSexo]= useState(null);
    const [ubicacion, setUbicacion]= useState(null);
    
    const obj = {
        complexion,
        cabello,
        ojos,
        tez,
        altura,
        comentario,
        sexo,
        ubicacion
      };
      const salvarPersona=()=>{
        Guardar()
    }
	return (
		<div className="formulario">
        <form id="formulario-producto">
            <fieldset>
                <legend>Agrega a esa persona localizada</legend>
                <input type="date" className='form-control' id="fecha-visto" placeholder="Fecha en que lo viste"/>
                <input type="date" className='form-control' id="fecha-registro" placeholder="Fecha de registro"/>
                <input type="text" className='form-control' id="ubicacion" placeholder="dónde lo encontraste" value={ubicacion}  onChange={(e) => setUbicacion(e.target.value)}/>                
                <select id="cars" name="cars" value={sexo}  onChange={(e) => setSexo(e.target.value)}>
                    <option value="0">sexo</option>
                    <option value="Hombre">hombre</option>
                    <option value="Mujer">mujer</option>
                </select>
                <input type="text" className='form-control' id="complexion" placeholder="flaco/promedio/gordo" value={complexion}  onChange={(e) => setComplexion(e.target.value)}/>
                <input type="text" className='form-control' id="cabello" placeholder="negro/ blanco/ castaño/ rubio" value={cabello}  onChange={(e) => setCabello(e.target.value)}/>
                <input type="text" className='form-control' id="ojos" placeholder="obscuro/ claro" value={ojos}  onChange={(e) => setOjos(e.target.value)}/>
                <input type="text" className='form-control' id="tez" placeholder="blanco moreno" value={tez}  comentarioonChange={(e) => setTez(e.target.value)}/>
                <input type="number" className='form-control' id="altura" placeholder="altura" value={altura}  onChange={(e) => setAltura(e.target.value)} min="0" step="0.01" max="1000"/>
                <input type="text" className='form-control' id="foto" placeholder="foto"/>
                <input type="text" className='form-control' id="comentario" value={comentario}  onChange={(e) => setComentario(e.target.value)} placeholder="comentarios"/>
                <button type="button" onClick={salvarPersona}>Enviar</button>
                
            </fieldset>
        </form>
    </div>

	);
}

export default Registro;