import Icon from "@/components/Icon";

type SearchProps = {
    className?: string;
    classInput?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
};

const Search = ({
    className,
    classInput,
    value,
    onChange,
    placeholder,
}: SearchProps) => {
    return (
        <div className={`relative ${className || ""}`}>
            <button className="group absolute top-1/2 left-3 -translate-y-1/2 text-0">
                <Icon
                    className="!size-4 fill-gray-400 transition-colors group-hover:fill-gray-900"
                    name="search"
                />
            </button>
            <input
                className={`w-full h-10 pl-9 pr-3 border border-gray-100 shadow-xs rounded-[0.625rem] text-body-md font-medium text-gray-900 transition-colors placeholder:text-gray-500 outline-none focus:border-primary-500 focus:bg-primary-50 ${
                    classInput || ""
                }`}
                type="text"
                name="search"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete="off"
                required
            />
        </div>
    );
};

export default Search;
