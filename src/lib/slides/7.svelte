<script lang="ts">
  const items = ["Infect Packages", "Steal Secrets", "Leak", "Repeat"];
</script>

<section class="p-8">
  <h2 class="text-center font-bold leading-tight">Shai-Hulud</h2>

  <div class="mt-50 flex justify-center items-center">
    <ol class="space-y-8 border-l-2 border-purple pl-12 text-6xl">
      {#each items as item, i}
        <li class="flex items-center gap-6">
          <span class="text-4xl tabular-nums text-purple">0{i}</span>{item}
        </li>
      {/each}
    </ol>
  </div>
</section>
