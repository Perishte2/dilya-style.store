import React, { Component } from 'react';
import Home from './section/Home';
import Cart from './section/Cart';
import Contact from './section/Contact';
import Login from './section/Login';
import Blog from './section/Blog';
import {Route} from 'react-router-dom';

class Section extends Component {
    render() {
        return (
            <div>
                 <section>
                  <Route path="/" component={Home} exact/>
                  <Route path="/blog" component={Blog } />
                  <Route path="/cart" component={Cart} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/login" component={Login } />
                  
                 </section>
            </div>
        );
    }
}

export default Section;