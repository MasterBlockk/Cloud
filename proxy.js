const http = require('http');
const httpProxy = require('http-proxy');

// Créer un serveur proxy
const proxy = httpProxy.createProxyServer({});

// Créer le serveur HTTP
const server = http.createServer((req, res) => {
  // Cibler l'URL du serveur cible
  const targetUrl = 'http://example.com'; // Remplacez par l'URL de votre choix

  // Proxy les requêtes
  proxy.web(req, res, { target: targetUrl }, (err) => {
    console.error('Erreur de proxy:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Erreur de proxy');
  });
});

// Écouter sur le port 8080
server.listen(8080, () => {
  console.log('Serveur proxy en écoute sur http://127.0.0.1:8080');
});
