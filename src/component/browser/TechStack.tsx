import c_sharp_svg from "../../assets/c_sharp.svg";
import express_svg from "../../assets/express.svg";
import node_svg from "../../assets/node.svg";
import react_svg from "../../assets/react.svg";
import socketio_svg from "../../assets/socketio.svg";
import tailwind_svg from "../../assets/tailwind.svg";
import typescript_svg from "../../assets/typescript.svg";
import unity_svg from "../../assets/unity.svg";

export type TechStackLogo = {
  svg: string;
  alt: string;
};

export const cSharpLogo: TechStackLogo = {
  svg: c_sharp_svg,
  alt: "C Sharp",
};

export const expressLogo: TechStackLogo = {
  svg: express_svg,
  alt: "Express",
};
export const nodeLogo: TechStackLogo = {
  svg: node_svg,
  alt: "Node",
};
export const reactLogo: TechStackLogo = {
  svg: react_svg,
  alt: "React",
};
export const socketioLogo: TechStackLogo = {
  svg: socketio_svg,
  alt: "socket.io",
};
export const tailwindLogo: TechStackLogo = {
  svg: tailwind_svg,
  alt: "TailwindCSS",
};
export const typescriptLogo: TechStackLogo = {
  svg: typescript_svg,
  alt: "TypeScript",
};
export const unityLogo: TechStackLogo = {
  svg: unity_svg,
  alt: "Unity",
};
