<script lang="ts">
  const items = [
    {
      title: "Aikido Safe Chain (open source)",
      message: "Local proxy wrapping npm/yarn/pnpm/pip/uv/poetry, threat-feed lookups, min package age."
    },
    {
      title: "Socket Firewall / Package Firewall",
      message: "Behavioural analysis, CLI wrapper or proxy."
    },
    {
      title: "Install Safe",
      message: "One config line, and every npm install skips packages with known vulnerabilities."
    },
    {
      title: "Trivy (open source)",
      message: "Use Trivy to find vulnerabilities (CVE) & misconfigurations (IaC) across code repositories, binary artifacts, container images, and Kubernetes clusters."
    },
    {
      title: "Snyk",
      message: "I DO IT ALL, but i cost lots of money"
    }
  ]
</script>

<section class="p-8 flex flex-col gap-20 justify-center items-center">
  <h2 class="text-center font-bold leading-tight">Leukocyte</h2>

  <div class="w-3/4 flex flex-col gap-10 justify-start">
    <h3>Honorable Mentions</h3>
    <div class="grid grid-cols-2 gap-10">
      {#each items as {title, message}}
        <p class="text-3xl font-bold">{title}</p>
        <p class="text-2xl">{message}</p>
      {/each}
    </div>
  </div>
</section>
