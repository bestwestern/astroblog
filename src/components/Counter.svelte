<script lang="ts">
	let count=0;
	let postCount="..";
	function add() {
		count += 1;
	}
	
	function subtract() {
		count -= 1;
	}
	import { onMount } from "svelte";
	const endpoint ='https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json'
	onMount(async function () {
  const response = await fetch(endpoint);
  const data = await response.json();
  const Results=data.Results;
  postCount=Results.length;
  console.log(data);
});
</script>

<div class="counter">
	<button on:click={subtract}>-</button>
	<pre>{count}</pre>
	<button on:click={add}>+</button>
</div>
<pre>{postCount}</pre>
<div class="message">
	<slot />
</div>

<style>
	.counter {
		display: grid;
		font-size: 2em;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		margin-top: 2em;
		place-items: center;
	}

	.message {
		text-align: center;
	}
</style>
