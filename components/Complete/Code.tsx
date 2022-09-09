import React from 'react';

interface CodeProps {
  children: React.ReactNode;
}
const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <code
      style={{
        background: 'var(--inlineCode-bg)',
        color: 'var(--inlineCode-text)',
        padding: '.2rem .2rem',
        borderRadius: '2px',
        lineHeight: '.8',
        fontSize: '.8rem',
      }}
    >
      {children}
    </code>
  );
};

export default Code;
