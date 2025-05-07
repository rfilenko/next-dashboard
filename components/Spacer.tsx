const Spacer = ({ text }: { text?: string }) => {
    if (text) {
        return <div data-name="Spacer" className="flex gap-4 w-full items-center justify-center">
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-neutral-300 my-4 h-[1px] w-1/3" />
            <span>{text}</span>
            <div className="bg-gradient-to-r from-neutral-300 via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-1/3" />
        </div>
    } else {
        return (
            <div data-name="Spacer" className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full"></div>
        )
    }
}

export default Spacer