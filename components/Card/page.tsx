import Image from "@/components/Image/page";
import Tooltip from "@/components/Tooltip/page";
import Percentage from "@/components/Percentage";

type Props = {
  className?: string;
  item: {
    title: string;
    value: string;
    percentage: number;
    image: string;
    tooltip: string;
    status?: string;
  };
};

// Define color variants
const statusStyles = {
  open: {
    border: "border-green-200",
    bg: "bg-green-50",
    text: "text-green-600",
  },
  in_progress: {
    border: "border-amber-200",
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
  closed: {
    border: "border-gray-200",
    bg: "bg-gray-50",
    text: "text-gray-600",
  },
};

const Card = ({ className, item }: Props) => {
  const normalizeStatus = (s?: string): "open" | "in_progress" | "closed" => {
    const t = (s || "").toLowerCase().replace(/\s+/g, "_");
    if (t.includes("open") || t.includes("active")) return "open";
    if (t.includes("in_progress") || t.includes("in-progress") || t.includes("progress")) return "in_progress";
    if (t.includes("sold") || t.includes("closed") || t.includes("resolved")) return "closed";
    return "closed";
  };

  const style = statusStyles[normalizeStatus(item.status)]; 

  return (
    <div
      className={`p-4 rounded-2xl border ${style.border} ${style.bg} ${className || ""}`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-center items-center size-10 border border-gray-100 rounded-[0.625rem] bg-white">
          <Image
            className="w-5 opacity-100"
            src={item.image}
            width={40}
            height={40}
            alt=""
          />
        </div>
        <Tooltip
          id={`card-tooltip-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
          className="ml-1.5"
          content={item.tooltip}
          place="top"
        />
      </div>

      <div className="mb-1 text-gray-500">{item.title}</div>

      <div className="flex justify-between items-center">
        <div className={`text-body-xl font-semibold ${style.text}`}>
          {item.value}
        </div>
        <Percentage value={item.percentage} />
      </div>
    </div>
  );
};

export default Card;
