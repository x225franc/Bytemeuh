// src/Contact.js
import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

import contact_img from "./images/contact-img.webp";
import client_img_1 from "./images/client_1.webp";
import client_img_2 from "./images/client_2.webp";
import client_img_3 from "./images/client_3.webp";

function Contact() {
	return (
		<>
			<body class='sub_page'>
				<div class='hero_area'>
					{/* <!-- header section strats --> */}
					<Header />
					{/* <!-- end header section --> */}
				</div>

				{/* <!-- end helmet--> */}
				<Helmet>
					<title>Contact - Bytemeuh</title>
					<meta
						name='description'
						content='Contactez-nous pour toute question ou demande de renseignements.'
					/>
					<meta property='og:title' content='Contact - Bytemeuh' />
					<meta
						property='og:description'
						content='Contactez-nous pour toute question ou demande de renseignements.'
					/>
				</Helmet>
				{/* <!-- end helmet--> */}

				<div class='body_bg layout_padding'>
					{/* <!-- contact section --> */}

					{/* <!-- contact section --> */}

					<section class='contact_section'>
						<div class='container'>
							<div class='heading_container'>
								<h2>Contactez nous !</h2>
							</div>
						</div>
						<div class='container contact_bg layout_padding2-top'>
							<div class='row'>
								<div class='col-md-6'>
									<div class='contact_form'>
										<form method='post' action=''>
											<input
												type='text'
												name='name'
												placeholder='Nom '
												disabled
											/>
											<input
												type='email'
												name='email'
												placeholder='Email'
												disabled
											/>
											<input
												type='text'
												name='message'
												placeholder='Message'
												class='message_input'
												disabled
											/>
											<button type='submit' name='submit' disabled>
												Envoyer
											</button>
										</form>
									</div>
								</div>
								<div class='col-md-6'>
									<div class='img-box'>
										<img loading="lazy" src={contact_img} alt='contact' />
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* <!-- end contact section --> */}

					{/* <!-- end contact section --> */}
				</div>

				{/* <!-- avis client section --> */}

				<section class='client_section layout_padding-top'>
					<div class='d-flex justify-content-center'>
						<div class='heading_container'>
							<h2>Avis client</h2>
						</div>
					</div>
					<div class='container layout_padding2'>
						<div
							id='carouselExample2Indicators'
							class='carousel slide'
							data-ride='carousel'
						>
							<ol class='carousel-indicators'>
								<li
									data-target='#carouselExample2Indicators'
									data-slide-to='0'
									class='active'
								></li>
								<li
									data-target='#carouselExample2Indicators'
									data-slide-to='1'
								></li>
								<li
									data-target='#carouselExample2Indicators'
									data-slide-to='2'
								></li>
							</ol>
							<div class='carousel-inner'>
								<div class='carousel-item active'>
									<div class='client_container'>
										<div class='client-id'>
											<div class='img-box'>
												<img loading="lazy" src={client_img_1} alt='user_review' />
											</div>
											<div class='client_name'>
												<div>
													<h3>Clara D.</h3>
													<p>Éleveuse Bio</p>
												</div>
											</div>
										</div>
										<div class='client_detail'>
											<div class='client_text'>
												<blockquote>
													<p>
														“ByteMeuh a révolutionné la manière dont je
														surveille la santé de mes vaches ! Les données sont
														précises, et j'ai remarqué une baisse significative
														des maladies. Merci !”
													</p>
												</blockquote>
											</div>
										</div>
									</div>
								</div>
								<div class='carousel-item'>
									<div class='client_container'>
										<div class='client-id'>
											<div class='img-box'>
												<img loading="lazy" src={client_img_2} alt='user_review' />
											</div>
											<div class='client_name'>
												<div>
													<h3>Thomas B.</h3>
													<p>Ferme de l’Oasis</p>
												</div>
											</div>
										</div>
										<div class='client_detail'>
											<div class='client_text'>
												<blockquote>
													<p>
														“L’application est intuitive et m’aide à optimiser
														la production de lait. La technologie au service de
														l’agriculture, enfin une innovation utile !”
													</p>
												</blockquote>
											</div>
										</div>
									</div>
								</div>
								<div class='carousel-item'>
									<div class='client_container'>
										<div class='client-id'>
											<div class='img-box'>
												<img loading="lazy" src={client_img_3} alt='user_review' />
											</div>
											<div class='client_name'>
												<div>
													<h3>Camille L.</h3>
													<p>Ferme de Montaigne</p>
												</div>
											</div>
										</div>
										<div class='client_detail'>
											<div class='client_text'>
												<blockquote>
													<p>
														“Grâce à ByteMeuh, je comprends mieux les besoins de
														mes animaux et peux intervenir à temps. Une
														application indispensable pour toute ferme moderne.”
													</p>
												</blockquote>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- end client section --> */}
				{/* <!-- info section --> */}

				<section class='info_section layout_padding'>
					<div class='footer_contact'>
						<div class='heading_container'>
							<h2>Contactez nous !</h2>
						</div>
						<div class='box' style={{ color: "#520000" }}>
							<a
								href='https://maps.app.goo.gl/1Xa4sjZ4YCFtsfzP6'
								target='_blank'
								class='img-box'
								rel='noreferrer'
							>
								<i
									className='bi bi-geo-alt-fill'
									style={{ fontSize: "50px" }}
								></i>
								Adresse
							</a>
							<a href='tel:+330156069041' class='img-box'>
								<i
									className='bi bi-telephone-fill'
									style={{ fontSize: "50px" }}
								></i>
								Téléphone
							</a>
							<a href='mailto:adiawara33@myges.fr' class='img-box'>
								<i
									className='bi bi-envelope-fill'
									style={{ fontSize: "50px" }}
								></i>
								Email
							</a>
						</div>
					</div>
				</section>

				{/* <!-- end info section --> */}

				{/* <!-- footer section --> */}
				<Footer />
				{/* <!-- footer section --> */}

				<script type='text/javascript' src='js/jquery-3.4.1.min.js'></script>
				<script type='text/javascript' src='js/bootstrap.js'></script>
			</body>
		</>
	);
}

export default Contact;
