import React, { useState, useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Import the CSS file for styling

const GET_PRODUCTS_LIST = gql`
  query GetProducts {
    allProducts {
      id
      name
      price
      stock
    }
  }
`;

const ProductList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_LIST);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!data || !data.allProducts) return [];

    return data.allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toString().includes(searchTerm) ||
      product.stock.toString().includes(searchTerm)
    );
  }, [data, searchTerm]);

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      cell: row => <Link to={`/products/${row.id}`}>{row.name}</Link>,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'Stocks',
      selector: row => row.stock,
      sortable: true,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="product-container">
      <h3>List</h3>
      <input
        type="text"
        className="search-input"
        placeholder="Search anything..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <DataTable
        columns={columns}
        data={filteredProducts}
        pagination
        highlightOnHover
        striped
        customStyles={customStyles}
      />
    </div>
  );
};


const customStyles = {
  header: {
    style: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#333', // Dark grey text color
      textAlign: 'center',
      backgroundColor: '#f5f5f5', // Light grey background
      padding: '10px',
    },
  },
  rows: {
    style: {
      fontSize: '16px',
      padding: '10px',
      borderBottom: '1px solid #ddd', // Light grey bottom border for rows
    },
  },
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: '#333', // Dark grey header background
      color: 'white', // White text color for headers
      padding: '10px',
      borderBottom: '2px solid #f5f5f5', // Light grey bottom border for header cells
    },
  },
  cells: {
    style: {
      padding: '10px',
    },
  },
};


export default ProductList;
