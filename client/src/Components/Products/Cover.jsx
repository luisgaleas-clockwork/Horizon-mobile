import React from "react"

const Cover = (props) => {
    const { state, info } = props
    if (state.genre == "none" || info.genre == state.genre) {
        return (
            <div className="card__container">
                <div className="product__container">
                    <div className="product__image_container">
                        <img src={info.img_url} />
                        <div className="product__text_container">
                            <h4>{info.product_name}</h4>
                            <h4>{info.artist}</h4>
                            <p className="hide">${info.price}</p>
                            <p>{info.description}</p>

                        </div>
                    </div>
                </div>
                <div className="display_text">
                    <h3>{info.product_name}</h3>
                    <p>Price: ${info.price}</p>
                </div>
            </div>
        )
    } else return null

}

export default Cover