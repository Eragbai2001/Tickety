import Icon from "@/components/Icon";

type PercentageProps = {
    className?: string;
    value: number;
    isSimple?: boolean;
};

const Percentage = ({ className, value, isSimple }: PercentageProps) => (
    <div
        className={`inline-flex items-center gap-0.5 h-5 border rounded-sm ${
            value > 0
                ? "border-success-100 bg-success-0 text-success-100"
                : "border-error-100 bg-error-0 text-error-100"
        } ${
            isSimple
                ? "!border-transparent !bg-transparent text-body-md font-semibold"
                : "pl-0.75 pr-1.25 text-body-sm font-medium"
        }  ${className || ""}`}
    >
        <Icon
            className={`!size-3.5 ${
                value > 0 ? "fill-success-100" : "fill-error-100 rotate-180"
            }`}
            name="arrow-percentage"
        />
        {value > 0 ? `${value}` : `${Math.abs(value)}`}%
    </div>
);

export default Percentage;
