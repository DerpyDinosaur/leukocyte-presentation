import { error, redirect } from "@sveltejs/kit";
import type { Component } from "svelte";
import type { PageLoad } from "./$types";

type SlideModule = { default: Component };

const modules = import.meta.glob<SlideModule>("#lib/slides/*.svelte");
const presentation_end = "/src/lib/slides/end.svelte";

const SLIDE_COUNT: number = Object.keys(modules).length;

export const load: PageLoad = async ({ params }) => {
  let slide_number = Number(params.slug);
  let component_path = `/src/lib/slides/${params.slug}.svelte`;

  if (params.slug === "3") {
    component_path = `/src/lib/slides/1.svelte`;
  }

  let match: (() => Promise<SlideModule>) | undefined = modules[component_path];

  if (slide_number > SLIDE_COUNT) {
    redirect(307, "/0");
  } else if (slide_number > SLIDE_COUNT - 1) {
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
};
