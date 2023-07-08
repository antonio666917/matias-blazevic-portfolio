import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Links from "../components/Links";

const swapSentences = [
  "& Latino Culture navigator",
  "& marketing technologist",
  "& brand interpreter",
  "& Spanish linguist",
  "& multicultural communicator",
];

export default function Home() {
  const [swapSentence, setSwapSentence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwapSentence(
        (prevSentence) => (prevSentence + 1) % swapSentences.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className="start-section">
        <div className="container">
          <h1>Hola. Soy Matías.</h1>
          <h2>
            Advertising creative
            <br />
            <span className="swapSentence-container">
              <span className="swapSentence">
                {swapSentences[swapSentence]}
              </span>
              .
            </span>
          </h2>
          <h3>
            <span className="strong">Current role:</span> Creative Director at{" "}
            <a
              className="non-styled-link"
              href="https://www.dentsu.com/"
              target="_blank"
              rel="noreferrer"
            >
              Dentsu
            </a>
          </h3>

          <Links />
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="strong">Latinx Power</h2>
          <p>
            Always insight-driven, I help brands and organizations find the
            right thing to say, at the right time, at the right place.
          </p>

          <div>
            <ul className="links">
              <li>
                <a href="#work-1">Work 1</a>
              </li>
              <li>
                <a href="#work-2">Work 2</a>
              </li>
              <li>
                <a href="#work-3">Work 3</a>
              </li>
              <li>
                <a href="#work-4">Work 4</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="strong">B for Bilingual</h2>
          <p>
            Working from Miami, Puerto Rico and Buenos Aires, I’ve acquired a
            very particular [non-lethal but quite effective] set of skills which
            include:
          </p>

          <div>
            <ul>
              <li>
                brand creation / tone / storytelling / activation / experiences
              </li>
              <li>strategic approach</li>
              <li>earned media</li>
              <li>production and supervision</li>
              <li>target definition & market segmentation</li>
              <li>KPI and goal setting</li>
              <li>campaign execution and optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="strong">Work it</h2>
          <ul>
            <li>TV</li>
            <li>DIGITAL</li>
            <li>CHATBOTS & Ai ENGINES</li>
            <li>ACTIVATIONS</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="strong">Even More About Me</h2>
          <p>
            Husband and father extraordinaire. Science nerd. Tree hugger. Ai
            geek. Electronic music connoisseur. Grilling aficionado. Stargazer.
            Plant grower and collector. Information theory dork. Bach fan and
            beach bum.
          </p>
        </div>
      </section>
    </main>
  );
}
