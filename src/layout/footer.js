import React, { useEffect, useState } from 'react'

import SubscribeNewsletter from './components/subscribe-newsletter';

const Footer = () => {

	const [visible, setVisible] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	useEffect(() => {
		const toggleVisble = () => {
			if (window.pageYOffset > 200) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		}

		window.addEventListener("scroll", toggleVisble);
		return () => window.removeEventListener("scroll", toggleVisble);
	}, []);

	return (
		<>
			<footer className="site-footer">
				<SubscribeNewsletter />

				<div className="ad-container">
					<section className="ad-footer-main">
						<div className="ad-footer-main-row">
							<div className="footer-main-col ad-footer-1">
								<div className="ad-footer-1">
									<div className="footer-logo">
										<a href={() => false}>
											<img src="./img/footer-logo.png" alt="Logo" />
										</a>
									</div>
									<p className="txt">We prioritise clean beauty with a clean conscience. Our products are developed by using the highest quality and age-old natural ingredients for faster and more effective results.</p>
								</div>
							</div>

							<div className="footer-main-col ad-footer-2">
								<div className="ad-footer-2 footer-wrapp-bx">
									<h4 className="footer-title">Information</h4>
									<ul className="footer-list">
										<li><a href={() => false}>Refund Policy</a></li>
										<li><a href={() => false}>Contact Us</a></li>
										<li><a href={() => false}>Terms & Conditions</a></li>
										<li><a href={() => false}>Privacy Policy</a></li>
									</ul>
								</div>
							</div>

							<div className="footer-main-col ad-footer-3">
								<div className="ad-footer-3 footer-wrapp-bx">
									<h4 className="footer-title">Contact Us</h4>
									<ul className="footer-list">
										<li>Email</li>
										<li><a href="mailto:care@aloumdaum.com">care@aloumdaum.com</a></li>
									</ul>
									<div className="footer-social-links">
										<span>Follow Us:</span>
										<ul>
											<li><a href={() => false}><i className="fa-brands fa-instagram"></i></a></li>
											<li><a href={() => false}><i className="fa-brands fa-facebook-f"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className="ad-footer-copyright">
						<div className="ad-copyright-row">
							<div className="copyright">
								&copy; Aloumdaum 2023.
							</div>

							<div className="ad-pay-links">
								<a href={() => false} className="pay-icons"><img src="./img/icon-pay.png" alt="Payments" /></a>
							</div>
						</div>
					</section>
				</div>
			</footer >

			{visible && (
				<button className="scroll-top-top" onClick={scrollToTop}><i class="fa-solid fa-jet-fighter-up"></i></button>
			)}
		</>
	)
}

export default Footer
