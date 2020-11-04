window.onload = function() {
    const uneeqFrame = document.createElement('iframe');
    uneeqFrame.id = 'uneeqFrame';
    uneeqFrame.src = 'https://creator.us.uneeq.io/try/51d4be30-8543-4619-85b5-d843001cdaa7';
    uneeqFrame.style = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 99999; border: none;';
    uneeqFrame.sandbox = 'allow-scripts allow-same-origin allow-modals allow-top-navigation';
    uneeqFrame.allow = 'microphone;';
    document.body.appendChild(uneeqFrame);
  };