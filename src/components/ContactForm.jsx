import React from "react";
import ContactMedias from "./ContactMedias";

function PairLabelInput({ name, type, htmlFor, value, onChange }) {
  return (
    <>
      <label htmlFor={htmlFor}></label>
      <input
        type={type}
        id={htmlFor}
        name={`${name}Input`}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

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
      <ContactMedias />
      <form className="contact-form" onSubmit={handleSubmit}>
        <PairLabelInput
          name={"name"}
          value={name}
          type={"text"}
          htmlFor={"name"}
          onChange={handleChange}
        />
        <PairLabelInput
          name={"email"}
          value={email}
          type={"text"}
          htmlFor={"email"}
          onChange={handleChange}
        />
        <PairLabelInput
          name={"subject"}
          value={subject}
          type={"text"}
          htmlFor={"subject"}
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
        <input id="submit" type="submit" value="Envoyer" />
      </form>
    </>
  );
}
