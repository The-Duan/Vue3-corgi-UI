<template>
  <button class="crisps-switch"
          @click="toggle"
          :class="{'gulu-checked':value}">
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.crisps-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #9f9f9f;
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }
  &.gulu-checked {
    background: blue;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none
  }
  &:active {
    > span {
      width: $h2+4px;
    }
  }
  .crisps-switch.gulu-checked:active {
    > span {
      width: $h2+4px;
      margin-left: -4px;
    }
  }
  &.crisps-switch-size-big {
    width: $h * 3;
  }
  &.crisps-switch-size-small {
    width: $h * 1.5;
    height: $h * 0.8;
    >span {
      width: $h2 * 0.7;
      height: $h2 * 0.7;
    }
    &.crisps-switch-checked>span {
      left: calc(100% - #{$h2 * 0.7} - 2px);
    }
    &:active {
      >span {
        width: $h2;
      }
    }
  }
}

</style>