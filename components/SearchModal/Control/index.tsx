import Icon from "@/components/Icon/";

const Control = ({}) => (
    <div className="flex justify-end items-center gap-5 p-4 bg-gray-25 rounded-b-2xl max-lg:hidden">
        <div className="flex items-center gap-2">
            <div className="flex gap-1">
                <div className="flex justify-center items-center size-5.5 rounded-md bg-white border border-gray-50">
                    <Icon className="!size-3.5 fill-gray-500" name="arrow" />
                </div>
                <div className="flex justify-center items-center size-5.5 rounded-md bg-white border border-gray-50">
                    <Icon
                        className="!size-3.5 fill-gray-500 rotate-180"
                        name="arrow"
                    />
                </div>
            </div>
            <div className="text-body-sm font-medium text-gray-500">
                Navigate
            </div>
        </div>
        <div className="flex items-center gap-2">
            <div className="flex justify-center items-center h-5.5 px-1.75 rounded-md bg-white border border-gray-50 text-[0.625rem] font-medium text-gray-500">
                Enter
            </div>
            <div className="text-body-sm font-medium text-gray-500">Select</div>
        </div>
        <div className="flex items-center gap-2">
            <div className="flex justify-center items-center h-5.5 px-1.75 rounded-md bg-white border border-gray-50 text-[0.625rem] font-medium text-gray-500">
                Esc
            </div>
            <div className="text-body-sm font-medium text-gray-500">Quit</div>
        </div>
    </div>
);

export default Control;
