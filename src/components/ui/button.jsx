/* Basic shadcn style button compatible with CRA */

export function Button({ className = "", children, ...props }) {
    return (
        <button
            {...props}
            className={
                "px-4 py-2 rounded-xl border bg-black text-white hover:opacity-90 " +
                className
            }
        >
            {children}
        </button>
    );
}
