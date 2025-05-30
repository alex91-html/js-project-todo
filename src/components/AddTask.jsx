import { useState } from 'react';
import { useThemeStore } from '../store/themeStore';

import styled from 'styled-components';
import AddTaskModal from './AddTaskModal';

const AddButton = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 56px;
  height: 56px;
  border-radius: 20%;
  background: ${({ theme }) => theme === 'dark' ? '#b4b4b4' : '#111'};
  color: ${({ theme }) => theme === 'dark' ? '#4e4e4e' : '#fff'};
  font-size: 2.2rem;
  font-weight: 200;
  font-family: 'Arial', 'Helvetica Neue', Arial, sans-serif; 
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  cursor: pointer;
  z-index: 100;
    transition: background 0.2s, color 0.2s, box-shadow 0.18s, transform 0.18s;


&:hover {
    background: ${({ theme }) => theme === 'dark' ? '#FAE179' : '#40405c'};
  }
  
  @media (min-width: 1024px) {
    position: absolute;
    right: 40px;
    bottom: 40px;
  }

`;

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const theme = useThemeStore((s) => s.theme);


  return (
    <>
      <AddButton onClick={() => setOpen(true)} aria-label="Add task" theme={theme}>
        ＋
      </AddButton>
      {open && <AddTaskModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default AddTask;