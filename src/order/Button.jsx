import React from 'react'

export default function Button({totalAmount}) {
    console.log(totalAmount)
  return (
    <button
            className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            Place Order (BDT {totalAmount})
        </button>
  )
}
