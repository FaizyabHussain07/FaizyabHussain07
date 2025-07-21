import React, { useEffect, useState } from 'react';

const messages = [
  'Building Portfolio...',
  'Loading Experience...',
  'Compiling Skills...',
  'Deploying Projects...'
];

const Loader = () => {
  const [displayText, setDisplayText] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    const currentMsg = messages[msgIndex];

    if (!isDeleting && charIndex < currentMsg.length) {
      typingTimeout = setTimeout(() => {
        setDisplayText(currentMsg.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 60);
    } else if (isDeleting && charIndex > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayText(currentMsg.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 30);
    } else {
      typingTimeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 900);
        } else {
          setMsgIndex((msgIndex + 1) % messages.length);
        }
      }, 700);
    }
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, msgIndex]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <div className="flex items-center text-2xl md:text-3xl font-mono font-semibold mb-4">
        <span className="text-blue-400">{'{'}</span>
        <span className="mx-2">{displayText}</span>
        <span className="animate-blink text-blue-400">|</span>
        <span className="text-blue-400">{'}'}</span>
      </div>
      <div className="text-sm text-slate-400 font-mono tracking-widest mt-2 animate-pulse">
        Please wait, your developer experience is loading...
      </div>
      <style jsx>{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader; 