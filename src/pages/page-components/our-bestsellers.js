import React, { useState, useEffect } from 'react'


const OurBestsellers = () => {
    const [bestSellerData, setBestSellerData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setBestSellerData(data);
        }
        fetchData();
    }, []);

    return (
        <section className="home-our-bestsellers-sec">
            <div className="ad-container">
                <h2 className="ad-site-title">Our Bestsellers</h2>
                <p className="ad-text-desc">Looking for something specific? Shop by category to find your perfect piece of jewellery!</p>

                <div className="ad-product-slider">

                    {bestSellerData.slice(0, 8).map((bestSellerVal) => {
                        return (
                            <div className="ad-product-card" >
                                <div className="ad-img">
                                    <img src={bestSellerVal.image} alt="Product" />
                                </div>
                                <div className="ad-price">
                                    <span className="actual-price"><i className="fa-solid fa-indian-rupee-sign"></i> {bestSellerVal.price}</span>
                                    <span className="offer-price"><i className="fa-solid fa-indian-rupee-sign"></i> {bestSellerVal.price}</span>
                                </div>
                                <h4 className="ad-title">
                                    {(bestSellerVal.title.length > 50) ? bestSellerVal.title.slice(0, 50)+'...' : bestSellerVal.title}
                                </h4>
                                <p className="ad-txt">
                                    {(bestSellerVal.description.length > 150) ? bestSellerVal.description.slice(0, 150) + '...' : bestSellerVal.description}
                                </p>
                            </div>
                        )
                    })}

                </div>
                
            </div>
        </section >
    )
}

export default OurBestsellers
