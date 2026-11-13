<script lang="ts">
    import favicon from "#lib/assets/favicon.svg";
    import { goto } from "$app/navigation";
    import "../layout.css";
    import type { LayoutProps } from "./$types";

    let { children, params }: LayoutProps = $props();

    function change_slide(e: any) {
        let slide = Number(params.slug) || 0;
        if (e.key === "ArrowRight") {
            slide++;
        }

        if (e.key === "ArrowLeft") {
            if (slide === 0) return;
            slide--;
        }
        goto(`/${slide}`);
    }
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<svelte:window onkeydown={change_slide} />

{@render children?.()}
