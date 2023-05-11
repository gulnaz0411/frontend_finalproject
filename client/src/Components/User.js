import { useState, useEffect} from  'react';
import axios from 'axios';

export const User = ({ token, setToken}) => {
    const [username, setUsername] = useState('');

    useEffect( () => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/user', {
                    headers: { Authorization: `Bearer ${token}`},
                });
                setUsername(response.data.username);
            } catch (error) {
                console.error(error);
                setToken(null);
            }
        };
        fetchUser();
    }, [token, setToken]
 );
 const handleLogout = () => {
    setToken(null);
 };

 return (
    <div>
        <p>Welcome, {username}!</p>
        <button onClick={handleLogout}>Log Out</button>
    </div>
 );
};