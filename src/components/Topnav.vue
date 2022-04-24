<template>
  <div>
    <div class="topnav" ref="topnav">
      <router-link ref="topLogo" to="/" class="logo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#font-vue"></use>
        </svg>
      </router-link>
      <ul class="menu">
        <li>
          <router-link to="/doc">文档</router-link>
        </li>
      </ul>
      <svg  @click="toggleMenu" class="toggleAside">
        <use xlink:href="#font-gengduo" style="border: 1px solid red"/>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import {
  inject,
  Ref,
  onMounted,
  onUnmounted,
  ref,
} from "vue";
export default {
  props: {
    toggleMenuVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject < Ref < boolean >> ("menuVisible");
    const topnav = ref < HTMLDivElement > (null);
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    const handleScroll = () => {

    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return {
      toggleMenu,
      topnav
    };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;

  >.logo {
    max-width: 6em;
    margin-right: auto;
    margin-left: 100px;

    >svg {
      width: 48px;
      height: 48px;
    }

  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    margin-right: 100px;

    >li {
      margin: 0 1em;
      color: #b0462a;

      a {
        font-size: 20px;
      }
    }
  }

  >.toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: fade-out(black, 0.9);
  }

  @media (max-width: 896px) {
    position: fixed;
    padding: 5px 0 0;
    background-color: #edeceb;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;

      >svg {
        width: 2.2em;
        height: 2.2em;
      }
    }

    >.toggleAside {
      display: inline-block;
    }
  }
}
</style>