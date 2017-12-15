import React from 'react';

function ScrapbookImages (props){
    const {src} = props.about;
    const {style} = props.about;
    console.log(props);
    return (
        <img className="scrapbook-image" src={src} style={style}/>
    )
}

export default ScrapbookImages;