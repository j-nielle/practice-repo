import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", emoji: "🍎", price: 12, soldOut: false },
    { name: "Banana", emoji: "🍌", price: 15, soldOut: false },
    { name: "Cherry", emoji: "🍒", price: 10, soldOut: true },
    { name: "Orange", emoji: "🍊", price: 10, soldOut: true },
    { name: "Pineapple", emoji: "🍍", price: 25, soldOut: true },
  ];

	return (
    <div>
      <h2>Fruits</h2>
			<ul>
				{fruits.map((fruit) => (
					//<li key={fruit.name}>{fruit.name} {fruit.emoji} = ${fruit.price} </li>
					<Fruit 
						key={fruit.name} 
						name={fruit.name} 
						emoji={fruit.emoji} 
						price={fruit.price} 
						soldOut={fruit.soldOut}
					/>
				))}
			</ul>
    </div>
  );
}
