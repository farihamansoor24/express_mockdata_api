// seed_data/seedDatabase.js
import  connectDB  from '../config/db.js';
import { posts } from './postsData.js';
import { products } from './productsData.js';
import { users } from './usersData.js';
import { recipes } from './recipesData.js';

async function seedDatabase() {
    try {
        const db = await connectDB();
        console.log("Starting database seeding...");

        // 1. Posts collection
        const postsCollection = db.collection('posts');
        await postsCollection.deleteMany({}); // if data already exists, delete it first
        if (posts && posts.length > 0) {
            await postsCollection.insertMany(posts);
            console.log(`Successfully seeded ${posts.length} posts.`);
        }

        // 2. Products collection
        const productsCollection = db.collection('products');
        await productsCollection.deleteMany({});
        if (products && products.length > 0) {
            await productsCollection.insertMany(products);
            console.log(`Successfully seeded ${products.length} products.`);
        }

        // 3. Users collection
        const usersCollection = db.collection('users');
        await usersCollection.deleteMany({});
        if (users && users.length > 0) {
            await usersCollection.insertMany(users);
            console.log(`Successfully seeded ${users.length} users.`);
        }

        // 4. Recipes collection
        const recipesCollection = db.collection('recipes');
        await recipesCollection.deleteMany({});
        if (recipes && recipes.length > 0) {
            await recipesCollection.insertMany(recipes);
            console.log(`Successfully seeded ${recipes.length} recipes.`);
        }

        console.log("Database seeding completed successfully! 🎉");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
}

seedDatabase();