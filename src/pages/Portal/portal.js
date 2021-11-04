import React from 'react';
import './portal.css';
import Header from '../../components/Header';


export const Portal = () => {
    return(
        <>
            <Header/>
            <main>
                <div className="banner">
                    <div className="texto-banner">
                        <h1>
                            Portal de vagas 
                        </h1>
                        <h2>
                            Através do direciomento dado pela trilha de 
                            <br/> carreira agora você pode se candidatar na vaga 
                            <br/> que faz parte do seu objetivo
                        </h2>
                    </div>
                </div>
                <div className="texto">
                        <h1>
                        vagas
                        </h1>
                    <div className="texto-info">
                        
                        <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tortor feugiat, imperdiet sapien auctor, ultrices elit. Sed blandit interdum elementum. Proin eu est a orci tincidunt hendrerit.. 
                        </h2>
                                            
                    </div>
                </div>
                <div className="div-select">
                <select name="Área">
                    <option value="0" selected>Área</option>
                    <option value="1">T.I</option>
                    <option value="2">Recursos Humanos</option>
                    <option value="3">Administraçáo</option>
                    <option value="4">Financeiro</option>
                </select>
                <select id="Trilha">
                    <option value="0" selected>Trilha</option>
                    <option value="1">fdffsafefsefeafggr</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <select id="Cargo">
                <option value="0" selected>Cargo</option>
                    <option value="1">fdffsafefsefeafggr</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                </div>
                <div>
                    <div className="container">

                    </div>
                </div>
                               
            </main>
        </>
    )
}

export default Portal