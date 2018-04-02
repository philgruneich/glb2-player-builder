<template>
  <div>
    <h1>GLB2 Player Builder</h1>
    <form action="">
      <div id="column">
        <div id="player">
          <div class="form-group">
            <label for="position">Pick a position</label>
            <select name="position" id="position" v-model="selectedPosition" @change="getPositionData">
              <option v-for="position in positions" :value=position.id>
                {{position.name}}
              </option>
            </select>
            {{selectedPosition}}
          </div>
          <div class="form-group">
            <label for="weight">Weight</label>
            <select name="weight" id="weight" v-model="selectedWeight" :disabled="!selectedPosition">
              <option v-for="w in calculatedWeights" :value=w>
                {{w}} lbs
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="height">Height</label>
            <select name="height" id="height" v-model="selectedHeight" :disabled="!selectedPosition">
              <option v-for="h in calculatedHeights" :value=h.value>
                {{h.name}}
              </option>
            </select>
          </div>
        </div>
        <div id="attributes">
          <div>Assign {{unassignedPoints}} Attribute Points for this Player </div>
          <div class="form-group">
            <label for="strength">Strength</label>
            <input type="number" min="0" max="10" id="strength" name="strength" v-model="attributes.strength" />
          </div>
          <div class="form-group">
            <label for="agility">Agility</label>
            <input type="number" min="0" max="10" id="agility" name="agility" v-model="attributes.agility" />
          </div>
          <div class="form-group">
            <label for="awareness">Awareness</label>
            <input type="number" min="0" max="10" id="awareness" name="awareness" v-model="attributes.awareness" />
          </div>
          <div class="form-group">
            <label for="speed">Speed</label>
            <input type="number" min="0" max="10" id="speed" name="speed" v-model="attributes.speed" />
          </div>
          <div class="form-group">
            <label for="stamina">Stamina</label>
            <input type="number" min="0" max="10" id="stamina" name="stamina" v-model="attributes.stamina" />
          </div>
          <div class="form-group">
            <label for="confidence">Confidence</label>
            <input type="number" min="0" max="10" id="confidence" name="confidence" v-model="attributes.confidence" />
          </div>
        </div>
      </div>
      
      <div id="traits" v-show="positionData && selectedHeight && selectedWeight">
        Assign {{remainingTraits}} Traits to this Player.
        <div class="trait" v-for="trait in filteredTraits">
          <label :title="trait.description">
            <input type="checkbox" name="traits" :value="trait.id" v-model="selectedTraits" :disabled="selectedTraits.length >= maxTraits && selectedTraits.indexOf(trait.id) === -1 || blockedTraits.indexOf(trait.id) > -1" />
            {{trait.short_name || trait.name}} 
          </label>
        </div>
      </div>
      <div id="skills" v-show="positionData && selectedHeight && selectedWeight">
        <skillbar :skill=skill.name :value=skill.currentValue v-for="skill in filteredSkills" :key=skill.id>
        </skillbar>
      </div>
    </form>
  </div>
  
</template>

<script>
import { positions } from './Data/positions.js';
import { heights } from './Data/heights.js';
import { weights } from './Data/weights.js';
import { traits } from './Data/traits.js';
import { skills } from './Data/skills.js';
import skillbar from './Components/Skillbar.vue'

export default {
  name: 'Form',
  data() {
    return {
      positions,
      heights,
      weights,
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
      attributePoints: 35,
      selectedTraits: []
    };
  },
  methods: {
    getPositionData() {
      if (!this.selectedPosition) return this.positionData = null;
      this.positionData = this.positions.find(pos => pos.id === this.selectedPosition);
    }
  },
  computed: {
    calculatedWeights() {
      if (!this.positionData) return this.weights;
      return this.weights.filter(w => w <= this.positionData.maxWeight && w >= this.positionData.minWeight);
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
    filteredSkills() {
      if (!this.positionData) return [];

      let skills = this.skills.filter(skill => skill.positions.indexOf(this.selectedPosition) > -1);
      let mapped_skills = skills.map((skill) => {
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
        let maximum = Math.max(25, Math.min(100, Math.round(33 - attr_sum + traits_mod + base - physio)));
        skill.currentValue = maximum;

        return skill;
      });

      return mapped_skills.sort((a, b) => {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      });
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

  #skills {
    flex-grow: 0;
    flex-basis: 50%;
    display: flex;
    flex-wrap: wrap;
  }
</style>