import React from 'react';
import T from 'prop-types';
import s from './Footer.module.css';


const Footer = ({
    onAllClick,
    onCompletedClick,
    onUncompletedClick
}) => {
    return ( 
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
)}

Footer.propTypes = {
    items : T.array,
    onClick: T.func,
}

export default Footer;








