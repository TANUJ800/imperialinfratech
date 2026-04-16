import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Commercial() {
  return (
    <Layout>
      <div className="bg-gray-50">

        {/* HERO */}
        <section className="relative px-6 py-20 text-center text-white bg-green-900">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-5xl font-bold"
          >
            Commercial Construction Solutions
          </motion.h1>

          <p className="max-w-2xl mx-auto mb-6 text-lg">
            We deliver high-performance commercial infrastructure tailored for industries,
            offices, warehouses, and large-scale operations.
          </p>

          <button className="px-6 py-3 font-medium text-black transition bg-yellow-400 rounded-full hover:scale-105">
            Request Site Visit
          </button>
        </section>

        {/* INTRO */}
        <section className="max-w-6xl px-6 py-16 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Complete Commercial Construction Expertise
          </h2>
          <p className="text-gray-600">
            From concept to completion, we provide end-to-end construction services
            ensuring durability, efficiency, and long-term performance.
          </p>
        </section>

        {/* IMAGE 1 */}
        <section className="grid items-center max-w-6xl gap-10 px-6 py-16 mx-auto md:grid-cols-2">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/image/train.jpeg"
            className="shadow-lg rounded-xl"
          />

          <div>
            <h3 className="mb-3 text-2xl font-bold">Industrial Construction</h3>
            <p className="mb-4 text-gray-600">
              Strong and scalable structures designed for heavy industrial operations
              like factories, warehouses, and logistics hubs.
            </p>

            <ul className="space-y-2">
              <li>✔ High load-bearing capacity</li>
              <li>✔ Durable flooring systems</li>
              <li>✔ Chemical resistant materials</li>
              <li>✔ Efficient layouts</li>
            </ul>
          </div>
        </section>

        {/* IMAGE 2 */}
        <section className="grid items-center max-w-6xl gap-10 px-6 py-16 mx-auto bg-white md:grid-cols-2">
          
          <div>
            <h3 className="mb-3 text-2xl font-bold">Waterproofing & Flooring</h3>
            <p className="mb-4 text-gray-600">
              Advanced epoxy flooring and waterproofing solutions that increase
              lifespan and reduce maintenance cost.
            </p>

            <ul className="space-y-2">
              <li>✔ Anti-slip coating</li>
              <li>✔ Crack resistance</li>
              <li>✔ Long-lasting finish</li>
              <li>✔ Easy maintenance</li>
            </ul>
          </div>

          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/image/redfloor.jpeg"
            className="shadow-lg rounded-xl"
          />
        </section>

        {/* IMAGE 3 */}
        <section className="grid items-center max-w-6xl gap-10 px-6 py-16 mx-auto md:grid-cols-2">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/image/watertank.jpeg"
            className="shadow-lg rounded-xl"
          />

          <div>
            <h3 className="mb-3 text-2xl font-bold">Large Infrastructure Projects</h3>
            <p className="mb-4 text-gray-600">
              We specialize in executing large-scale infrastructure projects
              including tanks, plants, and heavy construction.
            </p>

            <ul className="space-y-2">
              <li>✔ Industrial towers</li>
              <li>✔ Cement plants</li>
              <li>✔ Storage systems</li>
              <li>✔ Long-term durability</li>
            </ul>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="px-6 py-16 bg-gray-100">
          <h2 className="mb-10 text-3xl font-bold text-center">Our Services</h2>

          <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-3">
            {[
              "Office Construction",
              "Warehouse Setup",
              "Industrial Flooring",
              "Electrical Systems",
              "Plumbing Work",
              "Maintenance & Repair",
            ].map((item, i) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={i}
                className="p-6 bg-white shadow rounded-xl"
              >
                <h3 className="mb-2 text-lg font-semibold">{item}</h3>
                <p className="text-sm text-gray-600">
                  High-quality professional service with durability and performance.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="max-w-6xl px-6 py-16 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center">
            Our Process
          </h2>

          <div className="grid gap-4 md:grid-cols-5">
            {[
              "Planning",
              "Design",
              "Execution",
              "Inspection",
              "Delivery",
            ].map((step, i) => (
              <div
                key={i}
                className="p-4 text-center bg-white rounded-lg shadow"
              >
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Why Choose Us
            </h2>

            <p className="mb-6 text-gray-600">
              We ensure quality construction with modern techniques,
              experienced team, and timely delivery.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 shadow rounded-xl">✔ Expert Team</div>
              <div className="p-6 shadow rounded-xl">✔ On-time Delivery</div>
              <div className="p-6 shadow rounded-xl">✔ Premium Materials</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center text-white bg-green-800">
          <h2 className="mb-4 text-3xl font-bold">
            Start Your Commercial Project Today
          </h2>

          <button className="px-6 py-3 font-medium text-black transition bg-yellow-400 rounded-full hover:scale-105">
            Contact Now
          </button>
        </section>

      </div>
    </Layout>
  );
}