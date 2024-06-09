const productTypes = [
  {
    name: "Desk and Office",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "./Shop",
  },
  {
    name: "Self-Improvement",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "./Shop",
  },
  {
    name: "Travel",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "./Shop",
  },
];

export default function ProductType() {
  return (
    <div className="w-8/12 mx-auto mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      {productTypes.map((productType) => (
        <div key={productType.name} className="relative group">
          <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img
              src={productType.imageSrc}
              alt={productType.imageAlt}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href={productType.href}>
              <span className="absolute inset-0" />
              {productType.name}
            </a>
          </h3>
        </div>
      ))}
    </div>
  );
}
