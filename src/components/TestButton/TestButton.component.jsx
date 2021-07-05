import React from 'react';
import styled from 'styled-components';

const TestButton = () => (
    <Test>Test</Test>
);

const Test = styled.button`
    position: absolute;
    width: 200px;
    height: 50px;
    left: 1580px;
    top: 75px;

    /* Primary */

    background: #F7D832;
    border-radius: 5px;
    
    :hover{
        cursor: pointer;
    }
`;

export default TestButton;