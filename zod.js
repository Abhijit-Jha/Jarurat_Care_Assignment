const z = require("zod");

const InputSchema = z.object({
    name: z.string("Name is required and cannot be empty"),
    description: z.string("Description is required and cannot be empty"),
    price: z.number().positive("Price must be a positive number")
});

module.exports = InputSchema;
