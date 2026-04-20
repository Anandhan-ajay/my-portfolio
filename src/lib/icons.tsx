// Brand icons (lucide-react no longer ships brand glyphs)
import { Mail, Send, Download } from "lucide-react";
import type { SVGProps } from "react";

export { Mail, Send, Download };

type Props = SVGProps<SVGSVGElement> & { size?: number | string };

const base = (size: number | string = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
});

export const Github = ({ size = 24, ...rest }: Props) => (
  <svg {...base(size)} {...rest}>
    <path d="M12 .5C5.73.5.99 5.24.99 11.51c0 4.85 3.14 8.96 7.5 10.41.55.1.75-.24.75-.53v-1.86c-3.05.66-3.69-1.47-3.69-1.47-.5-1.27-1.22-1.61-1.22-1.61-1-.68.07-.66.07-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.69-1.48-2.43-.28-4.99-1.22-4.99-5.42 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.39.11-2.9 0 0 .92-.3 3.02 1.13.88-.25 1.81-.37 2.74-.37s1.86.12 2.74.37c2.1-1.43 3.02-1.13 3.02-1.13.6 1.51.22 2.62.11 2.9.7.77 1.13 1.75 1.13 2.95 0 4.21-2.57 5.14-5.01 5.41.39.34.74 1 .74 2.02v3c0 .29.2.64.76.53 4.36-1.45 7.49-5.56 7.49-10.41C23.01 5.24 18.27.5 12 .5z" />
  </svg>
);

export const Linkedin = ({ size = 24, ...rest }: Props) => (
  <svg {...base(size)} {...rest}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.06 2.06 0 11.01-4.13 2.06 2.06 0 01-.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export const Twitter = ({ size = 24, ...rest }: Props) => (
  <svg {...base(size)} {...rest}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
