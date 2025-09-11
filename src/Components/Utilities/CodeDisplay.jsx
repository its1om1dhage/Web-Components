import React, { useState } from 'react';

const CodeDisplay = ({ 
  code, 
  language = 'jsx', 
  title,
  fileName 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="my-4 rounded-md overflow-hidden bg-slate-900 border border-slate-700">
      <div className="flex justify-between items-center bg-slate-800 px-3.5 py-2.5 border-b border-slate-700">
        <div className="flex flex-col gap-0.5">
          {title && <h3 className="m-0 text-white text-sm font-medium">{title}</h3>}
          {fileName && <span className="text-slate-500 text-xs font-mono">{fileName}</span>}
        </div>
        <button 
          className={`px-2.5 py-1.5 border-none rounded text-xs font-medium transition-colors duration-150 ${
            copied 
              ? 'bg-green-600 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          onClick={copyToClipboard}
          title="Copy to clipboard"
        >
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>
      <pre className="m-0 p-4 bg-slate-900 text-white font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
