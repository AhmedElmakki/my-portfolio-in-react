const projects = [
  { title: "EventX Management App", desc: "EventX is a full-stack web application for managing and attending events. Users can browse, book, and pay for events, while admins can manage events, view analytics, and export/import data." },
  { title: "moviefinder app", desc: "an app that finds a movies using an api to get all the info it needs with a good looking Html and Css" },
  { title: "video gamiing api moding", desc: "made a mod for a game that is coded in java and its has been one of my best personal projects" },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen p-8" style={{textAlign:"center"}}>
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-white shadow-lg rounded-xl p-4">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}