import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {

  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';

function DataFetching() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://5f7e84300198da0016893989.mockapi.io/api/products')
      .then(res => {
        setProduct(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
  return (
    <div>
      <ul>
        {product.map(item => {
          // console.log(item);
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  );
}
export default DataFetching;