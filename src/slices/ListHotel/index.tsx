import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SortBy`.
 */
export type SortByProps = SliceComponentProps<Content.SortBySlice>;

/**
 * Component for "SortBy" Slices.
 */
const SortBy: FC<SortByProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sort_by (variation: {slice.variation}) Slices
    </section>
  );
};

export default SortBy;
