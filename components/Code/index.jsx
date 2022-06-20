import React, { useEffect } from "react";
import Prism from "prismjs";

export default function Code({ data }) {

  console.log(data, "code.type");
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h2 className="">{data.name}</h2>

      { data.src && <div className="badge badge-secondary badge-lg">`{data.src}`</div>
}
      <div className="mockup-code">
        <pre className="p-6">
          <code className={`language-${data.type}`}>{data.content}</code>
        </pre>
      </div>
    </div>
  );
}
