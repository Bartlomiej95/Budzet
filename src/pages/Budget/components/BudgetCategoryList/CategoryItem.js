import React from "react";

import { CategoryItem as Root } from "./BudgetCategoryList.css";

function CategoryItem({ name }) {
  return (
    <Root>
      <span>{name}</span>
    </Root>
  );
}

export default CategoryItem;
