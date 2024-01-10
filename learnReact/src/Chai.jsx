import LoginForm from './Components/LoginForm';
import AdminPanel from './Components/AdminPanel';

const isLoggedIn = true;

function Chai() {
  return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
}

export default Chai;
// export { MyButton, Coffee };
