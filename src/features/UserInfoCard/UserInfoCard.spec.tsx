import { fireEvent, getByTestId, getByText, render } from '@testing-library/react';
import { mockUserList } from '../../app/mockData';
import UserInfoCard from './UserInfoCard';

test('Make snapshot. Render with data', () => {
  const { container } = render(<UserInfoCard userData={mockUserList[1]} onClose={() => console.log("close")} />);

  expect(container).toMatchSnapshot();
});

test('Make snapshot. Click on close button', () => {
  const mockOnClose = jest.fn()
  const { container } = render(<UserInfoCard userData={mockUserList[1]} onClose={mockOnClose} />);
  
  fireEvent(
    getByTestId(container, 'close-button'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )
  
  expect(mockOnClose.mock.calls).toHaveLength(1);;
});