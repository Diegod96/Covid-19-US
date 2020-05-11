<script>
	let isOpen = false;
	export let segment;
	function toggleNav() {
		isOpen = !isOpen;
	}
</script>

<style>
	@media (min-width: 769px) {
		nav {
			border-bottom: solid gray 1px;
			background-color: #2f2f2f;
		}
		#text {
			color: white;
		}
		#text:hover{
			color: black;
		}
	}
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
<!--		<a rel="prefetch" href="/" class="navbar-item">-->
<!--			<img src="logo.jpg" alt="virus" />-->
<!--		</a>-->
		<span
				class="navbar-burger"
				class:is-active={isOpen}
				on:click={toggleNav}
				aria-label="menu"
				aria-expanded="false">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
	</div>
	<div class="navbar-menu" class:is-active={isOpen}>
		<div class="navbar-start">
			<a
					rel="prefetch"
					href="/"
					class="navbar-item"
					id="text"
					class:is-active={segment === undefined}>
				Home
			</a>
			<a
					rel="prefetch"
					href="/about"
					class="navbar-item"
					id="text"
					class:is-active={segment === 'about'}>
				About
			</a>
			<a
					rel="prefetch"
					href="https://eloquent-jones-2d79ac.netlify.app/"
					class="navbar-item"
					id="text"
					class:is-active={segment === undefined}>
				Handwashing Application
			</a>
			<a
					rel="prefetch"
					href="https://master.d30wuvfk5j97tx.amplifyapp.com/"
					class="navbar-item"
					id="text"
					class:is-active={segment === undefined}>
				Covid-19 Global Dashboard
			</a>
			<a
					rel="prefetch"
					href="https://covid-flask.herokuapp.com/"
					class="navbar-item"
					id="text"
					class:is-active={segment === undefined}>
				Covid-19 Probability Detector
			</a>
		</div>
	</div>

</nav>
