import styled, { css } from 'styled-components';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';

export const TestimonialsSession = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;

  h2 {
    font-size: 32px;
    margin: 20px auto;
    text-align: center;
  }

  p {
    font-size: 22px;
    text-align: center;
    padding: 10px;
    margin: 0 200px;
    line-height: 1.5;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 22px;
      margin: 10px auto;
    }

    p {
      font-size: 16px;
      margin: auto;
      text-align: justify;
    }

    p:last-of-type {
      font-size: 16px;
      margin: auto;
      text-align: center;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    h2 {
      margin: 10px auto;
    }

    p {
      margin: auto;
      text-align: justify;
    }

    p:last-of-type {
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

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const RightIcon = styled(FiChevronRight)`
  font-size: 50px;
  cursor: pointer;
  margin-left: 40px;
  user-select: none;

  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

export const Female = styled(FcBusinesswoman)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Male = styled(FcBusinessman)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const StarIcon = styled(FiStar)`
  color: black;
  font-size: 30px;

  ${({ filled }) =>
    filled &&
    css`
      fill: black;
    `}
`;

export const TestimonialText = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
`;
