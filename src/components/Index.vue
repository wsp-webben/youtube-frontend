<template>
  <section class="Index">
    <div class="Index__wrapper">
      <h1 class="Index__title">If you like YouTube, but hate red</h1>
      <p class="Index__text">
        YouTube is great, but some people might find it's brand red color really annoying.<br/>
        Psychologists say that people associate red not only with love and warmth,
        but also with blood and anger.<br/>
        So if you want to avoid that feelings, you can browse for the best YouTube videos here.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
  .Index__wrapper {
    max-width: var(--wrapper-width);
    margin: 0 auto;
    padding: 0 20px;
  }

  .Index__title {
    color: var(--main-color);
    font-size: 24px;
  }

  .Index__text {
    margin: 0 auto;
    color: var(--secondary-color);
    font-size: 16px;
    line-height: 1.3;
  }

  @media (max-width: 450px) {
    .Index__title {
      font-size: 18px;
    }

    .Index__text {
      font-size: 14px;
    }
  }
</style>
