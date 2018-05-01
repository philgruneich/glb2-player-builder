<template>
  <div class="skillbar">
    <div class="skillbar__label"><span class="skillbar__name">{{skill}}</span></div>
    <div class="skillbar__container">
      <div :class="['skillbar__background', {'is--low': isLow, 'is--average': isAverage, 'is--high': isHigh}]" :style="{width: `${max}%`}" aria-hidden="true" :data-value=max></div>
      <div :class="['skillbar__current', {'is--low': isLow, 'is--average': isAverage, 'is--high': isHigh}]" :style="{width: `${value}%`}" aria-hidden="true" :data-value=value></div>
      <span class="skillbar__value">{{value}}/{{max}}</span>
    </div>
    <div class="skillbar__actions">
      <button type="button" aria-label="Minimum" @click="$emit('min')" :disabled="value <= min">&lt;</button>
      <button type="button" aria-label="Decrement" @click="$emit('decrement')" :disabled="value <= min">&minus;</button>
      <output class="skillbar__output">{{cost}}</output>
      <button type="button" aria-label="Increment" @click="$emit('increment')" :disabled="max <= value || skillpointsAvailable <= 0 || cost > skillpointsAvailable">&plus;</button>
      <button type="button" aria-label="Maximum" @click="$emit('max')" :disabled="max <= value || skillpointsAvailable <= 0 || cost > skillpointsAvailable">&gt;</button>
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
        return this.max <= 50;
      },
      isAverage() {
        return this.max > 50 && this.max < 75
      },
      isHigh() {
        return this.max >= 75;
      }
    },
    props: {
      skill: {required: true},
      max: {default: 0},
      min: {default: 0},
      cost: {default: 0},
      value: {default: 1},
      skillpointsAvailable: {default: true}
    }
  }
</script>

<style lang="sass" scoped>
  .skillbar {
    display: flex;
    align-items: center;
    margin: .25em;
    flex: 0 0 100%;
  }

  .skillbar__container {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: .25em 1em;
    box-sizing: border-box;
    font-weight: 700;
    background: #bbb;
    position: relative;
    // max-width: 250px;
  }

  .skillbar__output {
    font-family: monospace;
    min-width: 4ch;
    padding: 0 .25em;
    display: inline-block;
    text-align: center;
    box-sizing: content-box;
  }

  .skillbar__background {
    // &:before {
    //   content: attr(data-text);
    //     white-space: nowrap;
    // }

    // &:after {
    //   content: attr(data-value);
    //   position: absolute;
    //   left: calc(250px - 1em);
    //   transform: translateX(-100%);
    // }
  }

  .skillbar__background,
  .skillbar__current {
    position: absolute;
    top: 0; bottom: 0; left: 0;
    display: flex;
    justify-content: space-between;
    padding: .25em 1em;
    box-sizing: border-box;
    transition: width .2s, background .2s, color .2s;
    z-index: 1;
    overflow: hidden;

    &.is--low {
      background: rgba(#EA2027, .5);
      color: #fff;
    }

    &.is--average {
      background: rgba(#FFC312, .5);
      color: #fff;
    }

    &.is--high {
      background: rgba(#009432, .5);
      color: #fff;
    }
  }

  .skillbar__name,
  .skillbar__value {
    position: relative;
    z-index: 2;
  }

  .skillbar__label {
    flex: 0 0 12em;
    padding: 0 1em;
    font-weight: bold;
  }

  .skillbar__actions {
    display: flex;
    padding: 0 1em;
  }
</style>