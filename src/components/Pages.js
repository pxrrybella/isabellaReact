import React from "react";
import { useState } from 'react';
import maxbutton from '../img/maxbutton.PNG';
import minbutton from '../img/minbutton.PNG';
import closebutton from '../img/closebutton.PNG';
import photo from '../img/photo.png';

const PageZero = () => {
    const [nombre, setNombre] = useState('');
    const [nombreEdit, setNombreEdit] = useState('');

    const submit = (e) => {
        e.preventDefault();
        alert(`No ingresaste tu nombre :c`);
    };

    return (
        (nombre !== "" ?

            //ABOUT ME
            <div className="container">
                <img alt="close button" className="header-button" src={maxbutton} /><img alt="close button" class="header-button" src={minbutton} /><img alt="close button" class="header-button" src={closebutton} />
                <h3>⋆｡°✩ Isabella Parry</h3>
                <p>Un gusto conocerte, {nombre}! ♡</p>
                <p className="now-playing">ˏˋ°•*⁀➷ Actualmente escuchando: <a href="https://youtu.be/sOS9aOIXPEk">Something About Us - Daft Punk</a></p>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Lenguajes de programación
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div class="d-flex">
                                <div>
                                    <ul>
                                        <li>JavaScrip</li>
                                        <li>REACT</li>
                                        <li>JAVA</li>
                                        <li>SpringBoot</li>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul class="ms-5">
                                        <h6>( ๑ ˃̵ᴗ˂̵)و En proceso:</h6>
                                        <li>Next.js</li>
                                        <li>Python</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Sobre mí
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <div className="accordion-body">
                                <div className="d-flex">
                                <img alt="photo" className="photo" src={photo} />
                                <p>Desde muy niña siempre me llamó la atención todo lo que tenía que ver con contenido multimedia. Cuando tenía como 7 años, mi pasatiempo favorito era hacer videos en <i>MovieMaker</i>.
                                <br/>
                                Siempre soñé con diseñar páginas web e hice un montón de blogs los cuales personalizaba a mi gusto.
                                <br/>
                                Esta área me permite desplegar mis intereses además de ser un aporte para los demás, generando soluciones a problemas y proyectos.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Contacto y otros
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <ul className="p-4">
                                <li>Teléfono: +56 9 67023574</li>
                                <li>Correo: iparryurbina@gmail.com</li>
                                <li>LinkedIn: <a href="https://www.linkedin.com/in/parryisabella/">aquí ♡</a></li>
                                <li>GitHub: <a href="https://github.com/pxrrybella">aquí ♡</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            :
            //INGRESAR NOMBRE
            <div className="container">
                <img alt="max button" className="header-button" src={maxbutton} /><img alt="min button" class="header-button" src={minbutton} /><img alt="close button" class="header-button" src={closebutton}/>
                <div>
                    <form onSubmit={submit}>
                    <h3>¡Bienvenidx{nombreEdit ? ' ' + nombreEdit : ""}!</h3>
                        <div class="d-flex align-items-center justify-content-center">
                        <div class="col-auto">
                            <label for="nombre" class="col-form-label me-3 mt-3">¿Te importaría decirme tu nombre?</label>
                        </div>
                        <div class="col-5">
                        <input class="form-control" type="text" id="nombre" name="nombre" onChange={(event) => setNombreEdit(event.target.value)} value={nombreEdit} />
                        </div>
                        </div>
                        <button class="form-control mt-4" type="submit" onClick={() => setNombre(nombreEdit)}>Siguiente</button>
                    </form>
                </div>
            </div>)
    )
}

export { PageZero }