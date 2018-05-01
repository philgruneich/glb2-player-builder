<template>
  <div>
    <h1>GLB2 Player Builder</h1>
    <form action="">
      <div id="column">
        <div id="player">
          <div class="form__group">
            <label for="position">Pick a position</label>
            <select name="position" id="position" v-model="selectedPosition" @change="getPositionData">
              <option v-for="position in positions" :value=position.id>
                {{position.name}}
              </option>
            </select>
            {{selectedPosition}}
          </div>
          <div class="form__group">
            <label for="height">Height</label>
            <select name="height" id="height" v-model="selectedHeight" :disabled="!selectedPosition">
              <option v-for="h in calculatedHeights" :value=h.value>
                {{h.name}}
              </option>
            </select>
          </div>
          <div class="form__group">
            <label for="weight">Weight</label>
            <select name="weight" id="weight" v-model="selectedWeight" :disabled="!selectedPosition || !selectedHeight">
              <option v-for="w in calculatedWeights" :value=w>
                {{w}} lbs
              </option>
            </select>
          </div>
        </div>
        <div id="attributes">
          <div>Assign {{unassignedPoints}} Attribute Points for this Player </div>
          <div class="form__group">
            <label for="strength">Strength</label>
            <input type="number" min="0" max="10" id="strength" name="strength" v-model="attributes.strength" />
          </div>
          <div class="form__group">
            <label for="agility">Agility</label>
            <input type="number" min="0" max="10" id="agility" name="agility" v-model="attributes.agility" />
          </div>
          <div class="form__group">
            <label for="awareness">Awareness</label>
            <input type="number" min="0" max="10" id="awareness" name="awareness" v-model="attributes.awareness" />
          </div>
          <div class="form__group">
            <label for="speed">Speed</label>
            <input type="number" min="0" max="10" id="speed" name="speed" v-model="attributes.speed" />
          </div>
          <div class="form__group">
            <label for="stamina">Stamina</label>
            <input type="number" min="0" max="10" id="stamina" name="stamina" v-model="attributes.stamina" />
          </div>
          <div class="form__group">
            <label for="confidence">Confidence</label>
            <input type="number" min="0" max="10" id="confidence" name="confidence" v-model="attributes.confidence" />
          </div>
        </div>
        <a :href="linkToBuild">Share this player</a>
      </div>
      
      <div id="traits" v-show="positionData && selectedHeight && selectedWeight">
        Assign {{remainingTraits}} Traits to this Player.
        <div class="trait" v-for="trait in filteredTraits">
          <label :title="(selectedPosition in trait.position_descriptions ? trait.position_descriptions[selectedPosition]: trait.description)">
            <input type="checkbox" name="traits" :value="trait.id" v-model="selectedTraits" :disabled="selectedTraits.length >= maxTraits && selectedTraits.indexOf(trait.id) === -1 || blockedTraits.indexOf(trait.id) > -1" />
            {{trait.short_name || trait.name}} 
          </label>
        </div>
      </div>
      <div id="skill-container" v-show="positionData && selectedHeight && selectedWeight">
        <div id="levelbar">
          <div class="form__group">
            <span class="label">Level: </span>
            <div class="form__buttons">
              <button type="button" aria-label="Minimum" @click="currentLevel = 0" :disabled="currentLevel === 0">&lt;</button>
              <button type="button" aria-label="Decrement" @click="--currentLevel" :disabled="currentLevel === 0">&minus;</button>
              <output class="form__output">{{currentLevel}}</output>
              <button type="button" aria-label="Increment" @click="++currentLevel" :disabled="currentLevel === levels.length - 1">&plus;</button>
              <button type="button" aria-label="Maximum" @click="currentLevel = levels.length - 1" :disabled="currentLevel === levels.length - 1">&gt;</button>
            </div>
          </div>
          <div class="form__group">
            <span class="label">SP Boost: </span>
            <div class="form__buttons">
              <button type="button" aria-label="Minimum" @click="currentSpBoost = 0" :disabled="currentSpBoost === 0">&lt;</button>
              <button type="button" aria-label="Decrement" @click="--currentSpBoost" :disabled="currentSpBoost === 0">&minus;</button>
              <output class="form__output">{{currentSpBoost}}</output>
              <button type="button" aria-label="Increment" @click="++currentSpBoost" :disabled="currentSpBoost === spboosts.length - 1 || currentSpBoost >= maxSpBoost">&plus;</button>
              <button type="button" aria-label="Maximum" @click="currentSpBoost = spboosts.length - 1" :disabled="currentSpBoost === spboosts.length - 1 || currentSpBoost >= maxSpBoost">&gt;</button>
            </div>
          </div>
          <div class="form__group">
            <span class="label">SP left: </span><output id="sp_available">{{skillPointsAvailable}}</output>
          </div>
        </div>
        <div id="skills">
           <skillbar
            :skill=skill.name
            :max=skill.max
            :min=skill.min
            :value=skill.value
            :cost=skill.cost
            :skillpointsAvailable="skillPointsAvailable"
            @increment="incrementSkill(skill)"
            @decrement="decrementSkill(skill)"
            @min="minSkill(skill)"
            @max="maxSkill(skill)"
            v-for="skill in filteredSkills"
            :key=skill.id>
          </skillbar>
        </div>
       
      </div>
    </form>
    
  </div>
  
