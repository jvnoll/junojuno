import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-600 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Cloud Platform</h3>
                            <p className="text-gray-400 mb-4">
                                Scalable cloud infrastructure management
                                with real-time monitoring and automated scaling.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.1)] transition-all
                                "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center my-4">
                                <a href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    View Project → (github link TBD)
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Secure Sharing Service TBD</h3>
                            <p className="text-gray-400 mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi temporibus dolores esse? Aperiam sequi accusamus quibusdam?
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.1)] transition-all
                                "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center my-4">
                                <a href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    View Project → (github link TBD)
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> TBD TBD</h3>
                            <p className="text-gray-400 mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus asperiores consectetur maxime accusamus! Cumque, nisi veritatis?
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.1)] transition-all
                                "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center my-4">
                                <a href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    View Project → (github link TBD)
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8x_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> TBD TBD</h3>
                            <p className="text-gray-400 mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quidem aspernatur ipsa cumque eum quos expedita!
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8x_rgba(59,130,246,0.1)] transition-all
                                "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center my-4">
                                <a href="#"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    View Project → (github link TBD)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};