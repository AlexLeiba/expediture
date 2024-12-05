import React, { useState } from 'react';

import {
  Text,
  WrapperDropDown,
  WrapperDropDownTitle,
  IconDropDown,
  DropDown,
  DropDownExpenseTitle,
} from './FilterByCategoryDropdown.style';
import { Icons } from '../../assets/images/index';
import { DropDownFilter } from '../DropdownFilter/DropDownFilter';

export function FilterByCategoryDropdown({
  filteredCategory,
  handleCategoryDelete,
  handleCategoryClick,
}) {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  return (
    <WrapperDropDown onClick={() => setIsDropDownVisible(!isDropDownVisible)}>
      <WrapperDropDownTitle>
        <Text>Filter by category</Text>
        {filteredCategory.title && (
          <img
            onClick={handleCategoryDelete}
            alt='delete-filter'
            src={Icons.deleteFilter}
            style={{ width: 18, cursor: 'pointer' }}
          />
        )}
      </WrapperDropDownTitle>

      <IconDropDown
        isDropDown={isDropDownVisible}
        onClick={() => setIsDropDownVisible(!isDropDownVisible)}
        src={require('../../assets/images/arrow-down.png')}
        alt='Arrow down'
      />

      <DropDown>
        <DropDownExpenseTitle>{filteredCategory.title}</DropDownExpenseTitle>
      </DropDown>

      {isDropDownVisible && (
        <DropDownFilter
          setIsDropDownVisible={setIsDropDownVisible}
          onCategoryClick={handleCategoryClick}
        />
      )}
    </WrapperDropDown>
  );
}
