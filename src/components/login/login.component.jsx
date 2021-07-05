import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Bgimage } from '../../assets/Background.svg';

import TestButton from '../TestButton/TestButton.component';
import DoofLogo from '../DoofLogo/DoofLogo.component';
import Illustration from '../illustration/illustration.component';
import LoginForm from '../loginForm/LoginForm.component';

const DoofLogin = () =>{
    return (
    <Container>
        <BackgroundContainer>
            <Bgimage/>
        </BackgroundContainer>
        <DoofLogo/>
        <Illustration/>
        <LoginForm/>
        <TestButton/>
        <TandC>
            <span>Terms and Service</span>
            <span>Privacy Policy</span>
        </TandC>
    </Container>
)}

const Container = styled.div`
    position: relative;
    width: 1920px;
    height: 1080px;

    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media only screen and (min-width: 768px) {
        width: 10vw;

    }
`;
const BackgroundContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;     

    background-position: center;
    background-repeat: no-repeat;
`;  

const TandC = styled.div`
    position: absolute;
    width: 343px;
    height: 22px;
    left: 140px;
    top: 993px;
    
    display: flex;
    justify-content: space-between;
`;

export default DoofLogin;