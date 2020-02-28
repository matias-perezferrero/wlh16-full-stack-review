import React from 'react'

function Products(props) {
    console.log(props)
    let category = props.match.params.category
    let products = props.products.filter(product => product.category === category)

    return (
        <div>
            {products.map(product => {
                return (
                <h3>{product.category}</h3>
                )
            })}
        </div>
    )
    // let category = props.match.params.category
}

export default Products