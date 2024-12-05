import React from 'react';
import {
  Input as InputComponent,
  WrapperLabel,
  Text,
  IconMoney,
  Container,
  IconSearch,
} from './Input.style';

import { Icons } from '../../../assets/images/index';

import { WrapperClearButton } from './Input.style';

export function Input({
  inputType,
  value,
  handleInputValues,
  placeholder,
  label,
  type,
  focused,
}) {
  return (
    <Container>
      <InputComponent
        autoFocus={focused}
        type={type}
        inputType={inputType}
        value={value}
        onChange={(e) =>
          inputType === 'search'
            ? handleInputValues(e.target.value)
            : handleInputValues(inputType, e.target.value)
        }
        placeholder={placeholder}
      />

      {value && (
        <WrapperClearButton>
          <img
            onClick={() => {
              inputType === 'search'
                ? handleInputValues('')
                : handleInputValues(inputType, '');
            }}
            alt='delete-filter'
            src={Icons.deleteFilter}
            style={{ width: 18, cursor: 'pointer' }}
          />
        </WrapperClearButton>
      )}

      {inputType === 'search' ? (
        <IconSearch
          src={require('../../../assets/images/search-icon.webp')}
          alt='search-icon'
        />
      ) : (
        <WrapperLabel inputType={inputType}>
          <Text>{label}</Text>
          {inputType === 'cost' && (
            <IconMoney
              src={require('../../../assets/images/dollar.png')}
              alt='dollar'
            />
          )}
        </WrapperLabel>
      )}
    </Container>
  );
}
