---
name: illumination_neural_interface
description: Official Skill for interacting with Illumination Pro Neural Interface API.
version: 1.0.0
author: Illumination AI Team
---

# Illumination Neural Interface Skill

This skill allows you to interact with the Illumination Pro Neural Interface, a decentralized AI aggregator bridge on Solana.
It supports multi-model routing (Gemini, OpenAI, Anthropic, DeepSeek) through a unified API endpoint.

## Configuration

To use this skill, you need an API Key generated from the Illumination Dashboard.
Set the environment variable:
`ILLUMINATION_API_KEY=illm-sk-xxxxxxxx`

## Capabilities

### 1. Neural Chat Completion
Send prompts to the neural network and receive AI-generated responses.

**Endpoint**: `POST /api/v1/chat/completions`
**Headers**:
- `Authorization`: `Bearer <YOUR_API_KEY>`
- `Content-Type`: `application/json`

**Payload**:
```json
{
  "model": "illumination-neural-v4", // or "gemini-1.5-pro", "gpt-4o"
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Explain quantum entanglement."}
  ],
  "temperature": 0.7
}
```

### 2. Node Health Check
Verify the operational status of the local neural node.

**Endpoint**: `GET /api/v1/node/health`

## Usage Examples

### Python (Requests)
```python
import requests

response = requests.post(
    "http://localhost:3000/api/v1/chat/completions",
    json={
        "model": "illumination-neural-v4",
        "messages": [{"role": "user", "content": "Hello!"}]
    },
    headers={"Authorization": "Bearer YOUR_KEY"}
)
print(response.json())
```

### cURL
```bash
curl -X POST http://localhost:3000/api/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"illumination-neural-v4","messages":[{"role":"user","content":"Hello"}]}'
```

## Security Note
API Keys are sensitive. Do not commit them to public repositories.
All requests are logged locally for debugging but not stored permanently on the edge node.
