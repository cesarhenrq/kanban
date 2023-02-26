import { Container, Title, Card, Text, Button, EditButton, Icon, ButtonContainer, Message, ContainerTextButton } from '../../assets/styles'

const ToDo = ({tasks, deleteTask, changeStatus, setIsEditMode, setUpdatedTask}: Props) => {
  tasks = tasks.filter(task => task.status === 'todo')
  return (
    <Container>
      <Title>To Do</Title>
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
            <Button onClick={() => deleteTask(task.id)}>
              <Icon 
               className="fas fa-trash"/>
            </Button>
            <Button 
              onClick={() => changeStatus(task.id, "doing")}> 
              <Icon 
                className="fas fa-arrow-right"/> 
            </Button>
          </ButtonContainer>
        </Card>)) : <Message>Nenhuma tarefa a fazer!</Message>}
    </Container>
  );
};

export default ToDo;