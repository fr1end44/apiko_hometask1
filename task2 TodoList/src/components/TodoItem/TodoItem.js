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
    onRemoveClick
}) => {
    const className = classes({ completed });
    return (
        <div 
        className={s.container}>
            <div onClick={()=> onClick(id)}
                className={className}
            >
                {title}
            
            </div>
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