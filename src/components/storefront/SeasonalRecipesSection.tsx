import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';
import SushiConveyorMenu, { ConveyorDish } from '../ui/sushi-conveyor-menu';
import { useAppStore } from '../../store/AppStoreContext';
import { useToast } from '../ui/Toast';

export const SEASONAL_RECIPES: ConveyorDish[] = [
  {
    id: 'recipe-sarson-saag',
    name: 'Slow-simmered Sarson Saag with Farm A2 Ghee',
    price: '₹460',
    tier: 5,
    description: 'Slow-simmered organic mustard greens and spinach, tempered with cumin and crowned with golden farm A2 Bilona cow ghee.',
    details: ['Seasonal Main', '30 min preparation', '3 farm ingredients', 'High Iron', 'Traditional'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    ingredientProductIds: ['prod-spinach', 'prod-ghee', 'prod-mustard-oil'],
    ingredientNames: ['Organic Farm Spinach & Saag (500g)', 'A2 Vedic Bilona Cow Ghee (500ml)', 'Cold-Pressed Mustard Oil (1L)'],
  },
  {
    id: 'recipe-avocado-salad',
    name: 'Butterhead Lettuce & Hass Avocado Salad Bowl',
    price: '₹315',
    tier: 4,
    description: 'Crisp hydroponic butterhead leaves gently tossed with ripe Hass avocado cubes, sweet vine tomatoes, and sea salt.',
    details: ['Crisp Salad', '15 min preparation', '3 farm ingredients', 'Hydroponic', 'Heart Healthy'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    ingredientProductIds: ['prod-lettuce', 'prod-avocado', 'prod-tomato'],
    ingredientNames: ['Hydroponic Butterhead Lettuce (250g)', 'Ripe Hass Avocado (2 pcs)', 'Vine Heirloom Tomatoes (1 kg)'],
  },
  {
    id: 'recipe-amla-tonic',
    name: 'Cold-pressed Gooseberry & Wild Ginger Elixir',
    price: '₹240',
    tier: 3,
    description: 'Immunity-boosting Ayurvedic elixir combining cold-pressed Pahadi amla, raw wild ginger, and organic Lakadong turmeric.',
    details: ['Daily Tonic', '10 min preparation', '3 farm ingredients', 'Vitamin C', 'Immunity Boost'],
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    ingredientProductIds: ['prod-amla-shot', 'prod-turmeric', 'prod-orange-elixir'],
    ingredientNames: ['Raw Cold-Pressed Amla Elixir', 'Fresh Lakadong Turmeric Root', 'Cold-Pressed Citrus Immunity Blend'],
  },
  {
    id: 'recipe-tomato-chutney',
    name: 'Heirloom Tomato & Coriander Village Chutney',
    price: '₹190',
    tier: 2,
    description: 'Crushed sun-ripened desi heirloom tomatoes, freshly plucked coriander, and sweet red onions tempered in cold-pressed mustard oil.',
    details: ['Condiment', '12 min preparation', '4 farm ingredients', 'Stone Ground', 'Zero Additives'],
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
    ingredientProductIds: ['prod-tomato', 'prod-coriander', 'prod-onion', 'prod-mustard-oil'],
    ingredientNames: ['Heirloom Desi Tomatoes (1 kg)', 'Fresh Farm Coriander (250g)', 'Red Desi Onions (1 kg)', 'Mustard Oil'],
  },
  {
    id: 'recipe-apple-oats',
    name: 'Kashmiri Apple & Cinnamon Morning Oats',
    price: '₹415',
    tier: 4,
    description: 'Crisp hand-picked Kinnaur apples simmered with natural heirloom sugarcane jaggery and wild mountain blueberries.',
    details: ['Breakfast', '10 min preparation', '3 farm ingredients', 'Orchard Plucked', 'Natural Sweetener'],
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80',
    ingredientProductIds: ['prod-apple', 'prod-jaggery', 'prod-blueberries'],
    ingredientNames: ['Shimla Royal Gala Apples (1 kg)', 'Organic Sugarcane Jaggery (500g)', 'Fresh Blueberries (125g)'],
  },
  {
    id: 'recipe-spinach-medley',
    name: 'Country Garden Spinach & Capsicum Stir-Fry',
    price: '₹150',
    tier: 1,
    description: 'Tender baby spinach and crunchy green bell peppers sautéed lightly in cold-pressed mustard oil with roasted cumin seeds.',
    details: ['Quick Side', '18 min preparation', '3 farm ingredients', 'Rich in Folate', 'Quick Sauté'],
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
    ingredientProductIds: ['prod-spinach', 'prod-capsicum', 'prod-onion'],
    ingredientNames: ['Farm Harvest Spinach (500g)', 'Crunchy Bell Peppers (500g)', 'Desi Red Onions (1 kg)'],
  },
  {
    id: 'recipe-citrus-cooler',
    name: 'Nagpur Valencia Orange & Fresh Mint Cooler',
    price: '₹240',
    tier: 3,
    description: 'Cold-pressed sweet Nagpur oranges paired with refreshing Valencia mint elixir and tender young coconut water.',
    details: ['Hydration', '5 min preparation', '3 farm ingredients', 'Vitamin C Rich', 'Zero Sugar'],
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    ingredientProductIds: ['prod-orange', 'prod-orange-elixir', 'prod-coconut-water'],
    ingredientNames: ['Nagpur Sweet Oranges (1 kg)', 'Raw Valencia Orange Elixir (300 ml)', 'Tender Green Coconut (1 nut)'],
  },
  {
    id: 'recipe-morning-smoothie',
    name: 'Mountain Blueberry & Golden Banana Smoothie Bowl',
    price: '₹390',
    tier: 4,
    description: 'Velvety puréed golden bananas blended with wild blueberries, tender coconut water, and a touch of pure jaggery.',
    details: ['Breakfast Bowl', '8 min preparation', '3 farm ingredients', 'Potassium & Iron', 'Natural Energy'],
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=600&q=80',
    ingredientProductIds: ['prod-blueberries', 'prod-banana', 'prod-coconut-water'],
    ingredientNames: ['Fresh Blueberries (125 g)', 'Robusta Golden Bananas (1 doz)', 'Tender Coconut Water (320 ml)'],
  },
  {
    id: 'recipe-kadhi-khichdi',
    name: 'Desi Turmeric Tempered Khichdi with Gir Cow Ghee',
    price: '₹380',
    tier: 3,
    description: 'Comforting village khichdi tempered with freshly grated wild Lakadong turmeric root and drizzled with fragrant A2 Bilona ghee.',
    details: ['Comfort Food', '25 min preparation', '3 farm ingredients', 'High Curcumin', 'Vedic Gut Healing'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    ingredientProductIds: ['prod-turmeric', 'prod-ghee', 'prod-onion'],
    ingredientNames: ['Wild Lakadong Turmeric Rhizomes', 'A2 Desi Gir Cow Bilona Ghee', 'Nashik Pink Onions (1 kg)'],
  },
  {
    id: 'recipe-green-salad',
    name: 'Crisp Garden Lettuce & Capsicum Tossed Salad',
    price: '₹185',
    tier: 2,
    description: 'Crunchy green capsicum slices and hydro-washed butterhead lettuce tossed with cold-pressed virgin mustard oil and sea salt.',
    details: ['Low Calorie', '10 min preparation', '3 farm ingredients', 'Vitamin A & C', 'Raw Crunch'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    ingredientProductIds: ['prod-lettuce', 'prod-capsicum', 'prod-coriander'],
    ingredientNames: ['Hydroponic Butterhead Lettuce (1 head)', 'Tender Green Capsicum (500 g)', 'Crisp Hill Coriander (200 g)'],
  },
];

export const SeasonalRecipesSection: React.FC = () => {
  const { addToCart } = useAppStore();
  const toast = useToast();

  const handleAddRecipeBundle = (dish: ConveyorDish) => {
    const ingredientIds = dish.ingredientProductIds || [];
    if (ingredientIds.length === 0) return;

    ingredientIds.forEach((id) => {
      addToCart(id, 1);
    });

    toast.success(
      'Recipe Bundle Added!',
      `Added all ${ingredientIds.length} farm ingredients for "${dish.name}" to your basket.`
    );
  };

  return (
    <section className="max-w-[1600px] w-full mx-auto px-2 sm:px-4 lg:px-6 py-8 sm:py-10 overflow-x-clip">
      {/* Farm Kitchen - Scaled up by 5% */}
      <div className="w-full scale-[1.05] origin-top transition-transform duration-300">
        <SushiConveyorMenu
          items={SEASONAL_RECIPES}
          heading="Seasonal Recipes"
          direction="ltr"
          layoutMode="stacked"
          speed={24}
          autoplay={true}
          interval={3000}
          caption="Tap any dish to inspect farm ingredients and add the entire recipe bundle to your basket."
          onAdd={handleAddRecipeBundle}
          labels={{
            add: 'Add Recipe Ingredients to Basket',
            close: 'Close',
            previous: 'Previous recipe',
            next: 'Next recipe',
            pause: 'Pause conveyor belt',
          }}
          action={
            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-btn bg-forest px-6 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-forest-deep"
              >
                <span>Explore all produce</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs font-medium text-muted flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-marigold" />
                Bundles contain 100% farm-sourced fresh ingredients
              </span>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default SeasonalRecipesSection;
