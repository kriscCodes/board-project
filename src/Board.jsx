import budWeiSen from "./assets/budWeiSen.png"
import FoodCard from './FoodCard.jsx'
export default function Board (){
  return (
		<>
			<div className="contain">
				<h1>Food Board</h1>
				<div className="cardBoard">
					<FoodCard
						source={budWeiSen}
						name="BudWeisen"
						cuisine="Ecuadorian"
						menu="https://www.instagram.com/abudweisen/"
					></FoodCard>

					<FoodCard
						source={budWeiSen}
						name="BudWeisen"
						cuisine="Ecuadorian"
						menu="https://www.instagram.com/abudweisen/"
					></FoodCard>
					<FoodCard
						source={budWeiSen}
						name="BudWeisen"
						cuisine="Ecuadorian"
						menu="https://www.instagram.com/abudweisen/"
					></FoodCard>

					<FoodCard
						source={budWeiSen}
						name="BudWeisen"
						cuisine="Ecuadorian"
						menu="https://www.instagram.com/abudweisen/"
					></FoodCard>

					<FoodCard
						source={budWeiSen}
						name="BudWeisen"
						cuisine="Ecuadorian"
						menu="https://www.instagram.com/abudweisen/"
					></FoodCard>
				</div>
			</div>
		</>
	);
}