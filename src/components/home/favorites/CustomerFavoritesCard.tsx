//import { useStore } from '../../../store/store';
import type { CustomerFavorite } from '../../../data/customerFavorites';

const proteinColors: Record<string, string> = {
  '18+': 'bg-yellow-100 text-yellow-800',
  'Tickets Required': 'bg-red-100 text-red-800',
  '21+': 'bg-blue-100 text-blue-800',
  'Free': 'bg-green-100 text-green-800',
};

const CustomerFavoritesCard = ({ item }: { item: CustomerFavorite }) => {
  //const { addToCart } = useStore();

  /*const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  };*/

  return (
    <div className="relative w-full h-full border-2 border-slate-500/20 text-white rounded-lg overflow-hidden flex flex-col">
      <div className="relative flex-1">
        <img
          src={item.imageUrl || '/placeholder-food.jpg'}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-4">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold text-white drop-shadow-lg">{item.name}</h2>
            {item.price > 0 && (
              <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ${item.price.toFixed(2)}
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {item.proteins.map((protein) => (
              <span 
                key={protein}
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  proteinColors[protein] || 'bg-white/20 text-white'
                }`}
              >
                {protein}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-900">
        <p className="text-sm text-gray-300 mb-3 line-clamp-2">{item.description}</p>
        {item.price >= 0 && (
          <button 
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            onClick={() => alert('More Information Coming Soon!')}
          >
            Click For More Info
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomerFavoritesCard;
