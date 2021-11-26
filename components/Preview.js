export default function Preview({ state }) {
  console.log(state.email);
  console.log(state.firstName);

  return (
    <div>
      <p>Firstname: {state.firstName}</p>
      <p>Lastname {state.lastName}</p>
      <p>Email: {state.email}</p>
      <p>phone: {state.phone}</p>
      <p>address:{state.address}</p>
      <p>postalcode:{state.postalcode}</p>
      <p>city:{state.city}</p>
      <p>github:{state.github}</p>
      <p>Linkedin:{state.linkedin}</p>
      <p>website:{state.website}</p>
      <p>headline:{state.headline}</p>
      <p>startTime:{state.startTime}</p>
      <p>endTime:{state.endTime}</p>
      <p>description:{state.description}</p>
    </div>
  );
}
