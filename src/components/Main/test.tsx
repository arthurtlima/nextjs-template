import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the custom heading', () => {
    render(<Main title="Custom title" />)

    expect(
      screen.getByRole('heading', { name: /custom title/i })
    ).toBeInTheDocument()
  })
})
