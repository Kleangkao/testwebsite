import type { ReactNode } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const heroImage = "/assets/header.jpg";

const communityImages = [
  "/assets/workshop-group.jpg",
  "/assets/workshop-table.jpg",
  "/assets/presentation-1.jpg",
  "/assets/presentation-2.jpg",
];

const introParagraph =
  "Thailand Digital Shortcuts is dedicated to empowering Thai individuals of all ages to actively engage in and contribute to the Web3 community. Our mission is to bridge the educational gap by offering free access to digital and blockchain technology education, both online and offline, particularly focusing on underserved rural areas where technological resources are scarce.";

const teamMembers = [
  {
    name: "Nichanun Thongprasert",
    school: "Thammasat University",
    role: "President Blockchain, Founder",
    image: "/assets/nichanun.jpg",
    imageClass: "object-[center_18%]",
  },
  {
    name: "@CryptoAliceTH",
    school: "",
    role: "Founder",
    image: "/assets/cryptoalice.jpg",
    imageClass: "object-contain bg-[#efe3d2]",
  },
  {
    name: "Kiattisak Sing-ngam",
    school: "Sripatum University",
    role: "Founder",
    image: "/assets/kiattisak.jpg",
    imageClass: "object-[center_18%]",
  },
  {
    name: "Theerameth Lwichithbanchong",
    school: "Srinakharinwirot University",
    role: "Founder",
    image: "/assets/theerameth.jpg",
    imageClass: "object-[center_18%]",
  },
  {
    name: "Phanitchapol Sawang",
    school: "Thammasat University",
    role: "Founder",
    image: "/assets/phanitchapol.jpg",
    imageClass: "object-[center_18%]",
  },
  {
    name: "Natthaphong Saruasawan",
    school: "Bangkok University",
    role: "Founder",
    image: "/assets/natthaphong.jpg",
    imageClass: "object-[center_18%]",
  },
  {
    name: "Thanapol Pooam",
    school: "Kasetsart University",
    role: "Founder / Community Manager",
    image: "/assets/thanapol.jpg",
    imageClass: "object-[center_18%]",
  },
  {
    name: "Chompunut Charoenpoon",
    school: "Kasetsart University",
    role: "Project Manager",
    image: "/assets/chompunut.jpg",
    imageClass: "object-[center_18%]",
  },
  {
    name: "Thanawat Sakulrungrojwute",
    school: "Kasetsart University",
    role: "President of Kasetsart Blockchain, Data Researcher",
    image: "/assets/thanawat.jpg",
    imageClass: "object-[center_18%]",
  },
  {
    name: "Lada Intharaphuti",
    school: "Thammasat University",
    role: "Graphic Designer / Content Creator",
    image: "/assets/lada.jpg",
    imageClass: "object-[center_18%]",
  },
  {
    name: "Wanchaloum Tapouu",
    school: "King Mongkut's University",
    role: "Web Designer",
    image: "/assets/wanchaloum.webp",
    imageClass: "object-[center_18%]",
  },
];

const ruralParagraph =
  "With technological advancements, rural communities now have the opportunity to participate in Web3. Through our initiative, we provide free education both online and in physical schools to eliminate barriers related to funding and lack of technological knowledge. Our volunteers from various prestigious universities, including Chulalongkorn University, Thammasat University, Kasetsart University, Mahidol University, Bangkok University, Srinakharinwirot University, King Mongkut's Institute of Technology Ladkrabang, Dhurakij Bundit University and Sripatum University, have pledged their support, enabling us to establish a solid foundation for learning.";

const audienceParagraph =
  "Our physical schools primarily cater to school-age children and adults in Nakhon Nayok and Prachinburi provinces. We have plans to extend our reach to other parts of the country in the future. However, our online presence welcomes individuals from all corners of Thailand, particularly targeting low-income students lacking access to supplementary education or hindered by geographic constraints.";

const curriculumParagraph =
  "Our curriculum begins with foundational courses in English as a Second Language and basic computer skills, gradually progressing into specialized subjects such as Blockchain, Smart Contracts, Developer Skills, and more. The courses are designed to adapt to the evolving technological landscape, aiming to equip our students with the expertise needed for prompt employment in the field.";

const aboutParagraph =
  "Thailand Digital Shortcuts, a non-profit organization operated by volunteers from various prestigious universities in Thailand. Our mission is to provide education to individuals who lack opportunities but possess a strong desire to learn and improve their lives. Although we are a small team, we dream of making a big impact and aspire to change the world for the better, one corner at a time.";

