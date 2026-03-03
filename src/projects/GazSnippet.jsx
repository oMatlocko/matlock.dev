import { useEffect, useRef } from 'react';
import Prism from 'prismjs';

import '../prism/Gazprea.js'; // side-effect import registers language
import 'prismjs/themes/prism.css';

function GazSnippet({ code }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [code]);

  return (
    <pre className="language-gazprea">
      <code ref={ref} className="language-gazprea">
        {code}
      </code>
    </pre>
  );
}

export default GazSnippet;