
import '../styles/app.scss';

import { useState, useEffect } from 'react';
import {  Route, Switch } from 'react-router-dom';
import getCharactersFromApi from './services/Api';
import Header from './Header';

import CharacterList from './CharacterList';
import Filter from './Filter';

function App() {
  
  const [data , setData] = useState([]);
  


 
  useEffect(() => {
    getCharactersFromApi()
      .then( (data) => {
        setData(data)
    });
  } , []);
  console.log (data);



  return (
    <div className="page">
    
    <Header />

    <main>
      <section>
        <Filter />
        <CharacterList data={data} />
       </section>
    </main>

    

  </div>
  );
}

export default App;
