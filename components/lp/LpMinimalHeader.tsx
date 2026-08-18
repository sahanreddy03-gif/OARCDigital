import MinimalNav from "../MinimalNav";

/* LP pages use the same subtle corner menu mark as the rest of the site —
   no logo bar, no permanent header. */
export default function LpMinimalHeader() {
  return <MinimalNav theme="light" />;
}
