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
    const [ cart, setCart ] = useState<IProduct[]>([]);
    const [ product, setProduct] = useState<IProduct | undefined>(undefined);

    let counter:number = 3;
  
    useEffect(() => {
      localStorage.setItem(`@product`, JSON.stringify(product));
    }, [product]);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      counter += 1;

      const id: number = counter;
      const photo: string = (document.querySelector(`input#photo`) as HTMLInputElement).value;
      const name: string = (document.querySelector(`input#name`) as HTMLInputElement).value;
      const price: number = +(document.querySelector(`input#price`) as HTMLInputElement).value;
      
      const productArray: IProduct = {id: id, photo: photo, name: name, price: price};
  
      setProduct(productArray);
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
        <span>Add Product</span>
        <div className="formDiv">
            <form id="form" className="flexForm" onSubmit={ (e) => {handleSubmit(e)}}>
                <input type="text" className="formTextField" id="photo" placeholder="Photo (URL)" />
                <input type="text" className="formTextField" id="name" placeholder="Name" />
                <input type="text" className="formTextField" id="price" placeholder="Price" />
                <input type="submit" id="formButton" value="ADD PRODUCT" />
            </form>
        </div>
      </section>
    </Container>
  );
} 

export default Home;