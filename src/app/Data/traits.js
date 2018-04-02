export const traits = {
  dl_quick_reaction: {
    skill_modifiers: {
      tackle_awareness: {
        cost: -0.05,
        max: 3
      },
      blitz_awareness: {
        cost: -0.05,
        max: 3
      },
      tackle_technique: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'LB', 'FS', 'SS', 'CB', 'K', 'P'],
    salary_modifier: 0,
    name: 'Quick Reaction',
    description: `
      This defender has a nose for the ball.
      Blitz Awareness: 5% lower SP cost, +3 max
      Tackling Tech: 5% lower SP cost, +3 max
      Pursuit: 4% lower SP cost, +3 max
      `
  },
  active_hands: {
    skill_modifiers: {
      tackle_strip: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C'],
    salary_modifier: 0,
    name: 'Active Hands',
    description: 'Strip Tech: 5% lower SP cost, +3 max'
  },
  early_bloomer: {
    skill_modifiers: {
      punt_power: {
        cost: -0.05,
        max: -10
      },
      tackle_strip: {
        cost: -0.05,
        max: -10
      },
      run_block_awareness: {
        cost: -0.05,
        max: -10
      },
      leadership: {
        cost: -0.05,
        max: -10
      },
      coverage_interception: {
        cost: -0.05,
        max: -10
      },
      pass_rush_power: {
        cost: -0.05,
        max: -10
      },
      route_elusiveness: {
        cost: -0.05,
        max: -10
      },
      catch_consistency: {
        cost: -0.05,
        max: -10
      },
      snap_reaction: {
        cost: -0.05,
        max: -10
      },
      block_consistency: {
        cost: -0.05,
        max: -10
      },
      pass_block_awareness: {
        cost: -0.05,
        max: -10
      },
      diving: {
        cost: -0.05,
        max: -10
      },
      kick_consistency: {
        cost: -0.05,
        max: -10
      },
      pass_evasiveness: {
        cost: -0.05,
        max: -10
      },
      toughness: {
        cost: -0.05,
        max: -10
      },
      pass_accuracy: {
        cost: -0.05,
        max: -10
      },
      kick_power: {
        cost: -0.05,
        max: -10
      },
      pass_technique: {
        cost: -0.05,
        max: -10
      },
      carry_awareness: {
        cost: -0.05,
        max: -10
      },
      route_technique: {
        cost: -0.05,
        max: -10
      },
      punt_consistency: {
        cost: -0.05,
        max: -10
      },
      carry_grip: {
        cost: -0.05,
        max: -10
      },
      carry_elusiveness: {
        cost: -0.05,
        max: -10
      },
      defense_consistency: {
        cost: -0.05,
        max: -10
      },
      run_block_power: {
        cost: -0.05,
        max: -10
      },
      tackle_power: {
        cost: -0.05,
        max: -10
      },
      pass_block_technique: {
        cost: -0.05,
        max: -10
      },
      tackle_awareness: {
        cost: -0.05,
        max: -10
      },
      break_run_block: {
        cost: -0.05,
        max: -10
      },
      conditioning: {
        cost: -0.05,
        max: -10
      },
      tackle_technique: {
        cost: -0.05,
        max: -10
      },
      catch_hands: {
        cost: -0.05,
        max: -10
      },
      catch_grip: {
        cost: -0.05,
        max: -10
      },
      return_awareness: {
        cost: -0.05,
        max: -10
      },
      man_coverage_awareness: {
        cost: -0.05,
        max: -10
      },
      pass_consistency: {
        cost: -0.05,
        max: -10
      },
      footwork: {
        cost: -0.05,
        max: -10
      },
      punt_hands: {
        cost: -0.05,
        max: -10
      },
      intimidation: {
        cost: -0.05,
        max: -10
      },
      zone_coverage_awareness: {
        cost: -0.05,
        max: -10
      },
      pass_power: {
        cost: -0.05,
        max: -10
      },
      pass_rush_deflection: {
        cost: -0.05,
        max: -10
      },
      quickness: {
        cost: -0.05,
        max: -10
      },
      balance: {
        cost: -0.05,
        max: -10
      },
      vertical: {
        cost: -0.05,
        max: -10
      },
      pass_carry_power: {
        cost: -0.05,
        max: -10
      },
      punt_accuracy: {
        cost: -0.05,
        max: -10
      },
      hold_ground: {
        cost: -0.05,
        max: -10
      },
      kickoff_power: {
        cost: -0.05,
        max: -10
      },
      pass_awareness: {
        cost: -0.05,
        max: -10
      },
      blitz_awareness: {
        cost: -0.05,
        max: -10
      },
      carry_power: {
        cost: -0.05,
        max: -10
      },
      catch_awareness: {
        cost: -0.05,
        max: -10
      },
      pass_block_power: {
        cost: -0.05,
        max: -10
      },
      kick_accuracy: {
        cost: -0.05,
        max: -10
      },
      run_block_technique: {
        cost: -0.05,
        max: -10
      },
      pass_grip: {
        cost: -0.05,
        max: -10
      },
      heart: {
        cost: -0.05,
        max: -10
      },
      catch_in_traffic: {
        cost: -0.05,
        max: -10
      },
      coverage_technique: {
        cost: -0.05,
        max: -10
      },
      lead_block_awareness: {
        cost: -0.05,
        max: -10
      },
      tackle_grip: {
        cost: -0.05,
        max: -10
      },
      sprinting: {
        cost: -0.05,
        max: -10
      },
      pass_rush_technique: {
        cost: -0.05,
        max: -10
      },
      coverage_deflection: {
        cost: -0.05,
        max: -10
      }
    },
    position_descriptions: {},
    position_exclusions: [],
    name: 'Early Bloomer',
    description: `
      This player has lower potential but gets there easily.
      All Skills: 5% lower SP cost, -10 max`,
    conflicts: ['slow_built'],
    conflict_text: `
      Conflicts with: Slow Built`,
    salary_modifier: 0
  },
  k_cool_headed: {
    skill_modifiers: {
      pass_consistency: {
        cost: -0.05,
        max: 3
      },
      kick_consistency: {
        cost: -0.05,
        max: 3
      },
      punt_consistency: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {
      'QB': `Pass Consistency: 5% lower SP cost, +3 max
		Min Salary: +10%`,
      'P': `Punt Consistency: 5% lower SP cost, +3 max
		Min Salary: +10%`,
      'K': `Kick Consistency: 5% lower SP cost, +3 max
		Min Salary: +10%`
    },
    position_exclusions: ['HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'P'],
    salary_modifier: 0.1,
    name: 'Cool Headed',
    description: `Punt Consistency: 5% lower SP cost, +3 max
		Min Salary: +10%`
  },
  ball_hawk: {
    skill_modifiers: {
      coverage_interception: {
        cost: -0.06,
        max: 4
      },
      coverage_deflection: {
        cost: 0.1,
        max: -6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'K', 'P'],
    name: 'Ball Hawk',
    description: `
      This defender is always looking for interceptions.
      Min Salary: +8%`,
    conflicts: ['long_reach'],
    conflict_text: `
      Conflicts with: Long Reach`,
    salary_modifier: 0.08
  },
  high_jumper: {
    skill_modifiers: {
      vertical: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    salary_modifier: 0.1,
    name: 'High Jumper',
    description: `Vertical: 5% lower SP cost, +3 max
      Min Salary: +10%`
  },
  hb_power_rusher: {
    skill_modifiers: {
      carry_elusiveness: {
        cost: 0.1,
        max: -6
      },
      carry_power: {
        cost: -0.1,
        max: 6
      },
      carry_awareness: {
        cost: -0.1,
        max: 6
      },
      catch_hands: {
        cost: 0.05,
        max: -2
      },
      route_technique: {
        cost: 0.05,
        max: -3
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Power Rusher',
    description: `
      This player focuses on his Power Running skills.
      Power Running: 10% lower SP cost, +6 max
      Carry Awareness: 10% lower SP cost, +6 max
      Elusive Running: 10% higher SP cost, -6 max
      Route Technique: 5% higher SP cost, -3 max
      Receiving Hands: 5% higher SP cost, -2 max`,
    conflicts: ['hb_scat_back', 'hb_elusive_rusher', 'hb_blocking_back', 'hb_unpredictable'],
    conflict_text: `
	    Conflicts with: Scat Back, Elusive Rusher, Blocking Back, Unpredictable`,
    salary_modifier: 0.12
  },
  ol_tech_blocker: {
    skill_modifiers: {
      run_block_technique: {
        cost: -0.1,
        max: 6
      },
      run_block_power: {
        cost: 0.1,
        max: -6
      },
      pass_block_power: {
        cost: 0.1,
        max: -6
      },
      pass_block_technique: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'WR', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Technical Blocker',
    description: `
      This player focuses on technique over power when blocking.
      Run Blk Tech: 10% lower SP cost, +6 max
      Pass Blk Tech: 10% lower SP cost, +6 max
      Pass Blk Power: 10% higher SP cost, -6 max
      Run Blk Power: 10% higher SP cost, -6 max`,
    conflicts: ['ol_power_blocker'],
    conflict_text: `
      Conflicts with: Power Blocker`,
    salary_modifier: 0
  },
  ol_run_blocker: {
    skill_modifiers: {
      run_block_awareness: {
        cost: -0.08,
        max: 8
      },
      run_block_technique: {
        cost: -0.08,
        max: 8
      },
      run_block_power: {
        cost: -0.08,
        max: 8
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Run Blocker',
    description: `
      This player focuses on run blocking over pass blocking.
      Min Salary: +10%`,
    conflicts: ['ol_pass_blocker'],
    conflict_text: `
      Conflicts with: Pass Blocker`,
    salary_modifier: 0.1
  },
  k_kickoff_king: {
    skill_modifiers: {
      kickoff_power: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'P'],
    salary_modifier: 0.1,
    name: 'Kickoff King',
    description: `Kickoff Power: 5% lower SP cost, +3 max
      Min Salary: +10%`
  },
  slippery: {
    skill_modifiers: {
      carry_elusiveness: {
        cost: -0.05,
        max: 3
      },
      carry_power: {
        cost: 0.05,
        max: -3
      },
      carry_awareness: {
        cost: -0.04,
        max: 2
      },
      carry_grip: {
        cost: 0.04,
        max: -2
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Slippery',
    description: `
      This player prefers to take the less direct approach when carrying the ball.
      Elusive Running: 5% lower SP cost, +3 max
      Carry Awareness: 4% lower SP cost, +2 max
      Power Running: 5% higher SP cost, -3 max
      Carrying Grip: 4% higher SP cost, -2 max
      Min Salary: +6%`,
    conflicts: ['bruiser', 'unpredictable'],
    conflict_text: `
      Conflicts with: Bruiser, Unpredictable`,
    salary_modifier: 0.06
  },
  ot_pass_protector: {
    skill_modifiers: {
      footwork: {
        cost: -0.1,
        max: 6
      },
      pass_block_awareness: {
        cost: -0.08,
        max: 6
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    salary_modifier: 0.12,
    name: 'Pass Protector',
    description: `
      This tackle is apt at protecting his quarterback.
      Min Salary: +12%`
  },
  zone_specialist: {
    skill_modifiers: {
      man_coverage_awareness: {
        cost: 0.1,
        max: -6
      },
      zone_coverage_awareness: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'K', 'P'],
    name: 'Zone Specialist',
    description: `
      This defender is better in zone coverage than man coverage.
      Man Awareness: 10% higher SP cost, -6 max`,
    conflicts: ['man_specialist', 'flex_coverage'],
    conflict_text: `
      Conflicts with: Man Specialist, Flex Coverage`,
    salary_modifier: 0
  },
  ol_pass_blocker: {
    skill_modifiers: {
      pass_block_awareness: {
        cost: -0.08,
        max: 8
      },
      pass_block_power: {
        cost: -0.08,
        max: 8
      },
      pass_block_technique: {
        cost: -0.08,
        max: 8
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Pass Blocker',
    description: `
      This player focuses on pass blocking over run blocking.
      Min Salary: +12%`,
    conflicts: ['ol_run_blocker'],
    conflict_text: `
      Conflicts with: Run Blocker`,
    salary_modifier: 0.12
  },
  fb_rusher: {
    skill_modifiers: {
      carry_elusiveness: {
        cost: -0.06,
        max: 4
      },
      carry_power: {
        cost: -0.06,
        max: 4
      },
      carry_awareness: {
        cost: -0.06,
        max: 4
      },
      carry_grip: {
        cost: -0.06,
        max: 4
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Rusher',
    description: `
      This FB focuses on rushing over lead blocking.
      Min Salary: +12%`,
    conflicts: ['fb_lead_blocker', 'fb_scat_back'],
    conflict_text: `
	    Conflicts with: Lead Blocker, Scat Back`,
    salary_modifier: 0.12
  },
  wr_shifty: {
    skill_modifiers: {
      route_elusiveness: {
        cost: -0.1,
        max: 6
      },
      catch_hands: {
        cost: -0.1,
        max: 6
      },
      route_technique: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Shifty',
    description: `
      This WR is good at losing defenders with exceptional technique and eluisveness.
      Route Technique: 10% lower SP cost, +6 max
      Route Elusiveness: 10% lower SP cost, +6 max
      Receiving Hands: 10% lower SP cost, +6 max
      Min Salary: +14%`,
    conflicts: ['wr_speedster', 'wr_slot_receiver', 'wr_control'],
    conflict_text: `
      Conflicts with: Speedster, Slot Receiver, Dominator`,
    salary_modifier: 0.14
  },
  strong_base: {
    skill_modifiers: {
      quickness: {
        cost: -0.06,
        max: -3
      },
      balance: {
        cost: -0.06,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: [],
    salary_modifier: 0,
    name: 'Strong Base',
    description: `
      Fall once,
      shame on me.\n\ t\ t\ t\ t\ t\ tBalance: 6 % lower SP cost,
      +3 max\ n\ t\ t\ t\ t\ t\ tQuickness: 6 % higher SP cost,
      -3 max
    `
  },
  soft_hands: {
    skill_modifiers: {
      catch_in_traffic: {
        cost: 0.05,
        max: -3
      },
      catch_awareness: {
        cost: -0.08,
        max: 4
      },
      catch_grip: {
        cost: 0.05,
        max: -3
      },
      catch_hands: {
        cost: -0.08,
        max: 4
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Soft Hands',
    description: `
      You seen that glove on his left hand? Well, that glove's full of vaseline.
      Receiving Hands: 8% lower SP cost, +4 max
      Receiving Aware: 8% lower SP cost, +4 max
      Receiving Grip: 5% higher SP cost, -3 max
      Catching in Traffic: 5% higher SP cost, -3 max
      Min Salary: +6%`,
    conflicts: ['nerves_of_steel'],
    conflict_text: `
      Conflicts with: Nerves of Steel`,
    salary_modifier: 0.06
  },
  dl_dreadnought: {
    skill_modifiers: {
      toughness: {
        cost: -0.05,
        max: 6
      },
      conditioning: {
        cost: -0.05,
        max: 6
      },
      intimidation: {
        cost: -0.05,
        max: 6
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'FS', 'CB', 'K', 'P'],
    salary_modifier: 0.06,
    name: 'Dread-nought',
    description: `
      This defender beats down and outlasts his opponent.
      Toughness: 5% lower SP cost, +6 max
      Conditioning: 5% lower SP cost, +6 max
      Intimidation: 5% lower SP cost, +6 max
      Min Salary: +6%`
  },
  ol_power_blocker: {
    skill_modifiers: {
      run_block_technique: {
        cost: 0.1,
        max: -6
      },
      run_block_power: {
        cost: -0.1,
        max: 6
      },
      pass_block_power: {
        cost: -0.1,
        max: 6
      },
      pass_block_technique: {
        cost: 0.1,
        max: -6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'WR', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Power Blocker',
    description: `
      This player focuses on power over technique when blocking.
      Run Blk Tech: 10% higher SP cost, -6 max`,
    conflicts: ['ol_tech_blocker'],
    conflict_text: `
      Conflicts with: Technical Blocker`,
    salary_modifier: 0
  },
  qb_scrambler: {
    skill_modifiers: {
      pass_technique: {
        cost: 0.1,
        max: -6
      },
      quickness: {
        cost: -0.05,
        max: 3
      },
      pass_evasiveness: {
        cost: -0.1,
        max: 6
      },
      toughness: {
        cost: -0.05,
        max: 3
      },
      pass_accuracy: {
        cost: 0.1,
        max: -6
      },
      footwork: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Scrambler',
    description: `
      This QB prefers to stay on the move.
      Min Salary: +10%`,
    conflicts: ['qb_rusher', 'qb_precision_passer', 'qb_gunslinger', 'qb_dual_threat'],
    conflict_text: `
	    Conflicts with: Rusher, Precision Passer, Gunslinger, Dual Threat`,
    salary_modifier: 0.1
  },
  fearsome: {
    skill_modifiers: {
      intimidation: {
        cost: -0.06,
        max: 10
      }
    },
    position_descriptions: {},
    position_exclusions: [],
    name: 'Fearsome',
    description: `
      It is much more secure to be feared than to be loved.
      Min Salary: +4%`,
    conflicts: ['easy_going'],
    conflict_text: `
      Conflicts with: Easy Going`,
    salary_modifier: 0.04
  },
  nerves_of_steel: {
    skill_modifiers: {
      catch_in_traffic: {
        cost: -0.08,
        max: 4
      },
      catch_consistency: {
        cost: 0.05,
        max: -3
      },
      catch_hands: {
        cost: 0.05,
        max: -3
      },
      catch_grip: {
        cost: -0.08,
        max: 4
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Nerves of Steel',
    description: `
      When this player catches a pass, he holds on tight.
      Receiving Grip: 8% lower SP cost, +4 max
      Catching in Traffic: 8% lower SP cost, +4 max
      Receiving Hands: 5% higher SP cost, -3 max
      Receiving Aware: 5% higher SP cost, -3 max
      Min Salary: +6%`,
    conflicts: ['soft_hands'],
    conflict_text: `
      Conflicts with: Soft Hands`,
    salary_modifier: 0.06
  },
  chasedown_artist: {
    skill_modifiers: {
      tackle_awareness: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'P', 'K'],
    salary_modifier: 0,
    name: 'Chase Down Artist',
    description: `
      This player is great at finding his way to the ball carrier.
      Pursuit: 5% lower SP cost, +3 max`
  },
  lb_coverage: {
    skill_modifiers: {
      quickness: {
        cost: -0.08,
        max: 6
      },
      man_coverage_awareness: {
        cost: -0.1,
        max: 6
      },
      coverage_technique: {
        cost: -0.1,
        max: 6
      },
      zone_coverage_awareness: {
        cost: -0.1,
        max: 6
      },
      coverage_deflection: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'K', 'P'],
    name: 'Coverage LB',
    description: `
      This LB focuses his skills on coverage.
      Man Cvg Aware: 10% lower SP cost, +6 max
      Coverage Tech: 10% lower SP cost, +6 max
      Deflecting: 10% lower SP cost, +6 max
      Quickness: 8% lower SP cost, +6 max
      Min Salary: +12%`,
    conflicts: ['lb_blitzer', 'lb_middle_man'],
    conflict_text: `
      Conflicts with: Blitzer, Middle Man`,
    salary_modifier: 0.12
  },
  adept: {
    skill_modifiers: {},
    conflicts: [],
    position_descriptions: {},
    position_exclusions: [],
    salary_modifier: 0.1,
    name: 'Adept',
    description: `
      This player picks up abilities faster than his rivals.
      Min Salary: +10%`
  },
  dl_juggernaut: {
    skill_modifiers: {},
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DE', 'DT', 'LB', 'SS', 'FS', 'CB', 'K', 'P'],
    salary_modifier: 0,
    name: 'Jugger NOT',
    description: `
      This trait is now obsolete and does nothing.
    `
  },
  qb_precision_passer: {
    skill_modifiers: {
      pass_accuracy: {
        cost: -0.1,
        max: 6
      },
      pass_power: {
        cost: 0.1,
        max: -6
      }
    },
    position_descriptions: {},
    position_exclusions: ['HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Precision Passer',
    description: `
      This QB favors accuracy over arm strength.
      Pass Accuracy: 10% lower SP cost, +6 max
      Pass Power: 10% higher SP cost, -6 max
      Min Salary: +8%`,
    conflicts: ['qb_rusher', 'qb_gunslinger', 'qb_scrambler', 'qb_dual_threat'],
    conflict_text: `
      Conflicts with: Rusher, Gunslinger, Scrambler, Dual Threat`,
    salary_modifier: 0.08
  },
  te_receiver: {
    skill_modifiers: {
      catch_in_traffic: {
        cost: -0.1,
        max: 6
      },
      catch_grip: {
        cost: -0.1,
        max: 6
      },
      catch_hands: {
        cost: -0.1,
        max: 6
      },
      route_technique: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Receiving Specialist',
    description: `
      This TE focuses on going downfield for passes.
      Route Technique: 10% lower SP cost, +6 max
      Receiving Hands: 10% lower SP cost, +6 max
      Receiving Grip: 10% lower SP cost, +6 max
      Catch In Traffic: 10% lower SP cost, +6 max
      Min Salary: +16%`,
    conflicts: ['te_blocker'],
    conflict_text: `
      Conflicts with: Blocking Specialist`,
    salary_modifier: 0.16
  },
  spring_board: {
    skill_modifiers: {
      vertical: {
        cost: -0.08,
        max: 6
      },
      diving: {
        cost: -0.08,
        max: 6
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'C', 'OT', 'G'],
    salary_modifier: 0,
    name: 'Spring Board',
    description: `
      Does he have springs in his shoes?
      Diving: 8% lower SP cost, +6 max
      Vertical: 8% lower SP cost, +6 max
    `
  },
  bruiser: {
    skill_modifiers: {
      carry_elusiveness: {
        cost: 0.05,
        max: -3
      },
      carry_power: {
        cost: -0.05,
        max: 3
      },
      carry_awareness: {
        cost: 0.04,
        max: -2
      },
      carry_grip: {
        cost: -0.04,
        max: 2
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Bruiser',
    description: `
      This player is tough to bring down when he has the ball.
      Min Salary: +6%`,
    conflicts: ['slippery', 'unpredictable'],
    conflict_text: `
      Conflicts with: Slippery, Unpredictable`,
    salary_modifier: 0.06
  },
  qb_solid_frame: {
    skill_modifiers: {
      pass_evasiveness: {
        cost: 0.05,
        max: -3
      },
      quickness: {
        cost: 0.1,
        max: -6
      },
      toughness: {
        cost: -0.05,
        max: 3
      },
      pass_grip: {
        cost: -0.1,
        max: 6
      },
      footwork: {
        cost: 0.05,
        max: -2
      },
      pass_carry_power: {
        cost: -0.1,
        max: 6
      },
      sprinting: {
        cost: 0.05,
        max: -3
      }
    },
    position_descriptions: {},
    position_exclusions: ['HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Solid Frame',
    description: `
      This QB can take a hit, but he is a little slow.
      Sprinting: 5% higher SP cost, -3 max`,
    conflicts: [],
    conflict_text: '',
    salary_modifier: 0
  },
  qb_dual_threat: {
    skill_modifiers: {
      quickness: {
        cost: -0.05,
        max: -3
      },
      carry_elusiveness: {
        cost: -0.08,
        max: -5
      },
      pass_technique: {
        cost: -0.08,
        max: -5
      },
      carry_awareness: {
        cost: -0.08,
        max: -5
      },
      pass_accuracy: {
        cost: -0.08,
        max: -5
      },
      sprinting: {
        cost: -0.05,
        max: -3
      }
    },
    position_descriptions: {},
    position_exclusions: ['HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Dual Threat',
    description: `
      This QB can run and pass, but is a specialist at neither.
      Min Salary: +12%`,
    conflicts: ['qb_rusher', 'qb_precision_passer', 'qb_gunslinger', 'qb_scrambler'],
    conflict_text: `
      Conflicts with: Rusher, Precision Passer, Gunslinger, Scrambler`,
    salary_modifier: 0.12
  },
  dl_crusher: {
    skill_modifiers: {
      pass_rush_power: {
        cost: -0.06,
        max: 4
      },
      toughness: {
        cost: -0.06,
        max: 4
      },
      conditioning: {
        cost: 0.06,
        max: -4
      },
      pass_rush_technique: {
        cost: 0.06,
        max: -4
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'LB', 'SS', 'FS', 'CB', 'K', 'P'],
    name: 'Crusher',
    description: `
      This defender prefers power over technique when pass rushing.
      Conditioning: 6% higher SP cost, -4 max`,
    conflicts: ['dl_technique_man'],
    conflict_text: `
      Conflicts with: Technique Man`,
    salary_modifier: 0
  },
  egotist: {
    skill_modifiers: {
      heart: {
        cost: 0.12,
        max: -14
      },
      toughness: {
        cost: 0.1,
        max: -12
      },
      conditioning: {
        cost: 0.1,
        max: -12
      },
      quickness: {
        cost: -0.05,
        max: 8
      },
      balance: {
        cost: -0.05,
        max: 8
      },
      vertical: {
        cost: -0.05,
        max: 8
      },
      footwork: {
        cost: -0.05,
        max: 8
      },
      sprinting: {
        cost: -0.05,
        max: 8
      },
      diving: {
        cost: -0.05,
        max: 8
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: [],
    salary_modifier: 0.12,
    name: 'Egotist',
    description: `
      This player is physically gifted, but he takes his gifts for granted.
      Min Salary: +12%`
  },
  brick_wall: {
    skill_modifiers: {
      tackle_power: {
        cost: -0.04,
        max: 2
      },
      hold_ground: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C'],
    salary_modifier: 0,
    name: 'Brick Wall',
    description: `
      Attacking this player is like hitting a brick wall.
      Power Tackling: 4% lower SP cost, +2 max
      `
  },
  dl_towering_man: {
    skill_modifiers: {
      blitz_awareness: {
        cost: -0.05,
        max: 3
      },
      vertical: {
        cost: -0.05,
        max: 3
      },
      pass_rush_deflection: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'LB', 'SS', 'FS', 'CB', 'K', 'P'],
    salary_modifier: 0,
    name: 'Towering Man',
    description: `
      Next best thing to a sack.
      Vertical: 5% lower SP cost, +3 max
      `
  },
  d_anchor: {
    skill_modifiers: {
      defense_consistency: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'P', 'K'],
    salary_modifier: 0,
    name: 'D Anchor',
    description: `
      This player is always solid on defense, no matter the situation.
      Defense Consistency: 5% lower SP cost, +3 max`
  },
  tenacious: {
    skill_modifiers: {
      toughness: {
        cost: -0.04,
        max: 2
      },
      tackle_grip: {
        cost: -0.05,
        max: 3
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C'],
    name: 'Tenacious',
    description: `
      This defender doesn't like to give up.
      Toughness 4% lower SP cost, +2 max`,
    conflicts: ['fumble_creator'],
    conflict_text: `
      Conflicts with: Fumble Creator`,
    salary_modifier: 0
  },
  dl_run_stuffer: {
    skill_modifiers: {
      break_run_block: {
        cost: -0.1,
        max: 6
      },
      pass_rush_power: {
        cost: 0.1,
        max: -6
      },
      hold_ground: {
        cost: -0.1,
        max: 6
      },
      pass_rush_technique: {
        cost: 0.1,
        max: -6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'LB', 'SS', 'FS', 'CB', 'K', 'P'],
    name: 'Run Stuffer',
    description: `
      This defender focuses on stopping the run over pass rushing.
      Break Run Blk: 10% lower SP cost, +6 max
      Hold Ground: 10% lower SP cost, +6 max
      Pass Rush Tech: 10% higher SP cost, -6 max
      Pass Rush Power: 10% higher SP cost, -6 max
      Min Salary: +12%`,
    conflicts: ['dl_pass_rusher'],
    conflict_text: `
      Conflicts with: Pass Rusher`,
    salary_modifier: 0.12
  },
  dl_technique_man: {
    skill_modifiers: {
      pass_rush_power: {
        cost: 0.06,
        max: -4
      },
      toughness: {
        cost: 0.06,
        max: -4
      },
      conditioning: {
        cost: -0.06,
        max: 4
      },
      pass_rush_technique: {
        cost: -0.06,
        max: 4
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'LB', 'SS', 'FS', 'CB', 'K', 'P'],
    name: 'Technique Man',
    description: `
      This defender prefers technique over power when pass rushing.
      Pass Rush Tech: 6% lower SP cost, +4 max
      Conditioning: 6% lower SP cost, +4 max
      Pass Rush Power: 6% higher SP cost, -4 max
      Toughness: 6% higher SP cost, -4 max`,
    conflicts: ['dl_crusher'],
    conflict_text: `
      Conflicts with: Crusher`,
    salary_modifier: 0
  },
  scholar: {
    skill_modifiers: {},
    conflicts: [],
    position_descriptions: {},
    position_exclusions: [],
    salary_modifier: 0,
    name: 'Scholar',
    description: `
      This player has a gifted mind for the game.
      Gain play knowledge at twice the normal rate.`
  },
  fb_lead_blocker: {
    skill_modifiers: {
      run_block_technique: {
        cost: -0.1,
        max: 6
      },
      pass_block_power: {
        cost: -0.1,
        max: 6
      },
      pass_block_awareness: {
        cost: -0.1,
        max: 6
      },
      run_block_power: {
        cost: -0.1,
        max: 6
      },
      lead_block_awareness: {
        cost: -0.1,
        max: 6
      },
      pass_block_technique: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Lead Blocker',
    description: `
      This FB focuses on blocking for his teammates.
      Lead Blk Aware: 10% lower SP cost, +6 max
      Run Blk Tech: 10% lower SP cost, +6 max
      Run Blk Power: 10% lower SP cost, +6 max
      Pass Blk Tech: 10% lower SP cost, +6 max
      Pass Blk Power: 10% lower SP cost, +6 max
      Pass Blk Aware: 10% lower SP cost, +6 max
      Min Salary: +12%`,
    conflicts: ['fb_rusher', 'fb_scat_back'],
    conflict_text: `
      Conflicts with: Rusher, Scat Back`,
    salary_modifier: 0.12
  },
  workhorse: {
    skill_modifiers: {
      conditioning: {
        cost: -0.06,
        max: 10
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: [],
    salary_modifier: 0.05,
    name: 'Workhorse',
    description: `
      This player just keeps going and going.
      Conditioning: 6% lower SP cost, +10 max
      Min Salary: +5%`
  },
  lb_middle_man: {
    skill_modifiers: {
      tackle_awareness: {
        cost: -0.1,
        max: 6
      },
      toughness: {
        cost: -0.1,
        max: 6
      },
      break_run_block: {
        cost: -0.1,
        max: 6
      },
      intimidation: {
        cost: -0.1,
        max: 6
      },
      tackle_power: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'K', 'P'],
    name: 'Middle Man',
    description: `
      This LB focuses his skills on playing the run.
      Break Run Blk: 10% lower SP cost, +6 max
      Power Tackling: 10% lower SP cost, +6 max
      Pursuit: 10% lower SP cost, +6 max
      Toughness: 10% lower SP cost, +6 max
      Intimidation: 10% lower SP cost, +6 max
      Min Salary: +10%`,
    conflicts: ['lb_coverage', 'lb_blitzer'],
    conflict_text: `
      Conflicts with: Coverage LB, Blitzer`,
    salary_modifier: 0.1
  },
  meathead: {
    skill_modifiers: {
      tackle_awareness: {
        cost: 0.05,
        max: -3
      },
      blitz_awareness: {
        cost: 0.05,
        max: -3
      },
      run_block_awareness: {
        cost: 0.05,
        max: -3
      },
      pass_rush_power: {
        cost: -0.05,
        max: 3
      },
      carry_power: {
        cost: -0.05,
        max: 3
      },
      toughness: {
        cost: -0.03,
        max: 3
      },
      pass_block_power: {
        cost: -0.05,
        max: 3
      },
      run_block_power: {
        cost: -0.05,
        max: 3
      },
      snap_reaction: {
        cost: 0.06,
        max: -6
      },
      pass_block_awareness: {
        cost: 0.05,
        max: -3
      },
      carry_awareness: {
        cost: 0.05,
        max: -3
      },
      pass_carry_power: {
        cost: -0.05,
        max: 3
      },
      intimidation: {
        cost: -0.03,
        max: 3
      },
      tackle_power: {
        cost: -0.05,
        max: 3
      },
      pass_awareness: {
        cost: 0.05,
        max: -3
      }
    },
    position_descriptions: {
      'FS': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Tackling: 5 % lower SP cost, +3 max
        Pass Rush Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Pursuit: 5 % higher SP cost, -3 max
        Blitz Awareness: 5 % higher SP cost, -3 max`,
      'TE': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Running: 5 % lower SP cost, +3 max
        Run Blk Power: 5 % lower SP cost, +3 max
        Pass Blk Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Carrying Awareness: 5 % higher SP cost, -3 max
        Run Blk Awareness: 5 % higher SP cost, -3 max
        Pass Blk Awareness: 5 % higher SP cost, -3 max`,
      'HB': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Running: 5 % lower SP cost, +3 max
        Run Blk Power: 5 % lower SP cost, +3 max
        Pass Blk Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Carrying Awareness: 5 % higher SP cost, -3 max
        Run Blk Awareness: 5 % higher SP cost, -3 max
        Pass Blk Awareness: 5 % higher SP cost, -3 max`,
      'K': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Tackling: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Pursuit: 5 % higher SP cost, -3 max`,
      'CB': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Tackling: 5 % lower SP cost, +3 max
        Pass Rush Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Pursuit: 5 % higher SP cost, -3 max
        Blitz Awareness: 5 % higher SP cost, -3 max`,
      'FB': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Running: 5 % lower SP cost, +3 max
        Run Blk Power: 5 % lower SP cost, +3 max
        Pass Blk Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Carrying Awareness: 5 % higher SP cost, -3 max
        Run Blk Awareness: 5 % higher SP cost, -3 max
        Pass Blk Awareness: 5 % higher SP cost, -3 max`,
      'LB': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Tackling: 5 % lower SP cost, +3 max
        Pass Rush Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Pursuit: 5 % higher SP cost, -3 max
        Blitz Awareness: 5 % higher SP cost, -3 max`,
      'C': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Run Blk Power: 5 % lower SP cost, +3 max
        Pass Blk Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Run Blk Awareness: 5 % higher SP cost, -3 max
        Pass Blk Awareness: 5 % higher SP cost, -3 max`,
      'SS': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Tackling: 5 % lower SP cost, +3 max
        Pass Rush Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Pursuit: 5 % higher SP cost, -3 max
        Blitz Awareness: 5 % higher SP cost, -3 max`,
      'DT': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Tackling: 5 % lower SP cost, +3 max
        Pass Rush Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Pursuit: 5 % higher SP cost, -3 max
        Blitz Awareness: 5 % higher SP cost, -3 max`,
      'DE': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Tackling: 5 % lower SP cost, +3 max
        Pass Rush Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Pursuit: 5 % higher SP cost, -3 max
        Blitz Awareness: 5 % higher SP cost, -3 max`,
      'P': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Tackling: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Pursuit: 5 % higher SP cost, -3 max`,
      'QB': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Drop Back Power: 5 % lower SP cost, +3 max
        Power Running: 5 % lower SP cost, +3 max
        Pass Awareness: 5 % higher SP cost, -3 max
        Carrying Awareness: 5 % higher SP cost, -3 max`,
      'G': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Run Blk Power: 5 % lower SP cost, +3 max
        Pass Blk Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Run Blk Awareness: 5 % higher SP cost, -3 max
        Pass Blk Awareness: 5 % higher SP cost, -3 max`,
      'OT': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Run Blk Power: 5 % lower SP cost, +3 max
        Pass Blk Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Run Blk Awareness: 5 % higher SP cost, -3 max
        Pass Blk Awareness: 5 % higher SP cost, -3 max`,
      'WR': `
        This player may be strong, but he is not the brightest.
          Toughness: 3 % lower SP cost, +3 max
        Intimidation: 3 % lower SP cost, +3 max
        Power Running: 5 % lower SP cost, +3 max
        Run Blk Power: 5 % lower SP cost, +3 max
        Snap Reaction: 6 % higher SP cost, -6 max
        Carrying Awareness: 5 % higher SP cost, -3 max
        Run Blk Awareness: 5 % higher SP cost, -3 max`
    },
    position_exclusions: [],
    name: 'Meathead',
    description: `
      This player may be strong, but he is not the brightest.
        Toughness: 3 % lower SP cost, +3 max
      Intimidation: 3 % lower SP cost, +3 max
      Power Tackling: 5 % lower SP cost, +3 max
      Drop Back Power: 5 % lower SP cost, +3 max
      Power Running: 5 % lower SP cost, +3 max
      Run Blk Power: 5 % lower SP cost, +3 max
      Pass Blk Power: 5 % lower SP cost, +3 max
      Pass Rush Power: 5 % lower SP cost, +3 max
      Snap Reaction: 6 % higher SP cost, -6 max
      Pursuit: 5 % higher SP cost, -3 max
      Pass Awareness: 5 % higher SP cost, -3 max
      Carrying Awareness: 5 % higher SP cost, -3 max
      Run Blk Awareness: 5 % higher SP cost, -3 max
      Pass Blk Awareness: 5 % higher SP cost, -3 max
      Blitz Awareness: 5 % higher SP cost, -3 max`,
    conflicts: ['tactician'],
    conflict_text: `

      Conflicts with: Tactician`,
    salary_modifier: 0
  },
  hb_scat_back: {
    skill_modifiers: {
      catch_in_traffic: {
        cost: -0.1,
        max: 6
      },
      catch_grip: {
        cost: -0.1,
        max: 6
      },
      catch_hands: {
        cost: -0.1,
        max: 6
      },
      route_technique: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Scat Back',
    description: `
      This HB focuses on his receiving skills first and foremost.
      Receiving Grip: 10 % lower SP cost, +6 max
      Receiving Hands: 10 % lower SP cost, +6 max
      Catch in Traffic: 10 % lower SP cost, +6 max
      Route Technique: 10 % lower SP cost, +6 max
      Min Salary: +12 % `,
    conflicts: ['hb_rushing_back'],
    conflict_text: `
      Conflicts with: Rusher`,
    salary_modifier: 0.12
  },
  k_sharpshooter: {
    skill_modifiers: {
      punt_power: {
        cost: 0.1,
        max: -6
      },
      punt_accuracy: {
        cost: -0.1,
        max: 6
      },
      kick_power: {
        cost: 0.1,
        max: -6
      },
      kick_accuracy: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {
      'P': `
          This punter forgoes power for better accuracy.
        Punt Accuracy: 10 % lower SP cost, +6 max
          Punt Power: 10 % higher SP cost, -6 max`,
      'K': `
          This kicker forgoes power for better accuracy.
        Kick Accuracy: 10 % lower SP cost, +6 max
          Field Goal Power: 10 % higher SP cost, -6 max`
    },
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB'],
    name: 'Sharp Shooter',
    description: `Kick Accuracy: 10 % lower SP cost, +6 max
      Field Goal Power: 10 % higher SP cost, -6 max`,
    conflicts: ['k_leg_of_steel'],
    conflict_text: `
      Conflicts with: Leg of Steel`,
    salary_modifier: 0
  },
  wr_control: {
    skill_modifiers: {
      carry_power: {
        cost: -0.1,
        max: 6
      },
      conditioning: {
        cost: -0.1,
        max: 6
      },
      run_block_power: {
        cost: -0.1,
        max: 6
      },
      intimidation: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Dominator',
    description: `
      This WR focuses on wearing down his opponents.
      Run Blk Power: 10 % lower SP cost, +6 max
      Power Running: 10 % lower SP cost, +6 max
      Intimidation: 10 % lower SP cost, +6 max
      Conditioning: 10 % lower SP cost, +6 max
      Min Salary: +10 % `,
    conflicts: ['wr_speedster', 'wr_shifty', 'wr_slot_receiver'],
    conflict_text: `
      Conflicts with: Speedster, Possession WR, In - Traffic`,
    salary_modifier: 0.1
  },
  fumble_creator: {
    skill_modifiers: {
      tackle_strip: {
        cost: -0.1,
        max: 6
      },
      tackle_grip: {
        cost: 0.1,
        max: -6
      },
      tackle_technique: {
        cost: 0.1,
        max: -6
      },
      tackle_power: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C'],
    name: 'Fumble Creator',
    description: `
      This defender prefers to go for the fumble, even if he sometimes misses tackles.
      Power Tackling: 10 % lower SP cost, +6 max
      Strip Tech: 10 % lower SP cost, +6 max
      Tackling Tech: 10 % higher SP cost, -6 max
      Tackling Grip: 10 % higher SP cost, -6 max
      Min Salary: +8 % `,
    conflicts: ['sure_tackler', 'tenacious'],
    conflict_text: `
      Conflicts with: Sure Tackler, Tenacious`,
    salary_modifier: 0.08
  },
  natural: {
    skill_modifiers: {},
    conflicts: [],
    position_descriptions: {},
    position_exclusions: [],
    salary_modifier: 0.12,
    name: 'Natural',
    description: `
      This player was born for the game.
      All skills start with twice the normal value.
      Min Salary: +12 % `
  },
  unpredictable: {
    skill_modifiers: {
      carry_elusiveness: {
        cost: -0.06,
        max: -5
      },
      carry_power: {
        cost: -0.06,
        max: -5
      },
      carry_awareness: {
        cost: -0.03,
        max: 2
      },
      carry_grip: {
        cost: -0.03,
        max: 2
      }
    },
    short_name: 'Unpre - dictable',
    position_descriptions: {},
    position_exclusions: ['QB', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Unpr - edic - table',
    description: `
      This HB is good at both power and Elusive Running, but is a specialist in neither.
      Elusive Running: 6 % lower SP cost, -5 max
      Power Running: 6 % lower SP cost, -5 max
      Carry Awareness: 3 % lower SP cost, +2 max
      Carrying Grip: 3 % lower SP cost, +2 max
      Min Salary: +6 % `,
    conflicts: ['bruiser', 'slippery'],
    conflict_text: `
      Conflicts with: Bruiser, Slippery`,
    salary_modifier: 0.06
  },
  c_quick_snap: {
    skill_modifiers: {
      snap_reaction: {
        cost: -0.15,
        max: 10
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    salary_modifier: 0.04,
    name: 'Quick Snap',
    description: `
      This center is great at getting off the line after the snap.
      Snap Reaction: 15 % lower SP cost, +10 max
      Min Salary: +4 % `
  },
  quick_feet: {
    skill_modifiers: {
      quickness: {
        cost: -0.1,
        max: 6
      },
      footwork: {
        cost: -0.1,
        max: 6
      },
      sprinting: {
        cost: 0.1,
        max: -6
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: [],
    salary_modifier: 0,
    name: 'Quick Feet',
    description: `
      Every which way but straight.
      Footwork: 10 % lower SP cost, +6 max
      Quickness: 10 % lower SP cost, +6 max
      Sprinting: 10 % higher SP cost, -6 max`
  },
  qb_rusher: {
    skill_modifiers: {
      carry_power: {
        cost: -0.1,
        max: 6
      },
      pass_accuracy: {
        cost: 0.1,
        max: -6
      },
      carry_grip: {
        cost: -0.1,
        max: 6
      },
      carry_elusiveness: {
        cost: -0.1,
        max: 6
      },
      pass_technique: {
        cost: 0.1,
        max: -6
      },
      carry_awareness: {
        cost: -0.1,
        max: 6
      },
      pass_consistency: {
        cost: 0.1,
        max: -6
      },
      pass_awareness: {
        cost: 0.1,
        max: -6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Rusher',
    description: `
      This QB is not afraid to carry the ball.
      Carrying Grip: 10 % lower SP cost, +6 max
      Power Running: 10 % lower SP cost, +6 max
      Elusive Running: 10 % lower SP cost, +6 max
      Carrying Awareness: 10 % lower SP cost, +6 max
      Pass Technique: 10 % higher SP cost, -6 max
      Pass Accuracy: 10 % higher SP cost, -6 max
      Pass Awareness: 10 % higher SP cost, -6 max
      Pass Consistency: 10 % higher SP cost, -6 max`,
    conflicts: ['qb_dual_threat', 'qb_precision_passer', 'qb_gunslinger', 'qb_scrambler'],
    conflict_text: `
      Conflicts with: Dual Threat, Precision Passer, Gunslinger, Scrambler`,
    salary_modifier: 0
  },
  return_specialist: {
    skill_modifiers: {
      return_awareness: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'OT', 'G', 'C', 'DT', 'DE', 'LB', 'K', 'P'],
    name: 'Return Specialist',
    description: `
      Half of a third of the game
      Return Awareness: 5 % lower SP cost, +3 max`
  },
  sure_tackler: {
    skill_modifiers: {
      tackle_strip: {
        cost: 0.1,
        max: -6
      },
      tackle_grip: {
        cost: -0.1,
        max: 6
      },
      tackle_technique: {
        cost: -0.1,
        max: 6
      },
      tackle_power: {
        cost: 0.1,
        max: -6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C'],
    name: 'Sure Tackler',
    description: `
      This defender goes for sure tackles over trying for fumbles.
      Tackling Tech: 10 % lower SP cost, +6 max
      Tackling Grip: 10 % lower SP cost, +6 max
      Power Tackling: 10 % higher SP cost, -6 max
      Strip Tech: 10 % higher SP cost, -6 max
      Min Salary: +6 % `,
    conflicts: ['fumble_creator'],
    conflict_text: `
      Conflicts with: Fumble Creator`,
    salary_modifier: 0.06
  },
  ol_consistent_blocker: {
    skill_modifiers: {
      snap_reaction: {
        cost: 0.05,
        max: -3
      },
      block_consistency: {
        cost: -0.1,
        max: 6
      },
      balance: {
        cost: -0.05,
        max: 3
      },
      intimidation: {
        cost: 0.05,
        max: -3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'WR', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    salary_modifier: 0.05,
    name: 'Consistent Blocker',
    description: `
      We shall not falter.
      Blk Consistency: 10 % lower SP cost, +6 max
      Balance: 5 % lower SP cost, +3 max
      Intimidation: 5 % higher SP cost, -3 max
      Snap Reaction: 5 % higher SP cost, -3 max
      Min Salary: +6 % `
  },
  wr_slot_receiver: {
    skill_modifiers: {
      catch_in_traffic: {
        cost: -0.1,
        max: 6
      },
      toughness: {
        cost: -0.1,
        max: 6
      },
      catch_awareness: {
        cost: -0.1,
        max: 6
      },
      catch_grip: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Slot Receiver',
    description: `
      This WR is not afraid to lay his body on the line for a pass.
      Catch In Traffic: 10 % lower SP cost, +6 max
      Receiving Grip: 10 % lower SP cost, +6 max
      Receiving Awareness: 10 % lower SP cost, +6 max
      Toughness: 10 % lower SP cost, +10 max
      Min Salary: +12 % `,
    conflicts: ['wr_speedster', 'wr_shifty', 'wr_control'],
    conflict_text: `
      Conflicts with: Speedster, Shifty, Dominator`,
    salary_modifier: 0.12
  },
  qb_field_general: {
    skill_modifiers: {
      leadership: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Field General',
    description: `
      This QB is a great leader.
      Leadership: 5 % lower SP cost, +3 max`
  },
  broad_jumper: {
    skill_modifiers: {
      diving: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    salary_modifier: 0.1,
    name: 'Broad Jumper',
    description: `Diving: 5 % lower SP cost, +3 max
      Min Salary: +10 % `
  },
  hb_elusive_rusher: {
    skill_modifiers: {
      carry_elusiveness: {
        cost: -0.1,
        max: 6
      },
      carry_power: {
        cost: 0.1,
        max: -6
      },
      carry_awareness: {
        cost: -0.1,
        max: 6
      },
      carry_grip: {
        cost: 0.1,
        max: -6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Elusive Rusher',
    description: `
      This player focuses on his Elusive Running skills.
      Elusive Running: 10 % lower SP cost, +6 max
      Carry Awareness: 10 % lower SP cost, +6 max
      Power Running: 10 % higher SP cost, -6 max
      Carry Grip: 10 % higher SP cost, -6 max`,
    conflicts: ['hb_power_rusher', 'hb_blocking_back', 'hb_unpredictable'],
    conflict_text: `
      Conflicts with: Power Rusher, Blocking Back, Unpredictable`,
    salary_modifier: 0.12
  },
  k_leg_of_steel: {
    skill_modifiers: {
      punt_power: {
        cost: -0.1,
        max: 6
      },
      punt_accuracy: {
        cost: 0.1,
        max: -6
      },
      kick_power: {
        cost: -0.1,
        max: 6
      },
      kick_accuracy: {
        cost: 0.1,
        max: -6
      }
    },
    position_descriptions: {
      'P': `
          This punter forgoes accuracy for greater power.
        Punt Power: 10 % lower SP cost, +6 max
          Punt Accuracy: 10 % higher SP cost, -6 max`,
      'K': `
          This kicker forgoes accuracy for greater power.
        Field Goal Power: 10 % lower SP cost, +6 max
          Kick Accuracy: 10 % higher SP cost, -6 max`
    },
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB'],
    name: 'Leg of Steel',
    description: `Field Goal Power: 10 % lower SP cost, +6 max
      Kick Accuracy: 10 % higher SP cost, -6 max`,
    conflicts: ['k_sharpshooter'],
    conflict_text: `
      Conflicts with: Sharpshooter`,
    salary_modifier: 0
  },
  wr_speedster: {
    skill_modifiers: {
      snap_reaction: {
        cost: -0.1,
        max: 6
      },
      quickness: {
        cost: -0.08,
        max: 4
      },
      sprinting: {
        cost: -0.08,
        max: 4
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Speedster',
    description: `
      This WR focuses on speed, speed, and more speed.
      Sprinting: 8 % lower SP cost, +4 max
      Quickness: 8 % lower SP cost, +4 max
      Snap Reaction: 10 % lower SP cost, +6 max
      Min Salary: +18 % `,
    conflicts: ['wr_shifty', 'wr_slot_receiver', 'wr_control'],
    conflict_text: `
      Conflicts with: Shifty, Slot Receiver, Dominator`,
    salary_modifier: 0.18
  },
  g_downfield_blocker: {
    skill_modifiers: {
      lead_block_awareness: {
        cost: -0.1,
        max: 6
      },
      sprinting: {
        cost: -0.1,
        max: 6
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    salary_modifier: 0.08,
    name: 'Downfield Blocker',
    description: `
      This guard is great at pulling and getting into the secondary.
      Sprinting: 10 % lower SP cost, +6 max
      Lead Blk Aware: 10 % lower SP cost, +6 max
      Min Salary: +8 %`
  },
  qb_gunslinger: {
    skill_modifiers: {
      pass_accuracy: {
        cost: 0.1,
        max: -6
      },
      pass_power: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Gunslinger',
    description: `
      This QB favors arm strength over accuracy.
      Pass Power: 10 % lower SP cost, +6 max
      Pass Accuracy: 10 % higher SP cost, -6 max
      Min Salary: +8 % `,
    conflicts: ['qb_rusher', 'qb_precision_passer', 'qb_scrambler', 'qb_dual_threat'],
    conflict_text: `
      Conflicts with: Rusher, Precision Passer, Scrambler, Dual Threat`,
    salary_modifier: 0.08
  },
  hb_blocking_back: {
    skill_modifiers: {
      run_block_awareness: {
        cost: -0.1,
        max: 6
      },
      run_block_power: {
        cost: -0.1,
        max: 6
      },
      pass_block_power: {
        cost: -0.1,
        max: 6
      },
      pass_block_awareness: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Blocking Back',
    description: `
      This HB focuses on blocking for his teammates.
      Pass Blk Tech: 10 % lower SP cost, +6 max
      Pass Blk Power: 10 % lower SP cost, +6 max
      Pass Blk Aware: 10 % lower SP cost, +6 max
      Run Blk Tech: 10 % lower SP cost, +6 max
      Run Blk Power: 10 % lower SP cost, +6 max
      Lead Blk Aware: 10 % lower SP cost, +6 max
      Min Salary: +6 % `,
    conflicts: [],
    conflict_text: '',
    salary_modifier: 0.06
  },
  superstar_nonglam: {
    skill_modifiers: {
      punt_power: {
        cost: -0.2,
        max: 10
      },
      tackle_strip: {
        cost: -0.2,
        max: 10
      },
      run_block_awareness: {
        cost: -0.2,
        max: 10
      },
      leadership: {
        cost: -0.2,
        max: 10
      },
      coverage_interception: {
        cost: -0.2,
        max: 10
      },
      pass_rush_power: {
        cost: -0.2,
        max: 10
      },
      route_elusiveness: {
        cost: -0.2,
        max: 10
      },
      catch_consistency: {
        cost: -0.2,
        max: 10
      },
      snap_reaction: {
        cost: -0.2,
        max: 10
      },
      block_consistency: {
        cost: -0.2,
        max: 10
      },
      pass_block_awareness: {
        cost: -0.2,
        max: 10
      },
      diving: {
        cost: -0.2,
        max: 10
      },
      kick_consistency: {
        cost: -0.2,
        max: 10
      },
      pass_evasiveness: {
        cost: -0.2,
        max: 10
      },
      toughness: {
        cost: -0.2,
        max: 10
      },
      pass_accuracy: {
        cost: -0.2,
        max: 10
      },
      kick_power: {
        cost: -0.2,
        max: 10
      },
      pass_technique: {
        cost: -0.2,
        max: 10
      },
      carry_awareness: {
        cost: -0.2,
        max: 10
      },
      route_technique: {
        cost: -0.2,
        max: 10
      },
      punt_consistency: {
        cost: -0.2,
        max: 10
      },
      carry_grip: {
        cost: -0.2,
        max: 10
      },
      carry_elusiveness: {
        cost: -0.2,
        max: 10
      },
      defense_consistency: {
        cost: -0.2,
        max: 10
      },
      run_block_power: {
        cost: -0.2,
        max: 10
      },
      tackle_power: {
        cost: -0.2,
        max: 10
      },
      pass_block_technique: {
        cost: -0.2,
        max: 10
      },
      tackle_awareness: {
        cost: -0.2,
        max: 10
      },
      break_run_block: {
        cost: -0.2,
        max: 10
      },
      conditioning: {
        cost: -0.2,
        max: 10
      },
      tackle_technique: {
        cost: -0.2,
        max: 10
      },
      catch_hands: {
        cost: -0.2,
        max: 10
      },
      catch_grip: {
        cost: -0.2,
        max: 10
      },
      return_awareness: {
        cost: -0.2,
        max: 10
      },
      man_coverage_awareness: {
        cost: -0.2,
        max: 10
      },
      pass_consistency: {
        cost: -0.2,
        max: 10
      },
      footwork: {
        cost: -0.2,
        max: 10
      },
      punt_hands: {
        cost: -0.2,
        max: 10
      },
      intimidation: {
        cost: -0.2,
        max: 10
      },
      zone_coverage_awareness: {
        cost: -0.2,
        max: 10
      },
      pass_power: {
        cost: -0.2,
        max: 10
      },
      pass_rush_deflection: {
        cost: -0.2,
        max: 10
      },
      quickness: {
        cost: -0.2,
        max: 10
      },
      balance: {
        cost: -0.2,
        max: 10
      },
      vertical: {
        cost: -0.2,
        max: 10
      },
      pass_carry_power: {
        cost: -0.2,
        max: 10
      },
      punt_accuracy: {
        cost: -0.2,
        max: 10
      },
      hold_ground: {
        cost: -0.2,
        max: 10
      },
      kickoff_power: {
        cost: -0.2,
        max: 10
      },
      pass_awareness: {
        cost: -0.2,
        max: 10
      },
      blitz_awareness: {
        cost: -0.2,
        max: 10
      },
      carry_power: {
        cost: -0.2,
        max: 10
      },
      catch_awareness: {
        cost: -0.2,
        max: 10
      },
      pass_block_power: {
        cost: -0.2,
        max: 10
      },
      kick_accuracy: {
        cost: -0.2,
        max: 10
      },
      run_block_technique: {
        cost: -0.2,
        max: 10
      },
      pass_grip: {
        cost: -0.2,
        max: 10
      },
      heart: {
        cost: -0.2,
        max: 10
      },
      catch_in_traffic: {
        cost: -0.2,
        max: 10
      },
      coverage_technique: {
        cost: -0.2,
        max: 10
      },
      lead_block_awareness: {
        cost: -0.2,
        max: 10
      },
      tackle_grip: {
        cost: -0.2,
        max: 10
      },
      sprinting: {
        cost: -0.2,
        max: 10
      },
      pass_rush_technique: {
        cost: -0.2,
        max: 10
      },
      coverage_deflection: {
        cost: -0.2,
        max: 10
      }
    },
    position_descriptions: {},
    is_superstar: 'nonglam',
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'DE', 'SS', 'FS', 'CB', 'LB'],
    name: 'Superstar',
    description: `
      This is a special, highly skilled player.Each agent may only control ONE of each of the three types(150 / 100 / 50 Flex Pts) of superstars at a time, and they must be earned.
      All Skills: 20 % lower SP cost, +10 max
      Gains 10, 000 extra Skill Points over career
      Gains 3 extra Ability Points over career
      Min Salary: +150 % `,
    conflicts: [],
    salary_modifier: 1.5
  },
  superstar_avg: {
    skill_modifiers: {
      punt_power: {
        cost: -0.2,
        max: 10
      },
      tackle_strip: {
        cost: -0.2,
        max: 10
      },
      run_block_awareness: {
        cost: -0.2,
        max: 10
      },
      leadership: {
        cost: -0.2,
        max: 10
      },
      coverage_interception: {
        cost: -0.2,
        max: 10
      },
      pass_rush_power: {
        cost: -0.2,
        max: 10
      },
      route_elusiveness: {
        cost: -0.2,
        max: 10
      },
      catch_consistency: {
        cost: -0.2,
        max: 10
      },
      snap_reaction: {
        cost: -0.2,
        max: 10
      },
      block_consistency: {
        cost: -0.2,
        max: 10
      },
      pass_block_awareness: {
        cost: -0.2,
        max: 10
      },
      diving: {
        cost: -0.2,
        max: 10
      },
      kick_consistency: {
        cost: -0.2,
        max: 10
      },
      pass_evasiveness: {
        cost: -0.2,
        max: 10
      },
      toughness: {
        cost: -0.2,
        max: 10
      },
      pass_accuracy: {
        cost: -0.2,
        max: 10
      },
      kick_power: {
        cost: -0.2,
        max: 10
      },
      pass_technique: {
        cost: -0.2,
        max: 10
      },
      carry_awareness: {
        cost: -0.2,
        max: 10
      },
      route_technique: {
        cost: -0.2,
        max: 10
      },
      punt_consistency: {
        cost: -0.2,
        max: 10
      },
      carry_grip: {
        cost: -0.2,
        max: 10
      },
      carry_elusiveness: {
        cost: -0.2,
        max: 10
      },
      defense_consistency: {
        cost: -0.2,
        max: 10
      },
      run_block_power: {
        cost: -0.2,
        max: 10
      },
      tackle_power: {
        cost: -0.2,
        max: 10
      },
      pass_block_technique: {
        cost: -0.2,
        max: 10
      },
      tackle_awareness: {
        cost: -0.2,
        max: 10
      },
      break_run_block: {
        cost: -0.2,
        max: 10
      },
      conditioning: {
        cost: -0.2,
        max: 10
      },
      tackle_technique: {
        cost: -0.2,
        max: 10
      },
      catch_hands: {
        cost: -0.2,
        max: 10
      },
      catch_grip: {
        cost: -0.2,
        max: 10
      },
      return_awareness: {
        cost: -0.2,
        max: 10
      },
      man_coverage_awareness: {
        cost: -0.2,
        max: 10
      },
      pass_consistency: {
        cost: -0.2,
        max: 10
      },
      footwork: {
        cost: -0.2,
        max: 10
      },
      punt_hands: {
        cost: -0.2,
        max: 10
      },
      intimidation: {
        cost: -0.2,
        max: 10
      },
      zone_coverage_awareness: {
        cost: -0.2,
        max: 10
      },
      pass_power: {
        cost: -0.2,
        max: 10
      },
      pass_rush_deflection: {
        cost: -0.2,
        max: 10
      },
      quickness: {
        cost: -0.2,
        max: 10
      },
      balance: {
        cost: -0.2,
        max: 10
      },
      vertical: {
        cost: -0.2,
        max: 10
      },
      pass_carry_power: {
        cost: -0.2,
        max: 10
      },
      punt_accuracy: {
        cost: -0.2,
        max: 10
      },
      hold_ground: {
        cost: -0.2,
        max: 10
      },
      kickoff_power: {
        cost: -0.2,
        max: 10
      },
      pass_awareness: {
        cost: -0.2,
        max: 10
      },
      blitz_awareness: {
        cost: -0.2,
        max: 10
      },
      carry_power: {
        cost: -0.2,
        max: 10
      },
      catch_awareness: {
        cost: -0.2,
        max: 10
      },
      pass_block_power: {
        cost: -0.2,
        max: 10
      },
      kick_accuracy: {
        cost: -0.2,
        max: 10
      },
      run_block_technique: {
        cost: -0.2,
        max: 10
      },
      pass_grip: {
        cost: -0.2,
        max: 10
      },
      heart: {
        cost: -0.2,
        max: 10
      },
      catch_in_traffic: {
        cost: -0.2,
        max: 10
      },
      coverage_technique: {
        cost: -0.2,
        max: 10
      },
      lead_block_awareness: {
        cost: -0.2,
        max: 10
      },
      tackle_grip: {
        cost: -0.2,
        max: 10
      },
      sprinting: {
        cost: -0.2,
        max: 10
      },
      pass_rush_technique: {
        cost: -0.2,
        max: 10
      },
      coverage_deflection: {
        cost: -0.2,
        max: 10
      }
    },
    position_descriptions: {},
    is_superstar: 'avg',
    position_exclusions: ['QB', 'HB', 'OT', 'G', 'C', 'DT', 'LB', 'K', 'P'],
    name: 'Superstar',
    description: `
      This is a special, highly skilled player.Each agent may only control ONE of each of the three types(150 / 100 / 50 Flex Pts) of superstars at a time, and they must be earned.
      All Skills: 20 % lower SP cost, +10 max
      Gains 10, 000 extra Skill Points over career
      Gains 3 extra Ability Points over career
      Min Salary: +150 % `,
    conflicts: [],
    salary_modifier: 1.5
  },
  p_sure_hands: {
    skill_modifiers: {
      punt_hands: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K'],
    salary_modifier: 0.1,
    name: 'Sure Hands',
    description: `Punt Hands: 5 % lower SP cost, +3 max
      Min Salary: +10 % `
  },
  hb_rushing_back: {
    skill_modifiers: {
      carry_elusiveness: {
        cost: -0.08,
        max: 4
      },
      carry_power: {
        cost: -0.1,
        max: 6
      },
      carry_awareness: {
        cost: -0.08,
        max: 4
      },
      carry_grip: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Rusher',
    description: `
      This HB focuses on rushing the ball first and foremost.
      Power Running: 8 % lower SP cost, +4 max
      Elusive Running: 8 % lower SP cost, +4 max
      Carry Awareness: 10 % lower SP cost, +6 max
      Carrying Grip: 10 % lower SP cost, +6 max
      Min Salary: +12 % `,
    conflicts: ['hb_scat_back'],
    conflict_text: `
      Conflicts with: Scat Back`,
    salary_modifier: 0.12
  },
  superstar_glam: {
    skill_modifiers: {
      punt_power: {
        cost: -0.2,
        max: 10
      },
      tackle_strip: {
        cost: -0.2,
        max: 10
      },
      run_block_awareness: {
        cost: -0.2,
        max: 10
      },
      leadership: {
        cost: -0.2,
        max: 10
      },
      coverage_interception: {
        cost: -0.2,
        max: 10
      },
      pass_rush_power: {
        cost: -0.2,
        max: 10
      },
      route_elusiveness: {
        cost: -0.2,
        max: 10
      },
      catch_consistency: {
        cost: -0.2,
        max: 10
      },
      snap_reaction: {
        cost: -0.2,
        max: 10
      },
      block_consistency: {
        cost: -0.2,
        max: 10
      },
      pass_block_awareness: {
        cost: -0.2,
        max: 10
      },
      diving: {
        cost: -0.2,
        max: 10
      },
      kick_consistency: {
        cost: -0.2,
        max: 10
      },
      pass_evasiveness: {
        cost: -0.2,
        max: 10
      },
      toughness: {
        cost: -0.2,
        max: 10
      },
      pass_accuracy: {
        cost: -0.2,
        max: 10
      },
      kick_power: {
        cost: -0.2,
        max: 10
      },
      pass_technique: {
        cost: -0.2,
        max: 10
      },
      carry_awareness: {
        cost: -0.2,
        max: 10
      },
      route_technique: {
        cost: -0.2,
        max: 10
      },
      punt_consistency: {
        cost: -0.2,
        max: 10
      },
      carry_grip: {
        cost: -0.2,
        max: 10
      },
      carry_elusiveness: {
        cost: -0.2,
        max: 10
      },
      defense_consistency: {
        cost: -0.2,
        max: 10
      },
      run_block_power: {
        cost: -0.2,
        max: 10
      },
      tackle_power: {
        cost: -0.2,
        max: 10
      },
      pass_block_technique: {
        cost: -0.2,
        max: 10
      },
      tackle_awareness: {
        cost: -0.2,
        max: 10
      },
      break_run_block: {
        cost: -0.2,
        max: 10
      },
      conditioning: {
        cost: -0.2,
        max: 10
      },
      tackle_technique: {
        cost: -0.2,
        max: 10
      },
      catch_hands: {
        cost: -0.2,
        max: 10
      },
      catch_grip: {
        cost: -0.2,
        max: 10
      },
      return_awareness: {
        cost: -0.2,
        max: 10
      },
      man_coverage_awareness: {
        cost: -0.2,
        max: 10
      },
      pass_consistency: {
        cost: -0.2,
        max: 10
      },
      footwork: {
        cost: -0.2,
        max: 10
      },
      punt_hands: {
        cost: -0.2,
        max: 10
      },
      intimidation: {
        cost: -0.2,
        max: 10
      },
      zone_coverage_awareness: {
        cost: -0.2,
        max: 10
      },
      pass_power: {
        cost: -0.2,
        max: 10
      },
      pass_rush_deflection: {
        cost: -0.2,
        max: 10
      },
      quickness: {
        cost: -0.2,
        max: 10
      },
      balance: {
        cost: -0.2,
        max: 10
      },
      vertical: {
        cost: -0.2,
        max: 10
      },
      pass_carry_power: {
        cost: -0.2,
        max: 10
      },
      punt_accuracy: {
        cost: -0.2,
        max: 10
      },
      hold_ground: {
        cost: -0.2,
        max: 10
      },
      kickoff_power: {
        cost: -0.2,
        max: 10
      },
      pass_awareness: {
        cost: -0.2,
        max: 10
      },
      blitz_awareness: {
        cost: -0.2,
        max: 10
      },
      carry_power: {
        cost: -0.2,
        max: 10
      },
      catch_awareness: {
        cost: -0.2,
        max: 10
      },
      pass_block_power: {
        cost: -0.2,
        max: 10
      },
      kick_accuracy: {
        cost: -0.2,
        max: 10
      },
      run_block_technique: {
        cost: -0.2,
        max: 10
      },
      pass_grip: {
        cost: -0.2,
        max: 10
      },
      heart: {
        cost: -0.2,
        max: 10
      },
      catch_in_traffic: {
        cost: -0.2,
        max: 10
      },
      coverage_technique: {
        cost: -0.2,
        max: 10
      },
      lead_block_awareness: {
        cost: -0.2,
        max: 10
      },
      tackle_grip: {
        cost: -0.2,
        max: 10
      },
      sprinting: {
        cost: -0.2,
        max: 10
      },
      pass_rush_technique: {
        cost: -0.2,
        max: 10
      },
      coverage_deflection: {
        cost: -0.2,
        max: 10
      }
    },
    position_descriptions: {},
    is_superstar: 'glam',
    position_exclusions: ['FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'K', 'P'],
    name: 'Superstar',
    description: `
      This is a special, highly skilled player.Each agent may only control ONE of each of the three types(150 / 100 / 50 Flex Pts) of superstars at a time, and they must be earned.
      All Skills: 20 % lower SP cost, +10 max
      Gains 10, 000 extra Skill Points over career
      Gains 3 extra Ability Points over career
      Min Salary: +150 % `,
    conflicts: [],
    salary_modifier: 1.5
  },
  hb_unpredictable: {
    skill_modifiers: {
      carry_elusiveness: {
        cost: -0.08,
        max: -5
      },
      carry_power: {
        cost: -0.08,
        max: -5
      }
    },
    short_name: 'Unpre - dictable',
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Unpredictable',
    description: `
      This player is good at both power and Elusive Running, but is a specialist in neither.
      Elusive Running: 8 % lower SP cost, -5 max
      Power Running: 8 % lower SP cost, -5 max`,
    conflicts: ['hb_scat_back', 'hb_power_rusher', 'hb_blocking_back', 'hb_elusive_rusher'],
    conflict_text: `
      Conflicts with: Scat Back, Power Rusher, Blocking Back, Elusive Rusher`,
    salary_modifier: 0.12
  },
  lightning_reflexes: {
    skill_modifiers: {
      snap_reaction: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB'],
    salary_modifier: 0,
    name: 'Lightning Reflexes',
    description: `
      Flash before the bang.
      Snap Reaction: 8 % lower SP cost, +6 max`
  },
  fb_scat_back: {
    skill_modifiers: {
      catch_in_traffic: {
        cost: -0.08,
        max: 4
      },
      catch_hands: {
        cost: -0.08,
        max: 4
      },
      route_technique: {
        cost: -0.08,
        max: 4
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Scat Back',
    description: `
      This FB focuses on his receiving skills over blocking.
      Receiving Hands: 8 % lower SP cost, +4 max
      Receiving Grip: 8 % lower SP cost, +4 max
      Catch In Traffic: 8 % lower SP cost, +4 max
      Min Salary: +12 % `,
    conflicts: ['fb_lead_blocker', 'fb_rusher'],
    conflict_text: `
      Conflicts with: Lead Blocker, Rusher`,
    salary_modifier: 0.12
  },
  dl_pass_rusher: {
    skill_modifiers: {
      break_run_block: {
        cost: 0.1,
        max: -6
      },
      pass_rush_power: {
        cost: -0.1,
        max: 6
      },
      hold_ground: {
        cost: 0.1,
        max: -6
      },
      pass_rush_technique: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'LB', 'SS', 'FS', 'CB', 'K', 'P'],
    name: 'Pass Rusher',
    description: `
      This defender focuses on pass rushing over stopping the run.
      Pass Rush Tech: 10 % lower SP cost, +6 max
      Pass Rush Power: 10 % lower SP cost, +6 max
      Break Run Blk: 10 % higher SP cost, -6 max
      Hold Ground: 10 % higher SP cost, -6 max
      Min Salary: +14 % `,
    conflicts: ['dl_run_stuffer'],
    conflict_text: `
      Conflicts with: Run Stuffer`,
    salary_modifier: 0.14
  },
  slow_built: {
    skill_modifiers: {
      punt_power: {
        cost: 0.05,
        max: 10
      },
      tackle_strip: {
        cost: 0.05,
        max: 10
      },
      run_block_awareness: {
        cost: 0.05,
        max: 10
      },
      leadership: {
        cost: 0.05,
        max: 10
      },
      coverage_interception: {
        cost: 0.05,
        max: 10
      },
      pass_rush_power: {
        cost: 0.05,
        max: 10
      },
      route_elusiveness: {
        cost: 0.05,
        max: 10
      },
      catch_consistency: {
        cost: 0.05,
        max: 10
      },
      snap_reaction: {
        cost: 0.05,
        max: 10
      },
      block_consistency: {
        cost: 0.05,
        max: 10
      },
      pass_block_awareness: {
        cost: 0.05,
        max: 10
      },
      diving: {
        cost: 0.05,
        max: 10
      },
      kick_consistency: {
        cost: 0.05,
        max: 10
      },
      pass_evasiveness: {
        cost: 0.05,
        max: 10
      },
      toughness: {
        cost: 0.05,
        max: 10
      },
      pass_accuracy: {
        cost: 0.05,
        max: 10
      },
      kick_power: {
        cost: 0.05,
        max: 10
      },
      pass_technique: {
        cost: 0.05,
        max: 10
      },
      carry_awareness: {
        cost: 0.05,
        max: 10
      },
      route_technique: {
        cost: 0.05,
        max: 10
      },
      punt_consistency: {
        cost: 0.05,
        max: 10
      },
      carry_grip: {
        cost: 0.05,
        max: 10
      },
      carry_elusiveness: {
        cost: 0.05,
        max: 10
      },
      defense_consistency: {
        cost: 0.05,
        max: 10
      },
      run_block_power: {
        cost: 0.05,
        max: 10
      },
      tackle_power: {
        cost: 0.05,
        max: 10
      },
      pass_block_technique: {
        cost: 0.05,
        max: 10
      },
      tackle_awareness: {
        cost: 0.05,
        max: 10
      },
      break_run_block: {
        cost: 0.05,
        max: 10
      },
      conditioning: {
        cost: 0.05,
        max: 10
      },
      tackle_technique: {
        cost: 0.05,
        max: 10
      },
      catch_hands: {
        cost: 0.05,
        max: 10
      },
      catch_grip: {
        cost: 0.05,
        max: 10
      },
      return_awareness: {
        cost: 0.05,
        max: 10
      },
      man_coverage_awareness: {
        cost: 0.05,
        max: 10
      },
      pass_consistency: {
        cost: 0.05,
        max: 10
      },
      footwork: {
        cost: 0.05,
        max: 10
      },
      punt_hands: {
        cost: 0.05,
        max: 10
      },
      intimidation: {
        cost: 0.05,
        max: 10
      },
      zone_coverage_awareness: {
        cost: 0.05,
        max: 10
      },
      pass_power: {
        cost: 0.05,
        max: 10
      },
      pass_rush_deflection: {
        cost: 0.05,
        max: 10
      },
      quickness: {
        cost: 0.05,
        max: 10
      },
      balance: {
        cost: 0.05,
        max: 10
      },
      vertical: {
        cost: 0.05,
        max: 10
      },
      pass_carry_power: {
        cost: 0.05,
        max: 10
      },
      punt_accuracy: {
        cost: 0.05,
        max: 10
      },
      hold_ground: {
        cost: 0.05,
        max: 10
      },
      kickoff_power: {
        cost: 0.05,
        max: 10
      },
      pass_awareness: {
        cost: 0.05,
        max: 10
      },
      blitz_awareness: {
        cost: 0.05,
        max: 10
      },
      carry_power: {
        cost: 0.05,
        max: 10
      },
      catch_awareness: {
        cost: 0.05,
        max: 10
      },
      pass_block_power: {
        cost: 0.05,
        max: 10
      },
      kick_accuracy: {
        cost: 0.05,
        max: 10
      },
      run_block_technique: {
        cost: 0.05,
        max: 10
      },
      pass_grip: {
        cost: 0.05,
        max: 10
      },
      heart: {
        cost: 0.05,
        max: 10
      },
      catch_in_traffic: {
        cost: 0.05,
        max: 10
      },
      coverage_technique: {
        cost: 0.05,
        max: 10
      },
      lead_block_awareness: {
        cost: 0.05,
        max: 10
      },
      tackle_grip: {
        cost: 0.05,
        max: 10
      },
      sprinting: {
        cost: 0.05,
        max: 10
      },
      pass_rush_technique: {
        cost: 0.05,
        max: 10
      },
      coverage_deflection: {
        cost: 0.05,
        max: 10
      }
    },
    position_descriptions: {},
    position_exclusions: [],
    name: 'Slow Built',
    description: `
      This player has higher potential but has trouble reaching it.
      All Skills: 5 % higher SP cost, +10 max`,
    conflicts: ['early_bloomer'],
    conflict_text: `
      Conflicts with: Early Bloomer`,
    salary_modifier: 0
  },
  thick_skin: {
    skill_modifiers: {
      heart: {
        cost: -0.04,
        max: 2
      },
      toughness: {
        cost: -0.08,
        max: 6
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: [],
    salary_modifier: 0,
    name: 'Thick Skin',
    description: `
      Hit me once at least.
      Toughness: 8 % lower SP cost, +6 max
      Heart: 4 % lower SP cost, +2 max`
  },
  long_reach: {
    skill_modifiers: {
      coverage_interception: {
        cost: 0.1,
        max: -6
      },
      coverage_deflection: {
        cost: -0.06,
        max: 4
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'K', 'P'],
    name: 'Long Reach',
    description: `
      This defender just focuses on stopping the pass.
      Deflecting: 6 % lower SP cost, +4 max
      Intercepting: 10 % higher SP cost, -6 max
      Min Salary: +6 % `,
    conflicts: ['ball_hawk'],
    conflict_text: `
      Conflicts with: Ball Hawk`,
    salary_modifier: 0.06
  },
  shutdown_defender: {
    skill_modifiers: {
      coverage_technique: {
        cost: -0.05,
        max: 6
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'LB', 'DT', 'DE', 'K', 'P'],
    salary_modifier: 0,
    name: 'Shutdown Defender',
    description: `
      This defender sticks to his man like glue.
      Coverage Tech: 5 % lower SP cost, +6 max`
  },
  lb_blitzer: {
    skill_modifiers: {
      blitz_awareness: {
        cost: -0.1,
        max: 6
      },
      pass_rush_power: {
        cost: -0.1,
        max: 6
      },
      footwork: {
        cost: -0.1,
        max: 6
      },
      pass_rush_technique: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'K', 'P'],
    name: 'Blitzer',
    description: `
      This LB focuses his skills on blitzing the quarterback.
      Pass Rush Tech: 10 % lower SP cost, +6 max
      Pass Rush Power: 10 % lower SP cost, +6 max
      Blitz Awareness: 10 % lower SP cost, +6 max
      Footwork: 10 % lower SP cost, +6 max
      Min Salary: +12 % `,
    conflicts: ['lb_coverage', 'lb_middle_man'],
    conflict_text: `
      Conflicts with: Coverage LB, Middle Man`,
    salary_modifier: 0.14
  },
  te_blocker: {
    skill_modifiers: {
      run_block_awareness: {
        cost: -0.1,
        max: 6
      },
      run_block_technique: {
        cost: -0.1,
        max: 6
      },
      run_block_power: {
        cost: -0.1,
        max: 6
      },
      pass_block_power: {
        cost: -0.1,
        max: 6
      },
      pass_block_awareness: {
        cost: -0.1,
        max: 6
      },
      pass_block_technique: {
        cost: -0.1,
        max: 6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'OT', 'G', 'C', 'DT', 'DE', 'SS', 'FS', 'CB', 'LB', 'K', 'P'],
    name: 'Blocking Specialist',
    description: `
      This TE focuses on his blocking for his teammates.
      Pass Blk Tech: 10 % lower SP cost, +6 max
      Pass Blk Aware: 10 % lower SP cost, +6 max
      Pass Blk Power: 10 % lower SP cost, +6 max
      Run Blk Tech: 10 % lower SP cost, +6 max
      Run Blk Aware: 10 % lower SP cost, +6 max
      Run Blk Power: 10 % lower SP cost, +6 max
      Min Salary: +14 % `,
    conflicts: ['te_receiver'],
    conflict_text: `
      Conflicts with: Receiving Specialist`,
    salary_modifier: 0.14
  },
  tactician: {
    skill_modifiers: {
      tackle_awareness: {
        cost: -0.05,
        max: 3
      },
      blitz_awareness: {
        cost: -0.05,
        max: 3
      },
      run_block_awareness: {
        cost: -0.05,
        max: 3
      },
      pass_rush_power: {
        cost: 0.05,
        max: -3
      },
      carry_power: {
        cost: 0.05,
        max: -3
      },
      toughness: {
        cost: 0.03,
        max: -3
      },
      pass_block_power: {
        cost: 0.05,
        max: -3
      },
      run_block_power: {
        cost: 0.05,
        max: -3
      },
      snap_reaction: {
        cost: -0.06,
        max: 6
      },
      pass_block_awareness: {
        cost: -0.05,
        max: 3
      },
      carry_awareness: {
        cost: -0.05,
        max: 3
      },
      pass_carry_power: {
        cost: 0.05,
        max: -3
      },
      intimidation: {
        cost: 0.03,
        max: -3
      },
      tackle_power: {
        cost: 0.05,
        max: -3
      },
      pass_awareness: {
        cost: -0.05,
        max: 3
      }
    },
    position_descriptions: {
      'FS': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Pursuit: 5 % lower SP cost, +3 max
        Blitz Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Tackling: 5 % higher SP cost, -3 max
        Pass Rush Power: 5 % higher SP cost, -3 max`,
      'TE': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Carrying Awareness: 5 % lower SP cost, +3 max
        Run Blk Awareness: 5 % lower SP cost, +3 max
        Pass Blk Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Running: 5 % higher SP cost, -3 max
        Run Blk Power: 5 % higher SP cost, -3 max
        Pass Blk Power: 5 % higher SP cost, -3 max`,
      'HB': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Carrying Awareness: 5 % lower SP cost, +3 max
        Run Blk Awareness: 5 % lower SP cost, +3 max
        Pass Blk Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Running: 5 % higher SP cost, -3 max
        Run Blk Power: 5 % higher SP cost, -3 max
        Pass Blk Power: 5 % higher SP cost, -3 max`,
      'K': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Pursuit: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Tackling: 5 % higher SP cost, -3 max`,
      'CB': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Pursuit: 5 % lower SP cost, +3 max
        Blitz Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Tackling: 5 % higher SP cost, -3 max
        Pass Rush Power: 5 % higher SP cost, -3 max`,
      'FB': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Carrying Awareness: 5 % lower SP cost, +3 max
        Run Blk Awareness: 5 % lower SP cost, +3 max
        Pass Blk Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Running: 5 % higher SP cost, -3 max
        Run Blk Power: 5 % higher SP cost, -3 max
        Pass Blk Power: 5 % higher SP cost, -3 max`,
      'LB': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Pursuit: 5 % lower SP cost, +3 max
        Blitz Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Tackling: 5 % higher SP cost, -3 max
        Pass Rush Power: 5 % higher SP cost, -3 max`,
      'C': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Run Blk Awareness: 5 % lower SP cost, +3 max
        Pass Blk Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Run Blk Power: 5 % higher SP cost, -3 max
        Pass Blk Power: 5 % higher SP cost, -3 max`,
      'SS': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Pursuit: 5 % lower SP cost, +3 max
        Blitz Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Tackling: 5 % higher SP cost, -3 max
        Pass Rush Power: 5 % higher SP cost, -3 max`,
      'DT': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Pursuit: 5 % lower SP cost, +3 max
        Blitz Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Tackling: 5 % higher SP cost, -3 max
        Pass Rush Power: 5 % higher SP cost, -3 max`,
      'DE': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Pursuit: 5 % lower SP cost, +3 max
        Blitz Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Tackling: 5 % higher SP cost, -3 max
        Pass Rush Power: 5 % higher SP cost, -3 max`,
      'P': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Pursuit: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Tackling: 5 % higher SP cost, -3 max`,
      'QB': `
        This player favors a tactical approach over power.
        Pass Awareness: 5 % lower SP cost, +3 max
        Carrying Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Drop Back Power: 5 % higher SP cost, -3 max
        Power Running: 5 % higher SP cost, -3 max`,
      'G': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Run Blk Awareness: 5 % lower SP cost, +3 max
        Pass Blk Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Run Blk Power: 5 % higher SP cost, -3 max
        Pass Blk Power: 5 % higher SP cost, -3 max`,
      'OT': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Run Blk Awareness: 5 % lower SP cost, +3 max
        Pass Blk Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Run Blk Power: 5 % higher SP cost, -3 max
        Pass Blk Power: 5 % higher SP cost, -3 max`,
      'WR': `
        This player favors a tactical approach over power.
        Snap Reaction: 6 % lower SP cost, +6 max
        Carrying Awareness: 5 % lower SP cost, +3 max
        Run Blk Awareness: 5 % lower SP cost, +3 max
        Toughness: 3 % higher SP cost, -3 max
        Intimidation: 3 % higher SP cost, -3 max
        Power Running: 5 % higher SP cost, -3 max
        Run Blk Power: 5 % higher SP cost, -3 max`
    },
    position_exclusions: [],
    name: 'Tactician',
    description: `
      This player favors a tactical approach over power.
      Snap Reaction: 6 % lower SP cost, +6 max
      Pursuit: 5 % lower SP cost, +3 max
      Pass Awareness: 5 % lower SP cost, +3 max
      Carrying Awareness: 5 % lower SP cost, +3 max
      Run Blk Awareness: 5 % lower SP cost, +3 max
      Pass Blk Awareness: 5 % lower SP cost, +3 max
      Blitz Awareness: 5 % lower SP cost, +3 max
      Toughness: 3 % higher SP cost, -3 max
      Intimidation: 3 % higher SP cost, -3 max
      Power Tackling: 5 % higher SP cost, -3 max
      Drop Back Power: 5 % higher SP cost, -3 max
      Power Running: 5 % higher SP cost, -3 max
      Run Blk Power: 5 % higher SP cost, -3 max
      Pass Blk Power: 5 % higher SP cost, -3 max
      Pass Rush Power: 5 % higher SP cost, -3 max`,
    conflicts: ['meathead'],
    conflict_text: `
      Conflicts with: Meathead`,
    salary_modifier: 0
  },
  flex_coverage: {
    skill_modifiers: {
      man_coverage_awareness: {
        cost: -0.1,
        max: -6
      },
      zone_coverage_awareness: {
        cost: -0.1,
        max: -6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'K', 'P'],
    name: 'Flex Coverage',
    description: `
      This defender balances between zone and man coverage.
      Zone Awareness: 10 % lower SP cost, -6 max
      Man Awareness: 10 % lower SP cost, -6 max`,
    conflicts: ['man_specialist', 'zone_specialist'],
    conflict_text: `
      Conflicts with: Man Specialist, Zone Specialist`,
    salary_modifier: 0
  },
  man_specialist: {
    skill_modifiers: {
      man_coverage_awareness: {
        cost: -0.1,
        max: 6
      },
      zone_coverage_awareness: {
        cost: 0.1,
        max: -6
      }
    },
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DT', 'DE', 'K', 'P'],
    name: 'Man Specialist',
    description: `
      This defender is better in man coverage than zone coverage.
      Man Awareness: 10 % lower SP cost, +6 max
      Zone Awareness: 10 % higher SP cost, -6 max`,
    conflicts: ['zone_specialist', 'flex_coverage'],
    conflict_text: `
      Conflicts with: Zone Specialist, Flex Coverage`,
    salary_modifier: 0
  },
  dl_heavyweight: {
    skill_modifiers: {
      break_run_block: {
        cost: -0.04,
        max: 2
      },
      hold_ground: {
        cost: -0.05,
        max: 3
      }
    },
    conflicts: [],
    position_descriptions: {},
    position_exclusions: ['QB', 'HB', 'FB', 'WR', 'TE', 'OT', 'G', 'C', 'DE', 'DT', 'LB', 'SS', 'FS', 'CB', 'K', 'P'],
    salary_modifier: 0.18,
    name: 'Heavy Weight',
    description: `
      This defender is tough to push around.
      Hold Ground: 5 % lower SP cost, +3 max
      Break Run Blk: 4 % lower SP cost, +3 max
      Min Salary: +18 % `
  },
  easy_going: {
    skill_modifiers: {
      heart: {
        cost: -0.1,
        max: 6
      },
      intimidation: {
        cost: 0.1,
        max: -6
      }
    },
    chemistry_modifier: 0.1,
    position_descriptions: {},
    position_exclusions: [],
    name: 'Easy Going',
    description: `
      When one door is closed, another is opened.
      Heart: 5 % lower SP cost, +6 max
      Intimidation: 10 % higher SP cost, -6 max
      Chemistry Recovery: 20 % faster`,
    conflicts: ['fearsome'],
    conflict_text: `
      Conflicts with: Fearsome`
  }
};

