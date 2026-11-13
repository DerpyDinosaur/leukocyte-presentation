<script lang="ts">
    import { onMount } from "svelte";
    import { asset } from "$app/paths";
    import * as THREE from "three";
    import { AsciiEffect } from "three/addons/effects/AsciiEffect.js";
    import { OrbitControls } from "three/addons/controls/OrbitControls.js";
    import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

    let container: any;
    let text: any;

    onMount(() => {
        const w = () => container.clientWidth || window.innerWidth;
        const h = () => container.clientHeight || window.innerHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, w() / h(), 0.1, 100);
        camera.position.set(2.2, 1.1, 3.6);

        scene.add(new THREE.HemisphereLight(0xffffff, 0x222233, 0.8));
        const key = new THREE.DirectionalLight(0xffffff, 2.4);
        key.position.set(3, 4, 5);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0xffffff, 1.2);
        rim.position.set(-4, 1, -3);
        scene.add(rim);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(w(), h());

        const effect = new AsciiEffect(renderer, " .:-+*=%@#", {
            invert: true,
            resolution: 0.15,
        });
        effect.setSize(w(), h());
        effect.domElement.style.color = "black";
        effect.domElement.style.backgroundColor = "transparent";
        container.appendChild(effect.domElement);

        const controls = new OrbitControls(camera, effect.domElement);
        controls.enableDamping = true;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.5;

        const materials = {
            Membrane: new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                roughness: 0.4,
                transparent: true,
                opacity: 0.4,
                side: THREE.DoubleSide,
                depthWrite: false,
            }),
            Nucleus: new THREE.MeshStandardMaterial({
                color: 0xffffff,
                roughness: 0.6,
                emissive: 0x666666,
            }),
            Granules: new THREE.MeshStandardMaterial({
                color: 0xffffff,
                roughness: 0.5,
            }),
        };

        let cell: any;
        new OBJLoader().load(
            asset("leukocyte.obj"),
            (obj) => {
                obj.traverse((o) => {
                    if (!o.isMesh) return;
                    const mat =
                        materials[o.name] ?? materials[o.material?.name];
                    if (mat) o.material = mat;
                    o.renderOrder = o.name === "Membrane" ? 2 : 1;
                });
                cell = obj;
                scene.add(cell);

                requestAnimationFrame(() =>
                    requestAnimationFrame(() => {
                        container.style.opacity = "1";
                        text.style.opacity = "1";
                    }),
                );
            },
            undefined,
            (err) => console.error("Failed to load leukocyte.obj", err),
        );

        renderer.setAnimationLoop(() => {
            controls.update();
            effect.render(scene, camera);
        });

        const resize = () => {
            camera.aspect = w() / h();
            camera.updateProjectionMatrix();
            renderer.setSize(w(), h());
            effect.setSize(w(), h());
        };
        const ro = new ResizeObserver(resize);
        ro.observe(container);

        return () => {
            ro.disconnect();
            renderer.setAnimationLoop(null);
            controls.dispose();
            container.removeChild(effect.domElement);
            cell?.traverse((o) => o.geometry?.dispose());
            Object.values(materials).forEach((m) => m.dispose());
            renderer.dispose();
        };
    });
</script>

<section class="p-10 w-screen h-screen grid gap-10 grid-cols-[1fr_1fr]">
    <div
        bind:this={container}
        class="flex items-center justify-center opacity-0 transition-opacity duration-1000 ease-out"
    ></div>
    <div
        bind:this={text}
        class="w-full h-full flex flex-col justify-center opacity-0 transition-opacity duration-1000 ease-out"
    >
        <h1>leukocyte</h1>
        <h1>for supply-chain attacks</h1>
    </div>
</section>
