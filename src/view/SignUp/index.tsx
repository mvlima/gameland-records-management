import React, { useState, useEffect } from 'react';
import Cart from '../../assets/cart.png'
import { Container } from './styles';
import api from '../../services/api';
import { useHistory, Link } from 'react-router-dom';

interface IProduct{
  id: number;
  photo: string;
  name: string;
  price: number;
}

interface IUser{
    email: string;
    name: string;
    password: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();
  const [ cart, setCart ] = useState<IProduct[]>([]);
  const [ user, setUser ] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    localStorage.setItem(`@user`, JSON.stringify(user));
  }, [user]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email: string = (document.querySelector(`input#email`) as HTMLInputElement).value;
    const name: string = (document.querySelector(`input#name`) as HTMLInputElement).value;
    const password: string = (document.querySelector(`input#password`) as HTMLInputElement).value;
    
    const userArray: IUser = {email: email, name: name, password: password};

    setUser(userArray)
  }

  return (
    <Container>
      <div className="nav">
        <div>
          <Link to="/" className="logo">
            <img src="https://www.pngrepo.com/png/59135/512/game-controller.png" alt="Controller Logo" className="logoImg" height="80" width="auto" />
            <span className="brandName">GAMELAND</span>
          </Link>
        </div>
        <div className="cartArea">
          <button className="login" onClick={ () => history.push('/login')}>Login</button>
          <button className="singUp" onClick={ () => history.push('/signUp')}>Sign Up</button>
          <button className="addProducts" onClick={ () => history.push('/addProducts')}>Add Products</button>
          <span className="cartItems">{cart.length}</span>
          <img src={Cart} alt="Shopping Cart" height="80" width="auto" />
        </div>
      </div>
      <section>
        <span>Create Account</span>
        <div className="formDiv">
            <form id="form" className="flexForm" onSubmit={ (e) => {handleSubmit(e)}}>
                <input type="text" className="formTextField" id="name" placeholder="Name" />
                <input type="text" className="formTextField" id="email" placeholder="Email" />
                <input type="password" className="formTextField" id="password" placeholder="Password" />
                <input type="password" className="formTextField" id="repeatPassword" placeholder="Repeat Password" />
                <input type="submit" id="formButton" value="CREATE ACCOUNT" />
            </form>
        </div>
      </section>
    </Container>
  );
} 

export default SignUp;