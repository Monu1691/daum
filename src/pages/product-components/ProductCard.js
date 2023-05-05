import React from 'react'

const ProductCard = (props) => {
    return (
        <>
        <div className="ad-product-card">
            <div className="ad-img">
                <img src={props.image} alt="Product" />
            </div>
            <div className="ad-price">
                <span className="actual-price"><i className="fa-solid fa-indian-rupee-sign"></i> {props.actualPrice}</span>
                <span className="offer-price"><i className="fa-solid fa-indian-rupee-sign"></i> {props.offerPrice}</span>
            </div>
            <div className="p-txt-wrapp">
                {props.category && <h6 className="ad-category">{props.category}</h6>}
                <h4 className="ad-title">
                    {(props.title.length > 30) ? props.title.slice(0, 30) + '..' : props.title}
                </h4>
                <p className="ad-txt">
                    {(props.txt.length > 150) ? props.txt.slice(0, 150) + '..' : props.txt}
                </p>
            </div>
        </div>
        </>
    )
}

export default ProductCard
