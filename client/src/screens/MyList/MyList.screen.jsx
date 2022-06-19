import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `task-${k}`,
        content: `Task ${k}`
    }));

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 10;

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "#77e2e0" : "#33c9c7",
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "#a1ffc5" : "#daffff",
    padding: grid,
    width: 250
});

const MyList = (props) => {

    const [list, setList] = useState(getItems(10));

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        setList(reorder(list,result.source.index,result.destination.index));
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {list.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default MyList;