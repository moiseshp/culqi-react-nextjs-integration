export function loadScript(src: string, onLoad: () => void) {
  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onload = onLoad;
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  };
}
