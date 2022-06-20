import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";

import Prism from "prismjs";

export default function Markdown({ data }) {

  useEffect(() => {
    if(data.content) Prism.highlightAll();
  }, [data.content]);


  const components = {
    h1: (props) => <h1 className="card-title">{props.children}</h1>,
    h2: (props) => <h1 className="card-title">{props.children}</h1>,
    pre: (props) => <pre className="p-6">{props.children}</pre>,

  };

  return <ReactMarkdown components={components}>{data.content}</ReactMarkdown>;
}
