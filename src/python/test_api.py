import requests
import json
import time

# CONFIGURATION
API_URL = "http://localhost:3000/api/v1"
API_KEY = "YOUR_API_KEY_HERE" # Replace with key from Dashboard

def print_header():
    print("""
    ╔═══════════════════════════════════════════════════════╗
    ║                                                       ║
    ║   ILLUMINATION PRO | NEURAL INTERFACE DIAGNOSTIC      ║
    ║   [PYTHON_CLIENT_v1.2]                                ║
    ║                                                       ║
    ╚═══════════════════════════════════════════════════════╝
    """)

def test_health():
    print(f"\n[1] NODE HEALTH CHECK")
    print(f"    Target: {API_URL}/node/health")
    try:
        start = time.time()
        res = requests.get(f"{API_URL}/node/health")
        latency = (time.time() - start) * 1000
        
        if res.status_code == 200:
            print(f"    [SUCCESS] Status: 200 OK | Latency: {latency:.2f}ms")
            print(f"    Payload: {json.dumps(res.json(), indent=4)}")
        else:
            print(f"    [FAIL] Status: {res.status_code}")
            print(f"    Response: {res.text}")
    except Exception as e:
        print(f"    [CRITICAL] Connection Failed: {e}")

def test_chat_completion():
    print(f"\n[2] NEURAL COMPLETION TEST")
    print(f"    Target: {API_URL}/chat/completions")
    
    payload = {
        "model": "illumination-neural-v4",
        "messages": [
            {"role": "system", "content": "You are a diagnostic assistant."},
            {"role": "user", "content": "Perform system handshake."}
        ],
        "temperature": 0.7
    }
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }
    
    try:
        start = time.time()
        res = requests.post(f"{API_URL}/chat/completions", json=payload, headers=headers)
        latency = (time.time() - start) * 1000
        
        if res.status_code == 200:
            data = res.json()
            print(f"    [SUCCESS] Status: 200 OK | Latency: {latency:.2f}ms")
            print(f"    Model: {data.get('model', 'unknown')}")
            content = data['choices'][0]['message']['content']
            print(f"    Response: \"{content}\"")
        else:
            print(f"    [FAIL] Status: {res.status_code}")
            print(f"    Response: {res.text}")
            
    except Exception as e:
        print(f"    [CRITICAL] Connection Failed: {e}")

if __name__ == "__main__":
    print_header()
    test_health()
    test_chat_completion()
    print("\n[DIAGNOSTIC COMPLETE]")
