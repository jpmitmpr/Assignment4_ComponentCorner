import "./Footer.css";

function Footer({ company, email, phone }) {
  return (
    <footer className="footer">
      <p>{company}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </footer>
  );
}

export default Footer;
