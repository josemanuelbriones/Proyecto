import React from 'react';
import '@styles/Conocenos.scss';
import persona from '../assets/img/persona.jpg';
import persona2 from '../assets/img/persona2.jpg';
import foto1 from '../assets/img/denisse.png';
import foto2 from '../assets/img/jonathan.png';
import foto3 from '../assets/img/jose.png';
const Conocenos = () => {
	return (
        <main>
        <div className="container marketing">

      
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Mision</h2>
            <p className="lead">Ponemos a disposición este registro de personas sin hogar, para darle voz a todos ellos,  que han perdido en el camino, que por alguna u otra razón no puede decir; <strong>aquí estoy.</strong></p>
          </div>
          <div className="col-md-5"> 
            <img src={persona} alt="" className="img-fluid mx-auto featurette-image" width="400px" />
          </div>
        </div>
    
        <hr className="featurette-divider" />
    
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Visión</h2>
            <p className="lead">Todas las personas que han perdido algún familiar tengan una oportunidad, para continuar en este camino con la ayuda de todos en internet, al poderle dedicar un poco de tiempo, registrando a esa persona sin hogar que encuentren día a día en su camino al trabajo, escuela o de paseo.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={persona2} alt="" className="img-fluid mx-auto featurette-image" width="400px" />
    
          </div>
        </div>
    
        <hr className="featurette-divider" />
    
        <div className="row">
                <div className="col-lg-4 text-center">
            
            <img src={foto1} className="bd-placeholder-img rounded-circle img-fluid mx-auto imagenfoto"/>
    
            <h2 className="fw-normal">Denisse Rentería</h2>
            <p>Estoy en continuo aprendizaje, me mantengo al tanto de las nuevas actualizaciones de los frameworks Angular y Laravel. Me Puedes contactar a mi correo denisse463@gmail.com</p>
            <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/denisse-renter%C3%ADa-a07145228/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg></a></p>
          </div>
          <div className="col-lg-4 text-center">
            
            <img src={foto2} className="bd-placeholder-img rounded-circle img-fluid mx-auto imagenfoto"/>
    
            <h2 className="fw-normal">Jonathan Paulo Valdes</h2>
            <p>Aprendiz de programador, con miras al Front end, pero con espectativas Full stack, desarrollando mi creatividad e ingenio.</p>
            <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/jonathan-paulo-sergi-valdes-rodr%C3%ADguez-7483521b5/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg></a></p>
          </div>
          <div className="col-lg-4 text-center">
            
            <img src={foto3} className="bd-placeholder-img rounded-circle img-fluid mx-auto imagenfoto"/>
    
            <h2 className="fw-normal">Jose Manuel Briones</h2>
            <p>Soy un desarrollador Front End, con un título en Ingeniería de Sistemas Computacionales. Me apasionan las tecnologías JavaScript. Me centro en el desarrollo como JavaScript FullStack. Tengo una amplia experiencia en el área de Front-End usando HTML, CSS y JS.</p>
            <p><a className="btn btn-secondary" href="https://www.linkedin.com/in/jose-manuel-briones-hernandez-831575176" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg></a></p>
          </div>
        </div>
    
    
        <hr className="featurette-divider" />
    
      </div>
    
    
      <footer className="container">
       <div>
                <nav className="navegacion-pie">
                    <a href="/">inicio</a>
                  
                    <a href="/">contáctanos</a>
                </nav>
                <p className="parrafo-footer parrafo-marca">&reg; aquí <span className="spam-marca">estoy</span> </p>
            </div>
      </footer>
    </main>
    
	);
}

export default Conocenos;