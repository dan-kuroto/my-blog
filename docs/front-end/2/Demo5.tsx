import { useEffect, useRef, useState } from "react";

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const open = useRef(true);
  const [height, setHeight] = useState<number>();

  const handleToggle = () => {
    if (open.current) {
      setHeight(0);
    } else if (wrapperRef.current) {
      // 设置外部容器高度为内容高度
      const rect = wrapperRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
    open.current = !open.current;
  };

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }
    // 初始化时获取一下内容高度，否则第一次点击收起的时候没有动画效果（如果愿意初始为收起状态，设置高度初值为0也可）
    const rect = wrapperRef.current.getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  return (
    <div style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5 }}>
      <button onClick={handleToggle}>Toggle</button>
      <div
        style={{
          transition: "height 0.3s ease",
          overflow: "hidden",
          height: height,
        }}
      >
        <div ref={wrapperRef}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          repellendus sint iste at possimus quibusdam iusto accusantium et,
          itaque explicabo laboriosam neque minima deleniti labore expedita
          magnam sequi dolorum, debitis modi nulla. Aliquid ipsum laudantium
          consectetur labore? Ex, fuga inventore quas vitae aliquam aliquid modi
          aspernatur quis est nesciunt molestiae.
        </div>
      </div>
    </div>
  );
};
