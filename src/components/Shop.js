import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import ShopHome from './ShopHome'
import Products from './Products'
import axios from 'axios'
 
class Shop extends Component {
    constructor() {
        super()

        this.state = {
            products: [{category: 'car'}, {category: 'house'}, {category: 'shoes'}, {category: 'house'}]
        }
    }

    componentDidMount() {
        // this.getProducts()
    }

    getProducts = () => {
        axios.get('/api/products').then(res => {
            this.setState({
                products: res.data
            })
        }).catch(err => {
            console.log(err)
        }) 
    }

    render() {

        let categories = this.state.products.reduce((categories, product) => {
            if (!categories.includes(product.category)) {
              categories.push(product.category);
            }
            return categories;
          }, []);

          console.log('THESE ARE MY CATEGORIES:', categories)

        return (
            <div>
                {categories.map(category => {
                    return (
                    <Link key={category} to={`/shop/${category}`}>{category}</Link>
                    )
                })}
                <Route exact path="/shop" component={ShopHome}/>
                <Route path="/shop/:category" render={props => {
                    return <Products {...props} products={this.state.products} />
                }}/>
            </div>
        )
    }
}


export default Shop