import { useState } from "react";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";

function App() {
  const [brightness, setBrightness] = useState({
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%"
  });

  const [contrast, setContrast] = useState({
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%"
  });

  const [saturate, setSaturate] = useState({
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%"
  });

  const [grayscale, setGrayscale] = useState({
    property: 'grayscale',
    value: 30,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%"
  });

  const [hueRotate, setHueRotate] = useState({
    property: 'hue-rotate',
    value: 100,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg"
  });

  const [blur, setBlur] = useState({
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px"
  });

  const [sepia, setSepia] = useState({
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 1,
    },
    unit: ""
  });

  const [background, setBackground] = useState("https://www.bing.com/th?id=OHR.TadamiWinter_ROW4137202525_UHD.jpg&qlt=100");


  return (
    <>
      <Announcement />
      <Navbar setBackground={setBackground} />
      <div className="wrapper">
        <div className="imge-wrapper">
          <div className="image">
            <img width="1000" src={background} alt="" style={{
              filter: `${brightness.property}(${brightness.value}${brightness.unit})
              ${grayscale.property}(${grayscale.value}${grayscale.unit})
              ${contrast.property}(${contrast.value}${contrast.unit})
              ${saturate.property}(${saturate.value}${saturate.unit})
              ${sepia.property}(${sepia.value})
              ${hueRotate.property}(${hueRotate.value}${hueRotate.unit})
              ${blur.property}(${blur.value}${blur.unit})`
            }} />
          </div>
        </div>
        <div className="options">
          <div className="mode">
            <span>Brightness</span>
            <input type="range"
              min={brightness.range.min}
              max={brightness.range.max}
              onChange={(e) => setBrightness({ ...brightness, value: Number(e.target.value) })} />
            <span>Grayscale</span>
            <input type="range"
              min={grayscale.range.min}
              max={grayscale.range.max}
              onChange={(e) => setGrayscale({ ...grayscale, value: Number(e.target.value) })} />
          </div>
          <div className="mode">
            <span>Contrast</span>
            <input type="range"
              min={contrast.range.min}
              max={contrast.range.max}
              onChange={(e) => setContrast({ ...contrast, value: Number(e.target.value) })} />
            <span>Saturate</span>
            <input type="range"
              min={saturate.range.min}
              max={saturate.range.max}
              onChange={(e) => setSaturate({ ...saturate, value: Number(e.target.value) })} />
          </div>
          <div className="mode">
            <span>HueRotate</span>
            <input type="range"
              min={hueRotate.range.min}
              max={hueRotate.range.max}
              onChange={(e) => setHueRotate({ ...hueRotate, value: Number(e.target.value) })} />
            <span>Sepia</span>
            <input type="range"
              min={sepia.range.min}
              max={sepia.range.max}
              onChange={(e) => setSepia({ ...sepia, value: Number(e.target.value) })} />
          </div>
          <div className="mode blur">
            <span>Blur({blur.value}{blur.unit })</span>
            <input type="range"
              min={blur.range.min}
              max={blur.range.max}
              onChange={(e) => setBlur({ ...blur, value: Number(e.target.value) })} />
          </div>
        </div>
      </div >
    </>
  )
}

export default App;
