<template>
  <div :class="['input-layout', inputIsFocused ? 'focus-border' : '']">
    <img src="/search.svg" alt="search icon" class="search-icon" />
    <input
      ref="search"
      type="text"
      :value="value"
      @input="onChange($event.target.value)"
      @focus="onInputFocus"
      @blur="onInputFocus"
      @keypress="onInputSubmit"
      placeholder="Find your game..."
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: ['value', 'onChange'],
  data: () => ({
    inputIsFocused: false
  }),
  methods: {
    setInputFocus(bool) {
      this.inputIsFocused = bool;
    },
    onInputFocus() {
      this.setInputFocus = !this.inputIsFocused;
    },
    onInputSubmit(evt) {
      if (evt.key === 'Enter') {
        this.$refs.search.blur();
      }
    }
  }
};
</script>

<style>
.input-layout {
  margin-bottom: 2rem;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--colors-secondary);
  display: flex;
  flex-direction: row;
  align-items: center;
}

input {
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  border: none;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: var(--colors-placeholder);
}

.search-icon {
  padding: 1rem 0 1rem 1rem;
  text-align: center;
}
</style>
