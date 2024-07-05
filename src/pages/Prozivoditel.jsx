// App.js
import React from "react";
import DataImg from "../../public/assets/data.svg";
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}

      <main className="container mx-auto py-6">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-1/4 pr-4">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Categories</h3>
              <ul>
                <li>
                  <input type="checkbox" className="mr-2" />
                  Category 1
                </li>
                <li>
                  <input type="checkbox" className="mr-2" />
                  Category 2
                </li>
                <li>
                  <input type="checkbox" className="mr-2" />
                  Category 3
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Countries</h3>
              <ul>
                <li>
                  <input type="checkbox" className="mr-2" />
                  Country 1
                </li>
                <li>
                  <input type="checkbox" className="mr-2" />
                  Country 2
                </li>
                <li>
                  <input type="checkbox" className="mr-2" />
                  Country 3
                </li>
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="w-3/4">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="bg-white p-4 shadow rounded">
                  <div className="text-center">
                    <img src={DataImg} alt="Product" className="mx-auto mb-2" />
                    <h3 className="font-semibold">Product {index + 1}</h3>
                    <p className="text-gray-600">Description</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
