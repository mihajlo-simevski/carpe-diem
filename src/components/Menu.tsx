import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Category } from "../mockdata";
import { fetchCategories, selectCategories } from "../store/categoriesSlice";
import { AppDispatch } from "../store/store";
import MenuItem from "./MenuItem";

export default function Menu() {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold">Menu</h3>
      <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((category: Category) => (
          <Link key={category.id} to={`/categories/${category.id}`}>
            <MenuItem
              key={category.id}
              id={category.id}
              name={category.name}
              logo={category.logo}
              active={category.active}
              created_at={category.created_at}
              updated_at={category.updated_at}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
