import axios from "axios";
import React, { useState } from "react";
import styled from 'styled-components';

const clientID = '3532b404-5b2e-4f776-a59a-30d0cf6a1c4a'

const API = axios.create({
    baseURL: 'https://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
        'x-client-id': clientID
    }
});

 export const createOfficer = (officerData) => {
  return API.post('/officers', officerData);

}

export const updateOfficer = (id, officerData) => {
  return  API.put('/officers/${id}', officerData);
}

export const deleteOfficer = (id) => {
  return API.delete('/officers/${id}');
}

export const getAllOfficers = () => {
  return API.get('/officers');
}

export const getOfficerById = (id) => {
  return API.get('/officers/${id}');
}

export const Form = styled.form `
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
    margin: 10px 0;
    background-color: #4d533c ;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`;




export const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastname, setLastName] = useState('');
    const [firstname, setFirstName] = useState('');
  
    const handleFormSubmit = async(event) => {
      event.preventDefault();

      try {
        const response = await axios.post('/api/officers', {
          email, password,lastname,firstname
        });
        console.log('Создан новый сотрудник:', response.data);

        setEmail('');
        setPassword('');
        setLastName('');
        setFirstName('');
      } catch (error) {
        console.error('Сотрудник не создан:', error);
      }
    };

  
     

        return (
            <Form onSubmit={handleFormSubmit}>
            <div>    
              <Label>
                Email
                <Input type="text" placeholder="Enter email"   value={email} onChange={(e) => setEmail(e.target.value)} />
              </Label>
            </div>
            <div>
              <Label>
                Password:
                <Input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Label>
            </div>
            <div>
              <Label>
                LastName:
                <Input type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} />
              </Label>
            </div>
            <div>
              <Label>
                FirstName:
                <Input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
              </Label>
            </div>
           
      
            <div>
              <Button onClick={handleFormSubmit}variant="primary" type="submit">Sign up</Button>
            </div> 
            </Form>
          );
   
};