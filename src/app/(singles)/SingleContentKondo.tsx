import Image from "next/image";
import React from "react";

const SingleContentKondo = () => {
  return (
    <>
      {/* THIS IS THE DEMP CONTENT - YOU CAN USE MARKDOWN, JSON ...*/}
      <p>
        Descrição lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel
        officiis ipsum placeat itaque neque dolorem modi perspiciatis dolor
        distinctio veritatis sapiente, minima corrupti dolores necessitatibus
        suscipit accusantium dignissimos culpa cumque.
      </p>
      <h2>Proximidade</h2>
      <p>
        A proximidade à BH é de {" "}
        <strong>25 minutos</strong>. 
      </p>
      <p>
        {` Rua Fernando de Noronha 123, Nova Lima`}
      </p>
      <figure>
        <Image
          src="/maps2.png"
          alt="nc blog"
          sizes="(max-width: 1024px) 100vw, 1240px"
          className="rounded-2xl"
          width={1635}
          height={774}
        />
        <figcaption>
          O Condomínio Ville des Lacs fica no município de Nova Lima, a 15km de BH
        </figcaption>
      </figure>
      <p>
        {`   Now I'm going to show you an example of an unordered list to make sure
        that looks good, too:`}
      </p>
      <ul>
        <li>So here is the first item in this list.</li>
        <li>{`In this example we're keeping the items short.`}</li>
        <li>{`Later, we'll use longer, more complex list items.`}</li>
      </ul>
      <p>{`And that's the end of this section.`}</p>
      <h2>Code should look okay by default.</h2>
      <p>
        I think most people are going to use{" "}
        <a href="https://highlightjs.org/">highlight.js</a> or{" "}
        <a href="https://prismjs.com/">Prism</a> or something if they want to
        {` style their code blocks but it wouldn't hurt to make them look`}{" "}
        <em>okay</em> out of the box, even with no syntax highlighting.
      </p>
      <p>
        {`  What I've written here is probably long enough, but adding this final
        sentence can't hurt.`}
      </p>
      <pre className="!rounded-2xl">
        <code className="language-js">
          {`function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
} `}
        </code>
      </pre>
      <p>Hopefully that looks good enough to you.</p>
      <h3>We still need to think about stacked headings though.</h3>
      <h4>
        {` Let's make sure we don't screw that up with <code>h4</code> elements,
        either.`}
      </h4>
      <p>
        Phew, with any luck we have styled the headings above this text and they
        look pretty good.
      </p>
      <p>
        {` Let's add a closing paragraph here so things end with a decently sized
        block of text. I can't explain why I want things to end that way but I
        have to assume it's because I think things will look weird or unbalanced
        if there is a heading too close to the end of the document.`}
      </p>
      <p>
        {`  What I've written here is probably long enough, but adding this final
        sentence can't hurt.`}
      </p>
    </>
  );
};

export default SingleContentKondo;
