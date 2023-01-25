import { fireEvent, getByTestId, getByText, render } from '@testing-library/react';
import { mockUserList } from '../../app/mockData';
import UserList from './UserList';

test('Make snapshot. Render with data', () => {
  const mockSlectUserFn = jest.fn()
  const { container } = render(<UserList userList={mockUserList}  onSelectUser={mockSlectUserFn}/>);

  expect(container).toMatchSnapshot();
});