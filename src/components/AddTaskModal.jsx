import styled from 'styled-components';
import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import { useThemeStore } from '../store/themeStore';


const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 200;

   @media (min-width: 1024px) {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 32px;

  }
`;

const Modal = styled.div`
  background: ${({ theme }) => theme === 'dark' ? '#23272f' : '#fff'};
  color: ${({ theme }) => theme === 'dark' ? '#fafafa' : '#222'};
  width: 100%;
  max-width: 600px;
  border-radius: 32px 32px 0 0;
  padding: 32px 24px 24px 24px;
  box-shadow: 0 -2px 24px rgba(0,0,0,0.08);
  margin-bottom: 0;

@media (min-width: 1024px) {
  width: 100%;
  max-width: 600px;
  border-radius: 32px;
  padding: 48px 40px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
}

`;

const ModalBar = styled.div`
  width: 60px;
  height: 6px;
  background: #e0e3e7;
  border-radius: 3px;
  margin: 0 auto 18px auto;
`;

const ModalTitle = styled.h2`
  color: ${({ theme }) => theme === 'dark' ? '#fafafa' : '#222'};
  text-align: center;
  font-size: 2rem;
  margin: 0 0 24px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 18px;
  border-radius: 16px;
  border: 2px solid #b5cdfa;
  background: #f7f8fa;
  font-size: 1.15rem;
  margin-bottom: 18px;
  outline: none;
  color: #222;
  &::placeholder {
    color: #aab2bb;
    font-size: 1.1rem;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: none;
  background: #f7f8fa;
  font-size: 1.1rem;
  margin-bottom: 28px;
  color: #222;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
`;

const CancelButton = styled.button`
  flex: 1;
  padding: 18px 0;
  border-radius: 16px;
  border: none;
  background: #f7f8fa;
  color: #6b7280;

    &:hover {
    background:#e57373;
    color: #fff;
  }


`;

const SubmitButton = styled.button`
  flex: 2;
  padding: 18px 0;
  border-radius: 16px;
  border: none;
  background: #888;
  color: #fff;

  &:hover {
    background: #40405c;;
  }

`;

const AddTaskModal = ({ onClose }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('General');
  const addTask = useTodoStore((s) => s.addTask);
  const theme = useThemeStore((s) => s.theme);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTask({
        id: Date.now(),
        title: value,
        category,
        completed: false,
        createdAt: new Date().toISOString(),
      });
      setValue('');
      setCategory('General');
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <Modal theme={theme}>
        <ModalBar />
        <ModalTitle theme={theme}>Add New Task</ModalTitle>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="What needs to be done?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-label="Task name"
            autoFocus
          />
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Category"
          >
            <option value="General">General</option>
            <option value="Finance">Finance</option>
            <option value="Freelance">Freelance</option>
            <option value="Design">Design</option>
            <option value="Shopping List">Shopping List</option>
            <option value="Personal">Personal</option>
            <option value="Health">Health</option>
          </Select>
          <ButtonRow>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <SubmitButton type="submit">
              Add Task
            </SubmitButton>
          </ButtonRow>
        </form>
      </Modal>
    </ModalOverlay>
  );
};

export default AddTaskModal;