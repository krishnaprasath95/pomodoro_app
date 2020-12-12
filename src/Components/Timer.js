import React,{useEffect,useRef} from 'react';
import Block from './Block';
import styled from 'styled-components';

const Container= styled.div `
        display:flex;
        justify-content:center;
        border:2px solid #777;
        box-shadow:0 2px 2px #ccc;
        margin:0px 25%;
        padding:0px 10px;
              
        `;

const Text= styled.h1 `
        font-size:30px;
        color:#7a93fa;
        @media (max-width:768px){
            font-size:20px;
        }`;

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

const Timer = ({timeLeft,setTimeLeft,isPaused,setIsPaused}) => {
    //remider:timeLeft is in seconds
    let minutes= Math.floor(timeLeft/60);
    let seconds= Math.floor(timeLeft-60*minutes);
    let intervalRef = useRef();

    useEffect(()=>{
        const id= setInterval(()=>{
            isPaused ?
                clearInterval(intervalRef.current):
                setTimeLeft(timeLeft-1)
              
        },1000)
        intervalRef.current= id;
    return ()=>clearInterval(intervalRef.current);
    });
    return (
        <>
        <Container >
            <Block param="Minutes" number={minutes} />
            <Text>:</Text>
            <Block param="Seconds" number={seconds} />
        </Container>
        <div align="center">
            <Button onClick={()=>{
                setTimeLeft(0);
                setIsPaused(true);
                }} 
                >
                Reset</Button>
        </div>
        </>
    )
}

export default Timer;
