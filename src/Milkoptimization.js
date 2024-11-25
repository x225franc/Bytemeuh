// src/Milkoptimization.js
import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

import milk_1 from "./images/milk_1.webp";
import milk_2 from "./images/milk_2.webp";
import milk_3 from "./images/milk_3.webp";

export default function Milkoptimization() {
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
					<title>Optimisation de la production laitière - Bytemeuh</title>
					<meta
						name='description'
						content='Grâce aux avancées technologiques, les données occupent une place centrale dans l’optimisation de la production laitière. Découvrons comment l’analyse de données transforme la gestion des élevages pour des rendements plus durables.'
					/>
					<meta
						property='og:title'
						content='Optimisation de la production laitière - Bytemeuh'
					/>
					<meta
						property='og:description'
						content='Grâce aux avancées technologiques, les données occupent une place centrale dans l’optimisation de la production laitière. Découvrons comment l’analyse de données transforme la gestion des élevages pour des rendements plus durables.'
					/>
				</Helmet>
				{/* <!-- end helmet--> */}

				<div class='body_bg'>
					<div class='body_bg'>
						{/* <!-- project section --> */}

						<section
							className='service_section'
							style={{ padding: "40px", backgroundColor: "#eef5f9" }}
						>
							<div
								className='container'
								style={{ maxWidth: "800px", margin: "auto" }}
							>
								<div
									className='heading_container'
									style={{ textAlign: "center", marginBottom: "20px" }}
								>
									<h2 style={{ fontSize: "2.5em", color: "#1a4d82" }}>
										<div className='img-box'>
											<i
												className='bi bi-graph-up-arrow'
												style={{ fontSize: "50px" }}
											></i>
										</div>
										Optimiser la production laitière grâce aux données
									</h2>
								</div>
								<div>
									<p
										className='text-center'
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#4a4a4a",
										}}
									>
										Grâce aux avancées technologiques, les données occupent une
										place centrale dans l'optimisation de la production
										laitière. Ces données offrent aux éleveurs un aperçu complet
										de la santé, des performances et des besoins de chaque
										vache, tout en garantissant que le bien-être animal reste
										une priorité. Découvrons comment l’analyse de données
										transforme la gestion des élevages pour des rendements plus
										durables.
									</p>
									<div style={{ textAlign: "center", margin: "20px 0" }}>
										<img loading="lazy"
											src={milk_1}
											alt='Bytemeuh'
											style={{ maxWidth: "100%", borderRadius: "8px" }}
										/>
									</div>
								</div>
								<div>
									<h3 style={{ color: "#1a4d82" }}>
										Collecte et analyse des données en temps réel
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#4a4a4a",
										}}
									>
										Les capteurs et les systèmes de gestion modernes recueillent
										un grand nombre de données en temps réel, couvrant des
										aspects variés comme la production laitière quotidienne, la
										santé des vaches, leur alimentation, et bien plus. Grâce à
										ces informations, les éleveurs peuvent ajuster les soins et
										les régimes alimentaires en fonction des besoins spécifiques
										de chaque animal, augmentant ainsi les rendements sans
										sacrifier la qualité de vie des vaches.
									</p>
									<div style={{ textAlign: "center", margin: "20px 0" }}>
										<img loading="lazy"
											src={milk_2}
											alt='Bytemeuh'
											style={{ maxWidth: "100%", borderRadius: "8px" }}
										/>
									</div>
								</div>
								<div>
									<h3 style={{ color: "#1a4d82" }}>
										Anticipation des besoins et gestion proactive
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#4a4a4a",
										}}
									>
										En analysant les tendances et en observant les
										comportements, les éleveurs peuvent anticiper les besoins
										des animaux, qu’il s’agisse de la gestion des cycles de
										reproduction, de l’ajustement des apports nutritifs, ou de
										l’identification des signes précoces de maladie. Cette
										approche proactive permet d'optimiser la productivité tout
										en maintenant un niveau de bien-être élevé pour chaque
										vache.
									</p>
									<div style={{ textAlign: "center", margin: "20px 0" }}>
										<img loading="lazy"
											src={milk_3}
											alt='Bytemeuh'
											style={{ maxWidth: "100%", borderRadius: "8px" }}
										/>
									</div>
								</div>
								<div>
									<h3 style={{ color: "#1a4d82" }}>
										ByteMeuh : Une production laitière plus éthique et durable
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#4a4a4a",
										}}
									>
										Chez ByteMeuh, nous soutenons un élevage qui allie
										performance et bien-être animal. Nos solutions aident les
										éleveurs à comprendre et répondre aux besoins individuels de
										chaque vache, en s’appuyant sur les données pour prendre des
										décisions éclairées. Nous croyons en une agriculture où les
										rendements n’exigent pas de compromis sur la qualité de vie
										des animaux. ByteMeuh travaille main dans la main avec les
										éleveurs pour bâtir un futur agricole à la fois productif et
										respectueux.
									</p>
								</div>
							</div>
						</section>

						{/* <!-- end project section --> */}
					</div>
				</div>

				{/* <!-- footer section --> */}
				<Footer />
				{/* <!-- footer section --> */}

				<script type='text/javascript' src='js/jquery-3.4.1.min.js'></script>
				<script type='text/javascript' src='js/bootstrap.js'></script>
			</body>
		</>
	);
}
