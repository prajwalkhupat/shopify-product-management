

/*

import React, { useState, useEffect } from "react";
import { AppProvider, Page, Layout, Card, Toast, Frame } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";

import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { createProduct, updateProduct } from "./api/productApi";

const App = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [isProductUpdated, setIsProductUpdated] = useState(false);
  const [toast, setToast] = useState({ active: false, message: "" });

  const handleSave = async (product) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, product);
        setToast({ active: true, message: "Product updated successfully!" });
      } else {
        await createProduct(product);
        setToast({ active: true, message: "Product added successfully!" });
      }
      setEditingProduct(null);
      setIsProductUpdated(true);
    } catch (error) {
      console.error("Error saving product:", error);
      setToast({ active: true, message: "Failed to save product" });
    }
  };

  const handleCancel = () => setEditingProduct(null);

  useEffect(() => {
    if (isProductUpdated) {
      setIsProductUpdated(false);
    }
  }, [isProductUpdated]);

  return (
    <AppProvider i18n={enTranslations}>
      <Frame>
        <Page title="Product Management">
          <Layout>
          
            <Layout.Section>
              <Card title="Add / Edit Product" sectioned>
                <ProductForm onSubmit={handleSave} initialData={editingProduct} onCancel={handleCancel} />
              </Card>
            </Layout.Section>

        
            <Layout.Section>
              <Card title="Product List" sectioned>
                <ProductList onEdit={setEditingProduct} />
              </Card>
            </Layout.Section>
          </Layout>

          {toast.active && <Toast content={toast.message} onDismiss={() => setToast({ active: false, message: "" })} />}
        </Page>
      </Frame>
    </AppProvider>
  );
};

export default App;

*/

////////////////////////////////////////////////////////////////////////

/*
import React, { useState, useEffect } from "react";
import { AppProvider, Page, Layout, Card, Toast, Frame } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";

import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { createProduct, updateProduct, getAllProducts } from "./api/productApi";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [toast, setToast] = useState({ active: false, message: "" });

  // Fetch products and sort them (newest first)
  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSave = async (product) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, product);
        setToast({ active: true, message: "Product updated successfully!" });
      } else {
        await createProduct(product);
        setToast({ active: true, message: "Product added successfully!" });
      }
      setEditingProduct(null);
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error saving product:", error);
      setToast({ active: true, message: "Failed to save product" });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setToast({ active: true, message: "Product deleted successfully!" });
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error deleting product:", error);
      setToast({ active: true, message: "Failed to delete product" });
    }
  };

  return (
    <AppProvider i18n={enTranslations}>
      <Frame>
        <Page title="Product Management">
          <Layout>
            <Layout.Section>
              <Card title="Add / Edit Product" sectioned>
                <ProductForm onSubmit={handleSave} initialData={editingProduct} onCancel={() => setEditingProduct(null)} />
              </Card>
            </Layout.Section>
            <Layout.Section>
              <Card title="Product List" sectioned>
                <ProductList products={products} setProducts={setProducts} onEdit={setEditingProduct} onDelete={handleDelete} />
              </Card>
            </Layout.Section>
          </Layout>
          {toast.active && <Toast content={toast.message} onDismiss={() => setToast({ active: false, message: "" })} />}
        </Page>
      </Frame>
    </AppProvider>
  );
};

export default App;

*/

import React, { useState, useEffect } from "react";
import { AppProvider, Page, Layout, Card, Toast, Frame } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";

import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { createProduct, updateProduct, getAllProducts, deleteProduct } from "./api/productApi";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [toast, setToast] = useState({ active: false, message: "" });

  // Fetch products and sort them (newest first)
  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSave = async (product) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, product);
        setToast({ active: true, message: "Product updated successfully!" });
      } else {
        await createProduct(product);
        setToast({ active: true, message: "Product added successfully!" });
      }
      setEditingProduct(null);
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error saving product:", error);
      setToast({ active: true, message: "Failed to save product" });
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setToast({ active: true, message: "Product deleted successfully!" });
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error deleting product:", error);
      setToast({ active: true, message: "Failed to delete product" });
    }
  };

  return (
    <AppProvider i18n={enTranslations}>
      <Frame>
        <Page title="Product Management">
          <Layout>
            <Layout.Section>
              <Card title="Add / Edit Product" sectioned>
                <ProductForm
                  onSubmit={handleSave}
                  initialData={editingProduct}
                  onCancel={() => setEditingProduct(null)}
                />
              </Card>
            </Layout.Section>
            <Layout.Section>
              <Card title="Product List" sectioned>
                <ProductList
                  products={products}
                  onEdit={setEditingProduct}
                  onDelete={handleDelete}
                />
              </Card>
            </Layout.Section>
          </Layout>
          {toast.active && <Toast content={toast.message} onDismiss={() => setToast({ active: false, message: "" })} />}
        </Page>
      </Frame>
    </AppProvider>
  );
};

export default App;
