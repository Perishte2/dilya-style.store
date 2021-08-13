import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
    render() {
        return (
            <>
            <Grid container style={{display:'flex',paddingTop:'100px',paddingLeft:'200px', flexWrap:'wrap'}}>
                <Grid  xs={6} >
                <img  className="contentImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HhVFp9NQ2OVI-fHtw1Cv58GYbUNZuz9WCw&usqp=CAU" alt="Купоны"/>
                
                </Grid>
                <Grid style={{background:'whiteSmoke',borderRadius:'8px',border:'1px groove whiteSmoke',textAlign:'center',paddingTop:'50px',
                paddingLeft:'30px',paddingRight:'30px',paddingBottom:'30px'}} xs={5}>
                <span style={{marginTop:'100px'}}  className="contentDescr">Дорогие покупатели! У нас начинается летний и осенний сезон купонов.
                            Купоны есть разных номиналов : 200 сомов, 500 сомов, 1000 сомов и 5000 сомов.
                            Условия получения купона с номиналом 200 сомов -совершите две покупки на сумму свыше 3000 сомов в общем и получите купон .
                            Условия получения купона с номиналом 500 сомов -необходимо совершить пять покупок на сумму свыше 5000 сомов в общем.
                            Условия получения купона с номиналом 1000 сомов -необходимо совершить десять  покупок на сумму свыше 10000 сомов в общем.
                            Условия получения купона с номиналом 5000 сомов -необходимо совершить пятнадцать покупок на сумму свыше 25000 сомов в общем.
                        </span>
                </Grid>





                <Grid xs={5} style={{paddingTop:'50px',marginTop:'100px',paddingLeft:'30px',paddingRight:'30px',background:'whiteSmoke',borderRadius:'8px',
                border:'1px groove whiteSmoke',textAlign:'center',paddingBottom:'30px'}}  >
                <span style={{paddingTop:'50px'}} className="contentDescr">Дата проведения: 29 ноября 2021г. с 10:00 до закрытия торгового центра
                атмосфера безумного шопинга Black Friday с активной развлекательной программой продлится до той даты, которая указана на официальном сайте.
                           
                        </span>
                
                </Grid>

                <Grid xs={6} style={{paddingTop:'100px',paddingLeft:'120px'}}>
                <img  className="contentImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIg81sR6DpWm6VNA3SWkiHa8YT-bTw2HXRg&usqp=CAU" alt="Купоны"/>
                </Grid>






                <Grid xs={6}>
                <img  style={{marginBottom:'120px',paddingBottom:'30px',addingLeft:'30px',paddingRight:'30px',paddingTop:'100px',height:'500px',marginTop:'100px'}} className="contentImage" src="https://diamondvalleyfcu.org/sites/default/files/Download%20Our%20Mobile%20App%20Today.PNG" alt="Купоны"/>
                
                </Grid>

                  <Grid xs={4} style={{marginBottom:'120px',paddingLeft:'30px',paddingRight:'30px',paddingTop:'50px',marginTop:'100px',background:'whiteSmoke',borderRadius:'8px',border:'1px groove whiteSmoke',textAlign:'center'}}>
                <span className="contentDescr">Скачивайте себе наше приложение Dilya-Style.shop и получайте бонусы совершая покупки за каждые 100 сомов .1 бонус равен 1 сому.
                Накапливайте и тратьте с удовольствием.Есть также специальная скидка 5% для пенсионеров.
                        </span>
                </Grid>
            </Grid>        
         </>




          
             





          
        );
    }
    }


export default Home;