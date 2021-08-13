function Drawer({onClose,onRemove, items=[]}){
    return(
        <>
         <div className="overlay">
           <div className="drawer ">
            <h2 className="d-flex justify-between mb-30 " >
              Корзина  <img onClick={onClose} className="removeBtn cu-p"
               height={30} height={30} src="/img/remove-btn.png" alt="Удалить"/></h2>

               {/* <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                 <img class="mb-20" width="120px" height="120px" src="/img/empty.jpeg" alt="empty_cart"/>
                 <h2>Корзина пустая</h2>
                 <p class="opacity-6">Добавьте хотя бы одну пару кроссовок,
                чтобы сделать заказ</p>
                <button class="greenButton"><img  width={20} height={20} mr={10} src="/img/arrow-back.jpeg" alt=""/>Вернуться назад</button>
               </div> */}
              
              <div className="items">

             {
               items.map((obj)=>(
                <div className="cartItem d-flex align-center mb-20">
              
                <div style={{backgroundImage:`url(${obj.imageUrl})`}} className="cartItemImg">       
                </div>
                <div className="mr-20 flex">
  
                </div>
                <div>
                  <p className=" cartItem1 mb-5">{obj.title}</p>
                  <b>{obj.price}  руб.</b>
                </div>
                  <img onClick={()=>onRemove(obj.id)}  className="removeBtn " height={30} height={30} src="/img/remove-btn.png" alt="Удалить"/>
              </div>
  
  
               ))
             }




            
              <div className="cardTotalBlock">
              <ul >
                <li className="list">
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li className="list2">
                  <span>Налог 5%</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>

              </ul>
              <button className="greenButton">Оформить заказ</button>

              </div>


              </div>
              </div>

        </div>
             
           
        </>
    );
}


export default Drawer;