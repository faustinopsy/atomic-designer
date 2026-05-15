const painel = document.createElement('div');
painel.id = 'debug-painel';
painel.style.cssText = `
  position: fixed;
  bottom: 60px;
  right: 12px;
  width: 300px;
  max-height: 240px;
  overflow-y: auto;
  background: rgba(0,0,0,0.85);
  color: #0f0;
  font: 11px/1.6 monospace;
  padding: 8px 10px;
  border-radius: 6px;
  z-index: 9999;
  pointer-events: none;
`;

const titulo = document.createElement('div');
titulo.style.cssText = 'color:#fff;font-weight:bold;border-bottom:1px solid #555;margin-bottom:4px;padding-bottom:2px;';
titulo.textContent = '⚡ Debug';
painel.appendChild(titulo);

const linhas = document.createElement('div');
painel.appendChild(linhas);

document.body.appendChild(painel);

const inicio = performance.now();

function log(mensagem, cor = '#0f0') {
  const t = (performance.now() - inicio).toFixed(1);
  const linha = document.createElement('div');
  linha.style.color = cor;
  linha.textContent = `[${t}ms] ${mensagem}`;
  linhas.appendChild(linha);
  if (linhas.children.length > 40) {
    linhas.removeChild(linhas.firstChild);
  }
  painel.scrollTop = painel.scrollHeight;
}

export function debugInfo(msg)  { log(msg, '#0f0'); }
export function debugWarn(msg)  { log(msg, '#ff0'); }
export function debugError(msg) { log(msg, '#f55'); }

export function debugTime(label) {
  const t0 = performance.now();
  return () => {
    const elapsed = (performance.now() - t0).toFixed(1);
    log(`${label}: ${elapsed}ms`, '#4cf');
  };
}
