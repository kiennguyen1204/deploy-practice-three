import { render, screen } from '@testing-library/react';

// mocks
import { MOCK_PROPS } from 'mocks/mockData';

// components
import BoxInfoItem from 'components/Info/InfoItem';
import { MemoryRouter } from 'react-router-dom';

describe('BoxInfoItem', () => {
  it('BoxInfoItem renders with the correct content and attributes', () => {
    // 'to' is wrapped in a <NavLink> so it should be wrapped in a MemoryRouter
    const { asFragment } = render(
      <MemoryRouter>
        <BoxInfoItem {...MOCK_PROPS} />
      </MemoryRouter>
    );

    // Check if the image elements have the correct 'src' and 'alt' attributes
    const imageElement = screen.getByAltText(MOCK_PROPS.title);
    expect(imageElement).toHaveAttribute('src', MOCK_PROPS.image);
    expect(imageElement).toHaveAttribute('alt', MOCK_PROPS.title);

    expect(asFragment()).toMatchSnapshot();
  });
});
