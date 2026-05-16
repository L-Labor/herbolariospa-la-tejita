export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Herbolario Spa La Tejita — Error</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,500&display=swap');
      body { font-family: 'Inter', system-ui, sans-serif; background: #FCFBF9; color: #264653; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2.5rem 2rem; background: #fff; border-radius: 8px; box-shadow: 0 8px 30px -12px rgba(38,70,83,0.18); }
      .brand { font-family: 'Fraunces', Georgia, serif; font-size: 0.875rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: #E76F51; margin-bottom: 1.5rem; }
      .icon { width: 56px; height: 56px; margin: 0 auto 1.25rem; background: #F2EFEA; border-radius: 50%; display: grid; place-items: center; }
      .icon svg { width: 24px; height: 24px; stroke: #264653; }
      h1 { font-family: 'Fraunces', Georgia, serif; font-size: 1.5rem; font-weight: 400; margin: 0 0 0.75rem; letter-spacing: -0.02em; }
      p { color: rgba(38,70,83,0.72); font-size: 0.9375rem; line-height: 1.65; margin: 0 0 1.75rem; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      button, a { font-family: 'Inter', system-ui, sans-serif; font-size: 0.875rem; font-weight: 500; padding: 0.65rem 1.25rem; border-radius: 6px; cursor: pointer; text-decoration: none; border: 1px solid transparent; transition: transform 0.15s ease, opacity 0.15s ease; }
      button:hover, a:hover { transform: translateY(-1px); opacity: 0.92; }
      .primary { background: #264653; color: #FCFBF9; }
      .secondary { background: transparent; color: #264653; border-color: rgba(38,70,83,0.2); }
      .hint { margin-top: 1.5rem; font-size: 0.8rem; color: rgba(38,70,83,0.5); }
      .divider { width: 32px; height: 1px; background: rgba(38,70,83,0.12); margin: 0 auto 1.5rem; }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="brand">Herbolario Spa La Tejita</div>
      <div class="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <div class="divider"></div>
      <h1>No hemos podido cargar la p&aacute;gina</h1>
      <p>Ha ocurrido un error inesperado. Puedes intentar recargar la p&aacute;gina o volver al inicio para seguir navegando.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Recargar p&aacute;gina</button>
        <a class="secondary" href="/">Volver al inicio</a>
      </div>
      <div class="hint">Si el problema persiste, ponte en contacto con nosotros en <strong>+34 641 94 85 30</strong></div>
    </div>
  </body>
</html>`;
}
