import React from 'react';
import './gerenciador.css';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';

export const Gerenciador = () => {
    return(
        <>
            <Header/>
            <main>
                <div className="bann">
                    <div className="imag-area">
                    </div>
                    <div className="banner-text">
                        <h1>
                            gerenciador
                        </h1>
                        <h2>
                            gerencie aqui todo o sistema
                        </h2>
                        <p>
                        verifique as vagas, as postagens e o plano de carreira
                        </p>
                    </div>
                </div>
                <div className="tex">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tortor feugiat, imperdiet sapien auctor, ultrices elit. Sed blandit interdum elementum. Proin eu est a orci tincidunt hendrerit..
                        </p>
                </div>
                <div className="vagas">
                    <h1>
                        vagas
                    </h1>
                        <div className="vagas-container">
                            <h1>+</h1>

                            
                        </div> 
                        <section className="cards">
                                <div class="roww">
                                    <div class="cards-gere">
                                        <h2 className="text-card">vaga</h2>
                                      
                                    </div>
                                
                                    <div class="cards-gere">
                                        <h2 className="text-card">vaga</h2>
                                       
                                    </div>
                                
                                    <div class="cards-gere">
                                        <h2 className="text-card">vaga</h2>
                                        
                                    </div>
                                </div>
                            </section>
                            <section className="cards">
                                <div class="roww">
                                    <div class="cards-gere">
                                        <h2 className="text-card">vaga</h2>
                                      
                                    </div>
                                
                                    <div class="cards-gere">
                                        <h2 className="text-card">vaga</h2>
                                    </div>
                                
                                    <div class="cards-gere">
                                        <h2 className="text-card">vaga</h2> 
                                    </div>
                                </div>
                            </section>
                            <section className="cards">
                                <div class="roww">
                                    <div class="cards-gere">
                                        <h2 className="text-card">vaga</h2>
                                      
                                    </div>
                                
                                    <div class="cards-gere">
                                        <h2 className="text-card">vaga</h2>
                                        
                                       
                                    </div>
                                
                                    <div class="cards-gere">
                                        <h2 className="text-card">vaga</h2>
                                        
                                    </div>
                                </div>
                            </section>
                            <div className="traco-roxo">
                                <div className="traco">
                                
                                </div>
                            </div>
                            <hr></hr>
                            
                            
                </div>
                            <section className="planos">
                                            <h1>planos de carreira</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tortor feugiat, imperdiet sapien auctor, ultrices elit. Sed blandit interdum elementum. Proin eu est a orci tincidunt hendrerit..</p>
                           </section>


                <div className="vagas-areas">
                    <h1>áreas</h1>
                </div>
                <div className="mais">
                    <h1>+</h1>
                </div>
                <div className="box-areas">
                    <div class="cards-gerenciador">
                            <h2 className="texto-card">desenvolvimento</h2>
                            <button className="btnn btn__geren" >Acessar</button>
                        </div>

                        <div class="cards-gerenciador">
                            <h2 className="texto-card">gestão</h2>
                            <button className="btnn btn__geren" >Acessar</button>
                        </div>

                        <div class="cards-gerenciador">
                            <h2 className="texto-card">recursos humanos</h2>
                            <button className="btnn btn__geren" >Acessar</button>
                        </div>
                    </div>


                    <div className="box-areas">
                    <div class="cards-gerenciador">
                            <h2 className="texto-card">desenvolvimento</h2>
                            <button className="btnn btn__geren" >Acessar</button>
                        </div>

                        <div class="cards-gerenciador">
                            <h2 className="texto-card">gestão</h2>
                            <button className="btnn btn__geren" >Acessar</button>
                        </div>

                        <div class="cards-gerenciador">
                            <h2 className="texto-card">recursos humanos</h2>
                            <button className="btnn btn__geren" >Acessar</button>
                        </div>
                    </div>
                    
                    <div className="box-areas">


                    <div class="cards-gerenciador">
                            <h2 className="texto-card">desenvolvimento</h2>
                            <button className="btnn btn__geren" >Acessar</button>
                        </div>

                        <div class="cards-gerenciador">
                            <h2 className="texto-card">gestão</h2>
                            <button className="btnn btn__geren" >Acessar</button>
                        </div>

                        <div class="cards-gerenciador">
                            <h2 className="texto-card">recursos humanos</h2>
                            <button className="btnn btn__geren" >Acessar</button>
                        </div>
                    </div>

                    <section className="pe">

                    </section>

                              
            </main>
            </>
    )
}
export default Gerenciador