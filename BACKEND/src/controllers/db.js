const { faker } = require("@faker-js/faker");
const { Product, User } = require("../models/index");
const { hashPassword } = require("../services/auth");
const cleanDB = require("../services/db");

// Generate Users
let seededUsers = [];
let seededProducts = [];
async function createUsers(number) {
  try {
    const numberOfUsers = number || 5;

    for (let user = 0; user < numberOfUsers; user++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const email = faker.internet.email({ firstName, lastName });
      const password = await hashPassword("1234");
      const isAdmin = faker.datatype.boolean();

      const createdUser = await User.create({
        firstName,
        lastName,
        email,
        password,
        isAdmin,
      });
      seededUsers.push(createdUser);
    }
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
}

// Generate Products

async function generateProducts(number) {
  const numberOfProducts = number || 10;
  try {
    for (let product = 0; product < numberOfProducts; product++) {
      const name = faker.commerce.productName();
      const description = faker.commerce.productDescription();
      const available = faker.datatype.boolean();

      const generateColors = () => {
        const colors = [];
        const randomNum = Math.floor(Math.random() * 3) + 1;
        for (let color = 0; color < randomNum; color++) {
          colors.push(faker.color.human());
        }
        return colors;
      };
      const colors = generateColors();

      const oldPrice = faker.commerce.price({ min: 20, max: 200 });

      const isNewPrice = faker.datatype.boolean();

      let newPrice;
      if (isNewPrice) {
        newPrice = faker.commerce.price({ min: 18, max: oldPrice });
      }

      const category = faker.helpers.arrayElement(["men", "women"]);
      const subCategories = faker.helpers.arrayElement([
        "top",
        "cargo pants",
        "sweater",
      ]);

      const createdProduct = await Product.create({
        name,
        description,
        available,
        colors,
        old_price: oldPrice,
        new_price: newPrice,
        category,
        subCategories,
      });
      seededProducts.push(createdProduct);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
async function runSeeder(req, res, next) {
  try {
    const { userNumber, productNumber } = req.body;
    await createUsers(userNumber);
    await generateProducts(productNumber);
    return res
      .status(200)
      .json({ users: seededUsers, products: seededProducts });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function handleDbCleanUp(req, res, next) {
  try {
    await cleanDB();
    res.status(200).send("Successfully cleaned DB");
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = { runSeeder, handleDbCleanUp };
