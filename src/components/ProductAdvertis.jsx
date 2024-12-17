import React from 'react'

const ProductAdvertis = () => {
    return (
        <>

            <div className="relative bg-dark-light rounded-lg overflow-hidden shadow-lg mt-12 mb-4">
                <div className="relative h-64">
                    <img
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3BwaW5nJTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Product Ad"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="relative bg-dark-light rounded-lg overflow-hidden shadow-lg mt-12">
                <div className="relative h-64">
                    <img
                        src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Product Ad"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </>
    )
}

export default ProductAdvertis