import React from 'react';

function Card({onFavorite, title, imageUrl,price, onPlus}){
    const [isAdded,setIsAdded]=React.useState(false);

     const onClickPlus=()=>{
         onPlus({title, imageUrl,price});
         setIsAdded(!isAdded);
     }
       
    

  console.log(isAdded);

    return (
        <>
        <div className="card ">
        <div className="favorite mb-20">
        <img onClick={onFavorite} width={20} height={20} src="./img/heart-unliked.png" alt="Unliked"/>
        </div>
        
        <img className="clothes  mb-5" width={153} height={113} src={imageUrl}  alt=""/>
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>{price} руб.</b>
        </div>
        
        <img  onClick={onClickPlus} 
        width={25} height={25} src={isAdded? 
        "./img/btn-checked.jpeg":"/img/plus.png"}/>
       
        
       
        </div>
        </div>





        

       
        
        
        </>


    );
}

 export default Card;