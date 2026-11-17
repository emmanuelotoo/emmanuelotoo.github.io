import { EntryCard } from "@/components/entry-card";
import { SectionHeader } from "@/components/section-header";

const projects = [
  {
    title: "sakai bot",
    description: "never miss sakai updates again",
    href: "https://github.com/emmanuelotoo/sakai-bot",
  },
  {
    title: "easy send",
    description: "send money on whatsapp",
    href: "https://github.com/emmanuelotoo/easy-send",
  },
  {
    title: "1957 removals",
    description: "moving in the uk, one van at a time",
    href: "https://1957removals.eotoo218.workers.dev/",
    label: "website",
  },
  {
    title: "ali stores",
    description: "shop in the us, ship to ghana",
    href: "https://ali-stores.vercel.app/",
    label: "website",
  },
  {
    title: "celebrate right",
    description: "gifting concierge for accra and the diaspora",
    href: "https://celebrateright.com",
    label: "website",
  },
  {
    title: "blockyard studio",
    description: "roblox meets minecraft",
    href: "https://blockyard-studio.vercel.app/",
    label: "website",
  },
];

export default function Projects() {
  return (
    <section>
      <SectionHeader label="projects" />
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <EntryCard
            key={project.title}
            title={project.title}
            subtitle={project.description}
            externalHref={project.href}
            externalLabel={"label" in project ? project.label : "github"}
          />
        ))}
      </div>
    </section>
  );
}
