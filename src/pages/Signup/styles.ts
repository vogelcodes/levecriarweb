import styled from 'styled-components';
import bgImg from '../../assets/enxoval-bg.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  h1 {
    margin-top: 128px;
    margin-bottom: 64px;
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 106.6%;
    /* or 68px */

    text-align: center;
    text-transform: capitalize;

    color: #666349;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  img {
    margin-top: -70px;
    transform: scale(0.4);
  }

  
  p {
    text-align: center;
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${bgImg}) no-repeat center;
  background-size: cover;
`;
export const Form = styled.form`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    width: 480px;
    text-align: center;
    align-items: center;
`;
