<script lang="ts">
	import { flip } from 'svelte/animate';
	import { RangeSlider } from '@skeletonlabs/skeleton';
	import { tooltip } from '@skeletonlabs/skeleton';
	import { error } from '@sveltejs/kit';
	import { marked } from 'marked';
  	let promptInput: any;
	let temperatureInput = 0.6;
	let result = '';
	let loading = false;
	let apiKey = '';
	let option = '';
	let data = '';
	let sysPrompt = `Aim : 
	a) aim of question 1
	b) aim of question 2
	and so on

	Algorithm:
	a)
	b)
	and so on (depending on number of questions)

	Program:
	generate python program for each question.
	a)
	b)
	and so on

	Conclusion:
	Give 1 conclusion generalizing all questions
	`
	async function onSubmit(event) {
		event.preventDefault();
		loading = true;
		console.log(option)
		if (promptInput != '') {
			if (option = 'python-lab'){
				console.log('python lab')
			try {
				//const apiKey = 'AIzaSyDu4RlVwMdvXzhpkrUX1r8oQ4TxWCBKKtI';
				const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
					method: 'POST',
     			headers: { 'Content-Type': 'application/json' },
      			body: JSON.stringify({
      "contents": [{
        "parts":[{
          "text": sysPrompt+ promptInput}]}]}),
				});
				console.log(response);

				data = await response.json();
				data = data.candidates[0].content.parts[0].text;
				// data = marked.parse(data);
				console.log(data);
				if (response.status !== 200) {
					throw data.error || new Error(`Request failed with status ${response.status}`);
				} else {
					loading = false;
				}
				result = data.result;
			} catch (error) {
				// Consider implementing your own error handling logic here
				console.error(error);
			}}
			else{
				console.log('general')
				try {
					const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
					method: 'POST',
     			headers: { 'Content-Type': 'application/json' },
      			body: JSON.stringify({
      "contents": [{
        "parts":[{
          "text": "hello"}]}]}),
				});
				console.log(response);

				let data = await response.json();
				data = data.candidates[0].content.parts[0].text;
				// data = marked.parse(data);
				console.log(data);
				if (response.status !== 200) {
					throw data.error || new Error(`Request failed with status ${response.status}`);
				} else {
					loading = false;
				}
				data = data.candidates[0].content.parts[0].text;
				result = data.result;
				return data;
			} catch (error) {
				// Consider implementing your own error handling logic here
				console.error(error);
			}
			}
		}
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 ">
		<h1 class="font-bold text-center">Hey! It's me Frenzy.</h1>
		<form method="POST" class="" on:submit={onSubmit}>
			<div class="card  p-4">
				<header class="card-header"><h2>What do you want to ask to day?</h2></header>
				<div class="p-4 space-y-4">
					<label class="label">
						<!-- <span>Label Text</span> -->

						<input
							class="input"
							type="search"
							name="prompt"
							bind:value={promptInput}
							placeholder="Want help with your assignment? Ask me!"
							required
						/>
					</label>

					<!-- Range slider -->
					<label class="api">
						<!-- <span>Label Text</span> -->

						<input
							class="input"
							type="password"
							name="api"
							bind:value={apiKey}
							placeholder="Gemini API key"
							required
						/>
					</label>
					<select bind:value={option} name="option" id="option" class="bg-inherit rounded-lg border shadow-md shadow-white">
						<option value="general" disabled default>Select Option</option>
						<option value="python-lab">Python Lab</option>
						<option value="general">General</option>
					</select>
				</div>
				<div>
						<pre><code class="language-python">{data}</code></pre>
				</div>
				<footer class="card-footer text-center">
					<button class="btn btn-lg variant-filled-primary mb-4" type="submit" aria-busy={loading}>
						<span>Ask</span>
					</button>
					{#if result}<div class="card p-4 text-left">{result}</div>{/if}
				</footer>
			</div>
		</form>
	</div>
</div>

<style lang="postcss">
	.card {
		max-width: 600px;
	}
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
