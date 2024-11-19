import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function Project() {
	return (
		<>
			<body class='sub_page'>
				<div class='hero_area'>
					{/* <!-- header section strats --> */}
					<Header />
					{/* <!-- end header section --> */}
				</div>

				<div class='body_bg layout_padding'>
					{/* <!-- project section --> */}
					<div class='body_bg layout_padding'>
						<section class='service_section'>
							<div class='container'>
								<div class='heading_container'>
									<h2>Nos projets</h2>
								</div>
								<p class='text-center'>
									Découvrez comment ByteMeuh révolutionne l’élevage bovin grâce
									à des solutions numériques intelligentes.
								</p>
							</div>
							<div class='container'>
								<div class='row'>
									<div class='col-md-6'>
										<div class='box'>
											<div class='img-box'>
												<i class='bi bi-robot' style={{ fontSize: "50px" }}></i>
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
													class='bi bi-activity'
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
											<h4>
												Optimiser la production laitière grâce aux données
											</h4>
											<p>
												Comment les données permettent d'améliorer les
												rendements sans nuire au bien-être animal.
											</p>
											<a href='/milkoptimization'> Voir Plus </a>
										</div>
									</div>
									<div class='col-md-6'>
										<div class='box align-items-end align-items-md-start text-right text-md-left'>
											<div class='img-box'>
												<i class='bi bi-tree' style={{ fontSize: "50px" }}></i>
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

export default Project;
