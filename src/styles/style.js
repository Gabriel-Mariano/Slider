import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Slider = styled.figure `
    width:100vw;
    height:560px;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: 1s;

    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const Button = styled.button `
    width:60px;
    height:50px;
    margin:auto 10px;
    background-color: rgba(0,0,0,0.2 );
    outline: none;
    transition: 0.5s;
    cursor:pointer;
    border:none;
    &:hover{
        background-color: rgba(0,0,0,0.4 );
    }
`;

export const Controllers = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;

    position: absolute;
    top:500px;
    
`;

export const Controll = styled.button `
    width: 15px;
    height: 15px;
    border-radius: 10px;
    margin: 10px 5px; 
    outline: none;
    border:none;
    cursor:pointer;
    &.active{
        background-color: rgba(0,102,161,0.9 );
    }
    &.noActive{
        background-color: rgba(0,102,161,0.4 ); 
    }
`;

export const Footer = styled.footer `
    margin:20px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1 `
    font-family: Orator std;
    color:#363636;
    margin: 5px auto;
`;

export const Description = styled.span `
    font-family: century gothic;  
    color:#363636;
`;