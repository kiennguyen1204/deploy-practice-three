import { render, RenderResult } from '@testing-library/react';
import Card from 'components/common/Card';

describe('Card', () => {
  let title: string, children: JSX.Element;

  const setup = (title: string | undefined, children: JSX.Element): RenderResult => {
    return render(
      <Card classes='test-class' title={title}>
        {children}
      </Card>
    );
  };

  beforeEach(() => {
    title = 'Test Title';
    children = <div>Test Children</div>;
  });

  it('renders the title and children', () => {
    const { getByText } = setup(title, children);

    expect(getByText(title)).toBeInTheDocument();
  });

  it('does not render the title when title is undefined', () => {
    const { queryByText } = setup(undefined, children);
    expect(queryByText(title)).not.toBeInTheDocument();
  });

  it('renders the card component correctly', () => {
    const { container } = setup(title, children);

    expect(container.firstChild).toMatchSnapshot();
  });
});
