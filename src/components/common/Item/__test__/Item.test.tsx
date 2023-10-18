import { render, screen, fireEvent } from '@testing-library/react';

// mocks
import { MOCK_ITEM } from 'mocks/mockData';

// components
import ItemCard, { Props } from 'components/common/Item';

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => <a href={to}>{children}</a>
}));

const setup = (props = {}) => {
  const defaultProps: Props = {
    item: MOCK_ITEM,
    index: 0,
    className: 'test-class',
    onClick: jest.fn(),
    ...props
  };

  render(<ItemCard {...defaultProps} />);
};

describe('ItemCard', () => {
  it('renders the item card with correct data', () => {
    setup();
    expect(screen.getByText(MOCK_ITEM.category)).toBeInTheDocument();
  });

  it('renders the "Sold Out" element when isSoldOut is true', () => {
    setup();

    const soldOutElement = screen.queryByTestId('sold-out');
    expect(soldOutElement).toBeInTheDocument();
  });

  it('does not render the "Sold Out" element when isSoldOut is false', () => {
    const mockItemNotSoldOut = { ...MOCK_ITEM, isSoldOut: false };
    setup({ item: mockItemNotSoldOut });

    const soldOutElement = screen.queryByTestId('sold-out');
    expect(soldOutElement).toBeNull();
  });

  it('calls the onClick function when "Add to Cart" button is clicked', () => {
    const onClickMock = jest.fn();
    render(<ItemCard item={MOCK_ITEM} index={0} className='test-class' onClick={onClickMock} />);

    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('ItemCard renders correctly', () => {
    const { container } = render(
      <ItemCard item={MOCK_ITEM} index={0} className='test-class' onClick={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });
});
