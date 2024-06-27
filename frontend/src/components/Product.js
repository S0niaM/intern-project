import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { ApolloError } from '@apollo/client';

const GET_PRODUCT_DETAILS = gql`
  query GetProduct($productId: Int!) {
    productById(id: $productId) {
      id
      name
      price
      description
      stock
      createdAt
      updatedAt
    }
  }
`;

const Product = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { productId: parseInt(id) },
  });

  if (loading) return <p>Loading...</p>;

  if (error) {
    if (error instanceof ApolloError) {
      console.error("Apollo Error:", error.message);
    } else {
      console.error("Error:", error.message);
    }
    return <p>Error: {error.message}</p>;
  }

  // Ensure data is available before accessing it
  if (!data || !data.productById) return <p>No data found</p>;

  const product = data.productById; // Accessing the productById data

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mt-4"> {/* Adjusted margin-top to move card downwards */}
            <div className="card-body">
              <h1 className="card-title">{product.name}</h1>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price: ${product.price}</p>
              <p className="card-text">Stock: {product.stock}</p>
              <p className="card-text">Created At: {product.createdAt}</p>
              <p className="card-text">Updated At: {product.updatedAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
