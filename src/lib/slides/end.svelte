<script lang="ts">
  const items = [
    "Pin your dependency versions.",
    "Check the release age of the package (42 Days).",
    "Do your packages have dependents, is it worth keeping them.",
    "Use a package manager like Bun or PNPM.",
    "Use less pre-made github workflows.",
    "Switch off automatic updates.",
    "Disable scripts.",
    "Use a vault for secrets.",
  ]
</script>

<section class="p-8 w-screen h-screen flex flex-col gap-20">
  <h2 class="text-center font-bold leading-tight">What can you do on Monday!</h2>
  <ol class="pl-40 mx-auto space-y-8 text-4xl">
    {#each items as item, i}
      <li class="flex items-center gap-6">
        <span class="w-12 text-2xl tabular-nums text-purple">0{i}</span>
        {item}
      </li>
    {/each}
  </ol>
</section>
