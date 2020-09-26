import React from 'react';


const Cards=(props)=> {
    const url=props.data.recipe.url
    return (
    
       <div className="container">
       <img src={props.data.recipe.image}/>
       <h6 style={{textAlign:"center"}}>{props.data.recipe.label}</h6>
       <a href={url} className="tag" style={{position:"absolute",marginTop:-40,marginLeft:80,letterSpacing:3}}>details</a>
        </div>
   
    
    )
}


export default Cards;
