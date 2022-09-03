import React, { useEffect } from "react";
import Prism from "prismjs";

export default function Code({ data }) {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="my-6">
      <h2 className="my-6 text-current text-2xl">{data.name}</h2>

      { data.src && <div className="badge badge-secondary badge-lg mb-3">`{data.src}`</div>
}
      <div className="mockup-code">
        <pre className="p-6">
          <code className={`language-${data.type}`}>{data.content}</code>
        </pre>
      </div>
    </div>
  );
}
