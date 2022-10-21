import React from "react";

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [name, setName] = React.useState("Nom");
  const [email, setEmail] = React.useState("Email");
  const [subject, setSubject] = React.useState("Sujet");
  const [message, setMessage] = React.useState("Tapez votre message ici...");
  const [error, setError] = React.useState("");
  const handleChange = (event) => {
    switch (event.target.name) {
      case "nameInput":
        setName(event.target.value);
        break;
      case "emailInput":
        setError(
          event.target.value.includes("@") ? null : "L'email est invalide"
        );
        setEmail(event.target.value);
        break;
      case "subjectInput":
        setSubject(event.target.value);
        break;
      case "messageInput":
        setMessage(event.target.value);
        break;
      default:
    }
  };
  return (
    <>
      <h2 className="contact-title">Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="nameInput"
          value={name}
          onChange={handleChange}
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="emailInput"
          //   defaultValue="Email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="subject"></label>
        <input
          type="text"
          id="subject"
          name="subjectInput"
          value={subject}
          onChange={handleChange}
        />
        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="messageInput"
          rows="5"
          cols="50"
          value={message}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{error}</div>
        <input type="submit" value="Envoyer" />
      </form>
    </>
  );
}
