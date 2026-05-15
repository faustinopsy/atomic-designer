import { getCEP, getUser } from './api.js';
import { debugInfo } from './debug.js';

// Mapa de hash → função que aquece o cache de dados daquela rota
const estrategias = {
  '#home': () => {
    // Home não tem CEP fixo — não há dado para prefetch
  },
  '#sobre': () => {
    debugInfo('prefetch: users');
    getUser();
  },
  '#contato': () => {
    // Contato é síncrono — sem fetch necessário
  },
};

// Registra listener de mouseenter nos links de navegação
export function ativarPrefetch(linkElements) {
  linkElements.forEach(a => {
    const hash = a.getAttribute('href');
    const estrategia = estrategias[hash];
    if (!estrategia) return;

    let disparado = false;
    a.addEventListener('mouseenter', () => {
      if (disparado) return;
      disparado = true;
      estrategia();
    });

    // Touch: dispara no touchstart (antes do click)
    a.addEventListener('touchstart', () => {
      if (disparado) return;
      disparado = true;
      estrategia();
    }, { passive: true });
  });
}
