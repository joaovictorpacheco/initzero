import React from 'react';
import './home.css';
import Header from '../../components/Header';


export const Home = () => {
    return(
        <>
            <Header/>
            <main>
                <div className="banner">
                
                </div>
                <div className="texto">
                    <div className="texto-info">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est ante, pretium vitae turpis fermentum, eleifend maximus quam. Morbi felis erat, tempor in orci at, consequat imperdiet turpis.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est ante, pretium vitae turpis fermentum, eleifend maximus quam. Morbi felis erat, tempor in orci at, consequat imperdiet turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est ante, pretium vitae turpis fermentum,
                         eleifend maximus quam. Morbi felis erat, tempor in orci at, consequat imperdiet turpis. 
                        </p>
                    </div>
                </div>
                <section className="pkm">
                    <div className="imagem-conhecimento">
                    </div>
                    <div className="pkm-info">
                        <h1>
                        gestão do conhecimento - PKM
                        </h1>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home