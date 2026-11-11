import { error, redirect } from "@sveltejs/kit";

const modules = import.meta.glob("#lib/slides/*.svelte");
const presentation_end = "/src/lib/slides/end.svelte";

export async function load({ params }) {
  let component_path = `/src/lib/slides/${params.slug}.svelte`;

  if (params.slug === "3") {
    component_path = `/src/lib/slides/1.svelte`;
  }

  let match = modules[component_path];

  if (Number(params.slug) > (Object.keys(modules).length + 1)) {
    redirect(307, "/1")
  } else if (Number(params.slug) > Object.keys(modules).length) {
    match = modules[presentation_end];
  }

  if (!match) {
    error(404, `Component "${params.slug}" not found`);
  }

  const component = await match();

  return {
    dynamicComponent: component.default,
    slug: params.slug,
  };
}
