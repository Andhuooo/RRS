const mongoose = require("mongoose");
const { MealPlan } = require("./models");
const { DB_URL } = require("./config");
mongoose
	.connect(DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(async () => {
		console.log("Starting seeding...");
		for (let i = 0; i < mealPlans.length; i++) {
			const newMealPlan = mealPlans[i];
			const mealPlanExist = await MealPlan.findOne({
				mealPlanId: newMealPlan.mealPlanId,
			});
			if (!mealPlanExist) {
				const createNewMealPlan = new MealPlan(newMealPlan);
				await createNewMealPlan.save();
			}
		}
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
];
