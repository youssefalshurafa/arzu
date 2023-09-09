import ProductForm from '@/components/forms/ProductForm';
import { getCategories } from '@/lib/controllers/product.controller';

async function ProductsPage() {
  const categories = await getCategories();
  if (!categories) return null;
  return (
    <main>
      <div>
        <ProductForm categories={categories} />
      </div>
    </main>
  );
}

export default ProductsPage;
