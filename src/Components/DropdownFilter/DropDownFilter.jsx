import React from 'react';
import { CategoriesFilter } from './CategoriesFilter';
import {
  CategoryCard,
  Container,
  CategoryIcon,
  Text,
  ColorLine,
  WrapperCard,
  WrapperIconLine,
} from './DropDownFilter.style';

export function DropDownFilter({ onCategoryClick }) {
  return (
    <Container>
      <WrapperCard>
        {CategoriesFilter.length > 0 &&
          CategoriesFilter.map((data) => {
            return (
              <CategoryCard
                onClick={() =>
                  onCategoryClick(
                    data,
                    parseInt(Math.random() * (2000 - 1) + 1)
                  )
                }
                key={data.id}
              >
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
