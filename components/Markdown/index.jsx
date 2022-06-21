import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";

import Prism from "prismjs";

export default function Markdown({ data }) {

  useEffect(() => {
    if(data.content) Prism.highlightAll();
  }, [data.content]);


  const components = {
    h1: (props) => <h1 className="my-6 text-secondary font-bold text-4xl	">{props.children}</h1>,
    h2: (props) => <h1 className="mt-6 mb-3 text-secondary text-3xl">{props.children}</h1>,
    p: (props) => <p className="leading-relaxed my-6 mb-3 text-slate-700 text-xl ">{props.children}</p>,
    ul: (props) => <ul className="pl-5 my-3 ">{props.children}</ul>,
    li: (props) => <li className="my-1 list-disc text-lg text-slate-700">{props.children}</li>,
    pre: (props) => <pre className="p-6">{props.children}</pre>,

  };

  return <ReactMarkdown components={components}>{data.content}</ReactMarkdown>;
}
