import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "AWS",
    "MongoDB",
    "GraphQL",
  ];

  return <section
    id="about"
    className="min-h-screen flex items-center justify-center py-20"
  >
    <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-600 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 text-center">
            I am a passionate developer with expertise in building scalable web
            applications and designing innovative approaches to modern WebDev challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition
                                "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition
                ">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 📚 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> B.Sc Computer Science (On Pause)</strong> - Université de Montréal
                2020-2022
              </li>
              <li>
                Relevant Coursework: Data Structures, Cloud Computing, Web Development...
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl space-y-6 border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <div>
              <h4 className="font-semibold"> Full-Stack Developer, SaaS Division @ Mariloo (2022-2025) </h4>
              <p>
                Introduced Jest + Testing-Library suites and a GitHub Actions pipeline, raising automated test
                coverage from 0 % to 70 % and enabling on-push staging deployments.
              </p>
            </div>

            <div>
              <h4 className="font-semibold"> Full-Stack Developer, Network Backend @ LivingObjects (2021-2022) </h4>
              <p>
                Worked in a 10 developer microservice squad to ship intuitive D3.js dashboards; contributed 50+ Jest
                unit tests and kept coverage above 85%
              </p>
            </div>

            <div>
              <h4 className="font-semibold"> Junior Full-Stack Developer at Woop (2019-2021) </h4>
              <p>
                Shipped an order-tracking analytics widget adopted by four enterprise retailers within a month of
                launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </section>;
};