# Drip-Drop-Swap

**Precision Liquidity in Motion.**

Drip-Drop-Swap is a production-grade, decentralized Constant-Product AMM (x * y = k) built on the Sui blockchain using the Move programming language. It leverages Sui's unique object-centric model to provide high-concurrency swaps, efficient liquidity provisioning, and institutional-grade security.

## 🚀 Features

- **Constant-Product Engine**: Robust, audited AMM logic using Move fixed-point math.
- **Sui Object Model**: Leverages shared objects for pools and individual capabilities for admin and liquidity management.
- **Bento Grid UI**: A modern, high-performance web interface built with Next.js 15 and Tailwind CSS.
- **Wallet Integration**: Seamless connection with the Sui ecosystem via `@suiet/wallet-kit`.
- **Developer-First Documentation**: Comprehensive guides for Move modules, arithmetic invariants, and Sui CLI interactions.

## 🛠 Tech Stack

- **Smart Contracts**: Sui Move
- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Interactions**: `@mysten/sui`, `@suiet/wallet-kit`
- **Testing**: Jest, React Testing Library, Sui Move Test Framework
- **Animation**: Framer Motion

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Sui CLI](https://docs.sui.io/guides/developer/getting-started/sui-install)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/drip-drop-swap.git

# Install dependencies
npm install

# Run the development server
npm run dev
```

### Smart Contract Deployment

```bash
# Publish to Testnet
sui client publish --gas-budget 100000000
```

## 🧪 Testing

Drip-Drop-Swap maintains high code quality through rigorous testing.

### Frontend Tests
```bash
npm test
```

### Move Contract Tests
```bash
# Inside the Move package directory
sui move test
```

## 📜 License

Drip-Drop-Swap is released under the [MIT License](LICENSE).

---

Built for the future of finance on the Sui Blockchain.
