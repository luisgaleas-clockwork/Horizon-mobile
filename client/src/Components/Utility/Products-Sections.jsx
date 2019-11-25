import React from 'react'

const ProductItem = (props) => {
    const { products } = props
    return (
        <div className="products-group">
            <div className="album-description" >
                <img src={products.image} alt="Album covers" />
                <div className="text-position">
                    <h4>{products.name}</h4>
                    <p>{products.price}</p>
                    <p className="product-description">{products.description}</p>
                </div>
            </div >
        </div>
    )
}

export default ProductItem