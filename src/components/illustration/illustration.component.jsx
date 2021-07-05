import React from 'react';
import styled from 'styled-components';
import {ReactComponent as LoginImg} from '../../assets/Login.svg';

const Illustration = () => (
    <IllustrationContainer>
        <LoginImgContainer>
            <LoginImg/>
        </LoginImgContainer>
        <IllustrationHeader>
            Unlock your stuck revenue 
        </IllustrationHeader>
        <IllustrationDescription>
            We help you unlock the true potential connect with your customer to
            understand the rights and wrongs with your product
        </IllustrationDescription>
    </IllustrationContainer>
    );

const IllustrationContainer = styled.div`
    position: absolute;
    width: 680px;
    height: 553px;
    left: 1100px;
    top: 263px;
    

`;

const LoginImgContainer = styled.div`
    
    position: absolute;
    width: 538px;
    height: 374px;
    left: 142px;
    top: 179px;


`;

const IllustrationHeader = styled.span`
    position: absolute;
    width: 516px;
    height: 44px;
    left: 164px;
    top: 0px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height */

    text-align: right;

    /* Dark */

    color: #333333;

`;

const IllustrationDescription = styled.div`
    position: absolute;
    width: 680px;
    height: 44px;
    left: 0px;
    top: 65px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: right;

    /* Dark */

    color: #333333;

`;

export default Illustration;

