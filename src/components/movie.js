import React from 'react';

export default props => {
    const {info} = props;

    console.log('props:', info);
    return(
        <div className="card-column my-3">
            <div className="text-center card roundedx">
                <div className="my-3 mx-3">
                    <img src={info["im:image"][2].label}/>
                </div>
                <h3>{info["im:name"].label}<span> - </span>{info["im:price"].label} {info["im:price"].attributes.currency}</h3>
                <p className="mx-3">{info.summary.label}</p>
                <div className="my-3">
                    <a className="preview p-2 p-2 rounded" href={info.id.label}>More Info</a>
                </div>
            </div>
        </div>
    )
}

