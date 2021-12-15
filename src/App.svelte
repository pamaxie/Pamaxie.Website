<script>
    import Router from "page";

    import NavMenu from './Sections/Shared/NavMenu.svelte'
    import Footer from './Sections/Shared/Footer.svelte'
    import HomePage from './Pages/Home.svelte'
    import DataPrivacy from "./Pages/Features/DataPrivacy.svelte";
    import DataDetection from "./Pages/Features/DataDetection.svelte";
    import SafeSpace from "./Pages/Features/SafeSpace.svelte";
    import Improvements from "./Pages/Features/Improvements.svelte";
    import Moderation from "./Pages/Features/Moderation.svelte";
    import OpenSource from "./Pages/Features/OpenSource.svelte";

    let page;

    Router('/', () => page = HomePage);
    Router('/DataPrivacy', () => page = DataPrivacy);
    Router('/DataDetection', () => page = DataDetection);
    Router('/SafeSpace', () => page = SafeSpace);
    Router('/Improvements', () => page = Improvements);
    Router('/Moderation', () => page = Moderation);
    Router('/OpenSource', () => page = OpenSource);

    Router.start();
</script>

<main>
    <NavMenu></NavMenu>
    <svelte:component this={page}/>
    <Footer></Footer>
</main>

<style>
</style>