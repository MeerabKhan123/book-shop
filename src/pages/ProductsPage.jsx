import React from 'react';
import ProductCard from '../components/ProductCard';

import monosalwa from'../assets/manosalwa.jpg'
import Janat from '../assets/janat.jpg'
import abehayat from'../assets/abehayat.jpg'
import ishqeAtish  from '../assets/ishqeatish.jpg'
import kasrokaiser from '../assets/kasrokaiser.jpg'
import jobachehain from '../assets/jobachehain.jpg'
import alif from '../assets/alif.jpg'
import yaram from '../assets/yaram.jpg'
import  sulphite from '../assets/sulphite.webp'
import roheyaram from '../assets/roheyaram.jpg'
import yaryaro from '../assets/yaryaro.jpeg'
import humkahakaisachethai from '../assets/humkahakaisachethai.jpg'
import prizadImage from '../assets/prizad.webp'
import Peerkamil from '../assets/peer kamil.jpg'
import Namal from '../assets/namal.jpg'
import Halam from '../assets/halam.jpg'
import Mushaif from '../assets/musahif.jpg'
import Amerbail from '../assets/amerbail.jpg'


const products = [
  
  
  {
    id: 1,
        name: 'Jannat K Patay',
        price: 22.20,
        image: Janat,
  },
  {

    id: 2,
        name: 'Abehayat',
        price: 15.00,
        image: abehayat,
  },
  {

    id: 1,
        name: 'Man O Salwa ',
        price: 250.00,
        image: monosalwa,
  },
  {
    id: 6,
        name: 'ishq e Atish',
        price: 4995,
        image: ishqeAtish,
  },
  {
    id: 3,
        name: 'Qaisar O Kisra ',
        price: 18.90,
        image: kasrokaiser,
  },
  {
      id: 4,
         name: 'Jo Bachay Hain Sang Samet Lo',
         price: 15.00,
         image: jobachehain,
  },
  {
    id: 4,
        name: 'Alif',
        price: 12.00,
        image: alif,
  },
  {
    id: 4,
        name: 'Yaram',
        price: 2.499,
        image: yaram,
  },
  {
    id: 4,
        name: 'Sulphite',
        price: 20.90,
        image: sulphite,
  },{
    id: 4,
        name: 'RoheYaram',
        price: 3.500,
        image: roheyaram,
  },{
    id: 4,
        name: 'Yar Yaro Se Hona Juda',
        price: 2.300 ,
        image: yaryaro,
  },
  {
    id: 4,
        name: 'Hum Kaha Kay Sachay Thay ',
        price: 2.499,
        image: humkahakaisachethai,
  },
 {
     id: 1,
     name: 'Parizad',
     price: 900.00,
     image: prizadImage,
   },
   {
     id: 3,
     name: 'Pir e Kamil(PBUH)',
     price: 1200,
     image: Peerkamil,
   },
   {
     id: 6,
     name: 'Namal',
     price: 4995,
     image: Namal,
   },
   {
     id: 4,
     name: 'Halam by nimra ahmad',
     price: 24.99,
     image: Halam,
   },
   {
     id: 4,
     name: 'Musahif',
     price: 12.99,
     image: Mushaif,
   },
   {
     id: 4,
     name: 'Amerbail',
     price: 2.499,
     image: Amerbail,
   },
];

const ProductsPage = ({ addToCart }) => {
  return (
    <div className="container">
      <h2>All Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;