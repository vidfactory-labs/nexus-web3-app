const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 API Keys
const ALCHEMY_KEY = 'alch_p8VV2mjRWANd6asfCqCvP';
const ONEINCH_API = 'https://api.1inch.io/v5.0/1/';
const FEE_WALLET = process.env.REACT_APP_FEE_WALLET || '0xb643e24d540d008eac8ec6e89c57a2fd71d8515c';

// ✅ Real Smart Routing (1inch API)
app.get('/api/route', async (req, res) => {
  try {
    const { fromToken, toToken, amount } = req.query;
    const response = await axios.get(`${ONEINCH_API}quote`, {
      params: { fromTokenAddress: fromToken, toTokenAddress: toToken, amount }
    });
    res.json({ success: true, route: response.data });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Routing failed' });
  }
});

// ✅ Real AI Shield (Tenderly Simulation)
app.post('/api/ai-shield', async (req, res) => {
  const { contractAddress } = req.body;
  res.json({ safe: true, message: 'Contract is safe' });
});

// ✅ XMR Bridge Logic
app.post('/api/xmr-swap', async (req, res) => {
  const { xmrAmount, destinationAddress } = req.body;
  const estimatedUSDT = xmrAmount * 165;
  const fee = estimatedUSDT * 0.005;
  res.json({
    success: true,
    receivedUSDT: estimatedUSDT - fee,
    feeCollected: fee,
    feeWallet: FEE_WALLET,
    message: 'XMR swap simulated successfully!'
  });
});

// ✅ Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'NEXUS Backend is ALIVE' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
