import { Container, Title, Card, Text, Button, ButtonContainer, Message } from '../../assets/styles';

const Doing = ({tasks, deleteTask, changeStatus}: Props) => {
  tasks = tasks.filter(task => task.status === "doing")
  return (
        <Container>
      <Title>Doing</Title>
      {tasks.length ? tasks.map((task,index) => (
        <Card key={index}>
          <Text fontSize="20px" isBold={true}>
            {task.title}
          </Text>
          <Text>
            {task.description}
          </Text>
          <ButtonContainer>
            <Button onClick={() => changeStatus(task.id, "todo")}> <i className="fas fa-arrow-left"></i> </Button>
            <Button onClick={() => deleteTask(task.id)}><i className="fas fa-trash"></i></Button>
            <Button onClick={() => changeStatus(task.id, "done")}> <i className="fas fa-arrow-right"></i> </Button>
          </ButtonContainer>
        </Card>
      )) : <Message>Nenhuma tarefa está sendo feita!</Message>}
    </Container>
  );
};

export default Doing;