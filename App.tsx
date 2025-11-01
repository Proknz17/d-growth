
import React, { useState, useMemo } from 'react';
import { Tab, Product, CartItem, HealthArticle } from './types';
import { PRODUCTS, HEALTH_ARTICLES } from './constants';
import { Logo, HomeIcon, HealthIcon, ProfileIcon, SearchIcon, ChevronLeftIcon, TrashIcon, PlusIcon, MinusIcon } from './components/icons';
import ProductCard from './components/ProductCard';
import HealthArticleCard from './components/HealthArticleCard';

// Page Components defined outside the main App component to prevent re-rendering issues
const MarketplacePage = ({ onAddToCart }: { onAddToCart: (product: Product) => void }) => {
  const categories = ['Semua', 'Sayur Segar', 'Beras Lokal', 'Buah Musiman'];
  const [activeCategory, setActiveCategory] = useState('Semua');

  return (
    <div className="p-4 bg-[#F1F8E9]">
      <header className="flex justify-between items-center mb-4">
        <Logo className="text-2xl" />
        <div className="relative">
          <input
            type="text"
            placeholder="Cari sayur, buah..."
            className="w-full pl-10 pr-4 py-2 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#81C784]"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </header>

      <div className="rounded-2xl overflow-hidden shadow-md mb-6">
        <img src="https://picsum.photos/seed/promo/800/400" alt="Promo Banner" className="w-full h-auto" />
      </div>
      
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
              activeCategory === cat ? 'bg-[#2E7D32] text-white' : 'bg-white text-[#37474F]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

const HealthHubPage = () => (
  <div className="p-4 bg-[#F1F8E9]">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-[#2E7D32]">D'Health Hub</h1>
      <p className="text-[#37474F] mt-1">Edukasi gaya hidup sehat untukmu</p>
    </div>
    <div className="space-y-6">
      {HEALTH_ARTICLES.map(article => (
        <HealthArticleCard key={article.id} article={article} />
      ))}
    </div>
  </div>
);

const ProfilePage = () => (
    <div className="p-4 bg-[#F1F8E9] h-full">
        <div className="flex flex-col items-center pt-8">
            <img src="https://picsum.photos/seed/avatar/200" alt="User Avatar" className="w-24 h-24 rounded-full shadow-lg border-4 border-white" />
            <h2 className="text-2xl font-bold text-[#37474F] mt-4">Andi Setiawan</h2>
            <p className="text-gray-500">andi.setiawan@email.com</p>
        </div>
        <div className="mt-10 space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm text-left">
                <span className="font-semibold text-[#37474F]">Riwayat Pembelian</span>
                <span className="text-gray-400">&gt;</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm text-left">
                <span className="font-semibold text-[#37474F]">Pengaturan Alamat</span>
                <span className="text-gray-400">&gt;</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm text-left">
                <span className="font-semibold text-[#37474F]">Pusat Bantuan</span>
                <span className="text-gray-400">&gt;</span>
            </button>
            <button className="w-full p-4 bg-white rounded-2xl shadow-sm text-left font-semibold text-red-500 mt-6">
                Logout
            </button>
        </div>
    </div>
);

const CartPage = ({ cart, onUpdateQuantity, onRemoveItem, onCheckout, onBack }: { cart: CartItem[], onUpdateQuantity: (id: number, quantity: number) => void, onRemoveItem: (id: number) => void, onCheckout: () => void, onBack: () => void }) => {
    const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
    const shippingCost = 15000;
    const total = subtotal + shippingCost;

    return (
        <div className="p-4 bg-[#F1F8E9] flex flex-col h-full">
            <header className="flex items-center mb-4 relative">
                <button onClick={onBack} className="p-2 -ml-2"><ChevronLeftIcon className="w-6 h-6 text-[#37474F]" /></button>
                <h1 className="text-xl font-bold text-[#37474F] absolute left-1/2 -translate-x-1/2">Keranjang</h1>
            </header>
            
            {cart.length === 0 ? (
                <div className="flex-grow flex flex-col justify-center items-center text-center">
                    <img src="https://picsum.photos/seed/emptycart/200" alt="Empty Cart" className="w-40 h-40 opacity-50 mb-4 rounded-2xl"/>
                    <h2 className="text-xl font-semibold text-gray-600">Keranjangmu masih kosong</h2>
                    <p className="text-gray-400 mt-2">Yuk, isi dengan sayur dan buah segar!</p>
                </div>
            ) : (
                <div className="flex-grow overflow-y-auto">
                    {cart.map(item => (
                        <div key={item.id} className="flex items-center bg-white p-3 rounded-2xl shadow-sm mb-3">
                            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                            <div className="flex-grow ml-4">
                                <h3 className="font-semibold text-[#37474F]">{item.name}</h3>
                                <p className="font-bold text-[#2E7D32]">Rp{item.price.toLocaleString('id-ID')}</p>
                                <div className="flex items-center mt-2">
                                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1 bg-gray-200 rounded-full disabled:opacity-50" disabled={item.quantity <= 1}><MinusIcon className="w-4 h-4 text-[#37474F]" /></button>
                                    <span className="mx-3 font-semibold w-6 text-center">{item.quantity}</span>
                                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1 bg-gray-200 rounded-full"><PlusIcon className="w-4 h-4 text-[#37474F]" /></button>
                                </div>
                            </div>
                            <button onClick={() => onRemoveItem(item.id)} className="p-2"><TrashIcon className="w-5 h-5 text-red-500" /></button>
                        </div>
                    ))}
                </div>
            )}
            
            {cart.length > 0 && (
                <div className="bg-white p-4 rounded-t-3xl shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] -mx-4 -mb-4 mt-4">
                    <div className="flex justify-between text-[#37474F]"><span>Subtotal</span><span>Rp{subtotal.toLocaleString('id-ID')}</span></div>
                    <div className="flex justify-between text-[#37474F] mt-2"><span>Ongkir</span><span>Rp{shippingCost.toLocaleString('id-ID')}</span></div>
                    <div className="border-t my-3"></div>
                    <div className="flex justify-between font-bold text-lg text-[#37474F]"><span>Total</span><span>Rp{total.toLocaleString('id-ID')}</span></div>
                    <button onClick={onCheckout} className="w-full mt-4 bg-[#FFC107] text-white font-bold py-3 rounded-2xl shadow-md hover:bg-amber-500 transition-colors">
                        Checkout Sekarang
                    </button>
                </div>
            )}
        </div>
    );
};

const CheckoutPage = ({ onBack, onPaymentSuccess }: { onBack: () => void, onPaymentSuccess: () => void }) => {
    return (
        <div className="p-4 bg-[#F1F8E9] h-full flex flex-col">
            <header className="flex items-center mb-4 relative">
                <button onClick={onBack} className="p-2 -ml-2"><ChevronLeftIcon className="w-6 h-6 text-[#37474F]" /></button>
                <h1 className="text-xl font-bold text-[#37474F] absolute left-1/2 -translate-x-1/2">Checkout</h1>
            </header>
            
            <div className="flex-grow overflow-y-auto">
                <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
                    <h2 className="font-bold text-[#2E7D32]">Alamat Pengiriman</h2>
                    <p className="text-sm mt-1 text-[#37474F]">Jl. Kebun Raya No. 123, Jakarta Selatan</p>
                    <button className="text-sm font-semibold text-[#81C784] mt-2">Ubah Alamat</button>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm mb-4">
                    <h2 className="font-bold text-[#2E7D32]">Metode Pembayaran</h2>
                    <div className="space-y-2 mt-2">
                        <label className="flex items-center p-3 border rounded-xl"><input type="radio" name="payment" className="form-radio text-[#2E7D32]" defaultChecked /> <span className="ml-3 text-sm">D'Pay</span></label>
                        <label className="flex items-center p-3 border rounded-xl"><input type="radio" name="payment" className="form-radio text-[#2E7D32]" /> <span className="ml-3 text-sm">Transfer Bank</span></label>
                        <label className="flex items-center p-3 border rounded-xl"><input type="radio" name="payment" className="form-radio text-[#2E7D32]" /> <span className="ml-3 text-sm">COD (Bayar di Tempat)</span></label>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm">
                    <h2 className="font-bold text-[#2E7D32]">Ringkasan Biaya</h2>
                    <div className="flex justify-between text-sm text-[#37474F] mt-2"><span>Subtotal</span><span>Rp128.000</span></div>
                    <div className="flex justify-between text-sm text-[#37474F] mt-1"><span>Ongkir</span><span>Rp15.000</span></div>
                    <div className="border-t my-2"></div>
                    <div className="flex justify-between font-bold text-[#37474F]"><span>Total</span><span>Rp143.000</span></div>
                </div>
            </div>

            <div className="py-4">
                <button onClick={onPaymentSuccess} className="w-full bg-[#FFC107] text-white font-bold py-3 rounded-2xl shadow-md hover:bg-amber-500 transition-colors">
                    Bayar Sekarang
                </button>
            </div>
        </div>
    );
};

const SuccessPage = ({ onBackToHome }: { onBackToHome: () => void }) => (
    <div className="p-4 bg-[#F1F8E9] h-full flex flex-col justify-center items-center text-center">
        <div className="w-24 h-24 bg-[#2E7D32] rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#2E7D32]">Pembayaran Berhasil!</h1>
        <p className="text-[#37474F] mt-2 max-w-xs">Pesananmu sedang disiapkan dan akan segera dikirim. Terima kasih sudah berbelanja!</p>
        <p className="text-sm text-gray-500 mt-4">Kamu bisa melacak pengiriman di halaman profil.</p>
        <button onClick={onBackToHome} className="mt-8 bg-[#FFC107] text-white font-bold py-3 px-8 rounded-2xl shadow-md hover:bg-amber-500 transition-colors">
            Kembali ke Beranda
        </button>
    </div>
);


const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>(Tab.Market);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [view, setView] = useState<'main' | 'cart' | 'checkout' | 'success'>('main');

    const handleAddToCart = (product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const handleUpdateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) return;
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };
    
    const handleRemoveItem = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };
    
    const handlePaymentSuccess = () => {
        setCart([]);
        setView('success');
    };

    const cartItemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

    const renderContent = () => {
        switch (view) {
            case 'cart':
                return <CartPage cart={cart} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} onCheckout={() => setView('checkout')} onBack={() => setView('main')} />;
            case 'checkout':
                return <CheckoutPage onBack={() => setView('cart')} onPaymentSuccess={handlePaymentSuccess} />;
            case 'success':
                return <SuccessPage onBackToHome={() => { setView('main'); setActiveTab(Tab.Market); }} />;
            case 'main':
            default:
                switch (activeTab) {
                    case Tab.Market: return <MarketplacePage onAddToCart={handleAddToCart} />;
                    case Tab.Health: return <HealthHubPage />;
                    case Tab.Profile: return <ProfilePage />;
                    default: return <MarketplacePage onAddToCart={handleAddToCart} />;
                }
        }
    };

    return (
        <div className="max-w-md mx-auto h-screen bg-[#F1F8E9] flex flex-col font-sans shadow-2xl relative">
            <main className="flex-grow overflow-y-auto pb-20">
              {renderContent()}
            </main>
            
            {view === 'main' && (
                <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 rounded-t-3xl shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)]">
                    <div className="flex justify-around items-center h-20">
                        <button onClick={() => setActiveTab(Tab.Market)} className="flex flex-col items-center justify-center space-y-1 w-1/4">
                            <HomeIcon className={`w-7 h-7 transition-colors ${activeTab === Tab.Market ? 'text-[#2E7D32]' : 'text-gray-400'}`} />
                            <span className={`text-xs font-semibold ${activeTab === Tab.Market ? 'text-[#2E7D32]' : 'text-gray-400'}`}>Home</span>
                        </button>
                        <button onClick={() => setView('cart')} className="relative flex flex-col items-center justify-center space-y-1 w-1/4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="text-xs font-semibold text-gray-400">Cart</span>
                             {cartItemCount > 0 && (
                                <span className="absolute top-0 right-5 w-5 h-5 bg-[#FFC107] text-white text-xs font-bold rounded-full flex items-center justify-center">{cartItemCount}</span>
                             )}
                        </button>
                        <button onClick={() => setActiveTab(Tab.Health)} className="flex flex-col items-center justify-center space-y-1 w-1/4">
                            <HealthIcon className={`w-7 h-7 transition-colors ${activeTab === Tab.Health ? 'text-[#2E7D32]' : 'text-gray-400'}`} />
                            <span className={`text-xs font-semibold ${activeTab === Tab.Health ? 'text-[#2E7D32]' : 'text-gray-400'}`}>Health</span>
                        </button>
                        <button onClick={() => setActiveTab(Tab.Profile)} className="flex flex-col items-center justify-center space-y-1 w-1/4">
                            <ProfileIcon className={`w-7 h-7 transition-colors ${activeTab === Tab.Profile ? 'text-[#2E7D32]' : 'text-gray-400'}`} />
                            <span className={`text-xs font-semibold ${activeTab === Tab.Profile ? 'text-[#2E7D32]' : 'text-gray-400'}`}>Profile</span>
                        </button>
                    </div>
                </nav>
            )}
        </div>
    );
}

export default App;
