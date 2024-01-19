import "./index.scss";
import Loader from "react-loaders";

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            elementum lectus vel bibendum dictum. Curabitur tincidunt mi nec
            velit rutrum, ut ultricies nulla vulputate. Vivamus lectus tortor,
            vulputate sed consectetur vel, hendrerit in sem. In hac habitasse
            platea dictumst. Quisque sed odio id nisl lobortis pharetra
            elementum non neque. Fusce tempus fermentum sem, ut tempus libero
            mattis eget.
          </p>
          <p>
            Suspendisse vitae magna eu neque egestas semper. Phasellus volutpat
            dapibus enim, ac euismod est mollis non. Etiam eleifend lorem ac
            sapien viverra, vestibulum pellentesque nulla tristique. Ut laoreet
            tellus est, non congue erat facilisis non. Sed ullamcorper non
            libero nec suscipit. Phasellus aliquet ultrices magna, ac rutrum
            augue luctus semper. Cras dictum, nisi ultrices fermentum auctor,
            arcu neque tempus dui, quis porta velit orci vitae orci. Sed at
            sollicitudin ex, ac placerat diam. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Nulla
            semper volutpat urna, sed imperdiet sapien sollicitudin vitae. In
            nec lacus mi. Nulla facilisi. Suspendisse eget nulla nec orci luctus
            convallis.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
