import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  location: "",
  service: "",
  message: "",
  website: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your request..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send request");
      }

      setStatus({ type: "success", message: "Thanks. We will contact you within 1 business day." });
      setForm(initialState);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-600">
          Full name
          <input
            className="input"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-600">
          Project location
          <input
            className="input"
            name="location"
            value={form.location}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-600">
          Work email
          <input
            className="input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-600">
          Phone number
          <input
            className="input"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91"
            required
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-600">
          Service required
          <select className="input" name="service" value={form.service} onChange={handleChange}>
            <option value="">Select a service</option>
            <option value="Industrial Epoxy Flooring">Industrial Epoxy Flooring</option>
            <option value="Surface Preparation">Surface Preparation</option>
            <option value="Repair and Recoating">Repair and Recoating</option>
            <option value="Civil and Structural Work">Civil and Structural Work</option>
            <option value="Warehouse Construction">Warehouse Construction</option>
            <option value="Others">Others</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm text-slate-600">
        Project brief
        <textarea
          className="input min-h-[140px]"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>

      <input
        className="hidden"
        type="text"
        name="website"
        value={form.website}
        onChange={handleChange}
        tabIndex="-1"
        autoComplete="off"
      />

      <button className="btn-primary" type="submit" disabled={status.type === "loading"}>
        {status.type === "loading" ? "Sending..." : "Submit Request"}
      </button>

      <div aria-live="polite" className="text-sm text-slate-600">
        {status.message}
      </div>
    </form>
  );
}
