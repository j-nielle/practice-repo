import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      <p>FIRST NAME: {name.firstName}</p>
      <p>LAST NAME: {name.lastName}</p>
      <form>
        <input
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value });
          }}
          type="text"
          value={name.firstName}
          placeholder="First Name"
        />
        <input
          onChange={(e) => {
            setName({ ...name, lastName: e.target.value });
          }}
          type="text"
          value={name.lastName}
          placeholder="Last Name"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
