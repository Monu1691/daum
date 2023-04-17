import React, { useEffect, useState } from 'react'

import AdLoader from '../layout/components/ad-loader'

const ProductPage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const productsFunc = async () => {
            setIsLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            
            const res = await response.json();
            setProducts(res);
            setIsLoading(false);
        }
        productsFunc();
    }, []);

    if (isLoading) {
        return <AdLoader/>;
    }

    return (
        <>
            <main className="site-main">

                <section className="products-wrapp-section">
                    <div className="ad-container">
                        <div className="products-wrapp-row">
                            {products.map((pData) => {
                                return (
                                    <div className="ad-product-card">
                                        <div className="ad-img">
                                            <img src={pData.image} alt="Product" />
                                        </div>
                                        <div className="ad-price">
                                            <span className="actual-price"><i className="fa-solid fa-indian-rupee-sign"></i> 4095.00</span>
                                            <span className="offer-price"><i className="fa-solid fa-indian-rupee-sign"></i> 1,995.00</span>
                                        </div>
                                        <div className="p-txt-wrapp">
                                            <h6 className="ad-category">{pData.category}</h6>
                                            <h4 className="ad-title">
                                                {(pData.title.length > 30) ? pData.title.slice(0, 30) + '..' : pData.title}
                                            </h4>
                                            <p className="ad-txt">
                                                {(pData.description.length > 150) ? pData.description.slice(0, 150) + '..' : pData.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default ProductPage
