import React from 'react'

const AvatarCreateModal = ({ isModalOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-opacity duration-300 ${isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
    >
      <div className="bg-teal-800 p-6 rounded-lg shadow-lg w-72 sm:w-80 text-gray-200 transform transition duration-300 font-[Poppins]">
        <h2 className="text-lg font-bold mb-4 text-gray-300">Create New Avatar</h2>
        <form>
          {/* Name Input */}
          <label htmlFor="name" className="block mb-2 text-gray-300">
            Name:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="font-[Poppins] w-full mb-3 p-2 border border-teal-600 rounded bg-teal-700 placeholder-gray-400 text-gray-200 focus:outline-none focus:border-pink-500 transition duration-300"
          />

          {/* Image URL Input */}
          <label htmlFor="image-url" className="block mb-2 text-gray-300">
            Image URL:
          </label>
          <input
            id="image-url"
            type="text"
            placeholder="Image URL"
            className="w-full mb-3 p-2 border border-teal-600 rounded bg-teal-700 placeholder-gray-400 text-gray-200 focus:outline-none focus:border-pink-500 transition duration-300"
          />

          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-400 text-white px-4 py-1 rounded transition duration-300"
            >
              Create
            </button>

            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-1 rounded transition duration-300"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>


  )
}

export default AvatarCreateModal