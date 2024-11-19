import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import ai_1 from "./images/ai_1.webp";
import ai_2 from "./images/ai_2.webp";
import ai_3 from "./images/ai_3.webp";

export default function Aiplusfarm() {
	return (
		<>
			<body class='sub_page'>
				<div class='hero_area'>
					{/* <!-- header section strats --> */}
					<Header />
					{/* <!-- end header section --> */}
				</div>

				<div class='body_bg'>
					<div class='body_bg'>
						{/* <!-- project section --> */}

						<section
							class='service_section'
							style={{ padding: "40px", backgroundColor: "#f5f5f5" }}
						>
							<div
								className='container'
								style={{ maxWidth: "800px", margin: "auto" }}
							>
								<div
									class='heading_container'
									style={{ textAlign: "center", marginBottom: "20px" }}
								>
									<h2 style={{ fontSize: "2.5em", color: "#333" }}>
										<div class='img-box'>
											<i
												className='bi bi-robot'
												style={{ fontSize: "50px" }}
											></i>
										</div>
										L'IA et le bien-être des vaches : Un duo gagnant
									</h2>
								</div>
								<div>
									<p
										class='text-center'
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#555",
										}}
									>
										L'élevage moderne connaît une révolution avec l'arrivée de
										l'intelligence artificielle (IA). Chez ByteMeuh, nous
										utilisons l'IA pour améliorer le bien-être des animaux,
										notamment celui des vaches, en optimisant leur suivi et en
										détectant les comportements inhabituels. Découvrez comment
										cette technologie novatrice permet d’améliorer les pratiques
										d’élevage pour des fermes plus respectueuses de leurs
										animaux.
									</p>
									<div style={{ textAlign: "center", margin: "20px 0" }}>
										<img
											src={ai_1}
											alt='Image placeholder'
											style={{ maxWidth: "100%", borderRadius: "8px" }}
										/>
									</div>
								</div>
								<div>
									<h3 style={{ color: "#333" }}>
										Les applications concrètes de l'IA dans le bien-être animal
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#555",
										}}
									>
										L'IA permet de surveiller en temps réel l'état de chaque
										vache grâce à des capteurs intelligents placés sur des
										colliers ou des tags. Ces dispositifs collectent des données
										telles que la température corporelle, l'activité quotidienne
										et le rythme respiratoire. En analysant ces informations,
										l'IA détecte rapidement tout signe de malaise ou de maladie,
										permettant aux éleveurs de réagir avant que la situation ne
										devienne critique.
									</p>
									<div style={{ textAlign: "center", margin: "20px 0" }}>
										<img
											src={ai_2}
											alt='Image placeholder'
											style={{ maxWidth: "100%", borderRadius: "8px" }}
										/>
									</div>
								</div>
								<div>
									<h3 style={{ color: "#333" }}>
										Les avantages de l'IA pour le bien-être animal
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#555",
										}}
									>
										En utilisant l'IA, les éleveurs réduisent la nécessité des
										interventions humaines stressantes. Lorsqu'un comportement
										inhabituel est détecté, une alerte est envoyée, permettant
										une intervention rapide et non invasive. Cela se traduit par
										des animaux en meilleure santé, moins de traitements lourds
										et un environnement globalement plus serein dans les fermes.
									</p>
								</div>
								<div style={{ textAlign: "center", margin: "20px 0" }}>
									<img
										src={ai_3}
										alt='Image placeholder'
										style={{ maxWidth: "100%", borderRadius: "8px" }}
									/>
								</div>
								<div>
									<h3 style={{ color: "#333" }}>
										L'avenir de l'élevage avec ByteMeuh
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#555",
										}}
									>
										Chez ByteMeuh, nous nous engageons à transformer l'élevage
										en intégrant des technologies qui respectent le bien-être
										des animaux. Grâce à l’IA, nous espérons établir un modèle
										où productivité et éthique coexistent, et où les pratiques
										d’élevage sont en harmonie avec les besoins de chaque
										animal.
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
