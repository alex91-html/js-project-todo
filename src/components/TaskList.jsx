import styled from 'styled-components';
import { useTodoStore } from '../store/todoStore';
import TaskItem from './TaskItem';

const SectionTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 24px 0 8px 0;
`;

const TaskListContainer = styled.div`
  padding: 0 20px;
`;

const TaskList = () => {
  const tasks = useTodoStore((s) => s.tasks);
  const todos = tasks.filter((t) => !t.completed);
  const dones = tasks.filter((t) => t.completed);

  return (
    <TaskListContainer>
      <SectionTitle>Todo</SectionTitle>
      {todos.length === 0 ? (
        <div>No tasks to do. 🎉</div>
      ) : (
        todos.map((task) => <TaskItem key={task.id} task={task} />)
      )}

      <SectionTitle>Done</SectionTitle>
      {dones.length === 0 ? (
        <div>No completed tasks yet.</div>
      ) : (
        dones.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </TaskListContainer>
  );
};

export default TaskList;