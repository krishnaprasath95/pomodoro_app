import React,{useEffect} from 'react';
import Confetti from 'react-confetti'
import useSound from 'use-sound';
import DADAA from './sound/DADAA.mp3';
import styled from 'styled-components';

const Text = styled.h2 `
    font-size:30px;
    margin:30px 15px 0 15px;
    color:#fff;
    animation: appear 2s linear;
    animation-fill-mode:forwards;
    @keyframes appear{
        0%{ color:#fff;}
        50%{color:#245c92}
        100%{color:#3793ec}

    }
    @media (max-width:768px){
                font-size:20px;
            } `;
const Button= styled.button `
    border-radius:4px;
    background-color:#245c92;
    color:white;
    text-align:center;
    font-size:20px;
    width:20%;
    height:30px;
    transition:all 0.5s;
    margin:10px 10px;
    cursor:pointer;
    &:hover{
        background-color:#3793ec;
        box-shadow:0 2px 2px 2px #777;
    }
    @media (max-width:768px){
                font-size:20px;
            }`;
const Finished = ({setTimeLeft,setIsPaused}) => {
    let width=window.innderWidth;
    const [play]=useSound(DADAA, {volume:.25});
    useEffect(()=>{
        play();
    },[play])
    return (
    <>
        <div align="center">
            <Confetti width={width}/> 
        </div>
        <div align="center">
     <Text>You finished a Pomodoro!! Take a Break and Stretch your Legs</Text> 
        <Button onClick={()=>{
            setTimeLeft(0);
            setIsPaused(true);
        }}>Reset</Button>
        </div>
    </>
    )
}

export default Finished;
