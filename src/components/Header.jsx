import styled from 'styled-components';
import { format } from 'date-fns';
import { useTodoStore } from '../store/todoStore';
import { useThemeStore } from '../store/themeStore';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${({ theme }) => theme === 'dark' ? '#23272f' : '#fff'};

  @media (min-width: 1024px) {
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  }
`;

const DateText = styled.div`
  font-size: 0.95rem;
  color: #6a6a6a;
  margin-top: 12px;
`;

const DayText = styled.h1`
  margin: 0;
  margin-top: 2px;
`;
const TaskCount = styled.div`
  font-size: 1rem;
  color:#6a6a6a;
  margin: 8px 0 0 0;
`;

const ThemeSwitch = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 48px;
  height: 28px;
  background: ${({ theme }) => theme === 'dark' ? '#222' : '#eee'};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 4px;
  transition: background 0.2s;
  outline: none;
  z-index: 10;

  &:focus {
    box-shadow: 0 0 0 2px #8882;
  }
`;

const SwitchKnob = styled.span`
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme }) => theme === 'dark' ? '#ffe066' : '#333'};
  transform: ${({ theme }) => theme === 'dark' ? 'translateX(20px)' : 'translateX(0)'};
  transition: transform 0.2s, background 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
`;

const Header = () => {
  const now = new Date();
  const tasks = useTodoStore((s) => s.tasks);
  const uncompleted = tasks.filter(t => !t.completed).length;
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  let taskCountText = '';
  if (uncompleted === 0) {
    taskCountText = '0 tasks';
  } else if (uncompleted === 1) {
    taskCountText = '1 task remaining';
  } else {
    taskCountText = `${uncompleted} tasks remaining`;
  }

  return (
    <HeaderContainer theme={theme}>
      <ThemeSwitch onClick={toggleTheme} theme={theme} aria-label="Toggle dark/light mode">
        <SwitchKnob theme={theme} />
      </ThemeSwitch>
      <DateText>{format(now, "do MMM yyyy")}</DateText>
      <DayText>{format(now, "EEEE")}</DayText>
      <TaskCount>{taskCountText}</TaskCount>
    </HeaderContainer>
  );
};

export default Header;