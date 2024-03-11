export default function Fruit({ name, emoji, price, soldOut }) {
  // react fragments
  // <> </>
  return (
    <>
      {/*       {price > 10 ? (
        <li>
          {emoji} {name} {price}
        </li>
      ) : (
        ""
      )} */}
      <li>
        {emoji} {name} {price} [{soldOut ? "Sold Out" : "In Stock"}]
      </li>
    </>
  );
}
