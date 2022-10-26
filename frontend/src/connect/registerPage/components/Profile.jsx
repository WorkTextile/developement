import React,{useState} from "react";
import Image from "./Image";
import { useNavigate  } from 'react-router-dom';
import { useToken } from "../../../auth/useToken";
import axios from 'axios';

const Profile = ({goToNext}) => {

    const [token, setToken] = useToken();
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [contact, setContact] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const onSignUpClicked = async () => {
      const response = await axios.post('/api/signup', {
        lastName: lastName,
        firstName: firstName,
        contact: contact,
      });
      const {token} = response.data;
      setToken(token);
      navigate.push('/info');
    }

    
    return (
        <>
            <div className='content-container'>
            <h1>Information sur votre Profile</h1>
            <Image />
            {errorMessage && <div className='fail'>{errorMessage}</div>}
            <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='nom'
            />
            <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='prenom'
            />
            <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder='telephone number'
            />
            <button
                disabled={
                    !lastName || !firstName
                } 
                onClick={ () => goToNext({ onSignUpClicked })}>Next</button>
            
            </div>
        </> 

    );
   
};

export default Profile;

