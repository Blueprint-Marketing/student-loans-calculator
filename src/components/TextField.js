import React from 'react';

import '@material/textfield/dist/mdc.textfield.css';

export const TextField = ({id, type, label, pattern = ''}) => {
    return (
        <div className="mdc-textfield">
            <input type={type} id={id} className="mdc-textfield__input" pattern={pattern}/>
            <label className="mdc-textfield__label" htmlFor={id}>{label}</label>
        </div>
    );
}