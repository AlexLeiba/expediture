import React, { useRef, useEffect } from 'react';
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

export function DropDownFilter({ onCategoryClick, setIsDropDownVisible }) {
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsDropDownVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });
  return (
    <Container ref={containerRef}>
      <WrapperCard>
        {CategoriesFilter.length > 0 &&
          CategoriesFilter.map((data) => {
            return (
              <CategoryCard
                ref={headerRef}
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
