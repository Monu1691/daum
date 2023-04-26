import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber} from '../../actions'


const ProductDetail = () => {
    const mtState  = useSelector((state)=> state.changeNumber);
    const dispatch = useDispatch();

    return (
        <section className="products-sale-sec">
            <div className="products-sale-row">
                <div className="products-detail-img-wrapp">
                    <div className="products-detail-slider-wrapp">
                        <div className="products-img-single-slider">
                            <div>
                                <div className="products-img-single">
                                    <img src="asset/img/product-1.jpg" alt="Product" />
                                </div>
                            </div>
                            <div>
                                <div className="products-img-single">
                                    <img src="asset/img/product-2.png" alt="Product" />
                                </div>
                            </div>
                            <div>
                                <div className="products-img-single">
                                    <img src="asset/img/product-3.png" alt="Product" />
                                </div>
                            </div>
                            <div>
                                <div className="products-img-single">
                                    <img src="asset/img/product-4.png" alt="Product" />
                                </div>
                            </div>
                        </div>

                        <div className="products-slider-nav-wrapp">
                            <div className="products-slider-nav">
                                <div>
                                    <div className="p-nav-dv">
                                        <img src="asset/img/product-1.jpg" alt="Product" />
                                    </div>
                                </div>
                                <div>
                                    <div className="p-nav-dv">
                                        <img src="asset/img/product-2.png" alt="Product" />
                                    </div>
                                </div>
                                <div>
                                    <div className="p-nav-dv">
                                        <img src="asset/img/product-3.png" alt="Product" />
                                    </div>
                                </div>
                                <div>
                                    <div className="p-nav-dv">
                                        <img src="asset/img/product-4.png" alt="Product" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="products-detail-txt-wrapp">
                    <div className="products-detail-txt">
                        <h1 className="product-site-title">Skin Whitening & Radiance Cream</h1>
                        <p className="product-txt">Aloum Daum’s Skin Whitening & Radiance Cream is formulated with potent natural ingredients such as Carica Papaya, 24k Gold, and Sea Buckthorn, which synergistically work to reduce melanin production,</p>
                        <div className="reviews">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-regular fa-star"></i></span>
                        </div>

                        <div className="ad-price">
                            <span className="actual-price"><i className="fa-solid fa-indian-rupee-sign"></i> 4095.00</span>
                            <span className="offer-price"><i className="fa-solid fa-indian-rupee-sign"></i> 3200.00</span>
                        </div>

                        <div className="ad-field-qty">
                            <div className="increase-and-decrease minusqty" name="increase" onClick={()=> dispatch(decNumber(1))}>-</div>
                            <input type="number" name="qty" id="qty" min="0" value={mtState} title="Qty" className="input-text qty" />
                            <div className="increase-and-decrease plusqty" name="decrease" onClick={()=> dispatch(incNumber(1))}>+</div>
                        </div>

                        <div className="cart-btn-wrapp">
                            <a href={() => false} className="ad-cart-btn add-to-cart">Add to cart</a>
                            <a href={() => false} className="ad-cart-btn buy-now">Buy now</a>
                        </div>

                        <div className="product-feature-list">
                            <ul>
                                <li>clinically tested</li>
                                <li>clinically tested</li>
                                <li>dermatologically tested</li>
                                <li>dermatologically tested</li>
                                <li>clinically tested</li>
                                <li>clinically tested</li>
                                <li>dermatologically tested</li>
                                <li>dermatologically tested</li>
                            </ul>
                        </div>

                        <div className="product-accordian">
                            <div className="accordian-item">
                                <h4>Description</h4>
                                <div className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime optio fugiat excepturi eos ipsum, aliquam, perspiciatis quidem recusandae eaque!</div>
                            </div>
                            <div className="accordian-item">
                                <h4>All ingredients</h4>
                                <div className="txt">sit amet consectetur adipisicing elit. Enim maxime optio fugiat excepturi eos ipsum, aliquam, perspiciatis quidem recusandae eaque!</div>
                            </div>
                            <div className="accordian-item">
                                <h4>ingredient Details</h4>
                                <div className="txt">ipsum dolor sit amet consectetur adipisicing elit. Enim maxime optio fugiat excepturi eos ipsum, aliquam, perspiciatis quidem recusandae</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail
