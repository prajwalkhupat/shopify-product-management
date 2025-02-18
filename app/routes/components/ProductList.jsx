
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

