<script>
    export let headerText;
    export let bodyText;
    export let image;
</script>

<div class="flex flex-row h-screen-24 bg-secondary">
    <div class="flex-1 m-8">
        <img src="../../img/pamaxie-text-logo.png" alt="Title" class="h-32 object-contain"/>
        <h1 class="m-2-8 text-4xl text-gray-primary">{headerText}</h1>
        <p class="m-2-8 text-2 text-gray-primary">
            <slot></slot>
        </p>
    </div>
    <img src="{image}" alt="image" class="flex-2-5 h-full object-cover overflow-hidden">
</div>

<style>

</style>