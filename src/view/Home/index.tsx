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

const Home: React.FC = () => {
  const history = useHistory();
  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data)
      }
      )
  }, [])

  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);

  const handleCart = (index: number) => {
    let product = data[index];
    setCart(cart => [...cart, product]);
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
        { data.map( (prod, index) => (
            <div className="product-content" key={prod.id}>
              <img src={prod.photo} alt={prod.name} width="auto" height="250" />
              <h4>{prod.name}</h4>
              <h3>${prod.price}</h3>
              <button onClick={ () => handleCart(index) }>ADD TO CART</button>
            </div>
        )) }
      </section>
    </Container>
  );
} 

export default Home;