import s from "./Icon.module.css";
import SvgSprite from "../SvgSprite/SvgSprite";

const Icon = ({ name, width = 24, height = 24 }) => {
  return (
    <svg width={width} height={height} className={s.icon}>
      <use href={`#${name}`} />
    </svg>
  );
};
export default Icon;
