import React,{useState} from "react";
import Image from "./Image";
import { useNavigate  } from 'react-router-dom';
import { useToken } from "../../../auth/useToken";
import axios from 'axios';

const Info = ({goToNext}) => {

    const [token, setToken] = useToken();
    const [brand, setBrand] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [city, setCity] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const onSignUpClicked = async () => {
      const response = await axios.post('/api/signup', {
        brand: setBrand,
        jobTitle: jobTitle,
        city: city,
      });
      const {token} = response.data;
      setToken(token);
      navigate.push('/info');
    }

    
    return (
        <>
            <div className='content-container'>
            <h1>Information sur votre Brand</h1>
            <Image />
            {errorMessage && <div className='fail'>{errorMessage}</div>}
            <input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder='votre marque'
            />
            <input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder='post'
            />
            <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='ville'
            />
            <button
                disabled={
                    !brand || !city
                } 
                onClick={ () => goToNext({ onSignUpClicked })}>Next</button>
      
            </div>
        </> 

    );
   
};

export default Info;

