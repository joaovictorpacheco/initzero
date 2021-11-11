import React from 'react';
import './areas.css';
import Header from '../../components/Header';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Button from '@restart/ui/esm/Button';
import { ButtonGroup } from 'react-bootstrap';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
    {    id: 1,
        username: 'Desenvolvimento',
        testimonial: 'Loren ipsum dolor sit'
       
    },
   
    {    
         id:2,
        username: 'Recursos Humanos',
        testimonial: 'Loren ipsum dolor sit'
    },

    {   
        id:3,
        username: 'Gestão',
        testimonial: 'Loren ipsum dolor sit'
    },

    {    
        id:4,
        username: 'Desenvolvimento',
        testimonial: 'Loren ipsum dolor sit'
    },

    {    
        id:5,
        username: 'Desenvolvimento',
        testimonial: 'Loren ipsum dolor sit'
    },

    {    
        id:6,
        username: 'Desenvolvimento',
        testimonial: 'Loren ipsum dolor sit'
    }
]

export const Areas = () => {
    return(
        <>
            <Header/>
            <main>
                <div className="bann">
                    <div className="imagem-area">
                    </div>
                    <div className="texto-banner">
                        <h1>
                            Nosso plano de carreira 
                        </h1>
                        <h2>
                            Vamos juntos em direção ao sucesso!
                        </h2>
                        <p>
                        aqui mostramos o caminho que você pode trilhar para <br/> alcançar seus objetivos dentro da empresa
                        </p>
                    </div>
                </div>
                <div className="text">
                        <h1>
                        Trilhagem de carreira
                        </h1>
                    <div className="texto-in">
                        
                        <p>
                        Muitas vezes nos perguntamos como chegar em alguma posição hierarquicamente superior em nossa empresa, ou até como mudar de foco, procurando outras áreas. Esse processo pode demandar muito tempo de organização e planejamento, mas com a trilhagem de carreira todo esse processo se torna mais fácil, já que mostramos o caminho a ser seguido para alcançar o seu objetivo na empresa. 
                        </p>
                                            
                    </div>
                </div>
                <div className="conhecimento">
                    <h1>
                        Áreas do conhecimento na nossa empresa
                    </h1>
                        <div className="texto-conhecimento">
                            <p>
                            Essas são todas as áreas de dentro de nossa empresa. A partir de uma área há diversas trilhas a serem seguidas, além de muitas etapas a serem completadas. Escolha a de seu interesse: 
                            </p>
                        </div>                    
                </div>
                
            </main>
            <div className="App">  
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}         
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map( user => (
                <SwiperSlide key={user.id} className="slide">
                    <div className="slide-content">
                        
                        <div className="user-image">
                        </div>  
                        <h3>{user.username}</h3>  
                        <p className="user-testimonial">
                        <button className="btnn btn__gerenciador" >Acessar</button>
                        </p>
                    </div>
                </SwiperSlide> 
                ))}
            </Swiper>
            </div>
        </>
    )
}

export default Areas