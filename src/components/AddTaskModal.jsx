import styled from 'styled-components';
import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 200;
`;

const Modal = styled.div`
  background: #fff;
  width: 100%;
  max-width: 600px;
  border-radius: 32px 32px 0 0;
  padding: 32px 24px 24px 24px;
  box-shadow: 0 -2px 24px rgba(0,0,0,0.08);
  margin-bottom: 0;
`;

const ModalBar = styled.div`
  width: 60px;
  height: 6px;
  background: #e0e3e7;
  border-radius: 3px;
  margin: 0 auto 18px auto;
`;

const ModalTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
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
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  flex: 2;
  padding: 18px 0;
  border-radius: 16px;
  border: none;
  background: #888;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
`;

const AddTaskModal = ({ onClose }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('General');
  const addTask = useTodoStore((s) => s.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTask({
        id: Date.now(),
        title: value,
        category,
        completed: false,
      });
      setValue('');
      setCategory('General');
      onClose();
    }
  };

  // Close modal on overlay click or Esc key
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <Modal>
        <ModalBar />
        <ModalTitle>Add New Task</ModalTitle>
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
            <option value="Shopping List">Personal</option>
            <option value="Shopping List">Health</option>
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