function Header(props){
    return(
        <>
         <header className="d-flex justify-between align-center p-40">
      
        <div className="d-flex align-center">
      <img width={70} height={70} src="/img/shopping.jpeg" alt="logotype"/>
      <div className="headerInfo">
      <h3 className="text-uppercase">Dilya-Style.Shop</h3>
      <p className="opacity-5">Магазин брендовой женской одежды</p>
     </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
         <img width={48} height={48} src="/img/cart.png" alt="cart"/>
         <span className="Korzina" >Корзина</span>
        </li>
       
        {/* <li>
          <img width={48} height={48} src="/img/user.png" alt="User" />
        </li> */}
      </ul>
      </header>
        </>
    );
}

export default Header;