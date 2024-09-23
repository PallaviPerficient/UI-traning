import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from './store';
import { Provider } from 'react-redux';
import Board from './components/Board';

const App = () => {
  const dispatch = useDispatch();
  const boardData = useSelector(state => state.board);

  useEffect(() => {
    const savedData = sessionStorage.getItem('board');
    if (savedData) {
      dispatch({ type: 'board/setState', payload: JSON.parse(savedData) });
    }
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem('board', JSON.stringify(boardData));
  }, [boardData]);

  return <Board />;
};

export default function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
