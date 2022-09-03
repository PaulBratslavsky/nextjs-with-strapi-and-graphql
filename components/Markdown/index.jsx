import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";

import Prism from "prismjs";

export default function Markdown({ data }) {

  useEffect(() => {
    if(data.content) Prism.highlightAll();
  }, [data.content]);


  const components = {
    h1: (props) => <h1 className="my-6 text-primary font-bold text-4xl	">{props.children}</h1>,
    h2: (props) => <h2 className="mt-6 mb-3 text-secondary text-3xl">{props.children}</h2>,
    p: (props) => <p className="leading-relaxed my-6 mb-3 text-current text-xl ">{props.children}</p>,
    ul: (props) => <ul className="pl-5 my-3 ">{props.children}</ul>,
    li: (props) => <li className="my-1 list-disc text-lg text-current">{props.children}</li>,
    a: (props) => <a className="text-warning" href={props.href}>{props.children}</a>,
    pre: (props) => <pre className="p-6">{props.children}</pre>,
    strong: (props) => <strong className="font-bold text-warning">{props.children}</strong>,

  };

  return <ReactMarkdown components={components}>{data.content}</ReactMarkdown>;
}
