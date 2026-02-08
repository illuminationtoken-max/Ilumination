# ILLUMINATION PRO | NEURAL INTERFACE NODE

![Status](https://img.shields.io/badge/Status-Operational-00f2ff?style=for-the-badge)
![Network](https://img.shields.io/badge/Network-Solana_Mainnet-7000ff?style=for-the-badge)
![Protocol](https://img.shields.io/badge/Protocol-Neural_Bridge_v4-white?style=for-the-badge)

```text
██╗██╗     ██╗     ██╗   ██╗███╗   ███╗██╗███╗   ██╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██║██║     ██║     ██║   ██║████╗ ████║██║████╗  ██║██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
██║██║     ██║     ██║   ██║██╔████╔██║██║██╔██╗ ██║███████║   ██║   ██║██║   ██║██╔██╗ ██║
██║██║     ██║     ██║   ██║██║╚██╔╝██║██║██║╚██╗██║██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
██║███████╗███████╗╚██████╔╝██║ ╚═╝ ██║██║██║ ╚████║██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
                                                            NEURAL INTERFACE PROTOCOL v4.0
```

> **The Decentralized AI Aggregator on Solana.**
> Illumination Pro bridges the gap between high-performance neural networks (OpenAI, Gemini, Anthropic) and decentralized communication protocols (Nostr, Matrix, Telegram, WhatsApp).

---

## 🚀 Deployment & Installation

### Prerequisites
- Node.js v18+
- Solana CLI (Optional for on-chain interactions)
- API Keys for respective AI providers (Google, OpenAI, Anthropic)

### Quick Start

1. **Clone Repository**
   ```bash
   git clone https://github.com/illuminationtoken-max/Ilumination.git
   cd Ilumination
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file based on the example.
   ```bash
   cp .env.example .env
   ```

4. **Launch Neural Node**
   ```bash
   npm run dev
   # Portal Active on https://illumination-ai.pro
   ```

---

## 🔌 API Testing & SDK

This repository includes a comprehensive **API Testing Suite** located in `src/test/`. You can use these scripts to verify your node's health and test neural chat completions in your preferred language.

### Python Client
Located in `src/test/python/test_api.py`.
```bash
# Update API_KEY variable in the file first!
python src/test/python/test_api.py
```

### Node.js Client
Located in `src/test/nodejs/test_api.js`.
```bash
# Update API_KEY variable in the file first!
node src/test/nodejs/test_api.js
```

### PHP Integration
Located in `src/test/php/test_api.php`.
```bash
# Update API_KEY variable in the file first!
php src/test/php/test_api.php
```

---

## 💎 Features

- **Multi-Model Routing**: Seamlessly switch between Gemini 1.5 Pro, GPT-4o, Claude 3.5 Sonnet, and DeepSeek.
- **Decentralized Relay**: Bridges to Nostr (NIP-44), Matrix Synapse, and traditional platforms (Telegram/WhatsApp).
- **Secure Key Management**: Client-side encryption for API keys. Neural node does not store user keys persistently.
- **Solana Integration**: Native wallet verification and on-chain identity binding (Coming in Phase 2).

---

## 📚 Documentation
- [SKILL.md](./SKILL.md) - Agentic Skill Definition
- [Whitepaper](./Whitepaper.md)
- [API Reference](./API_REFERENCE.md) - Full Endpoint Documentation

---

## 🛡 License
**MIT License** | Illumination AI Team 2026
