import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
        
                <div className="logo">
                    <div className="image">
                    <a href="/"><img width={80} height={80}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRnhaWszFVV32cohOrltoXAj4yivgRTMxCw&usqp=CAU"/></a>
                    </div>
                   <div className="title">
                   <h1 >Dilya-Style.Shop</h1>
                   </div>
                     
                </div>
            
        );
    }
}

export default Logo;