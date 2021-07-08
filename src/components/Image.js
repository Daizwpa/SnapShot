import React, { useState } from "react";
import Tooltip from "./Tooltip"


const Image = ({ url, alt }) => {
  const [clickImage, setClickImage] = useState(false);
  const [postion, setPostion] = useState();


  return(
    <>
      <li onClick ={(e)=>{setClickImage(true); setPostion([e.pageX, e.pageY]);}} onMouseLeave={(e)=>{setClickImage(false)}}>
        <img  src={url} alt={alt} />   
        {clickImage && <Tooltip Title={alt}  xPostion = {postion[0]} yPostion = {postion[1]} />}
      </li>
      
    </>


  );
}
 



 


export default Image;
