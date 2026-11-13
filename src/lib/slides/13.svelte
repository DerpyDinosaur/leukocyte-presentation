<script lang="ts">
  import DemoImage from "../assets/leuko-demo.png";
  let open = $state(false);

  function handle_onclick(e:any) {
    open = !open;
  }
</script>

<svelte:window onclick={handle_onclick} />

<section
  class="w-screen h-screen flex justify-center items-center bg-purple text-white"
>
  <h1 class:hidden={open} class="text-center font-bold leading-tight">DEMO TIME!</h1>
  <div class:hidden={!open}>
    <img src={DemoImage} alt="demo" />
  </div>
</section>
