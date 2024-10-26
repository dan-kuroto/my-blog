import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5 }}>
      <button onClick={() => setOpen(!open)}>Toggle</button>
      <div
        style={{
          transition: "transform 0.3s ease",
          overflow: "hidden",
          transform: open ? "scaleY(1)" : "scaleY(0)",
          transformOrigin: "top",
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
