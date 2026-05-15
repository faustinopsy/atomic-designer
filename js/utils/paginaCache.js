import { debugInfo, debugWarn } from './debug.js';

// Cache de nós DOM já renderizados por hash de rota
const domCache = new Map();
const CACHE_LIMIT = 10;

export function getPaginaCache(hash) {
  if (domCache.has(hash)) {
    debugInfo(`DOM cache hit: ${hash}`);
    return domCache.get(hash);
  }
  return null;
}

export function setPaginaCache(hash, no) {
  if (domCache.size >= CACHE_LIMIT) {
    const oldest = domCache.keys().next().value;
    domCache.delete(oldest);
    debugWarn(`DOM cache evict: ${oldest}`);
  }
  domCache.set(hash, no);
  debugInfo(`DOM cache set: ${hash}`);
}

export function invalidarPaginaCache(hash) {
  if (domCache.has(hash)) {
    domCache.delete(hash);
    debugInfo(`DOM cache invalidado: ${hash}`);
  }
}
