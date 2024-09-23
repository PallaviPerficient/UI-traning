import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { moveItem } from '../redux/boardSlice';
import Modal from './Modal';

const Board = () => {
  const dispatch = useDispatch();
  const columns = useSelector(state => state.board.columns);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    dispatch(moveItem({
      sourceColumn: source.droppableId,
      sourceIndex: source.index,
      destinationColumn: destination.droppableId,
      destinationIndex: destination.index
    }));
  };

  return (
    <div className="board">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([columnId, column], index) => (
          <Droppable droppableId={columnId} key={columnId}>
            {(provided) => (
              <div
                className="column"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2>{columnId}</h2>
                {column.map((item, index) => (
                  <Draggable key={index} draggableId={item.title} index={index}>
                    {(provided) => (
                      <div
                        className="item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <h4>{item.title}</h4>
                        <p>Assigned to: {item.assignment}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
      <Modal />
    </div>
  );
};

export default Board;
