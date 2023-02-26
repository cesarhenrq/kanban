type Props = {
  tasks: Array<Task>,
  deleteTask: (id: number) => void,
  changeStatus: (id: number, status: "todo" | "doing" | "done") => void
};