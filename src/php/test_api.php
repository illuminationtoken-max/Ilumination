<?php
// CONFIGURATION
$api_url = "http://localhost:3000/api/v1";
$api_key = "YOUR_API_KEY_HERE"; // Replace with key from Dashboard

echo "\n    ╔═══════════════════════════════════════════════════════╗\n";
echo "    ║                                                       ║\n";
echo "    ║   ILLUMINATION PRO | NEURAL INTERFACE DIAGNOSTIC      ║\n";
echo "    ║   [PHP_CLIENT_v1.0]                                   ║\n";
echo "    ║                                                       ║\n";
echo "    ╚═══════════════════════════════════════════════════════╝\n";

// 1. Health Check
echo "\n[1] NODE HEALTH CHECK\n";
echo "    Target: $api_url/node/health\n";
$ch = curl_init($api_url . "/node/health");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code == 200) {
    echo "    [SUCCESS] Status: 200 OK\n";
    echo "    Response: " . substr($result, 0, 100) . "...\n";
} else {
    echo "    [FAIL] Status: $http_code\n";
    echo "    Response: " . $result . "\n";
}

// 2. Chat Completion
echo "\n[2] NEURAL COMPLETION TEST\n";
echo "    Target: $api_url/chat/completions\n";

$data = [
    "model" => "illumination-neural-v4",
    "messages" => [
        ["role" => "system", "content" => "You are a diagnostic assistant."],
        ["role" => "user", "content" => "Perform system handshake."]
    ],
    "temperature" => 0.7
];

$payload = json_encode($data);

$ch = curl_init($api_url . "/chat/completions");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $api_key"
]);
$result = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code == 200) {
    $response = json_decode($result, true);
    echo "    [SUCCESS] Status: 200 OK\n";
    echo "    Model: " . $response['model'] . "\n";
    echo "    Content: " . $response['choices'][0]['message']['content'] . "\n";
} else {
    echo "    [FAIL] Status: $http_code\n";
    echo "    Response: " . $result . "\n";
}
?>
