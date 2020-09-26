import React,{useEffect, useState} from "react";

import './App.css';
import Cards from "./components/Cards";

import Header from "./components/header";

import axios from "axios";



const App=()=>{
    const [value,setValue]=useState("");
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const APP_ID="5db4f781";
    const APP_KEY="c883623ca28ad4d823e337fd0f610546";
    const API=`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${value}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const API2=`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;

    
    useEffect(()=>{
        setLoading(true)
        axios.get(API2).then(res=>{
            setLoading(false)
            console.log(res);
            setData(res.data.hits)
            
            setValue("")
        })
    },[])

  
  const getData=()=>{
      setLoading(true)
  axios.get(API).then(res=>{
      setLoading(false)
      setData(res.data.hits)
      
      console.log(res)
      setValue("")
  })
}
    
    return(
        <div>
        <div className="div1">
    <Header/>
    <div style={{textAlign:"center"}}>
            <input  className="input" type="text" autoFocus={false} value={value}
             onChange={e=>setValue(e.target.value)} placeholder="search for foods"/>
            <button type="submit" onClick={getData}>search</button>
        </div>
    </div>
    {data==false?<div className="rig"><h4 style={{marginTop:190,marginLeft:30}}>Item not found</h4></div>:<div className="rig">
    {loading?<h4 style={{marginTop:200}}>loading...</h4>:<div className="div2">
  
  {data.map((item,index)=>{
      return <Cards key={index} data={item}/>
  })}
  

 </div>}
    </div>} 
    <div className="footer">
    <h5 style={{position:"absolute",color:"white",marginLeft:630,letterSpacing:5}}>Ahamed Salih</h5>
    <h5 style={{position:"absolute",color:"white",marginLeft:1100,letterSpacing:3}}>Contact Us:8667430719</h5>
    </div>
    
        </div>
    )
}


const pics=[{
    image:"https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg",
    name:"burger",
    price:120
},{
    image:"https://lh3.googleusercontent.com/proxy/IQcyEf1tyRKv_b1n6sjvJapAJevSi8NMZ2XOTiHPMtOWz_V43BuV0pmD2nfb_hm5hyWiuUxqcyh_9ApHRmz8_Wzt",
    name:"pizza",
    price:150
},{
    image:"https://s.yimg.com/ny/api/res/1.2/V.Zbx29_UL6GNH7hJIdkMA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/galvanized/8bbf51b0b659325bd3d81785c410c32a",
    name:"chilly favor",
    price:200
},
{
    image:"https://media-cdn.tripadvisor.com/media/photo-s/11/ad/84/e4/the-shawarma-co-is-all.jpg",
    name:"sawarma",
    price:80
},{
    image:"https://www.lecremedelacrumb.com/wp-content/uploads/2019/05/best-easy-grilled-chicken-2.jpg",
    name:"grill chicken",
    price:280
},{
    image:"https://cdn.tasteatlas.com/images/toplistarticles/d0e6a0a79d5f4197a51f4ca065393ffe.jpg?w=600&h=450",
    name:"indian combo",
    price:180
},{
    image:"https://ics20761.weebly.com/uploads/4/5/5/8/45589675/5626494_orig.jpg",
    name:"Broster combo",
    price:120
},{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTm_SaTM1SKSPF1OtJtZm7etzeS2tPQ6EiQCw&usqp=CAU",
    name:"Chicken corden",
    price:150
},{
    image:"https://sohana.ca/wp-content/uploads/2018/07/Chicken-Biryani.jpg",
    name:"Biryani",
    price:180
}]


export default App;