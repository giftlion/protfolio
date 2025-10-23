import { getPosts, getTags } from "./get-posts";
import { getProjects } from "./get-projects";
import PostCard from "../components/PostCard";
import ProjectCard from "../components/ProjectCard";

export const metadata = {
  title: "Netanel - Full Stack Developer",
  description: "Personal blog and portfolio of Netanel, a passionate full stack developer",
};

export default async function HomePage() {
  const posts = await getPosts();
  const projects = getProjects();

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Hey, I'm <span className="text-gray-400">Netanel</span>.
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
            Full Stack Developer.
          </h2>
        </div>

        <div className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            Passionate about TypeScript, Next.js, and modern web development.
            Building scalable applications with clean code and innovative solutions.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      {/* <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="text-sm text-gray-500 min-w-[120px]">2022 - Present</div>
            <div>
              <div className="font-semibold">Full Stack Developer</div>
              <div className="text-gray-400">Freelance</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="text-sm text-gray-500 min-w-[120px]">2021 - 2022</div>
            <div>
              <div className="font-semibold">Frontend Developer</div>
              <div className="text-gray-400">Tech Company</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="text-sm text-gray-500 min-w-[120px]">2020 - 2021</div>
            <div>
              <div className="font-semibold">Junior Developer</div>
              <div className="text-gray-400">Startup</div>
            </div>
          </div>
        </div>
      </section> */}

        {/* Projects Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <PostCard key={post.route} post={post} />
            ))}
          </div>
        </section>

      {/* Get in Touch */}
      {/* <section className="max-w-4xl mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Building something that needs to convert? Need a full stack developer who actually ships products that make money? 
            I'm down to work on projects that solve real problems. Hit me up if you're serious about results.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
              Send Message
            </button>
            <button className="px-6 py-3 border border-gray-600 text-white font-semibold rounded hover:border-gray-400 transition-colors">
              Reach Me
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
