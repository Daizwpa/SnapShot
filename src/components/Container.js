import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";


const Container = ({ searchTerm, }) => {
  let location = useLocation();
  const { images, loading, runSearch , setImages, setLoading} = useContext(PhotoContext);
  
  useEffect(() => {
    let data = window.localStorage.getItem(location.pathname);
    if(data){ 
      setImages(JSON.parse(data));
      setLoading(false);
    }else{
      runSearch(searchTerm, location); 
    }
  }, [searchTerm]);

  return (
    <div className="photo-container">
      { 
        loading ? (<Loader /> ):( <Gallery data={images} handleOnClick={(e,t)=>{console.log(t)}} />)
      }
    </div>
  );
};

export default Container;
