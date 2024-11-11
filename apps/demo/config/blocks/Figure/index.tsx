import React from "react";

import { ComponentConfig } from "@/core";
import { Section } from "../../components/Section";
import Image from "next/image";

export type FigureProps = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

export const Figure: ComponentConfig<FigureProps> = {
  fields: {
    src: { type: "text" },
    alt: { type: "text" },
    width: { type: "number" },
    height: { type: "number" },
  },
  defaultProps: {
    src: "https://via.placeholder.com/800x60",
    width: 800,
    height: 60,
    alt: "",
  },
  render: ({ src, width, height, alt }) => {
    return (
      <Section>
        <Image src={src} alt={alt || ""} width={width} height={height} />
      </Section>
    );
  },
};
