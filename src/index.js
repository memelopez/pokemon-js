// src/index.js
import './styles.css';
import Store from './modules/store';

// variables
let pokemonList = [];
let appID;
const newAppURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/`;


appID = Store.getAppID();

// methods

const newAppID = async (url) => {
  const newAppURL = `${url}/apps/`;
  const response = await fetch(newAppURL, {
    method: 'POST',
    mode: 'CORS',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

const loadAppID = async (url) => {
  appID = await newAppID(url);
  console.log('-->index, loadAppID: ', appID);
};

const initPokeApp = () => {
  if (appID) { // appID is in localStorage
    console.log('-->index, initPoke - appId is in localStorage');
  } else { // appID IS NOT in localStorage
    loadAppID(newAppURL);
  }
};

// Events

// When content loads
document.addEventListener('DOMContentLoaded', initPokeApp());