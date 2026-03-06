export const nav = {
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      children: [
        { label: "LLC Services", href: "/llc-services" },
        { label: "TABC Licensing", href: "/tabc-licensing" },
        { label: "Additional Services", href: "/additional-services" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],
};