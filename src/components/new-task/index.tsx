import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Input from '../input';
import { Container, Title, Card, Button, Icon } from '../../assets/styles';
import { FormContainer } from './styles'

type NewTaskProps = {
  tasks: Array<Task>,
  updatedTask: Task,
  isEditMode: boolean,
setTasks: Dispatch<SetStateAction<Array<Task>>>,
  setUpdatedTask: Dispatch<SetStateAction<Task>>, 
  setIsEditMode: Dispatch<SetStateAction<boolean>>
}

const NewTask = ({tasks, setTasks, isEditMode, setIsEditMode, updatedTask, setUpdatedTask}: NewTaskProps) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [id, setId] = useState<number>(1);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const addNewTask = () => {
    setTasks([...tasks,{title, description, status: 'todo', id }]);
    setId(id + 1);
    setTitle('');
    setDescription('');
  };

  const editTask = () => {
    tasks = tasks.map(task => {
    if (task.id === updatedTask.id) {
      return {
        ...task,
        ...updatedTask
      };
    }
    return task;
  });
    setTasks(tasks);
    setIsEditMode(false);
  };

  const handleTasks = () => {
    isEditMode ? editTask() : addNewTask();
  };

  const handleTitleChange = (value: string) => {
    if (isEditMode) {
      setUpdatedTask({...updatedTask, title: value});
    } else {
      setTitle(value);
    };
  };

  const handleDescriptionChange = (value: string) => {
    if (isEditMode) {
    setUpdatedTask({...updatedTask, description: value});
    } else {
    setDescription(value);
    };
  };


  useEffect(() => 
   {isEditMode ? setIsDisabled(!(updatedTask.title && updatedTask.description)) : setIsDisabled(!( title && description))
   }, [title, description, updatedTask]);

  const initialTitle = isEditMode ?updatedTask.title : title;
  const initialDescription = isEditMode ? updatedTask.description : description;
  
  return(
    <Container>
     <Title>
      {isEditMode ? 'Editar' : 'Novo'}
     </Title>
     <Card>
      <FormContainer>
       <Input 
         value={initialTitle} 
         setValue={handleTitleChange} 
         label="Título"/>
       <Input 
         value={initialDescription} 
         setValue={handleDescriptionChange} 
         tag="textarea" 
         label="Descrição"/>
       <Button 
         onClick={handleTasks}
         disabled={isDisabled}>
        <Icon 
          className="fas fa-plus"/>
       </Button>
      </FormContainer>
     </Card>
    </Container>
  );
};

export default NewTask;
