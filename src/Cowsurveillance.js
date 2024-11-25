// src/Cowsurveillance.js
import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

import surv_1 from "./images/surv_1.webp";
import surv_2 from "./images/surv_2.webp";
import surv_3 from "./images/surv_3.webp";

export default function Cowsurveillance() {
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
					<title>Surveillance de la santé des vaches - Bytemeuh</title>
					<meta
						name='description'
						content='Bytemeuh révolutionne la gestion sanitaire des troupeaux grâce à des capteurs intelligents. Découvrez comment la technologie améliore le bien-être des vaches.'
					/>
					<meta
						property='og:title'
						content='Surveillance de la santé des vaches - Bytemeuh'
					/>
					<meta
						property='og:description'
						content='Bytemeuh révolutionne la gestion sanitaire des troupeaux grâce à des capteurs intelligents. Découvrez comment la technologie améliore le bien-être des vaches.'
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
									<h2 style={{ fontSize: "2.5em", color: "#2a5d84" }}>
										<div className='img-box'>
											<i
												className='bi bi-activity'
												style={{ fontSize: "50px" }}
											></i>
										</div>
										Surveiller la santé des vaches en temps réel
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
										La santé des vaches est au cœur des préoccupations modernes
										en élevage, et les capteurs intelligents jouent un rôle
										crucial dans cette démarche. Ces dispositifs permettent un
										suivi en temps réel, offrant des données précieuses aux
										éleveurs pour anticiper et prévenir les maladies. Voyons
										comment la technologie révolutionne la gestion sanitaire des
										troupeaux et assure un bien-être optimal pour chaque animal.
									</p>
									<div style={{ textAlign: "center", margin: "20px 0" }}>
										<img loading="lazy"
											src={surv_1}
											alt='Bytemeuh'
											style={{ maxWidth: "100%", borderRadius: "8px" }}
										/>
									</div>
								</div>
								<div>
									<h3 style={{ color: "#2a5d84" }}>
										Le fonctionnement des capteurs de santé
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#4a4a4a",
										}}
									>
										Les capteurs intelligents sont des appareils compacts fixés
										sur les animaux pour collecter des données de santé, telles
										que la température corporelle, la fréquence cardiaque et les
										niveaux d'activité. En utilisant ces informations, les
										éleveurs peuvent repérer les signes précoces de maladie et
										intervenir avant que l'état de l'animal ne se dégrade,
										permettant une gestion proactive et douce de la santé des
										troupeaux.
									</p>
									<div style={{ textAlign: "center", margin: "20px 0" }}>
										<img loading="lazy"
											src={surv_2}
											alt='Bytemeuh'
											style={{ maxWidth: "100%", borderRadius: "8px" }}
										/>
									</div>
								</div>
								<div>
									<h3 style={{ color: "#2a5d84" }}>
										Les avantages pour les éleveurs et les animaux
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#4a4a4a",
										}}
									>
										Le suivi en temps réel permet aux éleveurs de réagir
										immédiatement en cas de problème de santé, réduisant ainsi
										les interventions médicales invasives. Cela contribue non
										seulement au bien-être des animaux, mais améliore également
										la rentabilité des élevages en limitant les pertes et en
										réduisant les coûts vétérinaires. Les capteurs offrent un
										gain de temps précieux pour les éleveurs, qui peuvent se
										concentrer sur d'autres aspects de la gestion de leur
										exploitation.
									</p>
									<div style={{ textAlign: "center", margin: "20px 0" }}>
										<img loading="lazy"
											src={surv_3}
											alt='Bytemeuh'
											style={{ maxWidth: "100%", borderRadius: "8px" }}
										/>
									</div>
								</div>
								<div>
									<h3 style={{ color: "#2a5d84" }}>
										ByteMeuh : Vers une santé animale améliorée grâce à la
										technologie
									</h3>
									<p
										style={{
											textAlign: "justify",
											lineHeight: "1.6",
											fontSize: "1.1em",
											color: "#4a4a4a",
										}}
									>
										ByteMeuh s'engage à développer des solutions de surveillance
										pour offrir aux éleveurs des informations pertinentes et
										exploitables sur la santé de leurs animaux. En intégrant ces
										innovations, nous visons un élevage où chaque animal
										bénéficie d'un suivi optimal, pour un environnement plus
										sain et durable. Grâce aux capteurs de nouvelle génération,
										nous avançons vers un avenir où bien-être animal et
										productivité vont de pair.
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
