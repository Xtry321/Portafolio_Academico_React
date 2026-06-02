import { useState } from "react";
import { perfil } from "../../data/perfil";
import ProfileIcon from "../ui/ProfileIcon";

export default function ContactSection() {
  const { contacto } = perfil;
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.asunto || "Contacto desde portafolio");
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\n\n${form.mensaje}`
    );
    window.location.href = `mailto:${contacto.email}?subject=${subject}&body=${body}`;
  };

  const githubUser = contacto.github
    ? contacto.github.replace(/\/$/, "").split("/").pop()
    : "";

  const items = [
    { icon: "location", label: "Ubicación", value: contacto.ubicacion },
    {
      icon: "phone",
      label: "Teléfono",
      value: contacto.telefono,
      href: contacto.telefono ? `tel:${contacto.telefono}` : null,
    },
    { icon: "mail", label: "Email", value: contacto.email, href: `mailto:${contacto.email}` },
    {
      icon: "github",
      label: "GitHub",
      value: githubUser || contacto.github,
      href: contacto.github || null,
      external: true,
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: contacto.linkedin ? "Ver perfil" : "",
      href: contacto.linkedin || null,
      external: true,
    },
  ].filter((item) => item.value);

  return (
    <section id="contacto" className="profile-section profile-section-last">
      <span className="section-tag">// contacto</span>
      <h2 className="section-title">Trabajemos juntos.</h2>

      <div className="contact-grid">
        <div className="contact-info">
          {items.map((item) => (
            <div className="contact-info-row" key={item.label}>
              <ProfileIcon name={item.icon} className="contact-info-icon" size={18} />
              <div>
                <span className="contact-info-label">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <form className="profile-card contact-form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              required
              value={form.nombre}
              onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </label>
          <label>
            Asunto
            <input
              type="text"
              value={form.asunto}
              onChange={(e) => setForm((f) => ({ ...f, asunto: e.target.value }))}
            />
          </label>
          <label>
            Mensaje
            <textarea
              rows={4}
              required
              value={form.mensaje}
              onChange={(e) => setForm((f) => ({ ...f, mensaje: e.target.value }))}
            />
          </label>
          <button type="submit" className="btn-primary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
