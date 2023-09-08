import { screen, render } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render with default title', () => {
    const { container } = render(<Main />)
    expect(screen.getByRole('heading', { name: 'test' })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with custom title', () => {
    const { container } = render(<Main title="title" />)
    expect(screen.getByRole('heading', { name: 'title' })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
