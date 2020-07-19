import { bgColors } from "../constants";

const getBgColor = () => bgColors[Math.floor(Math.random() * bgColors.length)];

export { getBgColor };
