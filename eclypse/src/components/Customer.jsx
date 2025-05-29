import { useState } from "react";
import { CustomersNames } from "../assets/data";
import { ChevronLeft } from "lucide-react";

function Customer() {
  const [selectedItem, setSelectedItem] = useState(CustomersNames[0]);

  return (
    <>
    <h2 className="w-full ps-8 labels tracking-widest mt-100 "> OUR CUSTOMERS</h2>
    <div className="py-6 px-4 md:px-12 flex flex-row justify-between items-center">

      {/* Left Section - Dynamic Content */}
      <div className="w-3/5 text-left">
        <p className="mt-2 text-[12pt] md:text-[20pt] bgImg tracking-wide">{selectedItem.description}</p>
        <p className="mt-5 customerName text-[10pt] tracking-wide">{selectedItem.customerName}</p>
        <p className="customerPlace text-[8pt] tracking-wide">{selectedItem.place}</p>
      </div>

      {/* Right Section - Clickable Images */}
      <div className="w-1/14 flex space-x-4 mt-4 md:mt-0  flex-col gap-5 ">

        {/* {CustomersNames.map((item) => (


          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            className={`w-8 h-7 md:w-12 md:h-12 cursor-pointer transition-transform duration-300 opacity-40 ${
              selectedItem.id === item.id ? "scale-150 opacity-100" : ""
            }`}
            onClick={() => setSelectedItem(item)}
          />
        ))} */}

{CustomersNames.map((item) => (
        <div key={item.id} className="relative flex items-center gap-2">
          {/* Chevron Left (Only appears if this item is selected) */}
          {selectedItem?.id === item.id && (
            <ChevronLeft className="w-6 h-6 text-gray-400 absolute left-[-36px]" />
          )}

          {/* Clickable Image */}
          <img
            src={item.image}
            alt={item.title}
            className={`w-8 h-7 md:w-12 md:h-12 cursor-pointer transition-transform duration-300 opacity-40 ${
              selectedItem?.id === item.id ? "scale-150 opacity-100" : ""
            }`}
            onClick={() => setSelectedItem(item)}
          />
        </div>
      ))}

      </div>
    </div>
    </>
  );
}

export default Customer;
