<template>
  <div class="skillbar">
    <div class="skillbar__container">
      <div :class="['skillbar__background', {'is--low': isLow, 'is--average': isAverage, 'is--high': isHigh}]" :style="{width: `${value}%`}" aria-hidden="true" :data-text=skill :data-value=value></div>
      <span class="skillbar__name">{{skill}}</span>
      <span class="skillbar__value">{{value}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'skillbar',
    data() {
      return {
      }
    },
    computed: {
      isLow() {
        return this.value <= 50;
      },
      isAverage() {
        return this.value > 50 && this.value < 75
      },
      isHigh() {
        return this.value >= 75;
      }
    },
    props: {
      skill: {required: true},
      value: {default: 0}
    }
  }
</script>

<style lang="sass" scoped>
  .skillbar {
    position: relative;
    max-width: 250px;
    margin: .25em;
    background: #bbb;
    flex: 0 0 50%;
  }

  .skillbar__container {
    display: flex;
    justify-content: space-between;
    padding: .25em 1em;
    box-sizing: border-box;
    font-weight: 700;
  }

  .skillbar__background {
    position: absolute;
    top: 0; bottom: 0; left: 0;
    display: flex;
    justify-content: space-between;
    padding: .25em 1em;
    box-sizing: border-box;
    transition: width .2s, background .2s, color .2s;
    z-index: 5;
    overflow: hidden;

    &:before {
      content: attr(data-text);
        white-space: nowrap;
    }

    &:after {
      content: attr(data-value);
        position: absolute;
        left: calc(250px - 1em);
        transform: translateX(-100%);
    }

    &.is--low {
      background: #EA2027;
      color: #fff;
    }

    &.is--average {
      background: #FFC312;
      color: #fff;
    }

    &.is--high {
      background: #009432;
      color: #fff;
    }
  }

  .skillbar__name,
  .skillbar__value {
    position: relative;
    z-index: 1;
  }
</style>