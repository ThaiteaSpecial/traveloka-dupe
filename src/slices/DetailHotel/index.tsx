import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DetailHotel`.
 */
export type DetailHotelProps = SliceComponentProps<Content.DetailHotelSlice>;

/**
 * Component for "DetailHotel" Slices.
 */
const DetailHotel: FC<DetailHotelProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for detail_hotel (variation: {slice.variation})
      Slices
    </section>
  );
};

export default DetailHotel;
