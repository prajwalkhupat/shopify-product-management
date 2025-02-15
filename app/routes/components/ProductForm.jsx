
/*

import React, { useState, useEffect } from "react";
import { Form, FormLayout, TextField, Button, Card, Page } from "@shopify/polaris";

const ProductForm = ({ onSubmit, initialData, onCancel }) => {
  const [product, setProduct] = useState({
    title: "",
    body_html: "",
    vendor: "",
    variants: [{ price: "" }],
    images: [{ src: "" }],
  });

  useEffect(() => {
    setProduct(initialData || {
      title: "",
      body_html: "",
      vendor: "",
      variants: [{ price: "" }],
      images: [{ src: "" }],
    });
  }, [initialData]);

  const handleChange = (field) => (value) => {
    setProduct((prev) => ({ ...prev, [field]: value }));
  };

  const handlePriceChange = (value) => {
    setProduct((prev) => ({ ...prev, variants: [{ price: value }] }));
  };

  const handleImageChange = (value) => {
    setProduct((prev) => ({ ...prev, images: [{ src: value }] }));
  };

  const handleSubmit = () => {
    if (!product.title || !product.body_html || !product.vendor || !product.variants[0].price || !product.images[0].src) {
      alert("Please fill in all fields before submitting!");
      return;
    }
    onSubmit(product);
  };

  return (
    <Page title="Add Product">
      <Card sectioned>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField label="Title" value={product.title} onChange={handleChange("title")} autoComplete="off" />
            <TextField label="Description" value={product.body_html} onChange={handleChange("body_html")} autoComplete="off" />
            <TextField label="Vendor" value={product.vendor} onChange={handleChange("vendor")} autoComplete="off" />
            <TextField label="Price" type="number" value={product.variants[0].price} onChange={handlePriceChange} autoComplete="off" />
            <TextField label="Image URL" value={product.images[0].src} onChange={handleImageChange} autoComplete="off" />
            
            
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <Button onClick={onCancel}>Cancel</Button>
              <Button submit primary>Submit</Button>
            </div>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  );
};

export default ProductForm;
*/


import React, { useState, useEffect } from "react";
import { Form, FormLayout, TextField, Button, Card, Page } from "@shopify/polaris";

const ProductForm = ({ onSubmit, initialData, onCancel }) => {
  const [product, setProduct] = useState({
    title: "",
    body_html: "",
    vendor: "",
    variants: [{ price: "" }],
    images: [{ src: "" }],
  });

  useEffect(() => {
    setProduct(initialData || {
      title: "",
      body_html: "",
      vendor: "",
      variants: [{ price: "" }],
      images: [{ src: "" }],
    });
  }, [initialData]);

  const handleChange = (field) => (value) => {
    setProduct((prev) => ({ ...prev, [field]: value }));
  };

  const handlePriceChange = (value) => {
    setProduct((prev) => ({ ...prev, variants: [{ price: value }] }));
  };

  const handleImageChange = (value) => {
    setProduct((prev) => ({ ...prev, images: [{ src: value }] }));
  };

  const handleSubmit = () => {
    if (!product.title || !product.body_html || !product.vendor || !product.variants[0].price || !product.images[0].src) {
      alert("Please fill in all fields before submitting!");
      return;
    }
    onSubmit(product);
    setProduct({ title: "", body_html: "", vendor: "", variants: [{ price: "" }], images: [{ src: "" }] });
  };

  const handleCancel = () => {
    setProduct({ title: "", body_html: "", vendor: "", variants: [{ price: "" }], images: [{ src: "" }] });
    onCancel();
  };

  return (
    <Page title="Add Product">
      <Card sectioned>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField label="Title" value={product.title} onChange={handleChange("title")} autoComplete="off" />
            <TextField label="Description" value={product.body_html} onChange={handleChange("body_html")} autoComplete="off" />
            <TextField label="Vendor" value={product.vendor} onChange={handleChange("vendor")} autoComplete="off" />
            <TextField label="Price" type="number" value={product.variants[0].price} onChange={handlePriceChange} autoComplete="off" />
            <TextField label="Image URL" value={product.images[0].src} onChange={handleImageChange} autoComplete="off" />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button submit primary>Submit</Button>
            </div>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  );
};

export default ProductForm;
