import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Home() {
  return (
    <div className="container mx-auto px-[1em] lg:text-base">
      <div className="mb-3 mt-[1em] font-serif text-3xl lg:text-6xl">
        What is the "Gish gallop?"
      </div>

      <div className="text-md mt-5 lg:text-3xl">
        It's a way to overwhelm with a sheer number of bad arguments.
      </div>

      <div className="text-md mt-4 lg:text-2xl">
        People sometimes don't notice they're doing it.
      </div>

      <div className="mb-3 mt-3 grid gap-4 lg:mt-9 lg:grid-cols-3">
        <a
          href="#examples"
          className="rounded-lg border-2 border-dashed border-yellow-300 bg-yellow-100 p-4"
        >
          <div className="text-3xl">🔎 How to spot it</div>

          <div>
            You hear a rapid-fire barrage of arguments, often including
            misinformation or fallacies, when just one good point should be
            enough.
          </div>
        </a>

        <a
          href="#why"
          className="rounded-lg border-2 border-dashed border-red-300 bg-red-100 p-4"
        >
          <div className="text-3xl">🧠 Why it "works"</div>

          <div>
            It eats up an opponent's energy, making them appear weak or
            unprepared to others.
          </div>
        </a>

        <a
          href="#how_to"
          className="rounded-lg border-2 border-dashed border-blue-300 bg-blue-100 p-4"
        >
          <div className="text-3xl">🙋‍♂️ How to respond</div>

          <div>
            It's not always worth it or even possible, but there are ways to
            sometimes stop the "galloper" in their tracks.
          </div>
        </a>
      </div>

      <div id="examples" className="mt-[2em]">
        <div className="mb-6 text-2xl lg:text-4xl">Some examples</div>

        <div>
          Consider these examples of the "Gish gallop" being used by non-expert
          Tiktok users. Just as rapidly, they are countered by a PhD expert in
          Microbiology and Immunology.
        </div>

        <div className="mt-3">
          Look at how much{" "}
          <span className="font-bold">effort and expertise</span> is actually
          needed to check statements this quickly, even with preparation.
        </div>

        <div className="mt-[1em] grid grid-cols-1 grid-rows-3 gap-y-8 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
          <div>
            <video className="video w-full" controls>
              <source src="/assets/video/example5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>
              Source:{" "}
              <a
                className="text-teal-400"
                href="https://www.tiktok.com/@scitimewithtracy"
              >
                @scitimewithtracy
              </a>
            </p>
          </div>
          <div>
            <video className="video w-full" controls>
              <source src="/assets/video/example3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>
              Source:{" "}
              <a
                className="text-teal-400"
                href="https://www.tiktok.com/@scitimewithtracy"
              >
                @scitimewithtracy
              </a>
            </p>
          </div>
          <div>
            <video
              className="video w-full"
              controls
              poster="/assets/video/example1-thumb.png"
            >
              <source src="/assets/video/example1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>
              Source:{" "}
              <a
                className="text-teal-400"
                href="https://www.tiktok.com/@scitimewithtracy"
              >
                @scitimewithtracy
              </a>
            </p>
          </div>
          <div>
            <video
              className="video w-full"
              controls
              poster="/assets/video/example2-thumb.png"
            >
              <source src="/assets/video/example2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>
              Source:{" "}
              <a
                className="text-teal-400"
                href="https://www.tiktok.com/@scitimewithtracy"
              >
                @scitimewithtracy
              </a>
            </p>
          </div>
        </div>
      </div>

      <div id="why" className="mt-[2em]">
        <div className="mb-6 text-2xl lg:text-4xl">Why it "works"</div>

        <div>The Gish Gallop can "work" for several reasons:</div>

        <ol className="list-decimal px-[1em]">
          <li>
            <span className="font-bold">Overwhelms with quantity</span>: The
            sheer volume of arguments is difficult to refute in real time,
            especially if the other person is not prepared it.
          </li>
          <li>
            <span className="font-bold">Creates stress</span>: It imposes a
            heavy cognitive load on the listener, who must process and counter
            each argument individually.
          </li>
          <li>
            <span className="font-bold">Shifting Burden of Proof</span>: It
            shifts the burden of proof to the listener, who is now assumed to be
            tasked with disproving a multitude of claims.
          </li>
          <li>
            <span className="font-bold">Creates Doubt</span>: Even if some
            points are refuted, the sheer number of arguments can create doubt
            about the listener's position or understanding about what they "left
            out".
          </li>
        </ol>

        <div className="my-[1em]">In short:</div>
        <div className="lg:w-4/6">
          <Zoom>
            <img
              src="/assets/images/sketchplanations-the-bs-asymmetry-principle.png"
              alt="The BS asymmetry principle"
            />
          </Zoom>

          <div className="mt-[1em]">
            Credit:{" "}
            <a
              className="text-teal-400"
              href="https://sketchplanations.com/the-bs-asymmetry-principle"
            >
              Sketchplanations
            </a>
          </div>
        </div>
      </div>

      <div id="how_to" className="mt-[2em]">
        <div className="mb-6 text-2xl lg:text-4xl">How to respond</div>

        <ol className="mt-[1em] list-decimal px-[1em]">
          <li>
            <span className="font-bold">Forced Focus:</span> Require the
            galloper to present and defend their strongest argument.
          </li>
          <li>
            <span className="font-bold">Rebut common themes:</span> Identify a
            central flaw or inconsistency in the arguments and challenge that
            instead.
          </li>
          <li>
            <span className="font-bold">Call-Out:</span> Explicitly identify the
            tactic as a Gish Gallop, highlighting its manipulative nature.
          </li>
          <li>
            <span className="font-bold">Selective Rebuttal:</span> Focus on just
            a few of the arguments, showing the weakness of the overall
            approach.
          </li>
          <li>
            <span className="font-bold">Weakest Link:</span> Expose a
            particularly vulnerable argument and discredit the entire barrage.
          </li>
        </ol>
      </div>

      <div>
        <div className="my-6 text-2xl lg:text-4xl">More resources</div>

        <ul className="list-disc">
          <li>
            <a
              className="text-teal-400"
              href="https://rationalwiki.org/wiki/Gish_Gallop"
              target="_blank"
            >
              📚 Gish Gallop on RationalWiki
            </a>
          </li>
          <li>
            <a
              className="text-teal-400"
              href="https://effectiviology.com/gish-gallop/"
              target="_blank"
            >
              📚 Gish Gallop on Effectiviology
            </a>
          </li>
          <li>
            <a
              className="text-teal-400"
              href="https://en.wikipedia.org/wiki/Brandolini%27s_law"
              target="_blank"
            >
              📚 Brandolini's law
            </a>
          </li>
          <li>
            <a
              className="text-teal-400"
              href="https://yourlogicalfallacyis.com/"
              target="_blank"
            >
              📚 Other common logical fallacies
            </a>
          </li>
          <li>
            <a
              className="text-teal-400"
              href="https://www.callingbullshit.org/videos.html"
              target="_blank"
            >
              📚 A Washington University online course on "Calling Bullsh*t"
            </a>
          </li>
        </ul>
      </div>

      <div className="my-[2em] text-right">
        <a
          href="https://github.com/gishgallop/gishgallop.horse"
          className="text-teal-400"
          target="_blank"
        >
          Contribute here
        </a>
      </div>
    </div>
  );
}
