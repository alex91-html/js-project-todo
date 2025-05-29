import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { MainContainer } from './components/StyledComponents';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export const App = () => (
  <Router>
    <GlobalStyle />
    <MainContainer>
      <Header />
      <main>
        <AddTask />
        <TaskList />
      </main>
    </MainContainer>
  </Router>
);