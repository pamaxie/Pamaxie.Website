<script>
    import Router from "page";

    import NavMenu from './Sections/Shared/NavMenu.svelte'
    import Footer from './Sections/Shared/Footer.svelte'

    let page;

    //Pages
    import HomePage from './Pages/Home.svelte'
    Router('/', () => page = HomePage);

    //Feature Pages
    import DataPrivacy from "./Pages/Features/DataPrivacy.svelte";
    Router('/DataPrivacy', () => page = DataPrivacy);
    import DataDetection from "./Pages/Features/DataDetection.svelte";
    Router('/DataDetection', () => page = DataDetection);
    import SafeSpace from "./Pages/Features/SafeSpace.svelte";
    Router('/SafeSpace', () => page = SafeSpace);
    import Improvements from "./Pages/Features/Improvements.svelte";
    Router('/Improvements', () => page = Improvements);
    import Moderation from "./Pages/Features/Moderation.svelte";
    Router('/Moderation', () => page = Moderation);
    import OpenSource from "./Pages/Features/OpenSource.svelte";
    Router('/OpenSource', () => page = OpenSource);

    //Error Pages
    import Error401 from "./Pages/Error/401.svelte"
    import Error403 from "./Pages/Error/403.svelte"
    import Error404 from "./Pages/Error/404.svelte"
    import Error502 from "./Pages/Error/502.svelte"
    import Error503 from "./Pages/Error/503.svelte"

    Router.start();
</script>

<main>
    <NavMenu/>
    <svelte:component this={page}/>
    <Footer/>
</main>

<style>
</style>