import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    margin: 20px auto;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
    padding: 10px;
    margin: 0 200px;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.4rem;
      margin: 10px auto;
    }

    p {
      font-size: 1rem;
      margin: auto;
      text-align: justify;
    }

    p:last-of-type {
      font-size: 1rem;
      margin: auto;
      text-align: center;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  margin-bottom: 20px;
`;

export const LeftIcon = styled(FiChevronLeft)`
  font-size: 50px;
  cursor: pointer;
  margin-right: 40px;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

export const RightIcon = styled(FiChevronRight)`
  font-size: 50px;
  cursor: pointer;
  margin-left: 40px;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;