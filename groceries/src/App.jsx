import React from 'react';
import ProductsList from "./components/ProductsList";

function App() {
    return (
        <div>
            <h1>Abarrotes Papercut</h1>
            {/* Agrega la imagen debajo del título */}
            <img src="/groceries/public/hybrid.png" style={{ width: '100%', height: 'auto' }} />
            <ProductsList />
        </div>
    );
}

export default App;
