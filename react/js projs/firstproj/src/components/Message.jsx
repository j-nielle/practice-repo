export default function Message() {
  function handleClick() {
    console.log("Clicked");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
