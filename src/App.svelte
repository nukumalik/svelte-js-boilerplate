<script>
  import router from 'page';

  // Components
  import Navbar from 'components/Navbar';

  // Pages
  import Home from 'pages/Home';
  import About from 'pages/About';
  import GitHub from 'pages/GitHub';
  import NotFound from 'pages/404';

  // Global Variables
  let page;

  // Routes
  router('/', () => (page = Home));
  router('/about', () => (page = About));
  router('/github', () => (page = GitHub));
  router('*', () => (page = NotFound));
  router.start();
</script>

<Navbar />
<svelte:component this={page} />
