export function Card({ className = "", children, ...props }) {
    return (
        <div
            {...props}
            className={
                "rounded-2xl border bg-white shadow-md " + className
            }
        >
            {children}
        </div>
    );
}

export function CardHeader({ children }) {
    return <div className="px-4 pt-4">{children}</div>;
}

export function CardTitle({ children }) {
    return <h3 className="text-lg font-semibold">{children}</h3>;
}

export function CardContent({ children }) {
    return <div className="p-4">{children}</div>;
}
