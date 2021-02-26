import dossTab from '../data/liste-dossiers.json';
import Dossier from './Dossier';
import '../style/ListeDossiers.scss';
import React, { useState } from 'react';
import { ReactSortable } from "react-sortablejs";

export default function ListeDossiers() {
  const [liste, setListe] = useState(dossTab);
  return (
    <ReactSortable tag="ul" list={liste} setList={setListe} className="ListeDossiers" >
      {
        liste.map( 
          dossier =>  <li><Dossier key={dossier.id} {...dossier} /></li>
        )
      }
    </ReactSortable>
  );
}