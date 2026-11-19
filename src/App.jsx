import React, { useState } from 'react';
import { X } from 'lucide-react';
import { categories, products } from './data';

function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER LUXURY */}
      <header className="w-full py-10 border-b border-gray-100 flex flex-col items-center justify-center bg-white sticky top-0 z-10">
        <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-luxury-dark uppercase">
          Sumofisa
        </h1>
        <p className="mt-2 text-xs uppercase tracking-widest text-luxury-gray">
          Selecciones Exclusivas de Navidad
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* SISTEMA DE FILTROS MINIMALISTA */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm tracking-wider uppercase transition-all duration-300 pb-1 border-b-2 
                ${activeCategory === cat 
                  ? 'border-luxury-dark text-luxury-dark font-medium' 
                  : 'border-transparent text-luxury-gray hover:text-luxury-dark'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* LISTADO DE CATÁLOGO - GRID (SIN PRECIOS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer flex flex-col items-center text-center"
              onClick={() => setSelectedProduct(product)}
            >
              {/* PLACEHOLDER DE FOTOGRAFÍA (ESPACIO EN BLANCO Y GRIS SUTIL) */}
              <div className="w-full aspect-[4/5] bg-luxury-light flex items-center justify-center overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02]">
                <span className="text-xs text-luxury-gray tracking-widest uppercase border border-luxury-gray/30 p-4">
                  [Insertar Foto Aquí]
                </span>
              </div>
              <h3 className="text-lg font-light tracking-wide text-luxury-dark group-hover:text-luxury-gray transition-colors">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full py-12 border-t border-gray-100 mt-20 flex justify-center">
        <p className="text-xs tracking-widest text-luxury-gray uppercase">
          © {new Date().getFullYear()} Sumofisa. Excelencia Corporativa.
        </p>
      </footer>

      {/* MODAL / FICHA DE PRODUCTO */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          <div 
            className="absolute inset-0 bg-white/80 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="modal-enter relative w-full max-w-4xl bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row z-10">
            
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-luxury-gray hover:text-luxury-dark transition-colors z-20"
            >
              <X size={24} strokeWidth={1} />
            </button>

            {/* FOTO MODAL */}
            <div className="w-full md:w-1/2 bg-luxury-light min-h-[300px] md:min-h-[500px] flex items-center justify-center">
              <span className="text-sm text-luxury-gray tracking-widest uppercase border border-luxury-gray/30 p-6">
                [Insertar Foto Aquí]
              </span>
            </div>

            {/* CONTENIDO MODAL */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-xs tracking-widest uppercase text-luxury-gray mb-4 block">
                {selectedProduct.category}
              </span>
              <h2 className="text-3xl font-light text-luxury-dark mb-6">
                {selectedProduct.name}
              </h2>
              
              <p className="text-luxury-gray font-light leading-relaxed mb-8">
                {selectedProduct.description}
              </p>

              <div className="mb-8 p-4 bg-luxury-light/50 border-l-2 border-luxury-champagne">
                <h4 className="text-xs font-semibold tracking-widest uppercase text-luxury-dark mb-2">Contenido Exclusivo</h4>
                <p className="text-sm text-luxury-dark/80 italic">
                  {selectedProduct.content}
                </p>
              </div>

              <div className="flex items-end gap-4 mb-10">
                <span className="text-3xl font-light text-luxury-dark">
                  {selectedProduct.price}€
                </span>
                <span className="text-xs text-luxury-gray mb-1 uppercase tracking-wider">
                  / unidad
                </span>
              </div>

              {/* CTA PERSUASIVA Y EXCLUSIVA */}
              <a 
                href="tel:+34943100111"
                className="w-full bg-luxury-dark text-white py-4 px-6 text-center text-sm tracking-widest uppercase hover:bg-black transition-colors"
              >
                Para adquirir esta cesta de forma personalizada, llame al 943 100 111
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;