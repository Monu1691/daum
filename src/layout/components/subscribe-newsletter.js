import React from 'react'

const SubscribeNewsletter = () => {
    return (
        <section className="ad-footer-top-sec ad-bg-img-sec" style={{ backgroundImage: 'url(./img/Subscribe-bg-img.png)' }}>
            <div className="ad-container">
                <div className="ad-2col-row">
                    <div className="ad-caption-wrap">
                        <h2 className="ad-site-title">Subscribe to our newsletter to receive an additional 10% off on your first order</h2>
                        <div className="subscribe-form">
                            <form action="" className="site_search_form">
                                <div className="search_input-bx">
                                    <input type="text" name="search" id="search_input" placeholder="Email Address" />
                                    <button type="button" className="submit_btn">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeNewsletter
