# ILLUMINATION PRO - Developer API Reference
**Version 1.0**

Welcome to the ILLUMINATION PRO Developer API. This interface allows you to programmatically interact with the Neural Grid, process AI completions securely, and broadcast messages across authorized channels.

---

## Authentication

All API requests must include your unique `illm-sk-` key in the Authorization header.

```http
Authorization: Bearer illm-sk-7c9e...
```

You can generate your API Key in the **Settings** panel of your Dashboard.

---

## Rate Limits

This API implements a token bucket algorithm to ensure fair usage of the Neural Grid.
- **Standard Tier:** 60 requests per minute (RPM).
- **Burst:** Up to 10 concurrent requests allowed.

Exceeding these limits will result in a `429 Too Many Requests` response.

---

## Endpoints

### 1. Check Node Health
Returns the current operational status of the Neural Core node you are connected to.

**Endpoint:** `GET /api/v1/node/health`

**Example Request:**
```bash
curl https://illumination.pro/api/v1/node/health \
  -H "Authorization: Bearer illm-sk-..."
```

**Response:**
```json
{
  "status": "nominal",
  "node_id": "ILMN_CORE_0x84",
  "latency": "24ms"
}
```

---

### 2. Chat Completions
Send a prompt to the AI engine. Fully compatible with OpenAI client libraries.

**Endpoint:** `POST /api/v1/chat/completions`

**Parameters:**
- `model` (string): ID of the model to use (default: `illumination-neural-v4`)
- `messages` (array): List of message objects `{ role, content }`

**Python Example:**
```python
import requests

url = "https://illumination.pro/api/v1/chat/completions"
headers = {
    "Authorization": "Bearer illm-sk-...",
    "Content-Type": "application/json"
}
data = {
    "model": "illumination-neural-v4",
    "messages": [{"role": "user", "content": "Hello, Neural Grid!"}]
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

---

### 3. Broadcast Message
Send a programmatic message to a specific target platform (WhatsApp, Telegram) via the bridge.

**Endpoint:** `POST /api/v1/broadcast`

**Parameters:**
- `target_platform`: "whatsapp" | "telegram"
- `recipient`: Phone number or Chat ID
- `content`: Message text
