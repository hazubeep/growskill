
import { 
  getTestimoniData,
  getModulData,
  getFasilitasData,
  getPricingData,
  getFooterData
} from '../lib/markdown';

const verify = () => {
  try {
    const testimoniData = getTestimoniData();
    const modulData = getModulData();
    const fasilitasData = getFasilitasData();
    const pricingData = getPricingData();
    const footerData = getFooterData();

    if (testimoniData && testimoniData.testimonials.length > 0) {
      if (testimoniData.highlightedWords) console.log('Testimoni Highlighting: OK');
      console.log('Testimoni: OK');
      if (testimoniData.testimonials[0].image && testimoniData.testimonials[0].image.includes('picsum.photos')) {
        console.log('Testimoni Images: OK (picsum.photos)');
      } else {
         console.log('Testimoni Images: WARNING (Not using picsum.photos)');
      }
    } else console.error('Testimoni: FAILED');

    if (modulData && modulData.items.length > 0) {
      if (modulData.highlightedWords) console.log('Modul Highlighting: OK');
      if (modulData.items[0].image) {
        console.log('Modul: OK (Image found)');
      } else {
        console.log('Modul: OK (No image found, but data loaded)');
      }
      if (modulData.items[0].image && modulData.items[0].image.includes('picsum.photos')) {
        console.log('Modul Images: OK (picsum.photos)');
      } else {
        console.log('Modul Images: WARNING (Not using picsum.photos)');
      }
    } else console.error('Modul: FAILED');

    if (fasilitasData && fasilitasData.facilities.length > 0) {
      if (fasilitasData.facilities[0].image) {
        console.log('Fasilitas: OK (Image found)');
      } else {
        console.log('Fasilitas: OK (No image found, but data loaded)');
      }
    } else console.error('Fasilitas: FAILED');

    if (pricingData && pricingData.packages.length > 0) {
      if (typeof pricingData.packages[0].benefits[0] === 'object' && 'isIncluded' in pricingData.packages[0].benefits[0]) {
        console.log('Pricing: OK (Benefits with isIncluded found)');
      } else {
        console.log('Pricing: OK (Benefits found but maybe old structure?)');
      }
    } else console.error('Pricing: FAILED');

    if (footerData && footerData.description) {
      console.log('Footer: OK');
    } else console.error('Footer: FAILED');

  } catch (error) {
    console.error('Verification ERROR:', error);
    process.exit(1);
  }
};

verify();
