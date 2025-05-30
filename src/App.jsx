import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { MainContainer } from './components/StyledComponents';
import { useThemeStore } from './store/themeStore';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export const App = () => {
  const theme = useThemeStore((s) => s.theme);

  return (
    <Router>
      <GlobalStyle theme={theme} />
      <MainContainer theme={theme}>
        <Header />
        <main>
          <AddTask />
          <TaskList />
        </main>
      </MainContainer>
    </Router>
  );
};