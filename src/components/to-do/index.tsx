import { Container, Title, Card, Text, Button, ButtonContainer, Message } from '../../assets/styles'

const ToDo = ({tasks, deleteTask, changeStatus}: Props) => {
  tasks = tasks.filter(task => task.status === 'todo')
  return (
    <Container>
      <Title>To Do</Title>
      {tasks.length ? tasks.map((task,index) => (
        <Card key={index}>
          <Text fontSize="20px" isBold={true}>
            {task.title}
          </Text>
          <Text>
            {task.description}
          </Text>
          <ButtonContainer>
            <Button onClick={() => deleteTask(task.id)}><i className="fas fa-trash"></i></Button>
            <Button onClick={() => changeStatus(task.id, "doing")}> <i className="fas fa-arrow-right"></i> </Button>
          </ButtonContainer>
        </Card>
      )) : <Message>Nenhuma tarefa a fazer!</Message>}
    </Container>
  );
};

export default ToDo;