function SectionHeading({
  eyebrow,
  title,
  align = "left",
  description,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  description?: string;
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#a57c3a]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl tracking-tight text-[#231b15] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#6d5b4d] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-3xl border border-[#d9c7a8] bg-[#fbf7f0] shadow-[0_18px_40px_rgba(23,18,13,0.07)] ${className}`}
    >
      {children}
    </article>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6efe6] text-[#231b15] antialiased">
      <div className="pointer-events-none fixed inset-0 opacity-[0.1] [background-image:radial-gradient(circle_at_1px_1px,_rgba(197,154,88,0.3)_1px,_transparent_0)] [background-size:24px_24px]" />

      <header className="sticky top-0 z-50 border-b border-[#e4d7c7] bg-[#fbf7f1]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="overflow-hidden rounded-xl border border-[#d9c7a8] bg-black p-1 shadow-sm">
              <img
                src="/assets/logo.webp"
                alt="Thailand Digital Shortcuts"
                className="h-11 w-auto object-contain"
              />
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-serif text-sm tracking-tight text-[#231b15] sm:text-base">
                THAILAND DIGITAL SHORTCUTS
              </span>
              <span className="text-[0.68rem] uppercase tracking-[0.34em] text-[#8b6f53]">
                Non-profit education
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#655240] transition-colors hover:text-[#231b15]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[#d4ad69] bg-[#d4ad69] px-5 py-2 text-sm font-semibold text-[#140f0b] shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#dfbc7c]"
          >
            Join
          </a>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden border-b border-[#d8c4a1] bg-[#f6efe6]">
          <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:radial-gradient(circle_at_1px_1px,_rgba(197,154,88,0.18)_1px,_transparent_0)] [background-size:26px_26px]" />
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
              <div className="text-center lg:text-left">
                <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,9vw,5.8rem)] leading-[0.9] tracking-tight text-[#231b15]">
                  Thailand
                  <br />
                  <span className="whitespace-nowrap">Digital Shortcuts</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5f5144] sm:text-xl lg:mx-0">
                  Pathway to Web3 and Digital education
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-[#d8c4a1] bg-[#fbf7f0] shadow-[0_18px_44px_rgba(23,18,13,0.1)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#d4ad69] to-transparent" />
                <img
                  src={heroImage}
                  alt="Thailand Digital Shortcuts workshop group"
                  className="aspect-[16/10] h-full w-full object-cover sm:aspect-[5/3] lg:aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#f6efe6] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Card className="mx-auto max-w-4xl p-8 text-center sm:p-10 lg:p-12">
              <SectionHeading title="Thailand Digital Shortcuts" align="center" />
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#625344] sm:text-lg">
                {introParagraph}
              </p>
              <div className="mt-8 flex justify-center">
                <div className="h-px w-24 bg-[#d8c4a1]" />
              </div>
            </Card>
          </div>
        </section>

        <section id="community" className="border-y border-[#d8c4a1] bg-[#efe6d6] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.34em] text-[#a57c3a]">
              Community
            </p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="group overflow-hidden sm:col-span-2">
                  <img
                    src={communityImages[3]}
                    alt="Community learning moment"
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Card>
                <Card className="group overflow-hidden">
                  <img
                    src={communityImages[0]}
                    alt="Community learning moment"
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Card>
                <Card className="group overflow-hidden">
                  <img
                    src={communityImages[1]}
                    alt="Community learning moment"
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Card>
              </div>

              <Card className="p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#a57c3a]">
                  Community Story
                </p>
                <h3 className="mt-3 font-serif text-3xl tracking-tight text-[#231b15] sm:text-4xl">
                  Empowering Rural Communities
                </h3>
                <p className="mt-6 text-base leading-8 text-[#625344] sm:text-lg">
                  {ruralParagraph}
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#f6efe6] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="p-6 sm:p-8">
                <SectionHeading eyebrow="Audience" title="Target Audience" />
                <p className="mt-5 text-base leading-8 text-[#625344] sm:text-lg">
                  {audienceParagraph}
                </p>
              </Card>

              <Card className="p-6 sm:p-8">
                <SectionHeading eyebrow="Learning Path" title="Curriculum" />
                <p className="mt-5 text-base leading-8 text-[#625344] sm:text-lg">
                  {curriculumParagraph}
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8c4a1] bg-[#efe6d6] py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr_auto] lg:items-center">
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-2xl border border-[#d8c4a1] bg-[#efe3d2]">
                    <img
                      src="/assets/books.webp"
                      alt="Books"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <blockquote className="font-serif text-2xl leading-tight tracking-tight text-[#231b15] sm:text-4xl">
                    Formal education will make you a living;
                    <br />
                    self-education will make you a fortune.
                  </blockquote>
                </div>
                <p className="self-end text-center text-sm italic text-[#8b6f53] lg:text-right">
                  - Jim Rohn
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-[#f6efe6] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Card className="p-6 sm:p-8">
              <SectionHeading title="About us" />
              <p className="mt-5 text-base leading-8 text-[#625344] sm:text-lg">
                {aboutParagraph}
              </p>
            </Card>
          </div>
        </section>

        <section id="team" className="bg-[#efe6d6] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Team" title="Our Team" align="center" />
            <div className="mt-12 flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {teamMembers.slice(0, 8).map((member) => (
                  <Card
                    key={member.name}
                    className="group overflow-hidden text-center transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className={`h-60 w-full transition-transform duration-500 group-hover:scale-[1.02] ${member.imageClass}`}
                    />
                    <div className="px-5 pb-5 pt-5">
                      <h3 className="font-serif text-lg tracking-tight text-[#231b15]">
                        {member.name}
                      </h3>
                      {member.school ? (
                        <p className="mt-2 text-sm text-[#7a6657]">{member.school}</p>
                      ) : null}
                      <p className="mt-2 text-sm font-medium text-[#a57c3a]">
                        {member.role}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mx-auto grid w-full max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.slice(8).map((member) => (
                  <Card
                    key={member.name}
                    className="group overflow-hidden text-center transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className={`h-60 w-full transition-transform duration-500 group-hover:scale-[1.02] ${member.imageClass}`}
                    />
                    <div className="px-5 pb-5 pt-5">
                      <h3 className="font-serif text-lg tracking-tight text-[#231b15]">
                        {member.name}
                      </h3>
                      {member.school ? (
                        <p className="mt-2 text-sm text-[#7a6657]">{member.school}</p>
                      ) : null}
                      <p className="mt-2 text-sm font-medium text-[#a57c3a]">
                        {member.role}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-[#d8c4a1] bg-[#181310] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#d4ad69] bg-[#fbf7f0] px-6 py-12 text-center shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:px-10 sm:py-14 lg:px-16">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#a57c3a]">
                Contact us
              </p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight text-[#231b15] sm:text-4xl">
                thailand@digitalshortcuts.org
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#625344]">
                We welcome students, volunteers, and partner organizations who
                want to help expand access to digital education across Thailand.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
