<script>
  import { onMount } from 'svelte';
  import { data, fetchData, isLoading } from '../../store/github';
  import axios from 'axios';

  let currentData = [];
  data.subscribe((values) => (currentData = values));

  console.log({ currentData });

  // Hooks
  onMount(() => {
    fetchData();
  });
</script>

<style lang="scss" src="./style.scss">
</style>

<h1 class="title-page">GitHub Page</h1>

{#if $isLoading}
  <h1>Loading...</h1>
{:else}
  <div class="wrapper">
    {#each currentData as item}
      <div class="card">
        <img alt="icon" src={item?.avatar_url} />
        <h1>{item?.login}</h1>
      </div>
    {/each}
  </div>
{/if}
