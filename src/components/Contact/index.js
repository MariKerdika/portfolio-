import Loader from "react-loaders";
import "./index.scss";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            elementum lectus vel bibendum dictum. Curabitur tincidunt mi nec
            velit rutrum, ut ultricies nulla vulputate. Vivamus lectus tortor,
            vulputate sed consectetur vel, hendrerit in sem.
          </p>
          <p>
            In hac habitasse platea dictumst. Quisque sed odio id nisl lobortis
            pharetra elementum non neque. Fusce tempus fermentum sem, ut tempus
            libero mattis eget.
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button2" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={3}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[41.6934591, 44.8014495]}>
              <Popup>Come for a cup of coffee</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
