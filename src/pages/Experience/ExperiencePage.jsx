import * as userService from '../../utilities/users-service';

export default function ExperiencePage() {
  
  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>Experiences</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}