<template>
  <div class="checkout-page">
    <img src="https://media.giphy.com/media/8fen5LSZcHQ5O/giphy.gif" alt="giphy mr burns" />
    <h2>Thank you for your monies!</h2>
  </div>
</template>

<script>
export default {
  name: 'Checkout'
};
</script>

<style>
.checkout-page {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.checkout-page img {
  align-self: center;
  max-width: 85vw;
}

.checkout-page h2 {
  margin-top: 1.5rem;
  color: var(--colors-success);
  text-align: center;
}
</style>
