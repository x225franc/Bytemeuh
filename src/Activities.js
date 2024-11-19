import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import data_analysis from "./images/data_analysis.webp";
import mobile_app from "./images/mobile_app.webp";
import sensors from "./images/sensor.webp";
import personalized_advice from "./images/personalized_advice.webp";

function Activities() {
	return (
		<>
			<body class='sub_page'>
				<div class='hero_area'>
					{/* <!-- header section strats --> */}
					<Header />
					{/* <!-- end header section --> */}
				</div>

				<div class='body_bg layout_padding'>
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

									<div class='row'>
										<div class='col-md-6'>
											<div
												class='card'
												style={{
													padding: "20px",
													border: "1px solid red",
													margin: "10px",
													borderRadius: "10px",
													boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
												}}
											>
												<img
													src={sensors}
													alt='Capteurs intelligents'
													class='card-img-top'
												/>
												<div class='card-body'>
													<h4 class='card-title'>Capteurs intelligents :</h4>
													<p class='card-text'>
														Nos dispositifs surveillent en temps réel la santé
														et l’activité des vaches, alertant les éleveurs en
														cas de besoin particulier (température corporelle,
														comportement inhabituel).
													</p>
												</div>
											</div>
										</div>
										<div class='col-md-6'>
											<div
												class='card'
												style={{
													padding: "20px",
													border: "1px solid red",
													margin: "10px",
													borderRadius: "10px",
													boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
												}}
											>
												<img
													src={data_analysis}
													alt='Analyse des données'
													class='card-img-top'
												/>
												<div class='card-body'>
													<h4 class='card-title'>Analyse des données :</h4>
													<p class='card-text'>
														Grâce aux données collectées, les éleveurs reçoivent
														des informations précieuses sur le bien-être et la
														productivité de chaque vache, leur permettant de
														prendre des décisions éclairées.
													</p>
												</div>
											</div>
										</div>
										<div class='col-md-6'>
											<div
												class='card'
												style={{
													padding: "20px",
													border: "1px solid red",
													margin: "10px",
													borderRadius: "10px",
													boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
												}}
											>
												<img
													src={mobile_app}
													alt='Applications mobiles'
													class='card-img-top'
												/>
												<div class='card-body'>
													<h4 class='card-title'>Applications mobiles :</h4>
													<p class='card-text'>
														Tout est accessible depuis une application intuitive
														! Les éleveurs peuvent surveiller et gérer leurs
														troupeaux à distance, en restant toujours connectés
														à leurs animaux.
													</p>
												</div>
											</div>
										</div>
										<div class='col-md-6'>
											<div
												class='card'
												style={{
													padding: "20px",
													border: "1px solid red",
													margin: "10px",
													borderRadius: "10px",
													boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
												}}
											>
												<img
													src={personalized_advice}
													alt='Conseils personnalisés'
													class='card-img-top'
												/>
												<div class='card-body'>
													<h4 class='card-title'>Conseils personnalisés :</h4>
													<p class='card-text' style={{ fontSize: "85%" }}>
														Notre IA propose des recommandations sur mesure pour
														optimiser l’alimentation, le repos et la
														productivité des animaux, garantissant ainsi une
														approche respectueuse et durable de l’élevage.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* <!-- end activities section --> */}
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

export default Activities;
