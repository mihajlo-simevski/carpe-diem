import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Product } from "../mockdata";
import { fetchCategories, selectCategories } from "../store/categoriesSlice";
import { fetchProducts, selectProducts } from "../store/productsSlice";
import ProductItem from "./ProductItem";
import { AppDispatch } from "../store/store";

function CategoryPage() {
  let { categoryId } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);
  const category = categories.find(
    (category) => category.id === Number(categoryId)
  );
  const productsByCategory = products.filter(
    (product) => product.category_id === Number(categoryId)
  );

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);


  return (
    <div className="max-w-2xl mx-auto">
      <header className="bg-white text-secondary-foreground p-4 flex items-center justify-between border">
        <button>
          <Link to="/">
            <ChevronLeft />
            <span className="sr-only">Back</span>
          </Link>
        </button>

        <h2 className="text-xl font-bold">{category?.name}</h2>
        <div className="relative flex h-full w-10 shrink-0 overflow-hidden rounded-full">
          <img
            src={`${category?.logo}`}
            alt={`${category?.name}`}
          />
        </div>
      </header>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-5">
        <div className="p-4">
          <div className="grid gap-4">
            {productsByCategory.map((product: Product) => (
              <ProductItem
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
