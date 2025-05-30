import styled from 'styled-components';
import { useTodoStore } from '../store/todoStore';
import { FiTrash2 } from 'react-icons/fi';
import { format } from 'date-fns';

const TaskRow = styled.div`
  display: flex;
  align-items: flex-start;
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
  color: ${({ completed }) => (completed ? '#aaa' : '#222')};
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #bdbdbd;
  font-size: 1.3rem;
  margin-left: 8px;
  cursor: pointer;
  align-self: flex-start;
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
  color: #b5b5b5;
  padding: 2px 6px;
  border-radius: 8px;
  margin-top: 2px;
  background: ${({ color }) => color || '#eee'};
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
  color: #b5b5b5;
  margin-top: 2px;
`;

const TaskItem = ({ task }) => {
  const toggleTask = useTodoStore((s) => s.toggleTask);
  const removeTask = useTodoStore((s) => s.removeTask);

  return (
    <TaskRow>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        aria-label={task.title}
      />
      <TaskInfo>
        <Title completed={task.completed}>{task.title}</Title>
        <Category color={categoryColors[task.category]}>{task.category}</Category>
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