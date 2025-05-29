import styled from 'styled-components';
import { format } from 'date-fns';
import { useTodoStore } from '../store/todoStore';


const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 24px 20px 0 20px;
  background: #fff;
`;

const DateText = styled.div`
  font-size: 0.95rem;
  color: #888;
  margin-top: 12px;
`;

const DayText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
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
      <TaskCount>{uncompleted} tasks remaining</TaskCount>
    </HeaderContainer>
  );
};

export default Header;