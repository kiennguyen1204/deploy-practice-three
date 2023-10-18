import { ReactNode } from 'react';
import { render } from '@testing-library/react';

// mock
import { MOCK_DATA_CUSTOMER } from 'mocks/mockData';

// components
import CustomerTestimonials from 'components/Testimonials';

// Mock the Splide component and its dependencies
jest.mock('@splidejs/react-splide', () => ({
  Splide: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  SplideTrack: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  SplideSlide: ({ children }: { children: ReactNode }) => <div>{children}</div>
}));

describe('CustomerTestimonials Component', () => {
  it('renders the customer testimonials section with the provided data', () => {
    const { getAllByText } = render(<CustomerTestimonials />);

    // Check if testimonials data is displayed
    const user = getAllByText(MOCK_DATA_CUSTOMER.userName);
    expect(user.length).toBeGreaterThan(0);

    user.forEach((userElement) => {
      // Expect the user element to be present in the document
      expect(userElement).toBeInTheDocument();
    });
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<CustomerTestimonials />);
    expect(asFragment()).toMatchSnapshot();
  });
});
