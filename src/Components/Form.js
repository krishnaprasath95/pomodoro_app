import React from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

//styling the Form
const Container= styled.div `
        display:flex;
        justify-content:center;
        padding:5px;
        
`;
const Text = styled.p`
        margin:0px 5px;
        font-size:20px;
        color:#1d2150;
        font-weight:bolder;
`;
const Input = styled.input`
        width:80%;
        
        padding:7px 7px;
        margin:0px 8px;
        font-size:15px;
        font-weight:bold;
        box-sizing:border-box;
        border:3px solid #ccc;
        -webkit-transition:0.5s;
        transition:0.5s;
        &:focus{
            border:3px solid blue;
            background-color:#bfd5fd;
            color:#1d2150;
        };
        ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }    
`;
const Button = styled.input `
    border-radius:4px;
    background-color:grey;
    color:white;
    text-align:center;
    font-size:20px;
    width:80px;
    transition:all 0.5s;
    margin:10px 10px;
    cursor:pointer;
    &:hover{
        box-shadow:0 5px 5px 5px #777;
    }

`;

const Form = ({setTimeLeft,setIsPaused}) => {
    const {register,handleSubmit,errors,reset}=useForm();
    const onSubmit=(data)=>{
        reset();
        setTimeLeft(data.minutes*60);
        setIsPaused(false);
    }
    return (
        <>
        <Container>
            <Text>Minutes:</Text>
            <form noValidate onSubmit={handleSubmit(onSubmit)}> 
                <Input type="number"
                name="minutes"
                ref={register({
                    required:{value:true,message:"Please enter the number of minutes"},
                    min:{value:0.01,message:"Please enter number between 0.01 and 100"},
                    max:{value:100,message:"Please enter number between 0.01 and 100"}

                })}
                />
                <Button type="submit"/>
            </form>
           
        </Container>
        <div  style={{
                backgroundColor:"#d6d6f1",
                color:"red",
                textAlign:"center",
                overflow:"hidden",
                fontWeight:"bold",
                margin:"0 10% 10px 10%"
            }}>
            {errors.minutes && errors.minutes.message}
            </div>
        </>
    )
}

export default Form;
