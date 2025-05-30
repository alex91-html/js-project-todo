import styled from 'styled-components';
import { format } from 'date-fns';
import { useTodoStore } from '../store/todoStore';


const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;

  @media (min-width: 1024px) {
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  }
`;

const DateText = styled.div`
  font-size: 0.95rem;
  color: #888;
  margin-top: 12px;
`;

const DayText = styled.h1`
  margin: 0;
  margin-top: 2px;
`;
const TaskCount = styled.div`
  font-size: 1rem;
  color: #888;
  margin: 8px 0 0 0;
`;

const Header = () => {
  const now = new Date();
  const tasks = useTodoStore((s) => s.tasks);
  const uncompleted = tasks.filter(t => !t.completed).length;

  return (
    <HeaderContainer>
      <DateText>{format(now, "do MMM yyyy")}</DateText>
      <DayText>{format(now, "EEEE")}</DayText>
      <TaskCount>{uncompleted} tasks</TaskCount>
    </HeaderContainer>
  );
};

export default Header;