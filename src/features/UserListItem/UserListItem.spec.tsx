import { fireEvent, getByTestId, getByText, render } from '@testing-library/react';
import { mockUserList } from '../../app/mockData';
import UserListItem from './UserListItem';

test('Make snapshot. Render with data', () => {
  const { container } = render(<UserListItem userData={mockUserList[0]} onClick={() => undefined}/>);

  expect(container).toMatchSnapshot();
});

test('Make snapshot. Click on view button', () => {
  const mockOnClick = jest.fn()
  const { container } = render(<UserListItem userData={mockUserList[1]} onClick={mockOnClick} />);
  
  fireEvent(
    getByTestId(container, "Brazil Izair view button"),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )
  

  expect(mockOnClick.mock.calls).toHaveLength(1);;
});