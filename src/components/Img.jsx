import man from "./assets/man.png";

function Img() {

    const styles = `
.image-container {
  position: relative;
  display: inline-block;
}

.masked-image {
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
}
`
  return (
    <div className="image-container">
      <img 
        src={man}
        alt="example" 
        className="masked-image"
      />
    </div>
  );
}

export default Img;
