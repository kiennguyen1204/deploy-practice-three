import { render, screen } from '@testing-library/react';

// mocks
import { DATA_ITEM } from 'mocks/mockData';

// components
import WeedEducationItem from 'components/Education/EducationList';

describe('WeedEducationItem', () => {
  it('renders the component with correct data', () => {
    const { asFragment } = render(<WeedEducationItem item={DATA_ITEM} />);
    expect(screen.getByText(DATA_ITEM.title)).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
