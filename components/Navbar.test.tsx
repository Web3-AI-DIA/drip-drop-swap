import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from './Navbar'

// Mock the wallet kit as it needs a provider
jest.mock('@suiet/wallet-kit', () => ({
  WalletProvider: ({ children }: any) => <div>{children}</div>,
  ConnectButton: () => <button>Connect</button>,
  useWallet: () => ({ connected: false }),
}))

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    const brandName = screen.getByText(/DRIP-DROP-SWAP/i)
    expect(brandName).toBeInTheDocument()
  })

  it('contains documentation link', () => {
    render(<Navbar />)
    const docsLink = screen.getByText(/Docs/i)
    expect(docsLink).toBeInTheDocument()
  })
})
