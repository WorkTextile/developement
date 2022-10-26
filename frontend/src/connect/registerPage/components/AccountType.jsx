import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../../../auth/useToken';

const AccountType = ({ goToNext }) => {
    const [token, setToken] = useToken();
    const [accountType, setAccountType] = useState("");
    const [clientStructure, setClientStructure] = useState("");
    const [usineStructure, setUsineStructure] = useState("");
    const [freelance, setFreelance] = useState("");
    const [particulier, setParticulier] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const onSignUpClicked = async () => {
      const response = await axios.post('/api/account-type', {
        accountType: accountType,
        client: clientStructure,
        usine: usineStructure,
        freelance: freelance,
        particulier: particulier,
      });
      const {token} = response.data;
      setToken(token);
      navigate.push('/profile');
    }

  return (
    <div className='content-container'>

      <h1>Inscription pour les professionnels</h1>

      {errorMessage && <div className='fail'>{errorMessage}</div>}

      <select
        onChange={(e) => setAccountType(e.target.value)}
        value={accountType}
      >
        <option>Quel est votre type de compte</option>
        <option>Client</option>
        <option>Usine</option>
        <option>Freelance</option>
        <option>Particulier</option>
      </select>

    {accountType === "Client" && 
      <select
        onChange={(e) => setClientStructure(e.target.value)}
        value={clientStructure}
      >
        <option>Quel est votre type de structure ?</option>
        <option value="Marque">Marque</option>
        <option value="Entreprise">Entreprise</option>
        <option value="Association">Association</option>
        <option value="Collectivite">Collectivite</option>
      </select>
    }

    {accountType === "Usine" &&
      <select 
        onChange={(e) => setUsineStructure(e.target.value)}
        value={usineStructure}
      >
        <option>Quel est votre type de structure ?</option>
        <option value="Usine de Confection">Usine de Confection</option>
        <option value="Usine de Matiere">Usine de Matiere</option>
        <option value="Usine de Filature">Usine de Filature</option>
        <option value="Usine de Decoupe">Usine de Decoupe</option>
        <option value="Usine de d'accessoires">Usine de d'accessoires</option>
        <option value="Usine de Decoupe">Atelier Serigraphie et Broderie</option>

      </select>
    }
      <button
        disabled={
            !clientStructure && !usineStructure 
        } 
        onClick={() => goToNext({ onSignUpClicked})}>Validez votre inscription !</button>
    </div>
  )
}

export default AccountType;