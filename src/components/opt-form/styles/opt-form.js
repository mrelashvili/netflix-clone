import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 414px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  margin-bottom: 20px;

  &:focus {
    outline: 0;
    border: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #e50914;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 15px;
    margin: 20px 0;
    font-weight: bold;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 19px;
  color: #fff;
  text-align: center;


  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;