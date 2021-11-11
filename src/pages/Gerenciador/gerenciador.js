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
                    <div className="imagem-area">
                    </div>
                    <div className="banner-text">
                        <h1>
                            Gerenciador
                        </h1>
                        <h2>
                            Gerencie aqui todo o sistema
                        </h2>
                        <p>
                        Verifique as vagas, as postagens e o plano de carreira
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
                        Vagas
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
                                            <h1>Planos de Carreira</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed tortor feugiat, imperdiet sapien auctor, ultrices elit. Sed blandit interdum elementum. Proin eu est a orci tincidunt hendrerit..</p>
                           </section>


                <div className="vagas-areas">
                    <h1>Áreas</h1>
                </div>


                <div class="cards-gere">
                        <h2 className="text-card">trilha</h2>
                        <button className="btnn btn__gerenciador" >Acessar</button>
                        <footer>
                        <button className="bt btn__baixo" ></button>
                        </footer>
                    </div>
                

                
                                
            </main>
            </>
    )
}
export default Gerenciador