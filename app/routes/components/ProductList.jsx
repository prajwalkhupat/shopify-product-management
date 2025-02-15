
/*
import React, { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../api/productApi";
import ProductTable from "./ProductTable";
import { Page, Card, Button } from "@shopify/polaris";

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    alert("Product has been deleted!");
    fetchProducts();
  };

  return (
    <Page title="Product List">
      <Card sectioned>
        <ProductTable products={products} onEdit={onEdit} onDelete={handleDelete} />
      </Card>
    </Page>
  );
};

export default ProductList;

*/


/*
import React from "react";
import ProductTable from "./ProductTable";
import { Page, Card } from "@shopify/polaris";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <Page title="Product List">
      <Card sectioned>
        <ProductTable products={products} onEdit={onEdit} onDelete={onDelete} />
      </Card>
    </Page>
  );
};

export default ProductList;
*/

import React from "react";
import ProductTable from "./ProductTable";
import { Page, Card } from "@shopify/polaris";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <Page title="Product List">
      <Card sectioned>
        <ProductTable products={products} onEdit={onEdit} onDelete={onDelete} />
      </Card>
    </Page>
  );
};

export default ProductList;
