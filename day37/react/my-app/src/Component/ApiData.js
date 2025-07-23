import React from 'react'
import UseFetch from '../Customhooks/UseFetch'

const boxStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '12px 0',
    maxWidth: '350px',
    display: 'inline-block',
    verticalAlign: 'top',
    background: '#fafafa'
}

const ApiData = () => {
    const { data, loading, error } = UseFetch('https://dummyjson.com/products')

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            <h2>ApiDataFetch</h2>
            <hr/>
            <ul style={{listStyle: 'none', padding: 0}}>
                {data && data.products && data.products.map(product =>
                    <li key={product.id} style={boxStyle}>
                        <img src={product.thumbnail} alt={product.title} width="100" /><br />
                        <strong>{product.title}</strong><br />
                        {product.description}<br />
                        <span>Price: ${product.price}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default ApiData