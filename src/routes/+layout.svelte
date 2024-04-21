<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl ">LabPartnerAI!</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button
					class="btn btn-sm variant-ghost-surface"
					on:click={() => {
						window.location.href = '/updates';
					}}

				>
					Updates
				</button>

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://frenzyvjn.tech"
					target="_blank"
					rel="noreferrer"
				>
					FrenzyVJN
				</a>

				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/Surya-nara0123"
					target="_blank"
					rel="noreferrer"
				>
					Surya
				</a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
