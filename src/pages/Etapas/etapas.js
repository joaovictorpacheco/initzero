import React from 'react';
import './etapas.css';
import Header from '../../components/Header';


export const Etapas = () => {
    return(
        <>
            <Header/>
            <main>
                <div className="ban">
                    
                    <div className="titulo-ban">
                        <h1>
                            Etapas 
                        </h1>
                        
                    </div>
                </div>
                <div className="paragrafo">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est ante, pretium vitae turpis fermentum, eleifend maximus quam. Morbi felis erat, tempor in orci at, consequat imperdiet turpis.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est ante, pretium vitae turpis fermentum, eleifend maximus quam. Morbi felis erat, tempor in orci at, consequat imperdiet turpis.  </p>
                    <div className="texto-inf">
                        <h1>Requisitos</h1>
                        <h2>
                        Muitas vezes nos perguntamos como chegar em alguma posição hierarquicamente superior em nossa empresa, ou até como mudar de foco, procurando outras áreas. Esse processo pode demandar muito tempo de organização e planejamento, mas com a trilhagem de carreira todo esse processo se torna mais fácil, já que mostramos o caminho a ser seguido para alcançar o seu objetivo na empresa. 
                        </h2>
                                            
                    </div>
                </div>
                <div className="requisitos">
                    <h1>+</h1>                                 
                </div>

                <section className="box">

                    <div className="box1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est ante, pretium vitae turpis fermentum, eleifend maximus quam. </p>
                    </div>
                    <div className="box2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est ante, pretium vitae turpis fermentum, eleifend maximus quam. </p>
                    </div>
                    <div className="box3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est ante, pretium vitae turpis fermentum, eleifend maximus quam. </p>
                    </div>
                    <div className="box4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est ante, pretium vitae turpis fermentum, eleifend maximus quam. </p>
                    </div>
                </section>
                
            </main>
        </>
    )
}

export default Etapas