import { Container, Title, Card, Text, Button, ButtonContainer, Message , ContainerTextButton, Icon, EditButton } from '../../assets/styles';

const Doing = ({tasks, deleteTask, changeStatus, setIsEditMode, setUpdatedTask}: Props) => {
  tasks = tasks.filter(task => task.status === "doing")
  return (
        <Container>
      <Title>Doing</Title>
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
            <Button onClick={() => changeStatus(task.id, "todo")}> 
              <Icon 
                className="fas fa-arrow-left"/>
            </Button>
            <Button 
              onClick={() => deleteTask(task.id)}>
              <Icon 
                className="fas fa-trash"/>
            </Button>
            <Button 
              onClick={() => changeStatus(task.id, "done")}>
              <Icon 
                className="fas fa-arrow-right"/> 
            </Button>
          </ButtonContainer>
        </Card>
      )) : <Message>Nenhuma tarefa está sendo feita!</Message>}
    </Container>
  );
};

export default Doing;