</template>

<script>
import { positions } from './Data/positions.js';
import { heights } from './Data/heights.js';
// import { weights } from './Data/weights.js';
import { traits } from './Data/traits.js';
import { skills } from './Data/skills.js';
import skillbar from './Components/Skillbar.vue'

export default {
  name: 'Form',
  data() {
    return {
      positions,
      heights,
      traits: Object.keys(traits).map(key => {
        let obj = traits[key];
        obj.id = key;
        return obj;
      }),
      skills: Object.keys(skills).map(key => {
        let obj = skills[key];
        obj.id = key;
        return obj;
      }),
      maxTraits: 3,
      positionData: null,
      selectedPosition: null,
      selectedWeight: null,
      selectedHeight: null,
      attributes: {
        strength: 5,
        agility: 5,
        awareness: 5,
        speed: 5,
        stamina: 5,
        confidence: 5,
      },
      spentSkillpoints: 0,
      currentLevel: 0,
      currentSpBoost: 0,
      levels: [1000, 8000, 12500, 19500, 26500, 37000, 44000, 51000, 58000, 62500, 73000, 80000, 87000, 91500, 98500, 109000, 116000, 120500, 127500, 132000, 143000, 150000, 154500, 162000, 166500, 181000],
      superstar_levels: [3500, 10500, 15000, 22000, 29000, 41000, 48000, 55000, 62000, 66500, 78500, 85500, 92500, 97000, 104000, 116000, 123000, 127500, 134500, 139000, 151500, 158500, 163000, 170500, 175000, 191000],
      spboosts: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000, 22000, 29000],
      attributePoints: 35,
      selectedTraits: []
    };
  },
  methods: {
    getPositionData() {
      if (!this.selectedPosition) return this.positionData = null;
      this.positionData = this.positions.find(pos => pos.id === this.selectedPosition);
    },

    range(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    },

    parseQueryParams(q) {
      let query = q || location.search;

      if (query) {
        if (query.indexOf('?') === 0) {
          query = query.substr(1);
        }

        return query.split('&').reduce((t, v) => {
          let arr = v.split('=');
          let key = decodeURIComponent(arr[0]);
          let value = decodeURIComponent(arr[1]);

          t[key] = value;
          return t;
        }, {});
      }

      return false;
    },

    convertToQueryParams(obj) {
      return Object.keys(obj).reduce((t, v) => {
        var query = encodeURIComponent(v) + '=' + encodeURIComponent(obj[v]);

        if(t) {
          query = '&' + query;
        }

        return (t + query);
      }, '');
    },

    decrementSkill(skill) {
      this.spentSkillpoints -= this.calculateSkillCost(skill, skill.level + skill.min - 1);
      return --skill.level;
    },

    incrementSkill(skill) {
      if (this.skillPointsAvailable < skill.cost) return false
      this.spentSkillpoints += skill.cost;
      return ++skill.level;
    },

    maxSkill(skill) {
      let levels = 0;
      let skillpointsToSpend = 0;
      let proceed = true;

      while (skillpointsToSpend < this.skillPointsAvailable && (levels + skill.level + skill.min) < skill.max && proceed) {
        let cost = this.calculateSkillCost(skill, skill.level + skill.min + levels);

        if (cost + skillpointsToSpend > this.skillPointsAvailable) {
          proceed = false;
        } else {
          skillpointsToSpend += cost;
          ++levels;
        }
      }

      skill.level += levels;
      this.spentSkillpoints += skillpointsToSpend;

      // console.log(skill.cost, this.skillPointsAvailable, skill.level, skill.min, skill.max);
      // while (skill.cost <= this.skillPointsAvailable && this.skillPointsAvailable > 0 && skill.level + skill.min < skill.max) {
      //   console.log(skill.cost, this.skillPointsAvailable, skill.level, skill.min, skill.max);
      //   this.incrementSkill(skill);
      // }
    },

    minSkill(skill) {
      while (skill.level > 0) {
        this.decrementSkill(skill);
      }
    },

    calculateSkillMaximum(skill) {
      const multiplier = skill.position_multiplier[this.selectedPosition];
      const attributes = skill.attributes;
      let attr_sum = 0;
      let traits_mod = 0;

      for (let attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
          let value = attributes[attr];
          if (attr in this.attributes) {
            attr_sum += Math.pow(this.attributes[attr], 1.3) * value;
          }
        }
      }

      for (let trait_id of this.selectedTraits) {
        let trait = this.traits.find(t => t.id === trait_id);
        let skill_modifiers = trait.skill_modifiers;
        if (skill.id in skill_modifiers) {
          traits_mod += skill_modifiers[skill.id].max
        }
      }

      const base = (100 - multiplier) * 0.4;
      const physio = ((skill.weight * this.selectedWeight) * 0.25) + ((skill.height * (this.selectedHeight - 66)) * 0.5);
      return Math.max(25, Math.min(100, Math.round(33 - attr_sum + traits_mod + base - physio)));
    },

    calculateSkillMinimum(skill) {
      let level = 0;
      let spspent = 0;
      let spmax = this.selectedTraits.find(el => el === "natural") ? 1000 : 500;
      while (spspent < spmax) {
        spspent += this.calculateSkillCost(skill, ++level);
      }
      return level;
    },

    calculateSkillCost(skill, level=1) {
      level++;
      const multiplier = skill.position_multiplier[this.selectedPosition];
      const attributes = skill.attributes;
      const base_price = skill.position_base_price[this.selectedPosition] || skill.base_price;
      const exponent = skill.exponent || 1.3;
      // let attr_sum = 0;
      // let traits_mod = 0;
      let cost = (base_price * skill.position_multiplier[this.selectedPosition]);

      for (let attr in skill.attributes) {
        if (skill.attributes.hasOwnProperty(attr)) {
          let value = skill.attributes[attr];
          if (attr in this.attributes) {
            cost += this.attributes[attr] * (value || 0);
          }
        }
      }

      cost += skill.height * (this.selectedHeight - 66);
      cost += skill.weight * this.selectedWeight;

      for (let trait_id of this.selectedTraits) {
        let trait = this.traits.find(t => t.id === trait_id);
        let skill_modifiers = trait.skill_modifiers;
        if (skill.id in skill_modifiers) {
          cost *= 1 + (skill_modifiers[skill.id].cost || 0);
        }
      }

      return Math.round(cost * (Math.pow(level, exponent) / 59)) || 0;
    }
  },
  created() {
    const queryParams = this.parseQueryParams() || {};
    if ('p' in queryParams) this.selectedPosition = queryParams.p || this.selectedPosition;
    if ('st' in queryParams) this.attributes.strength = queryParams.st || this.attributes.strength
    if ('ag' in queryParams) this.attributes.agility = queryParams.ag || this.attributes.agility
    if ('aw' in queryParams) this.attributes.awareness = queryParams.aw || this.attributes.awareness
    if ('sp' in queryParams) this.attributes.speed = queryParams.sp || this.attributes.speed
    if ('sta' in queryParams) this.attributes.stamina = queryParams.sta || this.attributes.stamina
    if ('co' in queryParams) this.attributes.confidence = queryParams.co || this.attributes.confidence
    if ('h' in queryParams) this.selectedHeight = queryParams.h || this.selectedHeight;
    if ('w' in queryParams) this.selectedWeight = queryParams.w || this.selectedWeight;
    if ('t' in queryParams) this.selectedTraits = (queryParams.t.length ? queryParams.t.split(',') : this.selectedTraits);
    this.getPositionData();
    if ('l' in queryParams) this.currentLevel = queryParams.l || 0;
    if ('spb' in queryParams) this.currentSpBoost = queryParams.spb || 0;
    // if ('s' in queryParams && queryParams.s.length) {
    //   let skills = queryParams.s.split(',');
    //   this.filteredSkills.forEach((skill, i) => {
    //     skill.level = +skills[i];
    //   });
    // }
  },
  computed: {
    calculatedWeights() {
      if (!this.positionData || !this.selectedHeight) return [];
      const minWeight = this.positionData.minWeight + (this.positionData.weightModifier * (this.selectedHeight - this.positionData.minHeight));
      const maxWeight = this.positionData.maxWeight + (this.positionData.weightModifier * (this.selectedHeight - this.positionData.minHeight));
      return this.range(minWeight, maxWeight);
    },
    calculatedHeights() {
      if (!this.positionData) return this.heights;
      return this.heights.filter(h => h.value <= this.positionData.maxHeight && h.value >= this.positionData.minHeight)
    },
    unassignedPoints() {
      return this.attributePoints - this.attributes.strength - this.attributes.agility - this.attributes.awareness - this.attributes.speed - this.attributes.stamina - this.attributes.confidence
    },
    remainingTraits() {
      return this.maxTraits - this.selectedTraits.length;
    },
    filteredTraits() {
      if (!this.positionData) return [];
      return this.traits.filter(trait => trait.position_exclusions.indexOf(this.selectedPosition) === -1)
    },
    blockedTraits() {
      let conflicted = this.selectedTraits.map((id) => {
        return this.traits.find(t => t.id === id).conflicts;
      });

      return [...new Set([].concat(...conflicted))];
    },
    linkToBuild() {
      let params = {}
      if (+this.attributes.strength !== 5) params.st = this.attributes.strength;
      if (+this.attributes.agility !== 5) params.ag = this.attributes.agility;
      if (+this.attributes.awareness !== 5) params.aw = this.attributes.awareness;
      if (+this.attributes.speed !== 5) params.sp = this.attributes.speed;
      if (+this.attributes.stamina !== 5) params.sta = this.attributes.stamina;
      if (+this.attributes.confidence !== 5) params.co = this.attributes.confidence;
      if (this.selectedPosition) params.p = this.selectedPosition;
      if (this.selectedHeight) params.h = this.selectedHeight;
      if (this.selectedWeight) params.w = this.selectedWeight;
      if (this.selectedTraits.length) params.t = this.selectedTraits.join();
      if (+this.currentLevel) params.l = this.currentLevel;
      if (+this.currentSpBoost) params.spb = this.currentSpBoost;
      // params.s = this.filteredSkills.map(skill => skill.level).join();

      let data = this.convertToQueryParams(params);

      return '//' + location.host + location.pathname + '?' + data;
    },
    filteredSkills() {
      if (!this.positionData) return [];
      let skills = this.skills.filter(skill => skill.positions.find(el => el === this.selectedPosition));
      let mapped_skills = skills.map((skill) => {
        skill.max = this.calculateSkillMaximum(skill);
        skill.min = this.calculateSkillMinimum(skill);
        skill.value = skill.min + (skill.level || 0);
        skill.cost = this.calculateSkillCost(skill, skill.value);

        return skill;
      });

      return mapped_skills.sort((a, b) => {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      });
    },
    skillPointsAvailable() {
      if (this.selectedTraits.some(trait => trait === 'superstar_nonglam' || trait === 'superstar_avg' || trait === 'superstar_glam')) return this.superstar_levels[this.currentLevel] + this.spboosts[this.currentSpBoost] - this.spentSkillpoints;
      return this.levels[this.currentLevel] + this.spboosts[this.currentSpBoost] - this.spentSkillpoints;
    },
    maxSpBoost() {
      switch(this.currentLevel) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
          return 2;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          return 4;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
          return 6;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
          return 8;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
          return 10;
        case 25:
          return 12;
      }

    }
  },
  components: {
    skillbar
  }
};
</script>

<style scoped>
  form {
    display: flex;
    width: 100%;
    align-items: flex-start;
  }

  #player, #column, #attributes, #traits {
    flex-grow: 0;
    flex-basis: 25%;
  }

  #skill-container {
    flex-grow: 0;
    flex-basis: 50%;
  }

  #skills {
    display: flex;
    flex-wrap: wrap;
  }

  .form__output {
    font-family: monospace;
    min-width: 2ch;
    display: inline-block;
    text-align: center;
    padding: 0 .25em;
    box-sizing: content-box;
  }

  #sp_available {
    font-family: monospace;
    min-width: 6ch;
    text-align: right;
  }

  #levelbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  #levelbar .form__group {
    display: flex;
    padding: 0 1em;
  }

  #levelbar .form__buttons {
    display: flex;
    padding: 0 .5em;
  }

  a {
    display: block;
    margin-top: 3em;
  }
</style>