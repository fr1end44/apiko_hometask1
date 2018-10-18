import React from 'react';
import T from 'prop-types';
import s from './Footer.module.css';

const Footer = ({
    items,
    onAllClick,
    onCompletedClick,
    onUncompletedClick
}) => (
    <div className={s.footerClass}>
        <button 
            className={s.buttonStyles}
            onClick={onAllClick}
        >
            All
        </button>
        <button 
            className={s.buttonStyles}
            onClick={onCompletedClick}
        >
            Completed
        </button>
        <button
            className={s.buttonStyles}
            onClick={onUncompletedClick}
        >
            Uncompleted
        </button>
    </div>
);

Footer.propTypes = {
    todos : T.array,
    onClick: T.func,
}

export default Footer;








