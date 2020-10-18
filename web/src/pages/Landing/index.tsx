import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as S from './styles';
import logo from '../../assets/logoImg.svg';

const Landing: React.FC = () => {
  return (
    <S.Landing>
      <S.Wrapper>
        <img src={logo} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <S.Location>
          <strong>Pará</strong>
          <span>Belém</span>
        </S.Location>
        <Link to="App">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </S.Wrapper>
    </S.Landing>
  );
};

export default Landing;
