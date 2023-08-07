import React from 'react';
import { render , screen } from '@testing-library/react';
import Meta from '@yuyuid/src/components/meta'

jest.mock('next/head', function(){
  return {
    __esModule: true,
  }
});

test('[components]: melakukan koreksi meta title',function(){
  const title = 'META TITLE';
  const {getByText} = render(<Meta title={title}/>)
  const textElement = getByText(title);

  expect(textElement).toBeInTheDocument();
})