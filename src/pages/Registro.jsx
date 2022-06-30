import React, { useState } from 'react';
import '@styles/Registro.scss';
import {Guardar} from '../api'


const Registro = () => {
    const [complexion, setComplexion]= useState(null);
    const [altura, setAltura]= useState(null);
    const [cabello, setCabello]= useState(null);
    const [ojos, setOjos]= useState(null);
    const [tez, setTez]= useState(null);
    const [comentario, setComentario]= useState(null);
    const [genero, setGenero]= useState(null);
    const [ubicacion, setUbicacion]= useState(null);
    const [fecha, setFecha] = useState(null)
    const obj = {
        complexion,
        cabello,
        ojos,
        tez,
        altura,
        comentario,
        genero,
        ubicacion,
        fecha
      };
      const salvarPersona=async()=>{
        await Guardar(obj)
    }
	return (
		<div className="formulario">
        <form id="formulario-producto">
            <fieldset>
                <legend>Agrega a esa persona localizada</legend>
                
                <input type="date" className='form-control' id="fecha-registro" placeholder="Fecha de registro" value={fecha}  onChange={(e) => setFecha(e.target.value)}/>
                <input type="text" className='form-control' id="ubicacion" placeholder="dónde lo encontraste" value={ubicacion}  onChange={(e) => setUbicacion(e.target.value)}/>                
                <select id="cars" name="cars" value={genero}  onChange={(e) => setGenero(e.target.value)}>
                    <option value="0">sexo</option>
                    <option value="Hombre">hombre</option>
                    <option value="Mujer">mujer</option>
                </select>
                <input type="text" className='form-control' id="complexion" placeholder="flaco/promedio/gordo" value={complexion}  onChange={(e) => setComplexion(e.target.value)}/>
                <input type="text" className='form-control' id="cabello" placeholder="negro/ blanco/ castaño/ rubio" value={cabello}  onChange={(e) => setCabello(e.target.value)}/>
                <input type="text" className='form-control' id="ojos" placeholder="obscuro/ claro" value={ojos}  onChange={(e) => setOjos(e.target.value)}/>
                <input type="text" className='form-control' id="tez" placeholder="blanco moreno" value={tez}  onChange={(e) => setTez(e.target.value)}/>
                <input type="number" className='form-control' id="altura" placeholder="altura" value={altura}  onChange={(e) => setAltura(e.target.value)} min="0" step="0.01" max="1000"/>
                <input type="text" className='form-control' id="foto" placeholder="foto"/>
                <input type="text" className='form-control' id="comentario" value={comentario}  onChange={(e) => setComentario(e.target.value)} placeholder="comentarios"/>
                <button type="button" className='btn btn-primary btn-lg' onClick={salvarPersona}>Enviar</button>
                
            </fieldset>
        </form>
    </div>

	);
}

export default Registro;