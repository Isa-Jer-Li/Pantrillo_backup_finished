import React, {useState, useEffect} from 'react';

function FoodJoke() {
	const [resultMsg, setResultMsg] = useState("Loading joke...");
	
	useEffect(() => {
		//fetch from the API
		async function fetchJoke(){ 
			const response = await fetch(
			`https://api.spoonacular.com/food/jokes/random?apiKey=ec5faeee615c49b4a1af0ecb0c89bc0a`
			)
			const data = await response.json()
			return data.text
		}
		//variable to send the data
		let jokeString = ""
		
		//function to loop until you get a joke > 150 char
		async function postJoke(){
			while(jokeString === "" || jokeString.length > 150) {
				jokeString = await fetchJoke()
			}	
			
			//state set to variable
			setResultMsg(jokeString);
		}
		postJoke()

	}, [])
	
	return(
		<div className="joke">
			<p>{resultMsg}</p>
		</div>
	)
}

export default FoodJoke