import { render, screen } from '@testing-library/react';

// components
import WhatMake from 'components/Reason';

describe('WhatMake', () => {
  it('renders the component with the correct title', () => {
    const { asFragment } = render(<WhatMake />);
    const title = screen.getByTestId('what-make-title');
    expect(title).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
