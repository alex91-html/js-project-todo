import { useState } from 'react';
import styled from 'styled-components';
import AddTaskModal from './AddTaskModal';

const AddButton = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 56px;
  height: 56px;
  border-radius: 20%;
  background: #111;
  color: #fff;
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
`;

const AddTask = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AddButton onClick={() => setOpen(true)} aria-label="Add task">
        ＋
      </AddButton>
      {open && <AddTaskModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default AddTask;