import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// constants
import { DATA_INFO } from 'constants/listItem';

// components
import InfoBottom from 'components/Info';

describe('InfoBottom', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <InfoBottom />
      </MemoryRouter>
    );
  });

  it('renders the correct number of BoxInfoItem components', () => {
    const boxInfoItems = screen.getAllByTestId('box-info-item');

    expect(boxInfoItems).toHaveLength(DATA_INFO.length);
  });

  it('passes the correct props to BoxInfoItem components', () => {
    DATA_INFO.forEach((data, index) => {
      const boxInfoItem = screen.getAllByTestId('box-info-item')[index];

      expect(boxInfoItem).toBeInTheDocument();

      // Check the title prop
      expect(boxInfoItem).toHaveTextContent(data.title);
    });
  });

  it('renders correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <InfoBottom />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
