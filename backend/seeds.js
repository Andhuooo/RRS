const mongoose = require("mongoose");
const { MealPlan, RestaurantPlan } = require("./models");
const { DB_URL } = require("./config");

// Define the mealPlans and restaurants arrays here


mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Starting seeding...");

    for (const newMealPlan of mealPlans) {
      const mealPlanExist = await MealPlan.findOne({
        mealPlanId: newMealPlan.mealPlanId,
      });

      if (!mealPlanExist) {
        const createNewMealPlan = new MealPlan(newMealPlan);
        await createNewMealPlan.save();
      }
    }

    for (const newRestaurantPlan of restaurantPlans) {
      const restaurantPlanExist = await RestaurantPlan.findOne({
        restaurantPlanId: newRestaurantPlan.restaurantPlanId,
      });

      if (!restaurantPlanExist) {
        const createNewRestaurantPlan = new RestaurantPlan(newRestaurantPlan);
        await createNewRestaurantPlan.save();
      }
    }

    console.log("Seeding completed.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });




const mealPlans = [
	{
		mealPlanId: 1,
		meals: [
			{
				mealId: "1",
				name: "Breakfast",
				description: "Energy-boosting breakfast options",
				recipes: [
					{
						name: "Avocado Toast",
						instructions:
							"1. Toast a slice of whole grain bread until golden and crispy.\n2. Mash a ripe avocado in a bowl and spread it evenly on the toast.\n3. Sprinkle with a pinch of salt and pepper.\n4. Optionally, top with sliced tomatoes, a drizzle of olive oil, or a squeeze of lemon juice.\n5. Enjoy your delicious avocado toast!",
					},
					{
						name: "Greek Yogurt Parfait",
						instructions:
							"1. In a glass or bowl, layer Greek yogurt, fresh berries, and a sprinkle of granola.\n2. Repeat the layers until you use up the ingredients.\n3. Optionally, drizzle honey or maple syrup for added sweetness.\n4. Serve chilled and savor the creamy and fruity goodness.",
					},
				],
			},
			{
				mealId: "2",
				name: "Lunch",
				description: "Wholesome lunch options",
				recipes: [
					{
						name: "Quinoa Salad",
						instructions:
							"1. Cook quinoa according to package instructions and let it cool.\n2. In a large bowl, combine cooked quinoa, diced cucumber, cherry tomatoes, chopped bell peppers, and fresh herbs.\n3. Drizzle with olive oil and lemon juice.\n4. Toss the ingredients until well mixed.\n5. Season with salt and pepper to taste.\n6. Enjoy a refreshing and nutritious quinoa salad.",
					},
					{
						name: "Grilled Vegetable Wrap",
						instructions:
							"1. Preheat a grill or grill pan over medium-high heat.\n2. Brush sliced zucchini, bell peppers, and eggplant with olive oil.\n3. Grill the vegetables for a few minutes on each side until tender and slightly charred.\n4. Spread hummus on a whole wheat wrap.\n5. Add the grilled vegetables and some fresh spinach leaves.\n6. Roll up the wrap tightly.\n7. Slice in half and relish the flavors of a satisfying grilled vegetable wrap.",
					},
				],
			},
			{
				mealId: "3",
				name: "Dinner",
				description: "Delectable dinner options",
				recipes: [
					{
						name: "Baked Lemon Herb Chicken",
						instructions:
							"1. Preheat the oven to 375°F (190°C).\n2. Place boneless, skinless chicken breasts in a baking dish.\n3. Squeeze fresh lemon juice over the chicken.\n4. Sprinkle with dried herbs such as thyme, rosemary, and oregano.\n5. Drizzle with olive oil.\n6. Bake for 25-30 minutes or until the chicken is cooked through.\n7. Serve the flavorful chicken with a side of steamed vegetables or a salad.",
					},
					{
						name: "Vegetarian Stir-Fried Noodles",
						instructions:
							"1. Cook your choice of noodles according to the package instructions.\n2. Heat oil in a wok or large skillet over high heat.\n3. Add thinly sliced bell peppers, snap peas, and shredded carrots.\n4. Stir-fry the vegetables for a few minutes until crisp-tender.\n5. Add the cooked noodles to the skillet.\n6. Drizzle with soy sauce, sesame oil, and a pinch of red pepper flakes.\n7. Toss everything together until well combined.\n8. Serve the delicious vegetarian stir-fried noodles.",
					},
				],
			},
		],
	},
	{
		mealPlanId: 2,
		meals: [
			{
				mealId: "1",
				name: "Breakfast",
				description: "Healthy breakfast options",
				recipes: [
					{
						name: "Oatmeal with fruits",
						instructions: `1. Cook oatmeal according to package instructions.\n2. Top with your choice of fresh fruits such as berries, sliced banana, or diced apples.\n3. Optionally, sprinkle with cinnamon or drizzle with honey for added flavor.`,
					},
					{
						name: "Egg omelette",
						instructions: `1. In a bowl, beat the eggs until well combined.\n2. Heat a non-stick skillet over medium heat and add a small amount of oil or cooking spray.\n3. Pour the beaten eggs into the skillet and cook until the edges start to set.\n4. Add your choice of fillings such as chopped vegetables, cheese, or cooked meats.\n5. Fold the omelette in half and continue cooking until the eggs are fully set.\n6. Serve hot.`,
					},
				],
			},
			{
				mealId: "2",
				name: "Lunch",
				description: "Nutritious lunch options",
				recipes: [
					{
						name: "Grilled chicken salad",
						instructions: `1. Season the chicken breasts with salt, pepper, and your choice of herbs and spices.\n2. Preheat a grill or grill pan over medium-high heat.\n3. Grill the chicken breasts for 6-8 minutes per side or until cooked through.\n4. Let the chicken rest for a few minutes, then slice it into strips.\n5. In a large bowl, combine mixed greens, cherry tomatoes, cucumber slices, and any other desired salad ingredients.\n6. Top the salad with the sliced grilled chicken.\n7. Drizzle with your favorite dressing and toss to combine.`,
					},
					{
						name: "Vegetable stir-fry",
						instructions: `1. Heat a tablespoon of oil in a wok or large skillet over high heat.\n2. Add your choice of vegetables such as bell peppers, broccoli florets, sliced carrots, and snap peas.\n3. Stir-fry the vegetables for 3-5 minutes until they are crisp-tender.\n4. In a small bowl, whisk together soy sauce, garlic, ginger, and any other desired seasonings.\n5. Pour the sauce over the vegetables and stir to coat evenly.\n6. Cook for an additional 1-2 minutes.\n7. Serve the stir-fried vegetables over cooked rice or noodles.`,
					},
				],
			},
			{
				mealId: "3",
				name: "Dinner",
				description: "Delicious dinner options",
				recipes: [
					{
						name: "Salmon with roasted vegetables",
						instructions: `1. Preheat the oven to 400°F (200°C).\n2. Place salmon fillets on a baking sheet lined with parchment paper.\n3. Season the salmon with salt, pepper, and your choice of herbs or spices.\n4. In a separate bowl, toss a mixture of your favorite vegetables with olive oil, salt, and pepper.\n5. Spread the vegetables around the salmon on the baking sheet.\n6. Bake for 12-15 minutes, or until the salmon is cooked through and the vegetables are tender.\n7. Serve the salmon with the roasted vegetables.`,
					},
					{
						name: "Spaghetti Bolognese",
						instructions: `1.Heat a tablespoon of oil in a large saucepan over medium heat.\n2. Add diced onions, minced garlic, and chopped carrots. Cook until the vegetables are softened.\n3. Add ground beef and cook until browned, breaking it up with a spoon.\n4. Stir in tomato paste, canned diced tomatoes, dried herbs, salt, and pepper.\n5. Simmer the sauce over low heat for 20-30 minutes to allow the flavors to meld together.\n6. Cook spaghetti according to package instructions until al dente.\n7. Drain the spaghetti and serve with the Bolognese sauce.\n8. Optionally, garnish with grated Parmesan cheese and fresh basil.`,
					},
				],
			},
		],
	},
	{
		mealPlanId: 3,
		meals: [
			{
				mealId: "1",
				name: "Breakfast",
				description: "Sugar-free breakfast options",
				recipes: [
					{
						name: "Egg and Vegetable Scramble",
						instructions: "1. Heat a non-stick skillet over medium heat.\n2. Add diced vegetables such as bell peppers, spinach, and onions.\n3. Sauté the vegetables until they soften.\n4. In a separate bowl, whisk together eggs and a dash of salt and pepper.\n5. Pour the egg mixture into the skillet with the vegetables.\n6. Cook, stirring occasionally, until the eggs are scrambled and fully cooked.\n7. Serve hot and enjoy a nutritious, sugar-free breakfast."
					},
					{
						name: "Chia Seed Pudding",
						instructions: "1. In a bowl, mix together chia seeds, unsweetened almond milk, and a natural sugar substitute like stevia or monk fruit.\n2. Stir well to combine and ensure the chia seeds are evenly distributed.\n3. Let the mixture sit for 5 minutes, then stir again.\n4. Cover the bowl and refrigerate overnight or for at least 2-3 hours.\n5. Serve chilled with your choice of toppings like fresh berries or chopped nuts.\n6. Enjoy a delicious and sugar-free chia seed pudding for breakfast."
					},
				],
			},
			{
				mealId: "2",
				name: "Lunch",
				description: "Sugar-free lunch options",
				recipes: [
					{
						name: "Grilled Chicken Salad",
						instructions: "1. Season boneless, skinless chicken breasts with salt, pepper, and your choice of herbs and spices.\n2. Preheat a grill or grill pan over medium-high heat.\n3. Grill the chicken for 6-8 minutes per side, or until fully cooked.\n4. Let the chicken rest for a few minutes, then slice it into strips.\n5. In a large bowl, combine mixed greens, cherry tomatoes, cucumber slices, and any other desired vegetables.\n6. Top the salad with the grilled chicken strips.\n7. Drizzle with a sugar-free dressing of your choice.\n8. Toss everything together and enjoy a refreshing and sugar-free grilled chicken salad."
					},
					{
						name: "Zucchini Noodles with Pesto",
						instructions: "1. Using a spiralizer, create zucchini noodles (zoodles) from fresh zucchini.\n2. Heat olive oil in a skillet over medium heat.\n3. Add the zucchini noodles and sauté for 2-3 minutes, until slightly softened.\n4. In a blender or food processor, combine fresh basil leaves, garlic, pine nuts, and olive oil to make a sugar-free pesto sauce.\n5. Toss the zucchini noodles with the pesto sauce.\n6. Optionally, garnish with grated Parmesan cheese.\n7. Serve the zucchini noodles with pesto and savor a delicious and sugar-free lunch."
					},
				],
			},
			{
				mealId: "3",
				name: "Dinner",
				description: "Sugar-free dinner options",
				recipes: [
					{
						name: "Baked Salmon with Lemon and Herbs",
						instructions: "1. Preheat the oven to 375°F (190°C).\n2. Place salmon fillets on a baking sheet lined with parchment paper.\n3. Squeeze fresh lemon juice over the salmon.\n4. Season with salt, pepper, and a mixture of dried herbs like dill, parsley, and thyme.\n5. Drizzle with olive oil.\n6. Bake for 12-15 minutes, or until the salmon is cooked through.\n7. Serve the flavorful baked salmon with a side of steamed vegetables or a sugar-free sauce."
					},
					{
						name: "Cauliflower Fried Rice",
						instructions: "1. Pulse cauliflower florets in a food processor until they resemble rice grains.\n2. Heat sesame oil in a large skillet or wok over medium heat.\n3. Add minced garlic and sauté for a minute.\n4. Add riced cauliflower, diced carrots, peas, and any other desired vegetables.\n5. Stir-fry for 5-6 minutes, until the vegetables are tender.\n6. Push the cauliflower rice mixture to one side of the skillet and crack eggs into the empty space.\n7. Scramble the eggs until cooked, then mix them with the cauliflower rice.\n8. Drizzle with soy sauce or tamari for flavor.\n9. Enjoy a delicious and sugar-free cauliflower fried rice for dinner."
					},
				],
			},
		],
	},
	{
		mealPlanId: 4,
		meals: [
			{
				mealId: "1",
				name: "Breakfast",
				description: "Vegan breakfast options for adults above age 30",
				recipes: [
					{
						name: "Avocado Toast with Tofu Scramble",
						instructions: "1. Toast whole-grain bread slices until golden brown.\n2. Mash ripe avocados and spread them evenly on the toasted bread.\n3. In a non-stick skillet, crumble firm tofu and sauté with diced onions, bell peppers, and spinach.\n4. Season the tofu scramble with turmeric, paprika, salt, and pepper.\n5. Cook until the tofu is heated through and the vegetables are tender.\n6. Serve the tofu scramble on top of the avocado toast.\n7. Sprinkle with nutritional yeast and garnish with fresh herbs.\n8. Enjoy a delicious and protein-rich vegan breakfast."
					},
					{
						name: "Berry Smoothie Bowl",
						instructions: "1. In a blender, combine frozen mixed berries, a ripe banana, plant-based milk, and a tablespoon of nut butter.\n2. Blend until smooth and creamy.\n3. Pour the smoothie into a bowl.\n4. Top with sliced fresh fruits like strawberries, blueberries, and kiwi.\n5. Add a sprinkle of chia seeds, hemp hearts, or granola for extra texture.\n6. Enjoy a refreshing and nutrient-packed vegan smoothie bowl for breakfast."
					},
				],
			},
			{
				mealId: "2",
				name: "Lunch",
				description: "Vegan lunch options for adults above age 30",
				recipes: [
					{
						name: "Quinoa Salad with Roasted Vegetables",
						instructions: "1. Cook quinoa according to package instructions and let it cool.\n2. Preheat the oven to 400°F (200°C).\n3. Toss chopped vegetables like bell peppers, zucchini, and cherry tomatoes with olive oil, salt, and pepper.\n4. Roast the vegetables on a baking sheet for 20-25 minutes, until they are tender and slightly caramelized.\n5. In a large bowl, combine the cooked quinoa, roasted vegetables, and fresh herbs like parsley and basil.\n6. Drizzle with a simple vinaigrette made from lemon juice, olive oil, and Dijon mustard.\n7. Toss everything together and adjust the seasonings if needed.\n8. Serve the quinoa salad as a hearty and flavorful vegan lunch."
					},
					{
						name: "Lentil Soup with Vegetables",
						instructions: "1. Heat olive oil in a large pot over medium heat.\n2. Add diced onions, carrots, and celery to the pot.\n3. Sauté the vegetables until they become soft and fragrant.\n4. Add dried lentils, vegetable broth, canned diced tomatoes, and your choice of herbs and spices.\n5. Bring the mixture to a boil, then reduce the heat and let it simmer for about 30 minutes, until the lentils are tender.\n6. Season with salt and pepper to taste.\n7. Serve the lentil soup hot and garnish with fresh herbs.\n8. Enjoy a comforting and nutritious vegan soup for lunch."
					},
				],
			},
			{
				mealId: "3",
				name: "Dinner",
				description: "Vegan dinner options for adults above age 30",
				recipes: [
					{
						name: "Chickpea Curry with Brown Rice",
						instructions: "1. In a large pot, heat coconut oil over medium heat.\n2. Add diced onions, minced garlic, and grated ginger to the pot.\n3. Sauté until the onions become translucent and fragrant.\n4. Stir in curry powder, turmeric, cumin, and coriander.\n5. Add drained and rinsed chickpeas, diced tomatoes, and coconut milk.\n6. Simmer the curry for about 20-25 minutes, allowing the flavors to meld together.\n7. Season with salt and pepper to taste.\n8. Serve the chickpea curry over cooked brown rice.\n9. Garnish with fresh cilantro and a squeeze of lime juice.\n10. Enjoy a hearty and flavorful vegan curry for dinner."
					},
					{
						name: "Stuffed Bell Peppers with Quinoa and Black Beans",
						instructions: "1. Preheat the oven to 375°F (190°C).\n2. Cut the tops off bell peppers and remove the seeds and membranes.\n3. In a skillet, heat olive oil over medium heat.\n4. Sauté diced onions and minced garlic until they soften.\n5. Add cooked quinoa, black beans, corn kernels, diced tomatoes, and your choice of herbs and spices.\n6. Stir everything together and cook for a few more minutes.\n7. Spoon the quinoa and black bean mixture into the bell peppers.\n8. Place the stuffed bell peppers in a baking dish and cover with foil.\n9. Bake for 25-30 minutes, or until the peppers are tender.\n10. Serve the stuffed bell peppers as a satisfying and protein-rich vegan dinner."
					},
				],
			},
		],
	},
	
];
const restaurantPlans = [
	{
		restaurantPlanId: 1,
		restaurants: [
			{
				restaurantId: "1",
				Name: "Vegetarian Delights",
                Location: "kottayam",
				Menu:[
					{
						name: "Appetizers",
                        items: "\n1. spinach and Artichoke Dip: Creamy spinach and artichoke dip served with crispy tortilla chips.\n2. Bruschetta: Toasted baguette slices topped with fresh tomatoes, basil, and garlic.\n3. Vegetable Spring Rolls: Crispy spring rolls filled with mixed vegetables and served with sweet chili sauce.\n",
                        name: "Soups and Salads",

                        items: "\n1Roasted Butternut Squash Soup: Velvety soup made with roasted butternut squash, spices, and a touch of cream.\n2Greek Salad: Fresh mixed greens, tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese tossed in a lemon-herb vinaigrette.\n3Quinoa and Kale Salad: Nutritious salad with quinoa, kale, cherry tomatoes, roasted almonds, and a citrus vinaigrette.\n",
                        name: "Main Courses",

                        items: "\n1Eggplant Parmesan: Breaded and baked eggplant slices topped with marinara sauce and melted mozzarella cheese, served with spaghetti.\n2Chickpea Curry: Flavorful curry made with chickpeas, tomatoes, onions, and a blend of aromatic spices, served with steamed basmati rice.\n3Portobello Mushroom Burger: Grilled portobello mushroom cap marinated in balsamic glaze, topped with lettuce, tomato, red onion, and served on a whole wheat bun with a side of sweet potato fries.\n",
                        name: "Pasta and Noodles",

                        items: "\n1Pesto Pasta: Linguine pasta tossed in a homemade basil pesto sauce with cherry tomatoes and Parmesan cheese.\n2Vegetable Pad Thai: Stir-fried rice noodles with tofu, bean sprouts, bell peppers, carrots, and peanuts in a tangy tamarind sauce.\n",
                        name: "Desserts:",

                        items: "\n1Chocolate Avocado Mousse: Decadent and creamy chocolate mousse made with avocado, cocoa powder, and a hint of sweetness.\n2Vegan Apple Crisp: Baked apple slices topped with a crunchy oat and nut crumble, served with vegan vanilla ice cream.\n3Coconut Mango Panna Cotta: Smooth and creamy coconut milk panna cotta infused with fresh mango flavors.\n"


			        },
		       ],
	       },
		],
	},
];
