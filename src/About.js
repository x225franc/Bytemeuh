import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import about_1 from "./images/about_1.webp";
import about_2 from "./images/about_2.webp";
import about_3 from "./images/about_3.webp";

function About() {
	return (
		<>
			<body class='sub_page'>
				<div class='hero_area'>
					{/* <!-- header section strats --> */}
					<Header />
					{/* <!-- end header section --> */}
				</div>

				{/* <!-- about section --> */}

				<section class='about_section layout_padding'>
					<h1 class='text-center'>A propos de ByteMeuh</h1>

					<p class='text-center'>
						<br />
						ByteMeuh est une entreprise de technologie innovante qui réinvente
						l’élevage bovin <br /> avec des solutions numériques intelligentes
						pour le bien-être des vaches et l'efficacité des fermes.
						<br /> Notre mission ? Allier nature et technologie pour permettre
						aux éleveurs de comprendre et d’optimiser
						<br /> les besoins de leurs animaux, tout en respectant
						l’environnement.
					</p>

					<br />

					<div class='container'>
						<div class='row'>
							<div class='col-md-6'>
								<div class='detail-box'>
									<div class='heading_container'>
										<h2>Notre Vision</h2>
									</div>
									<p>
										Chez ByteMeuh, nous croyons que la technologie peut
										transformer le quotidien des éleveurs et améliorer la
										qualité de vie des vaches.
									</p>
								</div>
							</div>
							<div class='col-md-6'>
								<div class='img-box'>
									<img src={about_1} alt='about_img' />
								</div>
							</div>
						</div>

						<br />

						<div class='row'>
							<div class='col-md-6'>
								<div class='img-box'>
									<img src={about_2} alt='about_img' />
								</div>
							</div>
							<div class='col-md-6'>
								<div class='detail-box'>
									<div class='heading_container'>
										<h2>Notre Mission</h2>
									</div>
									<p>
										Avec une équipe de passionnés d’agriculture et d’innovation,
										nous développons des solutions basées sur l’IoT (Internet
										des Objets), l'intelligence artificielle et les données pour
										un élevage plus connecté et plus responsable.
									</p>
								</div>
							</div>
						</div>

						<br />

						<div class='row'>
							<div class='col-md-6'>
								<div class='detail-box'>
									<div class='heading_container'>
										<h2>Nos Valeurs</h2>
									</div>
									<p>
										Nous nous engageons à construire un monde où chaque vache
										peut évoluer dans un environnement sain et sécurisé, tout en
										optimisant la productivité des fermes. En d’autres termes,
										nous facilitons la vie des éleveurs tout en garantissant la
										santé et le bien-être des animaux.
									</p>
								</div>
							</div>
							<div class='col-md-6'>
								<div class='img-box'>
									<img src={about_3} alt='about_img' />
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- end about section --> */}

				{/* <!-- footer section --> */}
				<Footer />
				{/* <!-- footer section --> */}

				<script type='text/javascript' src='js/jquery-3.4.1.min.js'></script>
				<script type='text/javascript' src='js/bootstrap.js'></script>
			</body>
		</>
	);
}

export default About;
