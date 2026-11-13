<script lang="ts">
  const items = [
    {
      title: "NPM v12",
      message: "Dependency install scripts off by default, also blocks implicit node-gyp builds & git/remote dependents are opt-in"
    },
    {
      title: "Cooldown",
      message: "Dependabot cooldown default announced Jul 2026"
    },
    {
      title: "CI/CD",
      message: "GitHub platform hardening for risky workflow triggers and caches"
    },
    {
      title: "Tokens and 2FA",
      message: "Github and NPM have removed legacy tokens and are pushing the use of passkeys/WebAuthn"
    }
  ]
</script>

<section class="p-8 flex flex-col gap-30 justify-center items-center">
  <h2 class="text-center font-bold leading-tight">What got better in 2026</h2>

  <div class="mx-30 pl-16 text-4xl grid gap-10 grid-cols-[auto_auto_1fr] items-baseline border-l-2 border-purple">
    {#each items as item, i}
      <div class="grid grid-cols-subgrid items-baseline col-span-3 gap-x-2">
        <p class="mr-5 text-2xl tabular-nums text-purple">0{i}</p>
        <p class="font-semibold">{item.title}:</p>
        <p>{item.message}</p>
      </div>
    {/each}
  </div>

  <div>
    <p class="text-3xl">Hardening is great but we aren't covering enough.</p>
  </div>
</section>
