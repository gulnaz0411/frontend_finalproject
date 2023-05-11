import React, { useState } from "react";    
import { Container } from "react-bootstrap";
import { Link, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";



 
  
  export const Form = styled.form `
    width: 100%;
    padding: 20px;
    margin-top: 50px;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bootom: 5px;
    
  
  `;

  export const Label = styled.label`
      font-size:16px;
      margin-bottom: 8px;
      margin-right: 10px;
  
  `;
  export const Input = styled.input `
      display: flex;
      aligen-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid gray;
  `;

 export const Button = styled.button`
    padding: 10px 20px;
    background-color:#4d533c ;
    margin: 10px 0;
    border-radius: 5px;
    cursor: pointer;
    color:#fff;
 `;


 

 export const Login = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    const response = await axios.post('/api/auth/sign_in', {
      email, password
    });
    const {token} = response.data;
    localStorage.setItem('token', token);
    return token;
  
   } catch (error) {
    console.error(error);
   }
  
  }
    return (
      <Container >
       <Form  onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input type="password" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}  />
          </div>
        
          <div>
          <Button onClick={handleSubmit} variant="primary" type="submit">Login</Button>
          </div>
            <p>No account <Link to="/registrationpage">Register</Link></p>
            
            <Routes>
              <Route path="registrationpage" element={<p>Register</p>}></Route>
            </Routes>
         
        </Form>
      </Container>
    
  
  

 )};
