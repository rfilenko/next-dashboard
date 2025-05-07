const FormWrap = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-gray-200 dark:bg-black" data-name="FormWrap">{children}</div>
    )
}

export default FormWrap