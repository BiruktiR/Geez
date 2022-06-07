import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

function Continue (){
    useEffect(()=>{
        fetchItems();
    },[]);
    const [items,setItems]=useState([]);

    const fetchItems=async()=>{
        const data = await fetch('/continue');
        const items = await data.json();
        setItems(items);
    };
    return (
        <section>
{
    items.map(item=>(
        <div>
            <p>{item.image}</p>
            <p>{item.title}</p>
            <p>{item.content}</p>
        </div>
    ))
    }
        </section>
    );

    }
    
    

export default Continue;