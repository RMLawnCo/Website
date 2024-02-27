export default function Contact() {
  return (
    <div>
      <h1 className="centerVertical">
        <strong>Contact us:</strong>
      </h1>
      <p className="centerVertical">
        {/* <span>Phone: <a href="tel:6186800325">(618) 680 0325</a></span> */}
        <span>
          Email:{" "}
          <a href="mailto:rmlawncontact@gmail.com?subject=Title&body=Message">
            rmlawncontact@gmail.com
          </a>
        </span>
      </p>
    </div>
  );
}
