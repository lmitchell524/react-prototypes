import React from 'react';

export default props => {
    return(
        <div className="form-group">
            <label>{props.label}</label>
            <input className="form-control" {...props}/>
        </div>                                  //destructing - this puts all the props created in contact-form on Field onto this input form
    )
}