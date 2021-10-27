import React from 'react';
import './areas.css';
import Header from '../../components/Header';


export const Areas = () => {
    return(
        <>
            <Header/>
            <main>
                <section className="banner">
                    <div className="imagem-area">
                    </div>
                    <h1>
                        Nosso plano de carreira 
                    </h1>
                    <h2>
                        Vamos juntpos em direção ao sucesso
                    </h2>
                    <p>
                    aqui mostramos o caminho que você pode trilhar para alcançar seus objetivos dentro da empresa
                    </p>
                
                </section>
                <div className="texto">
                    <div className="texto-info">
                        <h1>
                        Trilhagem de carreira
                        </h1>
                        <p>
                        Muitas vezes nos perguntamos como chegar em alguma posição hierarquicamente superior em nossa empresa, ou até como mudar de foco, procurando outras áreas. Esse processo pode demandar muito tempo de organização e planejamento, mas com a trilhagem de carreira todo esse processo se torna mais fácil, já que mostramos o caminho a ser seguido para alcançar o seu objetivo na empresa. 
                        </p>
                    </div>
                </div>
                
            </main>
        </>
    )
}

export default Areas