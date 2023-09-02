import { screen, render } from '@testing-library/react'
import Test from '.'

describe('Test', () => {
  it('renders', () => {
    render(<Test />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
