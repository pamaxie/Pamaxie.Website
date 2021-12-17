<script>
    export let id;

    //Clicking dropdown button will toggle display and prevent outside click from triggering
    function dropdown(e) {
        document.getElementById(id + "Content").classList.toggle('hidden');
        e.stopPropagation();
    }

    //Closes the menu if outside clicks are triggered
    window.onclick = function(e) {
        if (!e.target.matches(id + "Button")) {
            let dropdown = document.getElementById(id + "Content")
                if (!dropdown.classList.contains('hidden')) {
                    dropdown.classList.add('hidden');
                }
        }
    }
</script>

<div class="relative inline-block">
    <button id="{id}Button" on:click={dropdown} class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-primary border-b border-gray-100 md:p-0 md:w-auto md:border-0 focus:outline-none">
        <slot name="InnerHTML"></slot>
    </button>
    <div id="{id}Content" class="absolute w-40 bg-secondary rounded text-1 text-gray-primary list-none shadow z-50 hidden">
        <slot name="Content"></slot>
    </div>
</div>

<style>
</style>