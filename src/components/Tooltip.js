import React from 'react';

const styleImage = {
    height: "85%",
    width: "100%",
    transform: "none",
    transition: "none",
}
const styleH3={
    margin: "0px 5px",
}
const urlImage = "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1";
function Tooltip({Title, xPostion, yPostion}){
    
    return (
        
        <div style={{top: yPostion, left: xPostion}} className="tooltipBox">
            <img style={styleImage}   src={urlImage} alt="map"/>
            <h3 style={styleH3}>{Title}</h3>
            
        </div>
        
    )

}

export default Tooltip;