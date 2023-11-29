export { renderers } from "../renderers.mjs";
export { onRequest } from "../_empty-middleware.mjs";

const page = () => import("./pages/generic_1de18fbe.mjs").then((n) => n.g);

export { page };
