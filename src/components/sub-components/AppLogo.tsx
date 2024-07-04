import type { DetailedHTMLProps, HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export default function AppLogo({ className, ...props }: Props) {
    return (
        <div {...props}>
            <h2 className={`text-4xl font-redzone app-logo ${className}`}> Huso</h2>
            <p className="mt-2 text-sm font-redzone app-logo">
                Hustle, university, succeed, overpower.
            </p>
        </div>
    );
    return (
        <h2 className="font-redzone text-4xl bg-gradient-to-br from-app via-fuchsia-300/80 bg-clip-text text-transparent">
            Huso Web3
        </h2>
    );
}
