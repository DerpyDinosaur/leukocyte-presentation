<script lang="ts">
  const headers = ["Vector", "Process", "Example"];
  const data = [
    {
      vector: "Install Scripts + Payload",
      process: "npm i (preinstall/postinstall/building.gyp)",
      example: "Axios, ChainDrop, Miasma",
    },
    {
      vector: "Typosquat / Injected Dep",
      process: "^",
      example: "Mastra -> easy-day-js",
    },
    {
      vector: "Import / Interpreter Payload",
      process: "Executes with interpreter import",
      example: "LiteLLM, Telnyx",
      href: "https://peps.python.org/pep-0451/",
    },
    {
      vector: "CI/CD pipeline compromise",
      process: "Build runner (can run anything)",
      example: "TanStack, AsyncAPI",
      href: "https://github.com/oven-sh/setup-bun",
    },
    {
      vector: "Editor extension",
      process: "IDE host process",
      example: "GlassWorm, Nx Console",
      href: "",
    },
  ];
</script>

<section class="p-8">
  <h2 class="text-center font-bold leading-tight">Know your pathogens!</h2>

  <div class="mt-30 w-full flex flex-col gap-20 justify-center items-center">
    <table
      class="w-3/4 text-3xl text-left border-collapse border-spacing-20 [&_th]:p-1 [&_td]:p-1"
    >
      <thead class="border-b-2 border-purple">
        <tr>
          {#each headers as header, i}
            <th class:text-right={i + 1 === headers.length}>{header}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each data as { vector, process, example, href }, i}
          <tr class="border-b border-purple/50">
            {#if href}
              <td><a {href} target="_blank">{vector}</a></td>
            {:else}
              <td>{vector}</td>
            {/if}
            <td>{process}</td>
            <td class="text-right">{example}</td>
          </tr>
        {/each}
      </tbody>
    </table>

    <div class="w-3/4 flex gap-4 flex-col justify-center items-center text-4xl">
      <p class="font-bold">Targets Everything & Anything</p>
      <ul>
        <li>NPM / GitHub tokens</li>
        <li>Cloud keys</li>
        <li>K8s / Vault material</li>
        <li>SSH keys</li>
        <li>CI secrets</li>
      </ul>
    </div>
  </div>
</section>
