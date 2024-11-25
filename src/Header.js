import React from "react";
import logo from "./images/logo.webp";

function Header() {
	return (
		// <!-- Purpose: Header of the website -->
		<>
			<head>
				{/* <!-- Basic --> */}
				<meta charset='utf-8' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				{/* <!-- Mobile Metas --> */}
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>
				{/* <!-- Site Metas --> */}
				<meta name='keywords' content='' />
				<meta name='author' content='x225franc' />

				{/* <!-- Favicons --> */}
				<link rel='icon' href='/favicon.ico' />

				{/* <!-- slider stylesheet --> */}
				{/* <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css" /> */}

				{/* <!-- font wesome stylesheet --> */}
				{/* <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" /> */}

				{/* <!-- bootstrap core css --> */}
				{/* <link rel="stylesheet" type="text/css" href="css/bootstrap.css" /> */}

				{/* <!-- bootstrap icons --> */}
				{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"> */}
				{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/font/bootstrap-icons.css"> */}

				{/* <!-- fonts style --> */}
				{/* <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
        rel="stylesheet" /> */}
				{/* <!-- Custom styles for this template --> */}
				{/* <link href="css/style.css" rel="stylesheet" /> */}
				{/* <!-- responsive style --> */}
				{/* <link href="css/responsive.css" rel="stylesheet" /> */}
			</head>

			<header class='header_section'>
				<div class='container'>
					<nav class='navbar navbar-expand-lg custom_nav-container pt-3'>
						<a class='navbar-brand mr-5' href='/'>
							<img loading="lazy"
								src={logo}
								alt='Logo'
								style={{ width: "100px", height: "auto" }}
							/>
							<span> Bytemeuh </span>
						</a>
						<button
							class='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span class='navbar-toggler-icon'></span>
						</button>
						<div class='collapse navbar-collapse' id='navbarSupportedContent'>
							<div class='d-flex ml-auto flex-column flex-lg-row align-items-center'>
								<ul class='navbar-nav'>
									<li class='nav-item active'>
										<a class='nav-link' href='/'>
											{" "}
											Accueil{" "}
										</a>
									</li>
									<li class='nav-item'>
										<a class='nav-link' href='/about'>
											{" "}
											Apropos{" "}
										</a>
									</li>
									<li class='nav-item'>
										<a class='nav-link' href='/project'>
											{" "}
											Projets{" "}
										</a>
									</li>
									<li class='nav-item'>
										<a class='nav-link' href='/activities'>
											{" "}
											Activités{" "}
										</a>
									</li>
									<li class='nav-item'>
										<a class='nav-link' href='/contact'>
											{" "}
											Contacts
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Header;
