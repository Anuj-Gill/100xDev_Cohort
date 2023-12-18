const z = require("zod");
const schema = z.string().email();
const ans = schema.safeParse("quadpod04@gmail");
console.log(ans)