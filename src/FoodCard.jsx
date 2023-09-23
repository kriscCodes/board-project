import './App.css'
export default function FoodCard(props) {
	return (
		<>
			<div className = "foodCards">
				<img className = "cardImage" src={props.source}></img>
				<h3 className = "cardName">{props.name}</h3>
				<h4 className = "cardCuisine">{props.cuisine}</h4>
				<a href={props.menu}>
				<button className = "cardButton">View Menu :D</button>
				</a>
			</div>
		</>
	);
}
