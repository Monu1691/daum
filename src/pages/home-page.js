import React from 'react'

import OurBestsellers from './page-components/our-bestsellers'

const HomePage = () => {

	return (
		<>
			<main className="site-main">
				<section className="ad-home-banner" style={{ backgroundImage: 'url(./img/Aloum-Daum-banner.png)' }}>
					<div className="ad-container">
						<div className="ad-2col-row">
							<div className="ad-banner-caption">
								<h1 className="banner-title font-playfair">Aloum Daum <br /> (아름다움)</h1>
								<p className="banner-txt">Experience the Best of Both Worlds with Our <br /> Ayurvedic-Korean Brightening Formula</p>
								<div className="ad-link">
									<a href={() => false} className="ad-btn">Shop Now</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<OurBestsellers />

				<section className="ad-new-collective-sec ad-bg-img-sec" style={{ backgroundImage: 'url(./img/banner-2.png)' }}>
					<div className="ad-container">
						<div className="ad-2col-row">
							<div className="ad-caption-wrap">
								<h4 className="ad-sub-title">new collective</h4>
								<h2 className="ad-site-title">Show your <br /> skin some love</h2>
								<p className="ad-text-desc">Put your best face forward by using our products</p>

								<div className="ad-link">
									<a href={() => false} className="ad-btn">Shop Now</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="ad-glow-beneath-sec">
					<div className="ad-container">
						<div className="ad-glow-beneath-row">
							<div className="ad-col-1">
								<div className="ad-caption-wrap">
									<h4 className="ad-sub-title">Our products</h4>
									<h2 className="ad-site-title">Glow beneath the surface</h2>
									<p className="ad-text-desc">Put your best face forward by using our products</p>
								</div>
							</div>
							<div className="ad-col-2">
								<div className="img">
									<img src="./img/pexels-misolo-cosmetic.png" alt="Shop" />
									<span className="name">Face</span>
								</div>
							</div>
							<div className="ad-col-3">
								<div className="img">
									<img src="./img/NoPath.png" alt="Shop" />
									<span className="name">Eye</span>
								</div>
							</div>
							<div className="ad-col-4">
								<div className="img">
									<img src="./img/pexels-ron-lach1.png" alt="Shop" />
									<span className="name">Lip</span>
								</div>
							</div>
							<div className="ad-col-5">
								<div className="img"><img src="./img/pexels-ron-lach.png" alt="Shop" /></div>
							</div>
							<div className="ad-col-6">
								<a href={() => false} className="all-link">
									<span className="txt">Shop All Products</span>
									<span className="ad-icon"></span>
								</a>
							</div>
							<div className="ad-col-7">
								<div className="img"><img src="./img/pexels-monstera.png" alt="Shop" /></div>
							</div>
						</div>

						<div className="ad-glow-bottom">
							<h4>Learn more about our new formula</h4>
							<p>See what your skin can look like up to 10 weeks of product use</p>
						</div>
					</div>
				</section>

				<section className="ad-home-video-sec ad-bg-img-sec" style={{ backgroundImage: 'url(./img/video-bg.jpg)' }}>
					<a href={() => false} target="_blank" rel="noreferrer" className="ad-play-btn">
						<img src={'./img/noun-play.png'} alt="Play" />
					</a>
				</section>

				<section className="ad-beauty-sec">
					<div className="ad-container">
						<div className="ad-caption-wrap ad-text-center">
							<h4 className="ad-sub-title">Trending now</h4>
							<h2 className="ad-site-title">Blend beauty in you</h2>
						</div>

						<div className="ad-blend-beauty-row">
							<div className="ad-col">
								<div className="blend-beauty-card">
									<div className="img">
										<a href={() => false}>
											<img src="./img/pexels-linda-prebreza.png" alt="Shop" />
										</a>
									</div>
									<div className="txt-wrapp">
										<p className="name">Skincare</p>
										<a href={() => false} className="view-all">View All</a>
									</div>
								</div>
							</div>

							<div className="ad-col">
								<div className="blend-beauty-card">
									<div className="img">
										<a href={() => false}>
											<img src="./img/pexels-shiny-diamond.png" alt="Shop" />
										</a>
									</div>
									<div className="txt-wrapp">
										<p className="name">Eyecare</p>
										<a href={() => false} className="view-all">View All</a>
									</div>
								</div>
							</div>

							<div className="ad-col">
								<div className="blend-beauty-card">
									<div className="img">
										<a href={() => false}>
											<img src="./img/kindpng.png" alt="Shpo" />
										</a>
									</div>
									<div className="txt-wrapp">
										<p className="name">Lipcare</p>
										<a href={() => false} className="view-all">View All</a>
									</div>
								</div>
							</div>

							<div className="ad-col">
								<div className="blend-beauty-card">
									<div className="img">
										<a href={() => false}>
											<img src="./img/pexels-shiny-diamond.png" alt="Shop" />
										</a>
									</div>
									<div className="txt-wrapp">
										<p className="name">Skincare</p>
										<a href={() => false} className="view-all">View All</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default HomePage
