const z = require("zod");
const schema = z.string().email();
const ans = schema.safeParse("quadpod04@abcd.com");
console.log(ans)
if(ans.success){
  console.log("check passed");
} else {
  console.log("check failed");
}