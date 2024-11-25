// src/NotFound.js
import React from "react";
import { Helmet } from "react-helmet";

function NotFound() {
	return (
		<div>
			{/* <!-- end helmet--> */}
			<Helmet>
				<title>Bytemeuh404</title>
				<meta
					name='description'
					content='Erreur 404 : cette page n’existe pas.'
				/>
				<meta property='og:title' content='Bytemeuh404' />
				<meta
					property='og:description'
					content='Erreur 404 : cette page n’existe pas.'
				/>
			</Helmet>
			{/* <!-- end helmet--> */}
			<h1>ERREUR 404 </h1>
			<p>Cette page n'existe pas</p>
		</div>
	);
}

export default NotFound;
