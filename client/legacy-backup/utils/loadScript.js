const loadedScripts = new Map();

export function loadScriptOnce(src, id) {
  const key = id || src;
  if (loadedScripts.has(key)) return loadedScripts.get(key);

  const promise = new Promise((resolve, reject) => {
    const existing = id ? document.getElementById(id) : null;
    if (existing?.dataset.loaded === 'true') {
      resolve(existing);
      return;
    }

    const script = existing || document.createElement('script');
    script.src = src;
    script.id = key;
    script.async = false;
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve(script);
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));

    if (!existing) document.body.appendChild(script);
  });

  loadedScripts.set(key, promise);
  return promise;
}
