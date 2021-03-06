import Navbar from '../pages/index.js';
import FoodJoke from '../components/FoodJoke';
import Footer from '../components/Footer/Footer.jsx';
import Sidebar from '../components/Sidebar'
import isabelle from '../img/isabelle.png'
import karl from '../img/karl.jpeg'
import pierce from '../img/pierce.jpeg'

{/* youll return html, run JS above */}

function Welcome () {
	let name = localStorage.getItem("myname")

	{/* JS end */}
	return (
		<div>

			<Navbar />

		<div className= "welc-hero">
			<h1>Welcome!</h1>

			<div className="row">
				<a class="welcome-btn" href="#jokediv">About us</a>
				<a class="welcome-btn" href="#bio">Who we are</a>
			</div>
		</div>

		<div id = "jokediv">
			<FoodJoke />
		</div>


		<div id="about">
			<h2>About Pantrillo</h2>
			<section>
				<p>Pantrillo started in early 2022 after the three founders, Pierce, Isabelle and Karl, met in an intensive college course where many conversations circled around how difficult it became to sit and eat dinner after the classes were all done. </p> <p> Whether the struggle came from not having the time to shop or energy to cook, we all realized it was an issue for almost everyone in the course. With that realization, the founders set out to help the busy-bodies, like them, all around the world with the hope of ensuring a healthy and easy meal for everybody. </p>
			</section>
		</div>



		<div id = "bio">
<div id="biggercont">
		<div className = "name">
			<a href = "https://github.com/Isa-Jer-Li"> <img className = "isabelle" src = {isabelle} /> </a>
<h6> Isabelle Link </h6>
			<div className = "para">

				<br />
			<p> Isabelle has been apart of our team from the beginning. Their job at Pantrillo included frontend development, with a focus on aesthetics and UI.  </p>
				</div>
			</div>
			<div className = "name">
			<a href = "https://github.com/krshinn"> <img className = "karl" src = {karl} /> </a>
				<h6> Karl Shinn </h6>
			<div className = "para">
				<br />
		</div>
		<p> Pantrillo was happy to welcome Karl on right after before production began. He became an integral part of the team immediatly. Karl focused on backend and helped with design and brainstorming. </p>
			</div>
		</div>
		<div className = "name">
			<a href = "https://github.com/piercelawson"> <img className = "pierce" src = {pierce} /> </a>
				<h6> Pierce Lawson </h6>
			<div className = "para">
</div>
	<div className = "para">
		<br />
		<p> Pierce is one of the founding fathers of Pantrillo, and has focused on frontend, and graphic design as well as organizing the game plan for the team on Figma and Miro. </p>
	</div>
		<Footer />

	</div>
	)
}

export default Welcome