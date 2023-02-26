import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Input from '../input';
import { Container, Title, Card, Button } from '../../assets/styles';
import { FormContainer } from './styles'

type NewTaskProps = {
  tasks: Array<Task>,
setTasks:Dispatch<SetStateAction<Array<Task>>>
}

const NewTask = ({tasks, setTasks}: NewTaskProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState(1)
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => setIsDisabled(!( title && description)), [title, description])
  return(
    <Container>
     <Title>Novo</Title>
     <Card>
      <FormContainer>
       <Input value={title} setValue={setTitle} label="Título"/>
       <Input value={description} setValue={setDescription} tag="textarea" label="Descrição"/>
       <Button onClick={() => {setTasks([...tasks,{title, description, status: 'todo', id }])
 setId(id + 1)
        setTitle('')
        setDescription('')}} disabled={isDisabled}><i className="fas fa-plus"></i></Button>
      </FormContainer>
     </Card>
    </Container>
  );
};

export default NewTask;
