import { Container, Title, Card, Text, Button, ButtonContainer, Message } from '../../assets/styles';

const Done = ({tasks, deleteTask, changeStatus}: Props) => {
  tasks = tasks.filter(task => task.status === 'done')
  return (
            <Container>
      <Title>Done</Title>
      {tasks.length ? tasks.map((task,index) => (
        <Card key={index}>
          <Text fontSize="20px" isBold={true}>
            {task.title}
          </Text>
          <Text>
            {task.description}
          </Text>
          <ButtonContainer>
            <Button onClick={() => changeStatus(task.id, "doing")}> <i className="fas fa-arrow-left"></i> </Button>
            <Button onClick={() => deleteTask(task.id)}><i className="fas fa-trash"></i></Button>
          </ButtonContainer>
        </Card>
      )) : <Message>Nenhuma tarefa concluída!</Message>}
    </Container>
  );
};

export default Done;