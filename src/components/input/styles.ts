import styled from 'styled-components'

export const StyledInput = styled.input`
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 5px;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  ::placeholder {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  height: 100px;
  font-size: 16px;
  ::placeholder {
    font-size: 16px;
    }
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1em;
  margin-bottom: 0.5em;
`;
