<script>
  import Scrolly from "$components/chartcomponents/Scrolly.svelte";

  export let storyscript = [];
  export let layout;

  let innerWidth;
  let innerHeight;
  let stepIndex = 0;
  $: stepIndex = stepIndex ?? 0;

  $: chartComponents = [];

  $: {
    if (chartComponents.length) {
      const step = storyscript.steps[stepIndex];
      const { charts } = step;

      // update components in step
      charts.forEach((chart) => {
        const component = chartComponents[chart.componentIndex];
        component.chart = chart;
      });

      // reset component not in step
      const componentIndexs = step.charts.map((d) => d.componentIndex);
      chartComponents.forEach((component, i) => {
        if (!componentIndexs.includes(i)) {
          component.chart = {};
        }
      });
    }
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<section
  class:fullWidth={layout === "fullwidth"}
  class:wide={layout === "wide"}
>
  <div class="container">
    <div class="chart-container">
      <div
        class="chart"
        class:sticky={stepIndex < storyscript.steps.length}
        class:bottom={stepIndex >= storyscript.steps.length}
      >
        {#each storyscript.components as component, i}
          <div class="chartComponent">
            <svelte:component
              this={component}
              bind:this={chartComponents[i]}
              data={[]}
            />
          </div>
        {/each}
      </div>

      <div class="steps">
        <Scrolly bind:value={stepIndex} top={innerHeight / 2}>
          {#each storyscript.steps as step, i}
            <div class="step" class:active={stepIndex === i}>
              <div class="contentwrapper">
                <div class="contentbackground" />
                <div class="content">
                  <h4>{step.description.title}</h4>
                  {#if step.description.text}
                    <p>{@html step.description.text}</p>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        </Scrolly>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    max-width: 50rem;
    padding: 0 0px;
    margin: 0 auto;
  }

  section.fullWidth {
    max-width: none;
    padding: 20px;
  }

  section.wide {
    max-width: 70rem;
  }

  .container {
    position: relative;
  }

  .chart-container {
    display: flex;
    flex-direction: column;
    width: calc(100% - 32px);
    position: relative;
    margin: 0 16px;
  }

  .fullWidth .chart-container {
    width: 100%;
    max-width: none;
  }

  .chart {
    position: relative;
    height: 100vh;
    width: 100%;
  }

  .chartComponent {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
  }

  .step {
    height: 100vh;
    width: 100%;
    background: none;
    z-index: 2;
    position: relative;
    margin-bottom: 33vh;
  }

  .steps {
    margin-top: 10vh;
  }

  .step:last-of-type {
    height: 150vh;
  }

  .sticky {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .bottom {
    position: absolute;
    top: auto;
    bottom: 0;
    z-index: 1;
  }

  .contentwrapper {
    position: relative;
    padding: 10px;
  }

  .contentbackground {
    background-color: var(--color-background);
    opacity: 0.5;
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -20px;
    right: -20px;
  }

  .content {
    position: relative;
    z-index: 2;
  }

  .step .content h4 {
    -webkit-text-fill-color: var(--color-background);
    -webkit-text-stroke-color: #d5f2f2;
    -webkit-text-stroke-width: 0.9px;
    font-size: var(--font-size-lg);
    font-family: var(--font-family-impact);
    text-transform: uppercase;
  }

  @media (min-width: 900px) {
    .fullWidth .container {
      margin: 0;
    }

    .chart {
      padding-left: 8px;
    }

    .fullWidth .chart {
      width: 100%;
    }

    .fullWidth .steps {
      width: 40%;
      margin-left: 10%;
    }

    .wide .contentwrapper {
      position: relative;
      margin: auto;
    }
  }
</style>
