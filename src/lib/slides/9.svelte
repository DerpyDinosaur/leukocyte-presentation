<script lang="ts">
  const items = [
    {
      title: "Scripts",
      message: "NPM enables pre/post install scripts by default"
    },
    {
      title: "Cooldown",
      message: "Ignoring the time of release and installing too early"
    },
    {
      title: "Trust",
      message: "Provenance validation should occur all the time every time"
    },
    {
      title: "Auditing",
      message: "Audit commands should run before installation and not be an afterthought"
    },
    {
      title: "Reactionary",
      message: "Settle for proactive prevention rather than reactive fire fighting"
    },
    {
      title: "Versions",
      message: "Version pinning should be the default install method"
    }
  ]
</script>

<section class="p-8 flex flex-col gap-30 justify-center items-center">
  <h2 class="text-center font-bold leading-tight">What are we doing wrong</h2>

  <div class="mx-30 pl-16 text-4xl grid gap-10 grid-cols-[auto_auto_1fr] items-baseline border-l-2 border-purple">
    {#each items as item, i}
      <div class="grid grid-cols-subgrid items-baseline col-span-3 gap-x-2">
        <p class="mr-5 text-2xl tabular-nums text-purple">0{i}</p>
        <p class="font-semibold">{item.title}:</p>
        <p>{item.message}</p>
      </div>
    {/each}
  </div>

  <a target="_blank" href="https://2025.stateofjs.com/en-US/other-tools/#runtimes" class="w-full text-right font-bold">Ref: Runtimes</a>
</section>
