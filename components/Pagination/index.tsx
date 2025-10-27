import Button from "@/components/Button/page";

const Pagination = ({}) => (
    <div className="flex gap-2">
        <Button
            className="shadow-none max-md:[&_svg]:fill-gray-900"
            icon="chevron"
            isSecondary
            isSmall
            isSquare
        />
        <div className="flex border border-gray-100 rounded-lg overflow-hidden max-md:hidden pb-0">
            {["1", "2", "3", "...", "5"].map((number, index) => (
                <button
                    className={`size-7.5 text-body-sm font-medium not-last:border-r not-last:border-gray-100 transition-colors hover:bg-gray-25 ${
                        index === 2 ? "bg-primary-500 text-white" : ""
                    }`}
                    key={index}
                >
                    {number}
                </button>
            ))}
        </div>
        <div className="hidden justify-center items-center min-w-14 px-3 border border-gray-100 rounded-lg text-body-sm font-medium text-gray-500 max-md:flex">
            <span className="text-gray-900">2</span>/12
        </div>
        <Button
            className="rotate-180 shadow-none max-md:[&_svg]:fill-gray-900"
            icon="chevron"
            isSecondary
            isSmall
            isSquare
        />
    </div>
);

export default Pagination;
