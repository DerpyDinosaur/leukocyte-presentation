<script>
    let { data } = $props();
    const Slide = $derived(data.dynamicComponent);
</script>

{#if data.dynamicComponent}
    <Slide />
{/if}
