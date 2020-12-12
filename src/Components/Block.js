import React from 'react';
import styled from 'styled-components';

const Text= styled.h1 `
        font-size:30px;
        color:#7a93fa;
        @media (max-width:768px){
            font-size:15px;
        }
      `;
const Param= styled.h1 `
      font-size:30px;
      color:#7a93fa;
      padding:0 10px;
      @media (max-width:768px){
            font-size:15px;
        }
    `;

const Block = ({param,number}) => {
    return (
        <div align="center">
            <Text>{number}</Text>
            <Param>{param}</Param>
        </div>
    )
}

export default Block;
