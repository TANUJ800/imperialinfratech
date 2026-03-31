import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import ProjectGallery from "../components/ProjectGallery";

const projects = [
  {
    title: "Epoxy Flooring in Automobile Industry",
    category: "Industrial Epoxy Flooring",
    description: "Heavy-duty epoxy flooring with superior abrasion resistance and organized traffic flow for automotive operations.",
image: "/image/epoxy.png"  },
  {
    title: "Crazy Plant Lady Cafeteria",
    category: "Civil Construction",
    description: "Complete civil construction of a cafeteria, designed for durability, functionality, and a clean modern finish.",
    image: "/image/cafe.jpeg"
  },
  {
    title: "Pharma Production Zone",
    category: "Industrial Epoxy Flooring",
    description: "Seamless flooring for clean and controlled environments.",
    image: "/image/epoxy1.jpeg"
  },
  {
    title: "House Renovation",
    category: "Civil Construction",
    description: "Renovate a Bunglow with modern amenities and a sleek design.",
    image: "/image/bunglow.jpeg"
  },
  {
    title: "Interiar Design for House",
    category: "Interiar Designing",
    description: "Interiar Designing in a luxurious setting.",
    image: "/image/interiar.jpeg"
  },

  {
    title: "Galvanized Steel Structure Coating for Warehouse",
    category: "Galvanized Steel Coating",
    description: "Protective coating for galvanized steel structures in warehouse environments.",
    image: "/image/gelvanization.jpeg"
  },
  
];

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects Portfolio | Imperial Infratech-Con" path="/projects" />
      <PageHeader
        overline="Projects Portfolio"
        title="Industrial flooring and construction executed with precision."
        subtitle="A snapshot of project types delivered for industrial clients across manufacturing, logistics, and infrastructure."
      />

      <section className="section">
        <div className="container-base">
          <ProjectGallery items={projects} />
        </div>
      </section>
    </Layout>
  );
}
