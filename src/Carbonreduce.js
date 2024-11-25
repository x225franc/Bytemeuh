// src/Carbonreduce.js
import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

import carb_1 from "./images/carb_1.webp";
import carb_2 from "./images/carb_2.webp";
import carb_3 from "./images/carb_3.webp";

export default function Carbonreduce() {
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
					<title>Réduction de l’empreinte carbone - Bytemeuh</title>
					<meta
						name='description'
						content='Bytemeuh s’engage à intégrer les technologies pour réduire l’empreinte carbone des élevages. Découvrez comment la tech peut transformer l’agriculture pour un avenir plus durable'
					/>
					<meta
						property='og:title'
						content='Réduction de l’empreinte carbone - Bytemeuh'
					/>
					<meta
						property='og:description'
						content='Bytemeuh s’engage à intégrer les technologies pour réduire l’empreinte carbone des élevages. Découvrez comment la tech peut transformer l’agriculture pour un avenir plus durable'
					/>
				</Helmet>
				{/* <!-- end helmet--> */}

				<div class='body_bg'>
					<div class='body_bg'>
						{/* <!-- project section --> */}

						<section
							className='service_section'
							style={{ padding: "40px", backgroundColor: "#f5f9f4" }}
						>
							<div
								className='container'
								style={{ maxWidth: "800px", margin: "auto" }}
							>
								<div
									className='heading_container'
									style={{ textAlign: "center", marginBottom: "20px" }}
								>
									<h2 style={{ fontSize: "2.5em", color: "#306b3f" }}>
										<div className='img-box'>
											<i
												className='bi bi-tree'
												style={{ fontSize: "50px" }}
											></i>
										</div>
										Réduire l'empreinte carbone de l'élevage grâce à la
										technologie
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
										La technologie révolutionne le secteur agricole, notamment
										en réduisant l'empreinte carbone des élevages. De la gestion
										des ressources à l'optimisation des processus, les nouvelles
										innovations permettent d’adopter des pratiques plus
										durables. ByteMeuh s’engage à intégrer ces technologies pour
										un avenir agricole respectueux de l’environnement.
									</p>
									<div style={{ textAlign: "center", margin: "20px 0" }}>
										<img loading="lazy"
											src={carb_1}
											alt='Bytemeuh'
											style={{ maxWidth: "100%", borderRadius: "8px" }}
										/>
									</div>
								</div>
								<div>
									<h3 style={{ color: "#306b3f" }}>
										Utilisation des ressources optimisée
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#4a4a4a",
										}}
									>
										La gestion des ressources, comme l’eau et les aliments pour
										bétail, est essentielle pour réduire l'empreinte carbone
										d'un élevage. Grâce aux capteurs et aux systèmes d’analyse,
										les éleveurs peuvent surveiller et ajuster l’utilisation des
										ressources en temps réel, minimisant le gaspillage et
										optimisant chaque litre d'eau ou kilo de nourriture utilisé.
									</p>
									<div style={{ textAlign: "center", margin: "20px 0" }}>
										<img loading="lazy"
											src={carb_2}
											alt='Bytemeuh'
											style={{ maxWidth: "100%", borderRadius: "8px" }}
										/>
									</div>
								</div>
								<div>
									<h3 style={{ color: "#306b3f" }}>
										Réduction des émissions de gaz à effet de serre
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#4a4a4a",
										}}
									>
										Des pratiques comme l'optimisation de l'alimentation et le
										contrôle des conditions d'élevage permettent de réduire les
										émissions de gaz à effet de serre, principalement le
										méthane. En utilisant des données précises, les éleveurs
										peuvent adapter l’alimentation des vaches pour diminuer la
										production de méthane sans affecter la santé ou la
										productivité des animaux.
									</p>
									<div style={{ textAlign: "center", margin: "20px 0" }}>
										<img loading="lazy"
											src={carb_3}
											alt='Bytemeuh'
											style={{ maxWidth: "100%", borderRadius: "8px" }}
										/>
									</div>
								</div>
								<div>
									<h3 style={{ color: "#306b3f" }}>
										ByteMeuh : Innovation pour une agriculture plus durable
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#4a4a4a",
										}}
									>
										Chez ByteMeuh, nous croyons en un élevage qui respecte
										l’environnement et réduit son impact écologique. Nos
										solutions technologiques aident les éleveurs à intégrer des
										pratiques durables dans leur quotidien, contribuant ainsi à
										un futur agricole moins polluant. Grâce à la gestion
										intelligente des ressources et aux innovations constantes,
										ByteMeuh s’engage à transformer l’élevage en un modèle
										écoresponsable.
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
