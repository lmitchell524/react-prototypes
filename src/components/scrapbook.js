import React from 'react';
import './scrapbook.css';
import imageData from './image_data';
import ScrapbookImages from './scrapbook_images';

function Scrapbook (){
    const images = imageData.map((item, index)=>{
        return <ScrapbookImages key={index} about={item}/>
    });

    return (
        <div className="scrapbook-container">
            {images}
        </div>
    )
}

export default Scrapbook;