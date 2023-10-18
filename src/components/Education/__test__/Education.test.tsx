import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// constants
import { LIST_ITEM_EDUCATION } from 'constants/listItem';

// components
import { WeedEducationPattern } from 'components/Education/index';

describe('WeedEducationPattern component', () => {
  it('renders correctly', () => {
    const { getByText, getAllByTestId, asFragment } = render(
      <MemoryRouter>
        <WeedEducationPattern />
      </MemoryRouter>
    );

    const titleElement = getByText('WEED EDUCATION');
    expect(titleElement).toBeInTheDocument();

    const showAllButton = getByText('Show All');
    expect(showAllButton).toBeInTheDocument();

    const weedEducationItems = getAllByTestId('weed-education-item');
    expect(weedEducationItems.length).toBe(LIST_ITEM_EDUCATION.length);

    expect(asFragment()).toMatchSnapshot();
  });
});
