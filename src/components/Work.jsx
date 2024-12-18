import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/assets/undisputed.png",
    title: "clothes ecommerce app",
    tags: ["Frontend", "Backend", "MVC"],
    projectLink: "https://undisputedeg.com",
  },
  {
    imgSrc: "/assets/api.png",
    title: "ecommerce-api",
    tags: ["API", "MVC", "Laravel", "Redis"],
    projectLink: "https://github.com/gamalgaber/ecommerce-api",
  },
  {
    imgSrc: "/assets/nikeapp.jpg",
    title: "Nike app",
    tags: ["React.js", "TailwindCSS"],
    projectLink: "https://github.com/gamalgaber/nikeapp",
  },
  {
    imgSrc: "/assets/fast-pizza.jpg",
    title: "Pizza ordering website",
    tags: ["Web-design", "React.js", "TailwindCSS"],
    projectLink: "https://github.com/gamalgaber/fast-pizza",
  },
  {
    imgSrc: "/assets/worldwise.jpg",
    title: "tracking website",
    tags: ["React.js", "Development"],
    projectLink: "https://github.com/gamalgaber/worldwise",
  },
  {
    imgSrc: "/assets/usepopcorn.jpg",
    title: "list movies watched website",
    tags: ["Web-design", "Development", "React.js"],
    projectLink: "https://github.com/gamalgaber/usepopcorn",
  },
];

function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => {
            return (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
