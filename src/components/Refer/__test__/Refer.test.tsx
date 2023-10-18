import { render, screen } from '@testing-library/react';

// components
import ReferFriend from 'components/Refer';

describe('ReferFriend Component', () => {
  beforeEach(() => {
    render(<ReferFriend />);
  });

  it('renders the component with the correct title', () => {
    // Check if the title is rendered
    const titleElement = screen.getByText('REFER A FRIEND');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the component with the "Refer Here" button', () => {
    // Check if the "Refer Here" button is rendered
    const buttonElement = screen.getByText('Refer Here');
    expect(buttonElement).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ReferFriend />);
    expect(asFragment()).toMatchSnapshot();
  });
});
