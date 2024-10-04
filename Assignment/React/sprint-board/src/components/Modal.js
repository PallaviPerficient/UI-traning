import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/boardSlice';

const Modal = () => {
  const [title, setTitle] = useState('');
  const [assignment, setAssignment] = useState('');
  const [state, setState] = useState('New');
  const users = useSelector(state => state.board.users);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title && assignment) {
      dispatch(addItem({ title, assignment, state }));
      setTitle('');
      setAssignment('');
      setState('New');
    }
  };

  return (
    <div className="modal">
      <h3>Add New Item</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength="200"
      />
      <select value={assignment} onChange={(e) => setAssignment(e.target.value)}>
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user} value={user}>{user}</option>
        ))}
      </select>
      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="New">New</option>
        <option value="In Progress">In Progress</option>
        <option value="Blocked">Blocked</option>
        <option value="Resolved">Resolved</option>
        <option value="Done">Done</option>
      </select>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Modal;
