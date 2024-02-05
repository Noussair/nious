import { Category } from "../../../types/ourWorkSection";

interface CategoryFiltersProps {
    categories: Category[];
  }

    export const CategoryFilters: React.FC<CategoryFiltersProps> = ({ categories }) => {
    return (
      <div className="filter">
        <ul className="nav nav-pills text-center">
          <li><a style={{cursor:'pointer'}} className="hover-effect" data-group="all" >All</a></li>
          {categories.map(category => (
            <li key={category._id}>
              <a style={{cursor:'pointer'}} className="hover-effect" data-group={category.title}>
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
