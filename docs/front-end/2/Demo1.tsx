import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5 }}>
      <button onClick={() => setOpen(!open)}>Toggle</button>
      <div
        style={{
          interpolateSize: "allow-keywords",
          transition: "height 0.3s ease",
          overflow: "hidden",
          height: open ? "auto" : 0,
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus
        sint iste at possimus quibusdam iusto accusantium et, itaque explicabo
        laboriosam neque minima deleniti labore expedita magnam sequi dolorum,
        debitis modi nulla. Aliquid ipsum laudantium consectetur labore? Ex,
        fuga inventore quas vitae aliquam aliquid modi aspernatur quis est
        nesciunt molestiae.
      </div>
    </div>
  );
};
