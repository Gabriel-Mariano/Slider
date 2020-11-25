import React, { useState, useEffect } from 'react';
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'; 

import back01 from '../assets/background01.jpg';
import back02 from '../assets/background02.jpg';
import back03 from '../assets/background03.jpg';

import {Container} from '../styles/style';
import {Slider} from '../styles/style';
import {Button} from '../styles/style';
import {Controllers} from '../styles/style';
import {Controll} from '../styles/style';
import {Footer} from '../styles/style';
import {Title} from '../styles/style';
import {Description} from '../styles/style';

function Slide(){
    const [imageCurrent,setImageCurrent] = useState(0);
    const images = [back01,back02,back03]; 

    // Voltar um slider
    function prev(){
        if(imageCurrent < 1){
            setImageCurrent(2)
        }else{
            setImageCurrent(imageCurrent-1)
        }
    }
    // Avançar um slider
    function next(){
        if(imageCurrent >1){
            setImageCurrent(0)    
        }else{
            setImageCurrent(imageCurrent+1)   
        }
    }


    // Ir para o slider específico 
    function controller(i){
        if(i.target.value == 0){
            setImageCurrent(0);
        }
        else if(i.target.value == 1){
            setImageCurrent(1);
        }
        else if(i.target.value == 2){
            setImageCurrent(2);
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            next();
        },6000);
        // Fazer limpeza do useEffect
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[imageCurrent]);

    return(
        <>
        <Container>
            <Slider style={{backgroundImage:`url(${images[imageCurrent]})`}}>
                <Button onClick={prev}><BsChevronLeft fontSize={30}  color="FFF"></BsChevronLeft></Button>
                <Button onClick={next}><BsChevronRight fontSize={30} color="FFF"></BsChevronRight></Button>
            </Slider>
            <Controllers>
            {images.map((values,i)=>{
                    return(
                        i === imageCurrent ? 
                            <Controll key={i} className="active" 
                                value={i} onClick={controller}>

                            </Controll> 
                        :
                            <Controll key={i} className="noActive" 
                                value={i} onClick={controller}>

                            </Controll>
                        );
                })}
            </Controllers>
        </Container>
        <Footer>
            <Title>My Slider</Title>
            <Description>from <strong>Gabriel Mariano</strong></Description>
        </Footer>
        </>
    );
}

export default Slide;