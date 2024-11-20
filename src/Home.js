import React from "react";

import home_1 from "./images/home_1.webp";

import contact_img from "./images/contact-img.webp";
import client_img_1 from "./images/client_1.webp";
import client_img_2 from "./images/client_2.webp";
import client_img_3 from "./images/client_3.webp";

import Header from "./Header";
import Footer from "./Footer";

function Home() {
	// Preventing the page from refreshing
	if (window.history.replaceState) {
		window.history.replaceState(null, null, window.location.href);
	}

	return (
		<>
			<body>
				<div class='hero_area'>
					{/* <!-- header section --> */}
					<Header />
					{/* <!-- end header--> */}

					{/* <!-- slider section --> */}
					<section class='slider_section position-relative'>
						<div
							id='carouselExampleIndicators'
							class='carousel slide'
							data-ride='carousel'
						>
							<div class='carousel-inner'>
								<div class='carousel-item active'>
									<div class='container'>
										<div class='row'>
											<div class='col-md-7'>
												<div class='detail-box'>
													<h1>
														Bienvenue sur <br />
														<span> ByteMeuh </span>
													</h1>
													<p>
														ByteMeuh réinvente l’élevage bovin avec des
														solutions numériques intelligentes pour le bien-être
														des vaches et l'efficacité des fermes.
													</p>
													<div class='btn-box'>
														<a href='/contact' class='btn-1'>
															{" "}
															Contact{" "}
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class='carousel-item'>
									<div class='container'>
										<div class='row'>
											<div class='col-md-7'>
												<div class='detail-box'>
													<h1>
														éfficacité , services , meuh ! <br />
														<span> ByteMeuh </span>
													</h1>
													<p>
														Vous recherchez des solutions numériques
														intelligentes pour le bien-être des vaches et
														l'efficacité des fermes ? ByteMeuh est là pour vous.
													</p>
													<div class='btn-box'>
														<a href='/contact' class='btn-1'>
															{" "}
															Contact{" "}
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<a
								class='carousel-control-prev'
								href='#carouselExampleIndicators'
								role='button'
								data-slide='prev'
							>
								<span
									class='carousel-control-prev-icon'
									aria-hidden='true'
								></span>
								<span class='sr-only'>Previous</span>
							</a>
							<a
								class='carousel-control-next'
								href='#carouselExampleIndicators'
								role='button'
								data-slide='next'
							>
								<span
									class='carousel-control-next-icon'
									aria-hidden='true'
								></span>
								<span class='sr-only'>Next</span>
							</a>
						</div>
					</section>
					{/* <!-- end slider section --> */}
				</div>

				{/* <!-- about section --> */}

				<section class='about_section layout_padding'>
					<div class='container'>
						<div class='row'>
							<div class='col-md-6'>
								<div class='detail-box'>
									<div class='heading_container'>
										<h2>A Propos</h2>
									</div>
									<p>
										ByteMeuh est une entreprise de technologie innovante qui
										réinvente l’élevage bovin avec des solutions numériques
										intelligentes pour le bien-être des vaches et l'efficacité
										des fermes. Notre mission ? Allier nature et technologie
										pour permettre aux éleveurs de comprendre et d’optimiser les
										besoins de leurs animaux, tout en respectant
										l’environnement.
									</p>
									<a href='/about'> Découvrir </a>
								</div>
							</div>
							<div class='col-md-6'>
								<div class='img-box'>
									<img src={home_1} alt='about_img' />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- end about section --> */}

				{/* <!-- project section --> */}
				<div class='body_bg layout_padding'>
					<section class='service_section'>
						<div class='container'>
							<div class='heading_container'>
								<h2>Nos projets</h2>
							</div>
						</div>
						<div class='container'>
							<div class='row'>
								<div class='col-md-6'>
									<div class='box'>
										<div class='img-box'>
											<i
												className='bi bi-robot'
												style={{ fontSize: "50px" }}
											></i>
										</div>
										<h4>L'IA et le bien-être des vaches : Un duo gagnant</h4>
										<p>
											Comment l'intelligence artificielle contribue à rendre
											l'élevage plus respectueux du bien-être animal.
										</p>
										<a href='/aiplusfarm'> Voir Plus </a>
									</div>
								</div>
								<div class='col-md-6'>
									<div class='box align-items-end align-items-md-start text-right text-md-left'>
										<div class='img-box'>
											<i
												className='bi bi-activity'
												style={{ fontSize: "50px" }}
											></i>
										</div>
										<h4>Surveiller la santé des vaches en temps réel</h4>
										<p>
											Les capteurs intelligents et leur rôle crucial dans la
											prévention des maladies animales.
										</p>
										<a href='/cowsurveillance'> Voir Plus </a>
									</div>
								</div>
							</div>
							<div class='row'>
								<div class='col-md-6'>
									<div class='box'>
										<div class='img-box'>
											<i
												className='bi bi-graph-up-arrow'
												style={{ fontSize: "50px" }}
											></i>
										</div>
										<h4>Optimiser la production laitière grâce aux données</h4>
										<p>
											Comment les données permettent d'améliorer les rendements
											sans nuire au bien-être animal.
										</p>
										<a href='/milkoptimization'> Voir Plus </a>
									</div>
								</div>
								<div class='col-md-6'>
									<div class='box align-items-end align-items-md-start text-right text-md-left'>
										<div class='img-box'>
											<i
												className='bi bi-tree'
												style={{ fontSize: "50px" }}
											></i>
										</div>
										<h4>
											Réduire l'empreinte carbone de l'élevage grâce à la
											technologie
										</h4>
										<p>
											ByteMeuh s'engage pour un élevage plus durable, avec des
											solutions pour limiter l'impact environnemental.
										</p>
										<a href='/carbonreduce'> Voir Plus </a>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* <!-- end project section --> */}

					{/* <!-- activities section --> */}

					<section class='quote_section layout_padding'>
						<div class='container'>
							<div class='box'>
								<div class='detail-box'>
									<h1>Nos activités</h1>
									<p>
										{" "}
										Découvrez comment ByteMeuh révolutionne l’élevage bovin
										grâce à des solutions numériques intelligentes.
									</p>
								</div>
								<div class='btn btn-box'>
									<a href='/activities'> Découvrir </a>
								</div>
							</div>
						</div>
					</section>

					{/* <!-- end activities section --> */}

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
										<img src={contact_img} alt='contact' />
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* <!-- end contact section --> */}

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
													<img src={client_img_1} alt='user_review' />
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
															surveille la santé de mes vaches ! Les données
															sont précises, et j'ai remarqué une baisse
															significative des maladies. Merci !”
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
													<img src={client_img_2} alt='user_review' />
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
															la production de lait. La technologie au service
															de l’agriculture, enfin une innovation utile !”
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
													<img src={client_img_3} alt='user_review' />
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
															“Grâce à ByteMeuh, je comprends mieux les besoins
															de mes animaux et peux intervenir à temps. Une
															application indispensable pour toute ferme
															moderne.”
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
				</div>
				{/* <!-- info section --> */}

				<section class='info_section layout_padding'>
					<div class='footer_contact'>
						<div class='heading_container'>
							<h2>Contactez nous !</h2>
						</div>
						<div class='box' style={{color: "#520000"}}>
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

				{/* // <!-- end info section --> */}

				{/* // <!-- footer section --> */}
				<Footer />
				{/* // <!-- footer section --> */}

				<script type='text/javascript' src='js/jquery-3.4.1.min.js'></script>
				<script type='text/javascript' src='js/bootstrap.js'></script>
			</body>
		</>
	);
}

export default Home;
