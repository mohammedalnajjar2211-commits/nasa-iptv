
const defaultProductImage = '/images/nasa-logo-original.png';

export const products = [
  {
    slug:'3-months-family',
    category:'subscription',
    name:'3 Months Family',
    ar:'اشتراك فاملي 3 أشهر',
    price:19.99,
    old:30,
    months:3,
    featured:false,
    image:defaultProductImage,
    description:'Flexible streaming subscription for supported devices.'
  },
  {
    slug:'6-months-family',
    category:'subscription',
    name:'6 Months Family',
    ar:'اشتراك فاملي 6 أشهر',
    price:29.99,
    old:40,
    months:6,
    featured:false,
    image:defaultProductImage,
    description:'A flexible six-month plan for your entertainment.'
  },
  {
    slug:'12-months-family',
    category:'subscription',
    name:'12 Months Family',
    ar:'اشتراك فاملي 12 شهراً',
    price:39.99,
    old:80,
    months:12,
    featured:true,
    image:defaultProductImage,
    description:'Our popular annual subscription plan.'
  },
  {
    slug:'24-months-family',
    category:'subscription',
    name:'24 Months Family',
    ar:'اشتراك فاملي 24 شهراً',
    price:69.99,
    old:120,
    months:24,
    featured:false,
    image:defaultProductImage,
    description:'A two-year plan with great value.'
  },
  {
    slug:'36-months-family',
    category:'subscription',
    name:'36 Months Family',
    ar:'اشتراك فاملي 36 شهراً',
    price:89.99,
    old:149.99,
    months:36,
    featured:false,
    image:defaultProductImage,
    description:'Long-term plan for three years.'
  },
  {
    slug:'12-months-family-two-devices',
    category:'subscription',
    name:'12 Months Family (Two Devices)',
    ar:'اشتراك فاملي سنة لجهازين',
    price:69.99,
    old:120,
    months:12,
    image:defaultProductImage,
    description:'Annual plan for two devices.'
  },
  {
    slug:'12-months-family-saudi',
    category:'subscription',
    name:'12 Months Family – Saudi Arabia',
    ar:'اشتراك فاملي سنة – السعودية',
    price:25,
    months:12,
    region:'Saudi Arabia',
    image:defaultProductImage,
    description:'Regional offer for Saudi customers.'
  },
  {
    slug:'12-months-family-kuwait',
    category:'subscription',
    name:'12 Months Family – Kuwait',
    ar:'اشتراك فاملي سنة – الكويت',
    price:25,
    months:12,
    region:'Kuwait',
    image:defaultProductImage,
    description:'Regional offer for Kuwait customers.'
  },
  {
    slug:'12-months-family-iraq',
    category:'subscription',
    name:'12 Months Family – Iraq',
    ar:'اشتراك فاملي سنة – العراق',
    price:20,
    months:12,
    region:'Iraq',
    image:'/images/products/nasa-12-months-iraq.png',
    description:'Regional offer for Iraq customers.'
  },
  {
    slug:'ora-player-activation-1-year',
    category:'activation',
    name:'ORA Player – 1 Year Activation',
    ar:'تفعيل ORA Player لمدة سنة',
    price:10,
    months:12,
    image:defaultProductImage,
    description:'One-year activation license for the ORA Player application. IPTV content not included.'
  },
  {
    slug:'ora-player-lifetime-activation',
    category:'activation',
    name:'ORA Player – Lifetime Activation',
    ar:'تفعيل ORA Player مدى الحياة',
    price:20,
    lifetime:true,
    image:defaultProductImage,
    description:'Lifetime application activation license, subject to the provider’s terms. IPTV content not included.'
  },
  {
    slug:'bob-player-activation-1-year',
    category:'activation',
    name:'BOB Player – 1 Year Activation',
    ar:'تفعيل BOB Player لمدة سنة',
    price:10,
    months:12,
    image:defaultProductImage,
    description:'One-year player license. IPTV content not included.'
  },
  {
    slug:'bob-player-lifetime',
    category:'activation',
    name:'BOB Player – Lifetime Activation',
    ar:'تفعيل BOB Player مدى الحياة',
    price:20,
    lifetime:true,
    image:defaultProductImage,
    description:'Lifetime player license, subject to provider terms. IPTV content not included.'
  }
];

export const money = (n) => `$${Number(n).toFixed(2)}`;

export const whatsapp = (product, lang='en') =>
  'https://wa.me/46700411342?text=' +
  encodeURIComponent(
    lang === 'ar'
      ? `مرحباً، أريد طلب ${product.ar} بسعر ${money(product.price)}. يرجى توضيح طريقة الدفع والتفعيل.`
      : `Hello, I would like to order ${product.name} for ${money(product.price)}. Please send payment and activation details.`
  );

export const genericWhatsapp = (message) =>
  'https://wa.me/46700411342?text=' + encodeURIComponent(message);
