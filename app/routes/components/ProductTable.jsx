
import React from "react";
import { Card, DataTable, Thumbnail, Button, Text, Page } from "@shopify/polaris";

const ProductTable = ({ products = [], onEdit, onDelete }) => {
  const rows = products.map((product) => [
    <Text variant="bodyMd" fontWeight="bold">{product.title}</Text>,
    <Text variant="bodyMd">{product.body_html}</Text>,
    <Thumbnail source={product.images?.[0]?.src || ""} alt={product.title} size="small" />,
    <Text variant="bodyMd">${product.variants?.[0]?.price || "N/A"}</Text>,
    <Text variant="bodyMd">{product.vendor}</Text>,
    <div style={{ display: "flex", gap: "8px" }}>
      <Button size="slim" onClick={() => onEdit(product)}>Edit</Button>
      <Button size="slim" destructive onClick={() => onDelete(product.id)}>Delete</Button>
    </div>,
  ]);

  return (
    <Page>
      <Card>
        <DataTable
          columnContentTypes={["text", "text", "text", "numeric", "text", "text"]}
          headings={["Title", "Description", "Image", "Price", "Vendor", "Actions"]}
          rows={rows}
        />
      </Card>
    </Page>
  );
};

export default ProductTable;
