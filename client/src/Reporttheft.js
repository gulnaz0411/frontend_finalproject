
import React, { useState, useEffect} from 'react';
import { Form, Container, Button,FormLabel, FormControl, Table}  from 'react-bootstrap';
import axios from "axios";
const clientID = '3532b404-5b2e-4f776-a59a-30d0cf6a1c4a'

const API = axios.create({
    baseURL: 'https://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
        'x-client-id': clientID
    }
});



export const TheftReport = ({report}) => {
 
 
  return (
  
    <Table>
      <thead>
      <tr>
        <th>LicenseNumber</th>
        <th>Lastname</th>
        <th>Firstname</th>
        <th>Surname</th>
        <th>Bike type</th>
        <th>Bike color</th>
        <th>Date</th>
        <th>Responsible officer</th>
        <th>additional Info</th>
    
      </tr>

      </thead>
      <tbody>
        <tr>
          <td>{report.licenseNumber}</td>
          <td>{report.lastName}</td>
          <td>{report.firstName}</td>
          <td>{report.surName}</td>
          <td>{report.bikeType}</td>
          <td>{report.bikeColor}</td>
          <td>{report.date}</td>
          <td>{report.officers}</td>
          <td>{report.additionalInfo}</td>
        </tr>
      </tbody>
     
    </Table>
    
  );
};

export const Reporttheft = () => {
   const [licenseNumber, setLicenseNumber] = useState('');
   const [lastName, setLastName] = useState('');
   const [firstName, setFirstName] = useState('');
   const [surname, setSurName] = useState('');
   const [bikeType, setBikeType] = useState('');
   const [bikeColor, setBikeColor] = useState('');
   const [date, setDate] = useState('');
   const [additionalInfo, setAdditionalInfo] = useState('');
   const [reports, setReports] = useState([]);
   

   
   
   const [theft, setThefts] = useState([]);
   const [officers, setOfficers] = useState([]);
   const [selectedOfficer, setSelectedOfficer] = useState([]);
  

   useEffect(() => {
       axios.get('/api/cases')
       .then(response => setThefts(response.data))
       .catch(error => console.error(error));
   }, []) ;

   useEffect(() => {
       axios.get('/api/officers')
       .then(response => setOfficers(response.data))
       .catch(error => console.error(error));
   }, []);

   function handleOfficerChange(event) {
    setSelectedOfficer(event.target.value);
   };

   const handleDelete = async (id) => {
    try {
      await axios.delete('/api/cases/${id}');
      setReports(reports.filter((report) => report._id !== id) );

    } catch (error) {
      console.error(error)
    }
  };


   const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/cases')
    const report = {
      licenseNumber,
      lastName,
      firstName,
      surname,
      bikeType,
      bikeColor,
      date,
      officers,
      additionalInfo,
    
    };
    setReports([...reports,report]);
    setLicenseNumber('');
    setLastName('');
    setFirstName('');
    setSurName('');
    setBikeType([]);
    setBikeColor('');
    setDate('');
    setOfficers('');
    setAdditionalInfo('');




   };
   const options = [
    {value: 'mountain', label: 'Montain'},
    {value: 'urban', label: 'Urban'},
    {value: 'road', label: 'Road'},
    {value: 'track', label: 'Track'},


   ];
   const  handleSelectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setBikeType(selectedOptions);
   }


   return (
   
     <Container >
       <Form onSubmit={handleSubmit} className="mb-4">
         <Form.Group className="mb-3" controlId="formLicense">
           <Form.Label>License Number</Form.Label>
           <Form.Control type="text" placeholder="Номер лицензии" value={licenseNumber}
           onChange={(e)=> setLicenseNumber(e.target.value)} required/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formSurname">
           <Form.Label>Lastname</Form.Label>
           <Form.Control type="text" placeholder="Фамилия"  value={lastName}
           onChange={(e) => setLastName(e.target.value)} required />
         </Form.Group>
      
         <Form.Group className="mb-3" controlId="formName">
           <Form.Label>Firstname</Form.Label>
            <Form.Control type="text" placeholder="Имя" value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}required />
         </Form.Group>
         
         <Form.Group className="mb-3" controlId="formLastname">
           <Form.Label>Surname</Form.Label>
            <Form.Control type="text" placeholder="Отчество" value={surname}
            onChange={(e) => setSurName(e.target.value)} required/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBiketype">
           <Form.Label>Bike type</Form.Label>
      
           
           <Form.Select name="type" placeholder='Тип велосипеда'value={bikeType}
           onChange={(e) => setBikeType (e.target.value)} required >
            <option value=""></option>
             <option value="mountain">горный</option>
             <option value="urban">городской</option>
             <option value="road">дорожный</option>
             <option value="track">трековый</option>
             <option value=""></option>
           </Form.Select>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formColor">
           <Form.Label>Bike color</Form.Label>
            <Form.Control type="text" placeholder="цвет велосипеда" value={bikeColor}
            onChange={(e) => setBikeColor(e.target.value)} required />
         </Form.Group>
         <Form.Group className="mb-3" controlId="eventtime">
         <Form.Label>data</Form.Label>
            <Form.Control type="date" placeholder="дата кражи"  value={date}
             onChange={(e) => setDate(e.target.value)} required/>
         </Form.Group>
         
          <Form.Group>
              <Form.Label>Responsible officer</Form.Label>
              <Form.Select name='officer' value={selectedOfficer} onChange={(e) =>
                  setOfficers (e.target)} required>
                <option value="">Responsible officer</option>
                <option key={officers.id} value={officers.id}>{officers.fullName}</option>
              </Form.Select>
         </Form.Group>
          
         
         <Form.Group className="mb-5" controlId="additional_info">
         <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Additional info" />
         </Form.Group>
      
     
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Добавить
      </Button>
      <Button onClick={ handleDelete} variant="primary" type="delete">Удалить</Button>
     
     
    </Form>
    <ul>
      {reports.map((report,index) =>(
        <TheftReport key={index} report={report}/>
      ))}
    </ul>
  

     </Container>

)};