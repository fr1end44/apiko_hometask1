import React from 'react';
import T from 'prop-types';
import s from './TodoItem.module.css';
import cx from '../../../node_modules/classnames/bind';


const classes = cx.bind(s)

const TodoItem = ({
    title,
    id,
    completed,
    onClick,
    itemRef,
    onRemoveClick
}) => {
    const className = classes({ completed });
    return (
        <div 
        className={s.container}>
            <li 
            ref={itemRef}
            onClick={()=> onClick(id)}
            className={className}
            >
                {title}
            
            </li>
            <button className={s.buttonStyles} onClick={() => onRemoveClick(id)}>x</button>
        </div>
    )
};

TodoItem.propTypes = {
    title: T.string,
    id: T.number,
    completed : T.bool,
    onClick: T.func,
}

export default TodoItem;