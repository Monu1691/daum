import React, { useState, useEffect } from 'react'
import ProductCard from '../product-components/ProductCard';

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
                        const {id, image, price, title, description} = bestSellerVal;
                        return (
                            <>
                            <ProductCard key={id} image={image} actualPrice={price - 5} offerPrice={price} title={title} txt={description} />
                            </>
                        )
                    })}

                </div>
                
            </div>
        </section >
    )
}

export default OurBestsellers
