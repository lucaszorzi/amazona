import React from 'react';
import data from '../data';
import Product from '../components/Product';

export default function HomeScreen() {
    return (
        <div>
            <div className="row center">

                {
                    //map converte os itens escritos js em data.js para html -> para cada produto, converta-os em ...
                    data.products.map(product => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    );
}