const fetch = require('node-fetch');

// CONFIGURATION
const API_URL = "http://localhost:3000/api/v1";
const API_KEY = "YOUR_API_KEY_HERE"; // Replace with key from Dashboard

async function runTests() {
    console.log(`
    ╔═══════════════════════════════════════════════════════╗
    ║                                                       ║
    ║   ILLUMINATION PRO | NEURAL INTERFACE DIAGNOSTIC      ║
    ║   [NODEJS_CLIENT_v1.2]                                ║
    ║                                                       ║
    ╚═══════════════════════════════════════════════════════╝
    `);

    // 1. Health Check
    console.log(`\n[1] NODE HEALTH CHECK`);
    console.log(`    Target: ${API_URL}/node/health`);
    const start = Date.now();
    try {
        const res = await fetch(`${API_URL}/node/health`);
        const latency = Date.now() - start;
        const data = await res.json();

        if (res.status === 200) {
            console.log(`    [SUCCESS] Status: 200 OK | Latency: ${latency}ms`);
            console.log(`    Version: ${data.version || 'unknown'}`);
        } else {
            console.log(`    [FAIL] Status: ${res.status}`);
        }
    } catch (e) { console.error(`    [CRITICAL] Connection Failed: ${e.message}`); }

    // 2. Chat Completion
    console.log(`\n[2] NEURAL COMPLETION TEST`);
    console.log(`    Target: ${API_URL}/chat/completions`);

    const payload = {
        model: "illumination-neural-v4",
        messages: [
            { role: "system", "content": "You are a diagnostic assistant." },
            { role: "user", "content": "Perform system handshake." }
        ],
        temperature: 0.7
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    };

    try {
        const start2 = Date.now();
        const res = await fetch(`${API_URL}/chat/completions`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });
        const latency2 = Date.now() - start2;
        const data = await res.json();

        if (res.status === 200) {
            console.log(`    [SUCCESS] Status: 200 OK | Latency: ${latency2}ms`);
            console.log(`    Model: ${data.model || 'unknown'}`);
            const content = data.choices[0].message.content;
            console.log(`    Response: "${content}"`);
        } else {
            console.log(`    [FAIL] Status: ${res.status}`);
            console.log(`    Message: ${data.error?.message || JSON.stringify(data)}`);
        }
    } catch (e) {
        console.error(`    [CRITICAL] Connection Failed: ${e.message}`);
    }
}

runTests();
