import React from 'react';

export default props => {

    const {firstName, lastName, phone, email} = props.contact;
    console.log('props in contact card: ', props);
    return(
        <div className="col-6 my-3">
            <div className="card">
                <div className="card-header">{lastName}
                    <button className="btn btn-sm btn-outline-danger float-right" type="button" onClick={()=>props.delete(props.cardIndex)}>Delete</button>
                </div>
                <div className="card-block ml-2">
                    <h5 className="card-title">{firstName + ' ' + lastName}</h5>
                    <div className="card-text">
                        <p>
                            <b>Phone: {phone}</b>
                        </p>
                        <p>
                            <b>Email: {email}</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}