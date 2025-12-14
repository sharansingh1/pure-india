// Utility function to generate breadcrumb structured data
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

// Predefined breadcrumbs for each page
export const breadcrumbs = {
  home: [
    { name: "Home", url: "https://pureindiacuisine.com" }
  ],
  buffet: [
    { name: "Home", url: "https://pureindiacuisine.com" },
    { name: "Buffet", url: "https://pureindiacuisine.com/buffet" }
  ],
  menu: [
    { name: "Home", url: "https://pureindiacuisine.com" },
    { name: "Menu", url: "https://pureindiacuisine.com/menu" }
  ],
  banquet: [
    { name: "Home", url: "https://pureindiacuisine.com" },
    { name: "Banquet", url: "https://pureindiacuisine.com/banquet" }
  ],
  catering: [
    { name: "Home", url: "https://pureindiacuisine.com" },
    { name: "Catering", url: "https://pureindiacuisine.com/catering" }
  ],
  about: [
    { name: "Home", url: "https://pureindiacuisine.com" },
    { name: "About", url: "https://pureindiacuisine.com/about" }
  ],
  contact: [
    { name: "Home", url: "https://pureindiacuisine.com" },
    { name: "Contact", url: "https://pureindiacuisine.com/contact" }
  ],
  gallery: [
    { name: "Home", url: "https://pureindiacuisine.com" },
    { name: "Gallery", url: "https://pureindiacuisine.com/gallery" }
  ]
};


