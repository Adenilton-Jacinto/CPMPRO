// Service Worker para permitir a instalação
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Permite o carregamento normal dos arquivos
});