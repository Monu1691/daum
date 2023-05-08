import React, { useEffect, useState } from 'react'

import AdLoader from '../layout/components/ad-loader'
import ProductCard from './product-components/ProductCard';

const ProductPage = () => {
    
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    // pagination 
    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const productsFunc = async () => {
            setIsLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');

            const res = await response.json();
            setProducts(res);
            setIsLoading(false);
        }
        productsFunc();
    }, [page]);

    const Limit = 8;
    useEffect(()=>{
        const pageDataCount = Math.ceil(products.length/Limit);
        setPageCount(pageDataCount); 

        if(page){
            const skip = Limit * page;
            const dataSkip = products.slice(page === 1 ? 0 : skip - Limit,skip);
            setPageData(dataSkip);
        }

    }, [products, page]);

    // handle pagination
    const handlePrev = () =>{
        if (page === 1){
            return page;
        }else{
            setPage(page - 1);
        }
    }
    const handleNext = () =>{
        if (page === pageCount){
            return page;
        }else{
            setPage(page + 1);
        }
    }

    if (isLoading) {
        return <AdLoader />;
    }

    return (
        <>
            <main className="site-main">

                <section className="products-wrapp-section">
                    <div className="ad-container">
                        <div className="products-wrapp-row">
                            {pageData.map((pData, i) => {
                                const { image, price, category, title, description } = pData;
                                return (
                                    <>
                                        <ProductCard key={i} image={image} actualPrice={price - 5} offerPrice={price} category={category} title={title} txt={description} />
                                    </>
                                )
                            })}
                        </div>

                        <ul className="pagination-wrapp">
                            <li><a href={()=> false} onClick={handlePrev} disabled={page === 1}>Prev</a></li>
                            {
                                Array(pageCount).fill(null).map((n, i) => {
                                    return (
                                        <li><a href={()=> false} className={page === i + 1 ? 'active' : '' } onClick={()=> setPage(i+1)}>{i + 1}</a></li>
                                    );
                                })
                            }
                            <li><a href={()=> false} onClick={handleNext} disabled={page === pageCount}>Next</a></li>
                        </ul>
                    </div>
                </section>

            </main>
        </>
    )
}

export default ProductPage
