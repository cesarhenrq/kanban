import { InputContainer, Label, StyledTextArea, StyledInput } from './styles'

import {ChangeEvent, Dispatch, SetStateAction} from 'react'

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  tag?: 'input' | 'textarea';
  label: string;
};

const Input = ({value, setValue, tag = 'input', label}: Props) => {
  const Component = tag === 'textarea' ? StyledTextArea : StyledInput;

  return(
    <InputContainer>
      <Label>
        <Component value={value} onChange={(evt:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(evt.target.value)} placeholder={label}/>
      </Label>
    </InputContainer>
  );
};

export default Input;