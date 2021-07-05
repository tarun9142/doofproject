import React from 'react';
import styled, {css} from 'styled-components';
import TextField from '@material-ui/core/TextField';

const LoginForm = () => (
    <FormContainer>
        <Form>
            <span>Login</span>
            <InputField email>
                <TextField id="standard-basic" label="Email" type="email"/>
            </InputField>
            <InputField password>
                <TextField id="standard-basic" label="Password" type="password"/>
            </InputField>
        </Form>
    </FormContainer>
)

const FormContainer = styled.div`
    position: absolute;
    width: 540px;
    height: 425px;
    left: 140px;
    top: 229px;

`;

const Form = styled.form`
    span {
        position: absolute;
        width: 71px;
        height: 29px;
        left: 0;
        top: 0;

        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;

        /* Dark */

        color: #333333;

    }
`;

const InputField = styled.div`
    color: #A5A5A5;
    position: absolute;
    width: 400px;
    height: 77px;
    
    ${props => props.email && css`
    left: 0px;
    top: 89px;

    `};

    ${props => props.password && css`
   
    left: 0px;
    top: 176px;
    
    `}
`;


export default LoginForm;