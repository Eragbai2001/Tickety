import Button from "@/components/Button/page";
import Icon from "@/components/Icon/page";

const HelpAndCenter = ({}) => (
    <div className="relative mt-12 p-4 pt-11 rounded-xl bg-primary-500 text-center text-white">
        <div className="absolute left-1/2 -top-6 flex justify-center items-center w-12 h-12 -translate-x-1/2 rounded-full bg-primary-500 border-[0.25rem] border-white">
            <Icon className="size-6 fill-white" name="headphone" />
        </div>
        <div className="mb-1 text-h6">Help & Center</div>
        <div className="-mx-1 mb-4 text-body-sm">
            Having difficulty in Ticketing.<br></br>Please contact us for
            further inquiries
        </div>
        <Button className="w-full" isWhite isMedium as="link" href="/">
            Got to help center
        </Button>
    </div>
);

export default HelpAndCenter;
