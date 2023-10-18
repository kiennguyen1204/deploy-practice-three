import { render, screen } from '@testing-library/react';

// components
import ReferFriendItem from 'components/Refer/DataBottom';

describe('ReferFriendItem Component', () => {
  it('renders the component with the correct title', () => {
    const props = {
      index: 1,
      icon: <img src='icon.png' alt='Icon' />,
      title: 'Sample Title',
      description: 'Sample Description'
    };

    const { asFragment } = render(<ReferFriendItem {...props} />);

    // Check if the title  are rendered
    const titleElement = screen.getByText(props.title);

    expect(titleElement).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
