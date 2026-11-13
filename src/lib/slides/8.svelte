<script lang="ts">
    // const headers = ["Vector", "Process", "Example", "Target"];
    const headers = ["Vector", "Process", "Example"];
    const data = [
        {
            vector: "Install Scripts + Payload",
            process: "npm i (preinstall/postinstall/building.gyp)",
            example: "Axios, ChainDrop, Miasma",
            target: "All secrets within the environment",
        },
        {
            vector: "Import/Interpreter Payload",
            process: "Running on import of file",
            example: "LiteLLM, Telnyx",
            target: "All secrets within the environment",
        },
        {
            vector: "CI/CD pipeline compromise",
            process: "Build runner (can run anything)",
            example: "TanStack, AsyncAPI",
            target: "All secrets within the environment",
        },
        {
            vector: "VS Code Extension",
            process: "IDE utilize host process",
            example: "GlassWorm, Nx Console",
            target: "All secrets within the environment",
        },
    ];
</script>

<section class="p-8">
    <h2 class="text-center font-bold leading-tight">Know your pathogens!</h2>

    <div class="mt-30 w-full flex justify-center items-center">
        <table
            class="w-3/4 text-3xl text-left border-collapse border-spacing-20 [&_th]:p-1 [&_td]:p-1"
        >
            <thead class="border-b-2 border-purple">
                <tr>
                    {#each headers as header, i}
                        <th class:text-right={i + 1 === headers.length}
                            >{header}</th
                        >
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each data as { vector, process, example, target }, i}
                    <tr class="border-b border-purple/50">
                        <td>{vector}</td>
                        <td>{process}</td>
                        <td>{example}</td>
                        <!-- <td class="text-right">{target}</td> -->
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</section>
