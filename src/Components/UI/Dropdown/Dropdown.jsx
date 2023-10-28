import React from 'react';
import {
  DropDown,
  DropDownExpenseTitle,
  WrapperDropDown,
  IconDropDown,
  WrapperDropDownTitle,
  Text,
} from './Dropdown.style';
import { DropDownList } from '../../DropList/DropDownList';

export function Dropdown({
  setIsDropDownVisible,
  isDropDownVisible,
  categoryTitle,
  onCategoryClick,
}) {
  return (
    <div>
      <WrapperDropDown onClick={() => setIsDropDownVisible(!isDropDownVisible)}>
        <WrapperDropDownTitle>
          <Text>Choose type</Text>
        </WrapperDropDownTitle>

        <IconDropDown
          isDropDown={isDropDownVisible}
          onClick={() => setIsDropDownVisible(!isDropDownVisible)}
          src={require('../../../assets/images/arrow-down.png')}
          alt='arrow down'
        />

        <DropDown>
          <DropDownExpenseTitle>{categoryTitle}</DropDownExpenseTitle>
        </DropDown>

        {isDropDownVisible && (
          <DropDownList onCategoryClick={onCategoryClick} />
        )}
      </WrapperDropDown>
    </div>
  );
}
