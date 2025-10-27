import Checkbox from "@/components/Checkbox";



type RowProps = {
    className?: string;
    selectedRows?: boolean;
    onRowSelect?: (enabled: boolean) => void;
    children: React.ReactNode;
    index?: number;
};

const Row = ({
    className,
    selectedRows,
    onRowSelect,
    children,
    index,
}: RowProps) => {
    return (
        <tr
            className={`[&_td]:h-16 [&_td]:py-3 [&_td]:border-b [&_td]:border-gray-100 ${
                className || ""
            }`}
        >
            {onRowSelect && (
                <td className="">
                    <Checkbox
                        className="-mt-0.25"
                        checked={selectedRows || false}
                        onChange={onRowSelect}
                    />
                </td>
            )}
            {index !== undefined && (
                <td className="w-13 pl-2.5 max-2xl:w-10">{index + 1}</td>
            )}
            {children}
        </tr>
    );
};

export default Row;
