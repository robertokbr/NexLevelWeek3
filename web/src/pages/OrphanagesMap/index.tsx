import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TileLayer, Map } from 'react-leaflet';
import * as S from './styles';
import logoImg from '../../assets/logoImg.svg';
import 'leaflet/dist/leaflet.css';

const OrphanagesMap: React.FC = () => {
  const [mapTheme, setMapTheme] = useState('dark-v10');

  return (
    <S.PageMap>
      <aside>
        <header>
          <img src={logoImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Pará</strong>
          <span>Belém</span>
        </footer>
      </aside>
      <Map
        center={[-1.4508243, -48.4747425]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${mapTheme}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
        />
      </Map>
      <S.ButtonNav to="/">
        <FiPlus size={32} color="#fff" />
      </S.ButtonNav>
    </S.PageMap>
  );
};

export default OrphanagesMap;
