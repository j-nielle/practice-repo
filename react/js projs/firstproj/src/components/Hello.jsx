/* const world = "World";

function displayMsg() {
  return "Wow!";
} */

function Hello({ person }) {
  const { name, msg, emoji, seatNums } = person;
  return (
    <section>
      <h1>
        Hello {name}, you are {msg} and you like {emoji}!
      </h1>
      <h1>Seat numbers:</h1>
      <ul> {seatNums.map(seat => (
        <li key={seat}>{seat}</li>
      ))}</ul>
    </section>
  );
}

export default Hello;
