import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { productData } from "../assets/data";
export default function Product() {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [openSection, setOpenSection] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);


  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-6 md:px-8 mt-60 productheading">
        <h1 className="text-xl font-light tracking-wide">{productData.name}</h1>
      </header>

      {/* Main Product Section */}
      <main className="px-4 md:px-8 mt-100">
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 md:items-start">
            {/* Left Side - Main Product Image */}
            <div className="flex flex-col h-full max-h-120">
              <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Selected Product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="flex flex-col h-full bg-gray-900 rounded-lg p-6 max-h-120">
              <div className="flex flex-col justify-between h-full max-h-120">
                {/* Product Description */}
                <p className="text-sm text-gray-400 mb-6 text-[8pt]">
                  {productData.description}
                </p>
                {/* Thumbnails (Now Next to Product Content) */}
                <div className="flex gap-3 mb-6">
                  {productData.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index}`}
                      className={`w-16 h-20 rounded cursor-pointer transition-transform duration-300 ${
                        selectedImage === image
                          ? "scale-125 border border-white"
                          : ""
                      }`}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl font-light">
                    {productData.price}{" "}
                    <span className="text-[8pt]"> {productData.taxInfo}</span>
                  </span>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <p className="text-sm mb-3">
                    Please select a size:{" "}
                    <span className="text-red-400 cursor-pointer hover:underline">
                      Size chart
                    </span>
                  </p>
                  <div className="flex gap-2">
                    {productData.sizeChart.map((size) => (
                      <button
                        key={size}
                        className={`w-10 cursor-pointer h-10 border border-gray-600 rounded text-sm hover:border-white hover:bg-gray-800 transition-all duration-200 ${selectedSize === size ? "border-white bg-gray-800" : "border-gray-600"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-4 ">
                  <button className="border border-gray-600 text-white py-3 px-6 rounded hover:border-white hover:bg-gray-800 transition-all duration-200 w-[70%] cursor-pointer">
                    Add to Cart
                  </button>
                  <button className="bg-white text-black py-3 px-6 rounded hover:bg-gray-200 transition-all duration-200 font-medium w-[100%] cursor-pointer">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion Sections */}
        <section className="container mt-100">
          <div className="border-t border-gray-800">
            {productData.accordionSections?.map((section) => (
              <div key={section.id} className="border-b border-gray-800">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between py-6 text-left hover:text-gray-300 transition-colors duration-200"
                >
                  <span className="text-lg font-light">{section.title}</span>
                  {openSection === section.id ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSection === section.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-6">
                    <div className="border-l-2 border-gray-700 pl-6 space-y-2">
                      {section.content.map((item, index) => (
                        <p key={index} className="text-sm text-gray-400">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
