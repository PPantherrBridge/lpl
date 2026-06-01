import { useEffect, useRef, useState } from 'react';
import markup from './legacy-markup.html?raw';
import { installAdminExtensions } from '../services/adminExtensions.js';
import { installDatabaseBridge } from '../services/storageBridge.js';
import { loadScriptOnce } from '../utils/loadScript.js';

export default function LegacyLPLPage() {
  const hostRef = useRef(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function boot() {
      try {
        await installDatabaseBridge();
        if (cancelled) return;
        await loadScriptOnce('/legacy/lpl-legacy.js', 'lpl-legacy-runtime');
        if (cancelled) return;
        installAdminExtensions();
        setStatus('ready');
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError(err?.message || 'Unable to boot the LPL application.');
          setStatus('error');
        }
      }
    }

    boot();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {status === 'loading' && <div className="lpl-shell-loading">Loading LPL</div>}
      {status === 'error' && (
        <div className="lpl-shell-error">
          <h2>Unable to start LPL</h2>
          <p>{error}</p>
        </div>
      )}
      <div
        ref={hostRef}
        style={{ display: status === 'error' ? 'none' : undefined }}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </>
  );
}
