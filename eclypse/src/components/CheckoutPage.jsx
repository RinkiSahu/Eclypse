import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';



export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveAddress = () => {
    console.log('Saving address:', formData);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  const handlePlaceOrder = () => {
    console.log('Placing order');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 lg:px-8 lg:py-6 border-b lg:border-none  bg-gray-200 lg:bg-white">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-4 lg:mr-0">
          <Link to="/">
          <img
            src="assets/images/eclypseIcon.png"
            className="w-8 h-8"
            alt="logo"
          />
        </Link>
          </div>
        </div>
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-gray-500 hover:text-black  border-white  pb-1">About Us</a>
          <a href="#" className="text-gray-500 hover:text-black border-white  pb-1">Wishlist</a>
          <a href="#" className="text-black font-medium border-b-2 border-black pb-1">Cart</a>
        </nav>

      </header>

      {/* Back Button and Title */}
      <main className='mx-auto container md:max-w-4xl'>
      <div className="px-4 lg:px-8 py-4">
        <div className="flex items-center">
          <ChevronLeft className="w-5 h-5 mr-2 cursor-pointer text-black" />
          <h1 className="text-lg lg:text-xl font-medium text-black">Shipping Address</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 lg:px-8 pb-8">
        {/* Desktop Layout */}
        <div className="w-full lg:flex lg:gap-8">
          {/* Left Side - Address Form */}
          <div className="flex-1 w-full">
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                <span className="font-medium text-black">Add New Address</span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Apt Number</label>
                    <input
                      type="text"
                      name="aptNumber"
                      value={formData.aptNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Zip</label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4 flex-col-reverse md:flex-row">
                  <button
                    onClick={handleCancel}
                    className="w-full md:w-1/3 py-2 px-4 border border-gray-300 rounded-md text-black hover:bg-gray-50 transition-colors"
                  >
                    cancel
                  </button>
                  <button
                    onClick={handleSaveAddress}
                    className="w-full md:w-2/3 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Save This Address
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="flex-1 w-full lg:max-w-sm mt-6 lg:mt-0">
            <div className="border bg-gray-50 rounded-lg p-6 border-gray-200">
              <p className="text-sm text-gray-600 mb-4">
                By placing your order, you agree to our company{' '}
                <span className="text-black font-medium">Privacy policy</span> and{' '}
                <span className="text-black font-medium">Conditions of use</span>.
              </p>

              <div className="mb-6">
                <h2 className="text-lg font-medium mb-4 text-black">Order Summary</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Items - Silhouette No. 1 – Vermilion</span>
                    <span className="text-black">7,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping and handling:</span>
                    <span className="text-black">200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Before tax:</span>
                    <span className="text-black">6,599</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax Collected:</span>
                    <span  className="text-black">1,400</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-lg font-medium">
                  <span className="text-black">Order Total:</span>
                  <span  className="text-black">8,199</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>

</div>
      </main>
    </div>


  );
}