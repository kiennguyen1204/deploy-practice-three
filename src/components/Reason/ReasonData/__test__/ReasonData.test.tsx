import { render, screen } from '@testing-library/react';

// components
import ReasonItem, { Props } from 'components/Reason/ReasonData';

const defaultProps: Props = {
  item: {
    icon: <img src='assets/images/default_image.webp' alt='Default icon' />,
    title: 'Default Title',
    description: 'Default description'
  }
};

describe('ReasonItem', () => {
  it('renders the component with default props', () => {
    const { asFragment } = render(<ReasonItem {...defaultProps} />);

    const title = screen.getByText(defaultProps.item.title);
    expect(title).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
