import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function HomeScreen() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false); //false pois por default não vamos carregar nada
    const [error, setError] = useState(false);

    // essa função é executada apenas um vez após o componente ser renderizado
    // a primeira parametro é uma função e a segunda um array (aceita uma lista de dependencias)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products'); //axios é a library para pegar os dados dos produtos do backend via ajax
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [])

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className="row center">
                    {
                        //map converte os itens escritos js em data.js para html -> para cada produto, converta-os em ...
                        products.map(product => (
                            <Product key={product._id} product={product} />
                        ))
                    }
                </div>
            )}
        </div>
    );
}