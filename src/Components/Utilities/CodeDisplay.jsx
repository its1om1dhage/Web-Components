import React, { useState } from 'react';
import './CodeDisplay.css';

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
    <div className="code-display">
      <div className="code-header">
        <div className="code-info">
          {title && <h3 className="code-title">{title}</h3>}
          {fileName && <span className="code-filename">{fileName}</span>}
        </div>
        <button 
          className={`copy-button ${copied ? 'copied' : ''}`}
          onClick={copyToClipboard}
          title="Copy to clipboard"
        >
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>
      <pre className={`code-block language-${language}`}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
