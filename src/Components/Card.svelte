<script>
    export let image;
    export let headerText;
    export let bodyText;
    export let link = "/";
    export let buttonColor;
</script>

<div class="flex flex-col m-3 bg-tertiary" style="height: 760px; width: 582px; filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05));">
    <img src="{image}" alt="CardImage" class="w-full object-top object-cover overflow-hidden" style="max-height: 25.625rem"/>
    <h2 class="text-2 text-gray-primary" style="margin: 2rem 1.125rem 0.5rem 1.125rem">{headerText}</h2>
    <p class="flex-1 text-1 text-gray-primary" style="margin: 1.125rem"> {bodyText}</p>
    <a class="m-4 p-2-4 w-fit rounded-full bg-secondary" style="color: {buttonColor}" href="{link}">Learn More</a>
</div>

<style>
</style>