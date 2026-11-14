// src/config/siteConfig.js
// Centralized site metadata and editable business configuration for Petra Stream
// Note: All contact fields use clear editable placeholders as final details are provided.

export const siteConfig = {
  companyName: "Petra Stream",
  legalName: "Petrastream Contracting LLC",
  tagline: "Industrial Contracting & Specialized Mechanical Solutions",
  businessType: "Mechanical Services Provider & Mechanical Products Provider",
  industry: "Oil & Gas, Energy, Petrochemical",
  location: "UAE",
  country: "United Arab Emirates",
  businessModel: "B2B",

  // Clear, non-fictional editable contact placeholders
  contact: {
    addressPlaceholder: "Abu Dhabi / Dubai, United Arab Emirates [Official Address Placeholder]",
    emailPlaceholder: "info@petrastream.ae",
    phonePlaceholder: "+971 [Phone Number Placeholder]",
    workingHours: "Monday – Friday: 08:00 – 17:00 (GST)",
    responseCommitment: "Technical responses within 24 business hours"
  },

  // Primary navigation links per official blueprint
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Products", href: "/products", hasDropdown: true },
    { label: "Industries We Serve", href: "/industries", hasDropdown: true },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Brochure", href: "#brochure", isDownload: true }
  ],

  // Brand Color Palette tokens for reference
  palette: {
    navy: "#142B46",
    cream: "#FAF8F5",
    orange: "#E98235",
    white: "#FFFFFF",
    darkSlate: "#263746"
  }
};

export default siteConfig;

