import React from 'react'

const HeaderTop = () => {
    return (
        <section className="ad-header-top">
            <div className="ad-container">
                <div className="ad-header-top-row">
                    <div className="top-head-col">
                        <ul className="head-social-links">
                            <li><a href={() => false}><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href={() => false}><i className="fa-brands fa-facebook-f"></i></a></li>
                        </ul>
                    </div>
                    <div className="top-head-col top-head-col-txt">
                        <p className="header-top-txt">Free Shipping on all orders - Buy Now</p>
                    </div>
                    <div className="top-head-col">
                        <div className="head-lang-link">
                            <button className="ad-lang-btn">english</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderTop
