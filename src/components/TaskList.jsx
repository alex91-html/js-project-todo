import styled from 'styled-components';
import { useTodoStore } from '../store/todoStore';
import { useThemeStore } from '../store/themeStore';
import TaskItem from './TaskItem';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';

const SectionTitle = styled.h2`
  margin: 24px 0 8px 0;
`;

const TaskListContainer = styled.div`
  width: 100%;
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

const ShowAllCategoriesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  margin-top:  16px;
  padding: 12px 24px;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme === 'dark' ? '#23272f' : '#111'};
  color: ${({ theme }) => theme === 'dark' ? '#ffe066' : '#fff'};
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.18s, transform 0.18s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);

  &:hover {
    background: ${({ theme }) => theme === 'dark' ? '#333' : '#40405c'};
    color: #fff;
  }
`;

const TaskList = () => {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const tasks = useTodoStore((s) => s.tasks);
  const theme = useThemeStore((s) => s.theme);
  const filteredTasks = categoryFilter
    ? tasks.filter((t) => t.category === categoryFilter)
    : tasks;

  const todos = filteredTasks.filter((t) => !t.completed);
  const dones = filteredTasks.filter((t) => t.completed);

  return (
    <TaskListContainer>
      <TaskListContent>
        {categoryFilter && (
          <ShowAllCategoriesButton
            onClick={() => setCategoryFilter(null)}
          >
            Show all categories
          </ShowAllCategoriesButton>
        )}
        {filteredTasks.length === 0 ? (
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
                {todos.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onCategoryClick={setCategoryFilter}
                  />
                ))}
              </>
            )}
          </>
        )}
      </TaskListContent>
      {dones.length > 0 && (
        <DoneSection theme={theme}>
          <TaskListContent>
            <SectionTitle>Done</SectionTitle>
            {dones.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onCategoryClick={setCategoryFilter}
              />
            ))}
          </TaskListContent>
        </DoneSection>
      )}
    </TaskListContainer>
  );
};

export default TaskList;