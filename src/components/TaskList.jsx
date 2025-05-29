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

const EmptyState = styled.div`
color: #bbb; 
text-align: center; 
margin: 48px 0; 
font-size: 1.2rem;
`;


const TaskList = () => {
  const tasks = useTodoStore((s) => s.tasks);
  const todos = tasks.filter((t) => !t.completed);
  const dones = tasks.filter((t) => t.completed);

  return (
    <TaskListContainer>
      {tasks.length === 0 ? (
        <EmptyState>
          No tasks yet. Add your first task! 🎉
        </EmptyState>
      ) : (
        <>
          {todos.length > 0 && (
            <>
              <SectionTitle>Todo</SectionTitle>
              {todos.map((task) => <TaskItem key={task.id} task={task} />)}
            </>
          )}
          {dones.length > 0 && (
            <>
              <SectionTitle>Done</SectionTitle>
              {dones.map((task) => <TaskItem key={task.id} task={task} />)}
            </>
          )}
        </>
      )}
    </TaskListContainer>
  );
};

export default TaskList;