import React from 'react';
import './areas.css';
import Header from '../../components/Header';


export const Areas = () => {
    return(
        <>
            <Header/>
            <main>
                <div className="banner">
                    <div className="imagem-area">
                    </div>
                    <div className="texto-banner">
                        <h1>
                            Nosso plano de carreira 
                        </h1>
                        <h2>
                            Vamos juntos em direção ao sucesso
                        </h2>
                        <p>
                        aqui mostramos o caminho que você pode trilhar para <br/> alcançar seus objetivos dentro da empresa
                        </p>
                    </div>
                </div>
                <div className="texto">
                        <h1>
                        Trilhagem de carreira
                        </h1>
                    <div className="texto-info">
                        
                        <h2>
                        Muitas vezes nos perguntamos como chegar em alguma posição hierarquicamente superior em nossa empresa, ou até como mudar de foco, procurando outras áreas. Esse processo pode demandar muito tempo de organização e planejamento, mas com a trilhagem de carreira todo esse processo se torna mais fácil, já que mostramos o caminho a ser seguido para alcançar o seu objetivo na empresa. 
                        </h2>
                                            
                    </div>
                </div>
                <div className="conhecimento">
                    <h1>
                        Áreas do conhecimento na nossa empresa
                    </h1>
                        <div className="texto-conhecimento">
                            <h2>
                            Essas são todas as áreas de dentro de nossa empresa. A partir de uma área há diversas trilhas a serem seguidas, além de muitas etapas a serem completadas. Escolha a de seu interesse: 
                            </h2>
                        </div>                    
                </div>
                
            </main>
        </>
    )
}

export default Areas