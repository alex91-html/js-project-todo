import styled from 'styled-components';
import { useTodoStore } from '../store/todoStore';
import { useThemeStore } from '../store/themeStore';
import { FiTrash2 } from 'react-icons/fi';
import { format } from 'date-fns';

const TaskRow = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

const Checkbox = styled.input`
  margin-right: 16px;
  width: 22px;
  height: 22px;
`;

const TaskInfo = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-size: 1.1rem;
  color: ${({ completed, theme }) =>
    completed ? '#6a6a6a' : theme === 'dark' ? '#fafafa' : '#222'};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #6a6a6a;
  font-size: 1.3rem;
  margin-left: 8px;
  cursor: pointer;
  align-self: center;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover,
  &:focus {
    color: #e57373; 
  }
`;

const Category = styled.div`
  font-size: 0.9rem;
    color: ${({ theme }) => theme === 'dark' ? '#e0e0e0' : '#6a6a6a'};
  padding: 2px 6px;
  border-radius: 8px;
  margin-top: 2px;
   background: ${({ color, theme }) =>
    theme === 'dark'
      ? (color ? `${color}22` : '#333')
      : (color || '#eee')};
  cursor: pointer;
  text-decoration: underline;
  display: inline-block;
  text-decoration: none;

  &:hover {
     background: #40405c;
    color: #fff;
  }
`;

const categoryColors = {
  General: '#ffe0ec',
  Finance: '#e0f7fa',
  Freelance: '#e0ffe0',
  Design: '#e0e7ff',
  'Shopping List': '#fff9e0',
  Personal: '#f3e0ff',
  Health: '#e0fff4',
};

const Timestamp = styled.div`
  font-size: 0.8rem;
  color: #6a6a6a;
  margin-top: 2px;
`;

const TaskItem = ({ task, onCategoryClick }) => {
  const toggleTask = useTodoStore((s) => s.toggleTask);
  const removeTask = useTodoStore((s) => s.removeTask);
  const theme = useThemeStore((s) => s.theme);


  return (
    <TaskRow>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        aria-label={task.title}
      />
      <TaskInfo>
        <Title completed={task.completed} theme={theme}>{task.title}</Title>
        <Category
          color={categoryColors[task.category]}
          theme={theme}
          onClick={() => onCategoryClick && onCategoryClick(task.category)}
        >
          {task.category}
        </Category>
        {task.createdAt && (
          <Timestamp>
            {format(new Date(task.createdAt), 'd MMM yyyy, HH:mm')}
          </Timestamp>
        )}
      </TaskInfo>
      <DeleteButton aria-label="Delete task" onClick={() => removeTask(task.id)}>
        <FiTrash2 size={20} />
      </DeleteButton>
    </TaskRow>
  );
};

export default TaskItem;