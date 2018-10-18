import React from 'react';
import T from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';
import s from './TodoList.module.css'

const TodoList = ({
    items,
    onTodoClick,
    onTodoRemoveClick,
    itemRef
}) => (
    <ul className={s.ulStyles}>
        {items.map(i=> (
            <TodoItem 
                onRemoveClick={onTodoRemoveClick}
                onClick={onTodoClick} 
                key={i.id} 
                itemRef={itemRef}
                {...i} 
            />
        ))}
    </ul>
);

TodoList.propTypes = {
    value : T.string,
    onClick: T.func,
    onChangeText : T.func,
}

export default TodoList;