import styled from 'styled-components';
import { useTodoStore } from '../store/todoStore';
import TaskItem from './TaskItem';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
margin: 0; 
font-size: 1.2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const TaskList = () => {
  const tasks = useTodoStore((s) => s.tasks);
  const todos = tasks.filter((t) => !t.completed);
  const dones = tasks.filter((t) => t.completed);

  return (
    <TaskListContainer>
      {tasks.length === 0 ? (
        <EmptyState>
          <DotLottieReact
            autoplay
            loop
            src="https://lottie.host/89ccd181-963b-4dfd-a0c9-be71032ed21c/huOeFAm1JL.lottie"
            style={{ height: 300, width: 300, marginBottom: 16, filter: 'grayscale(1)' }}
            aria-label="No tasks animation"
          />
          No tasks yet. Add your first task!
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