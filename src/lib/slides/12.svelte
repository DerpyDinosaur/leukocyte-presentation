<script lang="ts">
  const goals = [
    "Aggressively enforce good security habits",
    "Support multiple developer ecosystems, Go, Rust, Python, etc...",
    "Good user experience, fast, reliable and no extra steps to BAU",
    "Static analysis",
    "Free Open Source"
  ]

  const non_goals = [
    "Dynamic analysis",
    "Runtime protection",
    "Prevent typosquatting"
  ]
</script>

<section class="p-8 flex flex-col gap-20">
  <h2 class="text-center font-bold leading-tight">Leukocyte</h2>

  <div class="flex flex-col gap-10 mx-30">
    <p class="text-left text-4xl font-bold">Goals</p>
    <div class="mx-10 pl-16 text-3xl grid gap-10 grid-cols-[auto_1fr] items-baseline border-l-2 border-purple">
      {#each goals as goal, i}
        <div class="grid grid-cols-subgrid items-baseline col-span-3 gap-x-2">
          <p class="mr-5 text-2xl tabular-nums text-purple">0{i}</p>
          <p class="font-semibold">{goal}</p>
        </div>
      {/each}
    </div>

    <p class="text-left text-4xl font-bold">Wont do <span class="text-lg">(yet)</span></p>
    <div class="mx-10 pl-16 text-3xl grid gap-10 grid-cols-[auto_1fr] items-baseline border-l-2 border-purple">
      {#each non_goals as goal, i}
        <div class="grid grid-cols-subgrid items-baseline col-span-3 gap-x-2">
          <p class="mr-5 text-2xl tabular-nums text-purple">0{i}</p>
          <p class="font-semibold">{goal}</p>
        </div>
      {/each}
    </div>
  </div>

</section>
