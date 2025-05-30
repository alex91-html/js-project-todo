import styled from 'styled-components';
import { useTodoStore } from '../store/todoStore';
import { useThemeStore } from '../store/themeStore';
import TaskItem from './TaskItem';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const SectionTitle = styled.h2`
  margin: 24px 0 8px 0;
`;

const TaskListContent = styled.div`
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

const DoneSection = styled.div`
  background: ${({ theme }) => theme === 'dark' ? '#23272f' : '#f7f7f7'};
  padding: 18px 0 8px 0;
  margin-top: 32px;
`;

const TaskList = () => {
  const tasks = useTodoStore((s) => s.tasks);
  const theme = useThemeStore((s) => s.theme);
  const todos = tasks.filter((t) => !t.completed);
  const dones = tasks.filter((t) => t.completed);

  return (
    <TaskListContainer>
      <TaskListContent>
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
          </>
        )}
      </TaskListContent>
      {dones.length > 0 && (
        <DoneSection theme={theme}>
          <TaskListContent>
            <SectionTitle>Done</SectionTitle>
            {dones.map((task) => <TaskItem key={task.id} task={task} />)}
          </TaskListContent>
        </DoneSection>
      )}
    </TaskListContainer>
  );
};

export default TaskList;