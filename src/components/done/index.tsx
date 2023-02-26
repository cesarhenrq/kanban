import { Container, Title, Card, Text, Button, ButtonContainer, Message, ContainerTextButton, Icon, EditButton } from '../../assets/styles';

const Done = ({tasks, deleteTask, changeStatus, setIsEditMode, setUpdatedTask}: Props) => {
  tasks = tasks.filter(task => task.status === 'done')
  return (
            <Container>
      <Title>Done</Title>
      {tasks.length ? tasks.map((task,index) => (
        <Card key={index}>
          <ContainerTextButton>
            <Text 
              fontSize="20px" 
              isBold={true}>
                {task.title}
            </Text>
            <EditButton 
              onClick={() => 
              {setIsEditMode(true)
               setUpdatedTask(task)}}>
              <Icon 
                className="fas fa-edit"
                color="#3A72F8"/>
            </EditButton>
          </ContainerTextButton>
          <Text>
            {task.description}
          </Text>
          <ButtonContainer>
            <Button 
              onClick={() => changeStatus(task.id, "doing")}>
              <Icon 
                className="fas fa-arrow-left"/>
            </Button>
            <Button 
              onClick={() => deleteTask(task.id)}>
              <Icon 
                className="fas fa-trash"/>
            </Button>
          </ButtonContainer>
        </Card>
      )) : <Message>Nenhuma tarefa concluída!</Message>}
    </Container>
  );
};

export default Done;