<script lang="ts">
  const timeline = [
    {
      month: "September 2025",
      title: "NPM Maintainer Phishing",
      note: "Original Shai-Hulud",
    },
    {
      month: "October 2025",
      title: "GlassWorm",
      note: "First VS Code extension worm",
    },
    {
      month: "November 2025",
      title: "Shai-Hulud 2.0",
      note: "",
    },
    {
      month: "March 2026",
      title: "LiteLLM + More",
      note: "TeamPCP",
    },
    {
      month: "April 2026",
      title: "Bitwarden CLI",
      note: "Mini Shai-Hulud",
    },
    {
      month: "May 2026",
      title: "TanStack, Nx Console",
      note: "durabletask, actions-cool",
    },
    {
      month: "June 2026",
      title: "Red Hat 'Miasma'",
      note: "@redhat-cloud-services npm scope",
    },
    {
      month: "July 2026",
      title: "AsyncAPI 'Miasma'",
      note: "npm v12 released",
    },
    {
      month: "August 2026",
      title: "ChainDrop",
      note: "keyv, flat-cache, cache-manager",
    },
    {
      month: "September 2026",
      title: "actions-cool/issues-helper",
      note: "re-enabled with mini shai-hulud"
    }
  ];
  const perRow = Math.ceil(timeline.length / 2);
  const rows = [timeline.slice(0, perRow), timeline.slice(perRow)];
</script>

{#snippet card(month: string, title: string, note: string)}
  <div class="w-full flex flex-col justify-center h-30 rounded-lg text-center">
    <time class="text-sm font-semibold uppercase tracking-wide text-gray-500">
      {month}
    </time>
    <p class="mt-1 wrap-break-word text-2xl font-semibold leading-tight text-gray-900">
      {title}
    </p>
    {#if note}
      <p class="mt-1 wrap-break-word text-gray-600">{note}</p>
    {/if}
  </div>
{/snippet}

<section class="p-6">
  <h2 class="w-full text-center text-5xl font-bold leading-tight">
    The Infection Spreads!
  </h2>

  <div class="mt-50 flex flex-col gap-40">
    {#each rows as row}
      <ol
        class="relative grid"
        style="grid-template-columns: repeat({perRow}, minmax(0, 1fr))"
      >
        <!-- line through the dots -->
        <div class="absolute inset-x-0 top-3 h-1 -translate-y-1/2 bg-purple"></div>

        {#each row as item}
          <li class="relative flex min-w-0 flex-col items-center px-2">
            <span class="z-10 h-6 w-6 shrink-0 rounded-full border-4 border-white bg-purple"></span>
            <div class="h-4 w-0.5 bg-gray-300"></div>
            {@render card(item.month, item.title, item.note)}
          </li>
        {/each}
      </ol>
    {/each}
  </div>
</section>
