import React from "react";
import { CategoriesList } from "./CategoriesList";
import {
  CategoryCard,
  Container,
  CategoryIcon,
  Text,
  ColorLine,
  WrapperCard,
  WrapperIconLine,
} from "./DropDownList.style";

export function DropDownList({ onCategoryClick }) {
  return (
    <Container>
      <WrapperCard>
        {CategoriesList.length > 0 &&
          CategoriesList.map((data) => {
            return (
              <CategoryCard onClick={() => onCategoryClick(data)} key={data.id}>
                <Text>{data.title}</Text>
                <WrapperIconLine>
                  <CategoryIcon src={data.icon} />
                  <ColorLine colorLine={data.color} />
                </WrapperIconLine>
              </CategoryCard>
            );
          })}
      </WrapperCard>
    </Container>
  );
}
