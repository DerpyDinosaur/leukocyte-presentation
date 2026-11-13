<script lang="ts">
  const agendas = [
    "The Infection Spreads",
    "Know Your Pathogens",
    "Leukocyte",
    "What can you do on Monday!",
    "Questions"
  ]
</script>

<section class="pl-20 h-screen w-screen flex gap-x-20 justify-center items-center">
  <h2 class="text-6xl font-bold leading-tight">
    What's on the agenda?
  </h2>

  <ol class="space-y-8 border-l-2 border-purple pl-16 text-4xl">
    {#each agendas as item, i}
      <li class="flex items-baseline gap-6">
        <span class="w-12 text-2xl tabular-nums text-purple">0{i}</span>
        {item}
      </li>
    {/each}
  </ol>
</section>
