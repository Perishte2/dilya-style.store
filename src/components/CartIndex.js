import React from 'react';
import Card from './CartActions/Card';
import Drawer from './CartActions/Drawer';
import Header from './CartActions/Header';
import axios from 'axios';


function CartIndex() {
  
  const [items, setItems]=React.useState([]);
  const [cartItems, setCartItems]=React.useState([]);
  const [searchValue, setSearchValue]=React.useState('');
  const [cartOpened, setCartOpened]=React.useState(false);

  React.useEffect(()=>{
    // fetch('https://611373cccba40600170c1a4e.mockapi.io/items')
    // .then((res)=>{
    //   return res.json();
    // })
    // .then((json)=>{
    //   setItems(json);
    // });

    axios.get('https://611373cccba40600170c1a4e.mockapi.io/items')
    .then((res)=>{
      setItems(res.data);
    });
    axios.get('https://611373cccba40600170c1a4e.mockapi.io/cart')
    .then((res)=>{
      setCartItems(res.data);
    });


  },[]);

  const onAddToCart=(obj)=>{
    axios.post('https://611373cccba40600170c1a4e.mockapi.io/cart',obj)
         setCartItems(prev=>[...prev , obj]);
  }
  
  const onRemoveItem=(id)=>{
    // console.log(id);
    // axios.delete(`https://611373cccba40600170c1a4e.mockapi.io/${id}`)
         setCartItems((prev)=>prev.filter((item)=>item.id!==id));
  }
  

  const onChangeSearchInput=(event)=>{
    setSearchValue(event.target.value);
  }


  console.log(cartItems);
   
  
  return (
    <div className="wrapper clear">
      
   
           {cartOpened ?  <Drawer items={cartItems} onClose={()=>setCartOpened(false)}  onRemove={onRemoveItem} /> : null}
           
           
           <Header onClickCart={()=>setCartOpened(true)} />
    

     <div className="content p-40">
       <div className="d-flex align-center justify-between mb-40 ">
       <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Стильная одежда'}</h1>
       <div className="search-block d-flex">
           <img className="search" width={35} height={35} src="/img/search.png" alt="Search"/>
           {searchValue ?  <img  
           onClick={()=>setSearchValue('')}
           className="clear " 
           height={30} height={30} 
           src="/img/remove-btn.png" alt="Clear" /> : 
           null}
           <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
       </div>
       </div>
      
      
          <div className="cards d-flex flex-wrap">
            
          {items.filter((item)=>item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item)=>
        <Card 
        key={item.title}
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
        onPlus={(obj)=>onAddToCart(obj)}
        onFavorite={()=>console.log('Добавили в закладки')}
       
          /> 
     
         )} ;
    
        </div>
   



    </div>
    </div>
  );
}

export default CartIndex;
