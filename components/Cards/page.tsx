import Card from "@/components/Card/page";

type Props = {
  className?: string;
  isColumn?: boolean; // ✅ include isColumn
  items: { // ✅ plural - array of cards
    title: string;
    value: string;
    percentage: number;
    image: string;
    tooltip: string;
    status?: string; // optional status (accept broader strings, normalized by Card)
  }[];
};

const Cards = ({ className, isColumn, items }: Props) => (
  <div
    className={`flex gap-6 mt-6 max-md:flex-col max-md:gap-4 ${
      isColumn ? "flex-col max-md:gap-4" : ""
    } ${className || ""} ${
      items.length > 3
        ? "max-lg:flex-wrap max-lg:gap-0 max-lg:-mt-6 max-lg:-mx-3 max-md:flex-col max-md:gap-0 max-md:-mt-4 max-md:mx-0"
        : ""
    }`}
  >
    {items.map((stat, index) => (
      <Card
        key={index}
        className={`flex-1 ${
          items.length > 3
            ? "max-lg:w-[calc(50%-1.5rem)] max-lg:flex-auto max-lg:mt-6 max-lg:mx-3 max-md:w-full max-md:mt-4 max-md:mx-0"
            : ""
        }`}
        item={stat}
      />
    ))}
  </div>
);

export default Cards;
