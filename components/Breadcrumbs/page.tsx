type Props = {
    className?: string;
    items: Array<string>;
    children: React.ReactNode;
};

const Breadcrumbs = ({ className, items, children }: Props) => (
    <div
        className={`flex justify-between items-center mb-6 max-md:block ${
            className || ""
        }`}
    >
        <ul className="flex items-center max-md:hidden">
            {items.map((item, index) => (
                <li
                    className="font-medium text-gray-400 not-last:mr-2 not-last:after:content-['/'] not-last:after:ml-2 last:text-gray-900"
                    key={index}
                >
                    {item}
                </li>
            ))}
        </ul>
        {children}
    </div>
);

export default Breadcrumbs;
