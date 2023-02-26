import styled from 'styled-components';

type TextProps = {
  fontSize?: string;
  isBold?: boolean;
};

type IconProps = {
  color?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  overflow: hidden;
  background-color: #EAEAEA;
  border-radius: 0.2em;
  font-family: "Poppins";
`;

export const Title = styled.h1`
  font-size: 2em;
  margin: .5em 0 .5em .5em;
  color: #3A72F8;
`;

export const Card = styled.div`
  padding: .5em;
  margin: 0 .25em 1em .25em;
  border-radius: 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #f8f8f8;
`;

export const Text = styled.p<TextProps>`
  font-size: ${props => props.fontSize || '16px'};
  font-weight: ${props => props.isBold ? 'bold' : 'normal'};
`;

export const Button = styled.button`
  background-color: #3A72F8;
  color: #fff;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #3A72F8;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Message = styled.div`
  padding: 10px;
  font-size: 1.2rem;
  color: #333;
`;

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const Icon = styled.i<IconProps>`
  color: ${props => props.color ? props.color : 'inherit'};
`;

 export const ContainerTextButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
