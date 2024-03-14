import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Team FluentBridge🤝" title="A Stellar Team from IITs and Sri Lanka's Creative Minds" />

      <div className="relative grid gap-6 md:grid-cols-5 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";
          const statusImage = item.status === "done" ? check2 : null;

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[1.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-4 bg-n-8 rounded-[1.5rem] overflow-hidden xl:p-8">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-32 h-48 rounded-lg" // Adjust the size and rounding as needed
                    src={grid}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[20rem] mb-4 md:mb-10">
                    <Tagline>{item.date}</Tagline>
                    {statusImage && (
                      <div className="flex items-center px-2 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-1.5"
                          src={statusImage}
                          width={12}
                          height={12}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-center mb-4 -my-4 -mx-6">
                    <img
                      className="w-24 h-24 rounded-full" // Adjust the size and rounding as needed
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h5 mb-2">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
        <Gradient />
      </div>

      <div className="flex justify-center mt-8 md:mt-10 xl:mt-12">
        <Button href="/roadmap">Back to Top</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
