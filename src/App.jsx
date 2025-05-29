import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export const App = () => (
  <Router>
    <GlobalStyle />
    <Header />
    <main>
      <AddTask />
      <TaskList />
    </main>
  </Router>
);