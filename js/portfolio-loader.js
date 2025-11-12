// Portfolio data with 10 items per category from gallery
const portfolioData = [
    // Fashion - 14 items (4 campaign + 10 apparel)
    { category: 'fashion', image: 'gallery/Fashion_Campaign/Design_1_luxury_editorial.png', title: 'Luxury Editorial Campaign', subtitle: 'High Fashion' },
    { category: 'fashion', image: 'gallery/Fashion_Campaign/Design_2_minimalist_modern.png', title: 'Minimalist Modern', subtitle: 'Contemporary Fashion' },
    { category: 'fashion', image: 'gallery/Fashion_Campaign/Design_3_urban_modern.png', title: 'Urban Modern Campaign', subtitle: 'Street Style' },
    { category: 'fashion', image: 'gallery/Fashion_Campaign/Design_4_artistic_creative.png', title: 'Artistic Creative', subtitle: 'Avant-Garde' },
    { category: 'fashion', image: 'gallery/Fashion_Campaign/luxury-product-advertisement-create-exquisite_v1_square_imagen35.png', title: 'Luxury Eyewear', subtitle: 'Designer Accessories' },
    { category: 'fashion', image: 'gallery/Fashion_Apparel/02_Eleganza_silk_evening_dress_on_display.png', title: 'Eleganza Evening Dress', subtitle: 'Luxury Fashion' },
    { category: 'fashion', image: 'gallery/Fashion_Apparel/03_DenimCo_casual_denim_jeans_laid_flat.png', title: 'DenimCo Casual Jeans', subtitle: 'Everyday Style' },
    { category: 'fashion', image: 'gallery/Fashion_Apparel/04_WarmStyle_wool_winter_coat_hanging.png', title: 'WarmStyle Winter Coat', subtitle: 'Seasonal Collection' },
    { category: 'fashion', image: 'gallery/Fashion_Apparel/05_SpeedFit_athletic_running_shoes.png', title: 'SpeedFit Running Shoes', subtitle: 'Athletic Wear' },
    { category: 'fashion', image: 'gallery/Fashion_Apparel/06_BasicLux_cotton_t-shirt_collection_fold.png', title: 'BasicLux T-Shirt Collection', subtitle: 'Essentials' },
    { category: 'fashion', image: 'gallery/Fashion_Apparel/07_PowerSuit_formal_blazer_on_hanger.png', title: 'PowerSuit Formal Blazer', subtitle: 'Business Attire' },
    { category: 'fashion', image: 'gallery/Fashion_Apparel/08_SunKissed_summer_sundress_on_mannequin.png', title: 'SunKissed Summer Dress', subtitle: 'Summer Collection' },
    { category: 'fashion', image: 'gallery/Fashion_Apparel/09_StepStyle_leather_ankle_boots_pair.png', title: 'StepStyle Ankle Boots', subtitle: 'Footwear' },
    { category: 'fashion', image: 'gallery/Fashion_Apparel/10_SoftLuxe_cashmere_sweater_draped.png', title: 'SoftLuxe Cashmere Sweater', subtitle: 'Premium Knitwear' },
    
    // Beauty - 10 items
    { category: 'beauty', image: 'gallery/Beauty_Cosmetics/11_ColorPro_luxury_lipstick_collection_dis.png', title: 'ColorPro Lipstick Collection', subtitle: 'Luxury Cosmetics' },
    { category: 'beauty', image: 'gallery/Beauty_Cosmetics/12_YouthGlow_anti-aging_serum_bottle.png', title: 'YouthGlow Anti-Aging Serum', subtitle: 'Skincare' },
    { category: 'beauty', image: 'gallery/Beauty_Cosmetics/13_PureGlow_natural_face_cream_jar.png', title: 'PureGlow Face Cream', subtitle: 'Natural Beauty' },
    { category: 'beauty', image: 'gallery/Beauty_Cosmetics/14_EyeArt_eyeshadow_palette_open.png', title: 'EyeArt Eyeshadow Palette', subtitle: 'Makeup' },
    { category: 'beauty', image: 'gallery/Beauty_Cosmetics/15_Essence_perfume_bottle_elegant.png', title: 'Essence Perfume', subtitle: 'Fragrance' },
    { category: 'beauty', image: 'gallery/Beauty_Cosmetics/16_NailLux_nail_polish_set_arrangement.png', title: 'NailLux Polish Set', subtitle: 'Nail Care' },
    { category: 'beauty', image: 'gallery/Beauty_Cosmetics/17_FreshFace_facial_cleanser_bottle.png', title: 'FreshFace Cleanser', subtitle: 'Daily Care' },
    { category: 'beauty', image: 'gallery/Beauty_Cosmetics/18_LashPro_mascara_tube_and_wand.png', title: 'LashPro Mascara', subtitle: 'Eye Makeup' },
    { category: 'beauty', image: 'gallery/Beauty_Cosmetics/19_FlawlessBase_foundation_bottle.png', title: 'FlawlessBase Foundation', subtitle: 'Base Makeup' },
    { category: 'beauty', image: 'gallery/Beauty_Cosmetics/20_GlowKit_skincare_set_collection.png', title: 'GlowKit Skincare Set', subtitle: 'Complete Care' },
    
    // Tech - 10 items
    { category: 'tech', image: 'gallery/Tech_Electronics/21_SoundWave_wireless_earbuds_in_charging_c.png', title: 'SoundWave Wireless Earbuds', subtitle: 'Audio Tech' },
    { category: 'tech', image: 'gallery/Tech_Electronics/22_TimeSync_smartwatch_on_display_stand.png', title: 'TimeSync Smartwatch', subtitle: 'Wearable Tech' },
    { category: 'tech', image: 'gallery/Tech_Electronics/23_TechPro_laptop_computer_open.png', title: 'TechPro Laptop', subtitle: 'Computing' },
    { category: 'tech', image: 'gallery/Tech_Electronics/24_PhoneX_smartphone_floating.png', title: 'PhoneX Smartphone', subtitle: 'Mobile Tech' },
    { category: 'tech', image: 'gallery/Tech_Electronics/25_BoomBox_bluetooth_speaker.png', title: 'BoomBox Speaker', subtitle: 'Audio' },
    { category: 'tech', image: 'gallery/Tech_Electronics/26_GameSound_gaming_headset_on_stand.png', title: 'GameSound Headset', subtitle: 'Gaming' },
    { category: 'tech', image: 'gallery/Tech_Electronics/27_TabletPro_tablet_device_with_stylus.png', title: 'TabletPro Device', subtitle: 'Tablets' },
    { category: 'tech', image: 'gallery/Tech_Electronics/28_ChargeFast_wireless_charger_pad.png', title: 'ChargeFast Wireless Charger', subtitle: 'Accessories' },
    { category: 'tech', image: 'gallery/Tech_Electronics/29_SnapPro_camera_with_lens.png', title: 'SnapPro Camera', subtitle: 'Photography' },
    { category: 'tech', image: 'gallery/Tech_Electronics/30_HomeAI_smart_home_hub_device.png', title: 'HomeAI Smart Hub', subtitle: 'Smart Home' },
    
    // Food & Beverage - 10 items
    { category: 'food', image: 'gallery/Food_Beverage/31_BrewMaster_artisan_coffee_beans_in_bag.png', title: 'BrewMaster Coffee Beans', subtitle: 'Artisan Coffee' },
    { category: 'food', image: 'gallery/Food_Beverage/32_CocoaLux_organic_chocolate_bar_unwrappe.png', title: 'CocoaLux Chocolate', subtitle: 'Organic Treats' },
    { category: 'food', image: 'gallery/Food_Beverage/33_TeaZen_premium_tea_collection_boxes.png', title: 'TeaZen Collection', subtitle: 'Premium Tea' },
    { category: 'food', image: 'gallery/Food_Beverage/34_HopCraft_craft_beer_bottle_with_glass.png', title: 'HopCraft Beer', subtitle: 'Craft Brewing' },
    { category: 'food', image: 'gallery/Food_Beverage/35_OliveGold_olive_oil_bottle_elegant.png', title: 'OliveGold Oil', subtitle: 'Gourmet' },
    { category: 'food', image: 'gallery/Food_Beverage/36_BeeNature_honey_jar_with_dipper.png', title: 'BeeNature Honey', subtitle: 'Natural Sweetness' },
    { category: 'food', image: 'gallery/Food_Beverage/37_FitFuel_protein_powder_container.png', title: 'FitFuel Protein', subtitle: 'Nutrition' },
    { category: 'food', image: 'gallery/Food_Beverage/38_PureSparkle_sparkling_water_bottle.png', title: 'PureSparkle Water', subtitle: 'Beverages' },
    { category: 'food', image: 'gallery/Food_Beverage/39_PowerBoost_energy_drink_can.png', title: 'PowerBoost Energy', subtitle: 'Energy Drinks' },
    { category: 'food', image: 'gallery/Food_Beverage/40_VineEstate_wine_bottle_elegant.png', title: 'VineEstate Wine', subtitle: 'Fine Wine' },
    
    // Home - 10 items
    { category: 'home', image: 'gallery/Home_Lifestyle/41_AromaHome_scented_candle_burning.png', title: 'AromaHome Candle', subtitle: 'Home Fragrance' },
    { category: 'home', image: 'gallery/Home_Lifestyle/42_MugCraft_ceramic_coffee_mug.png', title: 'MugCraft Ceramic Mug', subtitle: 'Kitchenware' },
    { category: 'home', image: 'gallery/Home_Lifestyle/43_ComfortHome_throw_pillow_decorative.png', title: 'ComfortHome Pillow', subtitle: 'Home Decor' },
    { category: 'home', image: 'gallery/Home_Lifestyle/44_EcoKitchen_bamboo_cutting_board.png', title: 'EcoKitchen Board', subtitle: 'Kitchen Tools' },
    { category: 'home', image: 'gallery/Home_Lifestyle/45_LightWork_desk_lamp_modern.png', title: 'LightWork Desk Lamp', subtitle: 'Lighting' },
    { category: 'home', image: 'gallery/Home_Lifestyle/46_ZenFlow_yoga_mat_rolled.png', title: 'ZenFlow Yoga Mat', subtitle: 'Wellness' },
    { category: 'home', image: 'gallery/Home_Lifestyle/47_HydroSteel_water_bottle_stainless.png', title: 'HydroSteel Bottle', subtitle: 'Drinkware' },
    { category: 'home', image: 'gallery/Home_Lifestyle/48_TimeCraft_wall_clock_modern.png', title: 'TimeCraft Clock', subtitle: 'Home Accessories' },
    { category: 'home', image: 'gallery/Home_Lifestyle/49_AromaZen_essential_oil_diffuser.png', title: 'AromaZen Diffuser', subtitle: 'Aromatherapy' },
    { category: 'home', image: 'gallery/Home_Lifestyle/50_MemoryLux_photo_frame_elegant.png', title: 'MemoryLux Frame', subtitle: 'Photo Display' },
    
    // Jewelry - 10 items
    { category: 'jewelry', image: 'gallery/Jewelry_Accessories/51_SparkleGems_diamond_necklace_on_display.png', title: 'SparkleGems Necklace', subtitle: 'Fine Jewelry' },
    { category: 'jewelry', image: 'gallery/Jewelry_Accessories/52_WalletCraft_leather_wallet_open.png', title: 'WalletCraft Leather', subtitle: 'Accessories' },
    { category: 'jewelry', image: 'gallery/Jewelry_Accessories/53_GoldLine_gold_bracelet_on_stand.png', title: 'GoldLine Bracelet', subtitle: 'Gold Collection' },
    { category: 'jewelry', image: 'gallery/Jewelry_Accessories/54_ShadeStyle_designer_sunglasses.png', title: 'ShadeStyle Sunglasses', subtitle: 'Eyewear' },
    { category: 'jewelry', image: 'gallery/Jewelry_Accessories/55_EarArt_silver_earrings_pair.png', title: 'EarArt Earrings', subtitle: 'Silver Collection' },
    { category: 'jewelry', image: 'gallery/Jewelry_Accessories/56_BeltCraft_leather_belt_coiled.png', title: 'BeltCraft Belt', subtitle: 'Leather Goods' },
    { category: 'jewelry', image: 'gallery/Jewelry_Accessories/57_OceanGems_pearl_necklace_on_bust.png', title: 'OceanGems Pearls', subtitle: 'Luxury Jewelry' },
    { category: 'jewelry', image: 'gallery/Jewelry_Accessories/58_StrapStyle_watch_band_leather.png', title: 'StrapStyle Watch Band', subtitle: 'Watch Accessories' },
    { category: 'jewelry', image: 'gallery/Jewelry_Accessories/59_RingCraft_ring_collection_display.png', title: 'RingCraft Collection', subtitle: 'Rings' },
    { category: 'jewelry', image: 'gallery/Jewelry_Accessories/60_ScarfLux_designer_scarf_silk.png', title: 'ScarfLux Silk Scarf', subtitle: 'Designer Accessories' },
    
    // Fitness - 10 items
    { category: 'fitness', image: 'gallery/Fitness_Sports/61_FlexFit_yoga_pants_folded.png', title: 'FlexFit Yoga Pants', subtitle: 'Activewear' },
    { category: 'fitness', image: 'gallery/Fitness_Sports/62_FitCarry_gym_bag_open.png', title: 'FitCarry Gym Bag', subtitle: 'Sports Gear' },
    { category: 'fitness', image: 'gallery/Fitness_Sports/63_StrengthPro_resistance_bands_set.png', title: 'StrengthPro Bands', subtitle: 'Training Equipment' },
    { category: 'fitness', image: 'gallery/Fitness_Sports/64_RunElite_running_shoes_pair.png', title: 'RunElite Shoes', subtitle: 'Running Gear' },
    { category: 'fitness', image: 'gallery/Fitness_Sports/65_FitTime_sports_watch_on_stand.png', title: 'FitTime Sports Watch', subtitle: 'Fitness Tech' },
    { category: 'fitness', image: 'gallery/Fitness_Sports/66_ShakePro_protein_shaker_bottle.png', title: 'ShakePro Shaker', subtitle: 'Nutrition' },
    { category: 'fitness', image: 'gallery/Fitness_Sports/67_GripFit_workout_gloves_pair.png', title: 'GripFit Gloves', subtitle: 'Workout Accessories' },
    { category: 'fitness', image: 'gallery/Fitness_Sports/68_RecoverPro_foam_roller_on_mat.png', title: 'RecoverPro Roller', subtitle: 'Recovery Tools' },
    { category: 'fitness', image: 'gallery/Fitness_Sports/69_SkipFit_jump_rope_coiled.png', title: 'SkipFit Jump Rope', subtitle: 'Cardio Equipment' },
    { category: 'fitness', image: 'gallery/Fitness_Sports/70_SweatDry_gym_towel_folded.png', title: 'SweatDry Towel', subtitle: 'Gym Essentials' }
];

// Load portfolio on page load
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('portfolioGrid');
    
    // Clear existing content
    grid.innerHTML = '';
    
    // Render all items
    portfolioData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', item.category);
        portfolioItem.style.animation = `fadeIn 0.5s ease forwards ${index * 0.03}s`;
        portfolioItem.style.opacity = '0';
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="work-image-img">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.subtitle}</p>
            </div>
        `;
        
        grid.appendChild(portfolioItem);
    });
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter items
            const items = document.querySelectorAll('.portfolio-item');
            items.forEach((item, index) => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hidden');
                    item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.03}s`;
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
