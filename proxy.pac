// User-defined FindProxyForURL
function FindProxyForURL(url, host) {
    if (isPlainHostName(host) ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "169.254.0.0", "255.255.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "127.0.0.0", "255.255.255.0") ||
        shExpMatch(host, "*.local") ||
        shExpMatch(host, 'localhost.*')) {
        return 'DIRECT';
    }

    if (shExpMatch(host, '*.google*.*')) {
        return 'PROXY 127.0.1.2:8087';
    }

    return 'DIRECT';
}
