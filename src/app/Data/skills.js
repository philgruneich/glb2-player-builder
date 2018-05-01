export const skills = {
  "punt_power": {
    "priority": 3,
    "position_base_price": {},
    "name": "Punt Power",
    "height": 0,
    "group": "Punting",
    "position_multiplier": {
      "P": 100
    },
    "desc": "Determines how hard this player can punt the ball.Influences distance and hang time.",
    "positions": ["P"],
    "weight": -0.025,
    "base_price": 4,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -0.5,
      "strength": -2.5
    }
  },
  "tackle_strip": {
    "priority": 3,
    "position_base_price": {},
    "name": "Strip Technique",
    "height": 0.5,
    "group": "Tackling",
    "position_multiplier": {
      "DE": 125,
      "FS": 100,
      "P": 200,
      "K": 200,
      "CB": 100,
      "LB": 100,
      "SS": 110,
      "DT": 130
    },
    "desc": "The ability to expertly strip the ball and cause a fumble while tackling the ball carrier.",
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": -0.025,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -1.25,
      "speed": 0,
      "agility": -1.25,
      "confidence": 0,
      "strength": -0.5
    }
  },
  "leadership": {
    "priority": 4,
    "position_base_price": {},
    "name": "Leadership",
    "height": 0,
    "group": "Mental",
    "position_multiplier": {
      "QB": 100
    },
    "desc": "Determines QB's handoff ability, and reduces morale and energy losses for the entire on-field offense.",
    "positions": ["QB"],
    "weight": 0,
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -1,
      "speed": 0,
      "agility": 0,
      "confidence": -2,
      "strength": 0
    }
  },
  "run_block_awareness": {
    "priority": 6,
    "position_base_price": {
      "C": 1.4,
      "G": 1.4,
      "OT": 1.4
    },
    "name": "Run Blk Awr",
    "height": 0,
    "full_name": "Run Blocking Awareness",
    "group": "Blocking",
    "position_multiplier": {
      "C": 100,
      "TE": 100,
      "HB": 120,
      "FB": 100,
      "G": 100,
      "OT": 100,
      "WR": 130
    },
    "desc": "The ability to find and react to defenders while run blocking.",
    "weight": 0,
    "positions": ["FB", "HB", "TE", "WR", "OT", "G", "C"],
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -3,
      "speed": 0,
      "agility": 0,
      "confidence": 0,
      "strength": 0
    }
  },
  "coverage_interception": {
    "priority": 5,
    "position_base_price": {},
    "name": "Intercepting",
    "height": -0.25,
    "group": "Pass Coverage",
    "position_multiplier": {
      "LB": 130,
      "FS": 100,
      "CB": 110,
      "SS": 120
    },
    "desc": "The ability to catch incoming passes, causing a turnover.",
    "positions": ["LB", "CB", "FS", "SS"],
    "weight": 0.025,
    "base_price": 3,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -1,
      "speed": 0,
      "agility": -1.5,
      "confidence": -0.25,
      "strength": 0.25
    }
  },
  "pass_rush_power": {
    "priority": 2,
    "position_base_price": {},
    "name": "Pass Rush Power",
    "height": 0.25,
    "group": "Pass Rushing",
    "position_multiplier": {
      "DE": 100,
      "LB": 110,
      "FS": 140,
      "CB": 140,
      "SS": 130,
      "DT": 100
    },
    "desc": "Determines how successful this player is at pushing back or pancaking a pass blocker, and his ability to hold his ground when being pushed.",
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS"],
    "weight": -0.05,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": -0.25,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -0.5,
      "strength": -2.25
    }
  },
  "route_elusiveness": {
    "priority": 2,
    "position_base_price": {},
    "name": "Route Elusiveness",
    "height": 0,
    "group": "Receiving",
    "position_multiplier": {
      "TE": 120,
      "HB": 105,
      "FB": 140,
      "WR": 100
    },
    "desc": "Determines the successfulness of cuts and fake out moves to shake a defender while running a route.",
    "positions": ["FB", "HB", "TE", "WR"],
    "weight": 0.025,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -0.5,
      "speed": -0.25,
      "agility": -2,
      "confidence": -0.25,
      "strength": 0
    }
  },
  "catch_consistency": {
    "priority": 7,
    "position_base_price": {},
    "name": "Rec Consistency",
    "height": 0,
    "full_name": "Receiving Consistency",
    "group": "Receiving",
    "position_multiplier": {
      "TE": 100,
      "HB": 125,
      "FB": 130,
      "WR": 100
    },
    "desc": "The ability to catch and secure the ball in pressure situations.",
    "weight": 0,
    "positions": ["FB", "HB", "TE", "WR"],
    "base_price": 1.25,
    "level": 0,
    "attributes": {
      "stamina": -0.3,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -2.7,
      "strength": 0
    }
  },
  "snap_reaction": {
    "priority": 1,
    "position_base_price": {},
    "name": "Snap Reaction",
    "height": 0,
    "group": "Mental",
    "position_multiplier": {
      "FS": 120,
      "TE": 100,
      "HB": 100,
      "K": 100,
      "CB": 130,
      "FB": 100,
      "LB": 110,
      "C": 95,
      "SS": 130,
      "DT": 100,
      "DE": 105,
      "P": 100,
      "QB": 90,
      "G": 100,
      "OT": 100,
      "WR": 110
    },
    "desc": "Determines how quickly this player reacts to the snap of the ball.",
    "positions": ["FB", "HB", "TE", "WR", "OT", "G", "C", "DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": 0,
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": -0.1,
      "awareness": -2.9,
      "speed": 0,
      "agility": 0,
      "confidence": 0,
      "strength": 0
    }
  },
  "block_consistency": {
    "priority": 9,
    "position_base_price": {
      "C": 1.4,
      "G": 1.4,
      "OT": 1.4
    },
    "name": "Block Consistency",
    "height": 0,
    "full_name": "Block Consistency",
    "group": "Blocking",
    "position_multiplier": {
      "C": 100,
      "TE": 105,
      "HB": 110,
      "FB": 100,
      "G": 100,
      "OT": 100,
      "WR": 120
    },
    "desc": "The ability to remain calm and block consistently during pressure situations.",
    "weight": 0,
    "positions": ["FB", "HB", "TE", "WR", "OT", "G", "C"],
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -3,
      "strength": 0
    }
  },
  "pass_block_awareness": {
    "priority": 3,
    "position_base_price": {
      "C": 1.4,
      "G": 1.4,
      "OT": 1.4
    },
    "name": "Pass Blk Awr",
    "height": 0,
    "full_name": "Pass Blocking Awareness",
    "group": "Blocking",
    "position_multiplier": {
      "C": 100,
      "TE": 110,
      "HB": 130,
      "FB": 130,
      "G": 100,
      "OT": 90
    },
    "desc": "The ability to see and react to incoming blitzers while pass blocking.",
    "weight": 0,
    "positions": ["FB", "HB", "TE", "OT", "G", "C"],
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -3,
      "speed": 0,
      "agility": 0,
      "confidence": 0,
      "strength": 0
    }
  },
  "diving": {
    "priority": 6,
    "position_base_price": {},
    "name": "Diving",
    "height": -0.2,
    "group": "Physical",
    "position_multiplier": {
      "FS": 100,
      "TE": 100,
      "HB": 100,
      "K": 140,
      "CB": 90,
      "FB": 110,
      "LB": 110,
      "C": 150,
      "SS": 110,
      "DT": 135,
      "DE": 120,
      "P": 130,
      "QB": 120,
      "G": 150,
      "OT": 150,
      "WR": 95
    },
    "desc": "Determines how far and how quickly this player can dive horizontally.",
    "positions": ["FB", "HB", "TE", "WR", "DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": 0.025,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0.25,
      "speed": 0,
      "agility": -2.25,
      "confidence": -0.5,
      "strength": 0
    }
  },
  "kick_consistency": {
    "priority": 3,
    "position_base_price": {},
    "name": "Kick Consistency",
    "height": 0,
    "group": "Kicking",
    "position_multiplier": {
      "K": 100
    },
    "desc": "The ability to remain calm and kick successfully in pressure situations.",
    "positions": ["K"],
    "weight": 0,
    "base_price": 3,
    "level": 0,
    "attributes": {
      "stamina": -0.3,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -2.7,
      "strength": 0
    }
  },
  "pass_evasiveness": {
    "priority": 6,
    "position_base_price": {},
    "name": "Pocket Awr",
    "height": 0.25,
    "full_name": "Pocket Awareness",
    "group": "Passing",
    "position_multiplier": {
      "QB": 100
    },
    "desc": "The ability to see incoming blitzers and try to avoid them.",
    "weight": 0.05,
    "positions": ["QB"],
    "base_price": 1.5,
    "level": 0,
    "attributes": {
      "stamina": -0.1,
      "awareness": -0.8,
      "speed": -0.4,
      "agility": -1.7,
      "confidence": 0,
      "strength": 0
    }
  },
  "toughness": {
    "priority": 8,
    "position_base_price": {},
    "name": "Toughness",
    "height": 0,
    "group": "Physical",
    "position_multiplier": {
      "FS": 110,
      "TE": 100,
      "HB": 110,
      "K": 180,
      "CB": 130,
      "FB": 100,
      "LB": 95,
      "C": 90,
      "SS": 100,
      "DT": 95,
      "DE": 100,
      "P": 170,
      "QB": 140,
      "G": 95,
      "OT": 100,
      "WR": 140
    },
    "desc": "The ability to absorb punishment. Decreases morale and energy loss from any type of hard hitting interaction, such as tackling, blocking or power rushing.",
    "positions": ["QB", "FB", "HB", "TE", "WR", "OT", "G", "C", "DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": -0.05,
    "base_price": 1.25,
    "level": 0,
    "attributes": {
      "stamina": -1,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -1.5,
      "strength": -0.5
    }
  },
  "pass_accuracy": {
    "priority": 2,
    "position_base_price": {},
    "name": "Pass Accuracy",
    "height": -0.25,
    "group": "Passing",
    "position_multiplier": {
      "QB": 100
    },
    "desc": "The ability to successfully hit the target with a pass.",
    "positions": ["QB"],
    "weight": 0,
    "base_price": 3.5,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -1,
      "speed": 0,
      "agility": -2,
      "confidence": 0,
      "strength": 0
    }
  },
  "kick_power": {
    "priority": 2,
    "position_base_price": {},
    "name": "Field Goal Power",
    "height": 0,
    "group": "Kicking",
    "position_multiplier": {
      "K": 100
    },
    "desc": "Determines how hard this player can kick the ball during a field goal or extra point attempt.Influences max field goal distance.",
    "positions": ["K"],
    "weight": -0.025,
    "base_price": 4,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -0.5,
      "strength": -2.5
    }
  },
  "pass_technique": {
    "priority": 1,
    "position_base_price": {},
    "name": "Pass Technique",
    "height": 0,
    "group": "Passing",
    "position_multiplier": {
      "QB": 100
    },
    "desc": "The ability to throw a nice spiral, making the pass easier to catch.",
    "positions": ["QB"],
    "weight": 0,
    "base_price": 2.5,
    "level": 0,
    "attributes": {
      "stamina": -0.25,
      "awareness": 0,
      "speed": 0,
      "agility": -2,
      "confidence": -0.5,
      "strength": -0.25
    }
  },
  "carry_awareness": {
    "priority": 4,
    "position_base_price": {},
    "name": "Carrying Awr",
    "height": 0,
    "full_name": "Carrying Awareness",
    "group": "Carrying",
    "position_multiplier": {
      "TE": 120,
      "HB": 90,
      "QB": 150,
      "FB": 120,
      "WR": 110
    },
    "desc": "The ability to see defenders, find rushing lanes, and determine when to use active signature abilities when carrying the ball.",
    "weight": 0,
    "positions": ["QB", "FB", "HB", "TE", "WR"],
    "base_price": 1.1,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -3,
      "speed": 0,
      "agility": 0,
      "confidence": 0,
      "strength": 0
    }
  },
  "route_technique": {
    "priority": 1,
    "position_base_price": {},
    "name": "Route Technique",
    "height": 0,
    "group": "Receiving",
    "position_multiplier": {
      "TE": 105,
      "HB": 110,
      "FB": 130,
      "WR": 100
    },
    "desc": "The ability to make sharp cuts at the proper times when running a route.",
    "positions": ["FB", "HB", "TE", "WR"],
    "weight": 0.025,
    "base_price": 1.25,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -1.5,
      "speed": 0,
      "agility": -1.5,
      "confidence": 0,
      "strength": 0
    }
  },
  "punt_consistency": {
    "priority": 4,
    "position_base_price": {},
    "name": "Punt Consistency",
    "height": 0,
    "group": "Punting",
    "position_multiplier": {
      "P": 100
    },
    "desc": "The ability to remain calm and punt successfully in pressure situations.",
    "positions": ["P"],
    "weight": 0,
    "base_price": 3,
    "level": 0,
    "attributes": {
      "stamina": -0.3,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -2.7,
      "strength": 0
    }
  },
  "carry_grip": {
    "priority": 1,
    "position_base_price": {
      "HB": 1.25
    },
    "name": "Carrying Grip",
    "height": 0,
    "group": "Carrying",
    "position_multiplier": {
      "TE": 95,
      "HB": 90,
      "QB": 150,
      "FB": 100,
      "WR": 130
    },
    "desc": "The ability to avoid fumbling when being tackled.",
    "positions": ["QB", "FB", "HB", "TE", "WR"],
    "weight": -0.01,
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": -0.25,
      "awareness": -0.25,
      "speed": 0,
      "agility": 0,
      "confidence": -1,
      "strength": -1.5
    }
  },
  "carry_elusiveness": {
    "priority": 3,
    "position_base_price": {},
    "name": "Elusive Running",
    "height": 0,
    "group": "Carrying",
    "position_multiplier": {
      "TE": 120,
      "HB": 100,
      "QB": 130,
      "FB": 120,
      "WR": 100
    },
    "desc": "Determines how successful this player is at faking out defenders with fake moves and hard cuts.",
    "positions": ["QB", "FB", "HB", "TE", "WR"],
    "weight": 0.06,
    "base_price": 3.5,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -0.8,
      "speed": -0.3,
      "agility": -1.9,
      "confidence": 0,
      "strength": 0
    }
  },
  "defense_consistency": {
    "priority": 5,
    "position_base_price": {},
    "name": "Def Consistency",
    "height": 0,
    "full_name": "Defense Consistency",
    "group": "Defense",
    "position_multiplier": {
      "DE": 100,
      "LB": 95,
      "FS": 100,
      "CB": 110,
      "SS": 100,
      "DT": 100
    },
    "desc": "The ability to remain calm and avoid defensive mistakes in pressure situations.",
    "weight": 0,
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS"],
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -3,
      "strength": 0
    }
  },
  "run_block_power": {
    "priority": 5,
    "position_base_price": {
      "C": 3.5,
      "G": 3.5,
      "OT": 3.5
    },
    "name": "Run Blk Power",
    "height": 0.5,
    "full_name": "Run Blocking Power",
    "group": "Blocking",
    "position_multiplier": {
      "C": 95,
      "TE": 100,
      "HB": 120,
      "FB": 95,
      "G": 90,
      "OT": 100,
      "WR": 130
    },
    "desc": "Determines how far this player can push back a defender while run blocking.",
    "weight": -0.025,
    "positions": ["FB", "HB", "TE", "WR", "OT", "G", "C"],
    "base_price": 2.5,
    "level": 0,
    "attributes": {
      "stamina": -0.25,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -0.5,
      "strength": -2.25
    }
  },
  "tackle_power": {
    "priority": 2,
    "position_base_price": {},
    "name": "Power Tackling",
    "height": 0,
    "group": "Tackling",
    "position_multiplier": {
      "DE": 90,
      "FS": 120,
      "P": 160,
      "K": 160,
      "CB": 130,
      "LB": 95,
      "SS": 100,
      "DT": 90
    },
    "desc": "The ability to stop the slow down or stop the ball carrier, and even pop the ball loose from powerful tackles.",
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": -0.05,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": -0.25,
      "agility": 0,
      "confidence": -0.75,
      "strength": -2
    }
  },
  "pass_block_technique": {
    "priority": 1,
    "position_base_price": {
      "C": 3.5,
      "G": 3.5,
      "OT": 3.5
    },
    "name": "Pass Blk Tech",
    "height": -0.5,
    "full_name": "Pass Blocking Technique",
    "group": "Blocking",
    "position_multiplier": {
      "C": 100,
      "TE": 110,
      "HB": 130,
      "FB": 120,
      "G": 100,
      "OT": 90
    },
    "desc": "Determines how successful this player is at initiating and holding a pass block.",
    "weight": 0.025,
    "positions": ["FB", "HB", "TE", "OT", "G", "C"],
    "base_price": 2.5,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -0.5,
      "speed": -0.5,
      "agility": -1.75,
      "confidence": 0,
      "strength": -0.25
    }
  },
  "tackle_awareness": {
    "priority": 4,
    "position_base_price": {},
    "name": "Pursuit",
    "height": -0.5,
    "group": "Defense",
    "position_multiplier": {
      "DE": 115,
      "FS": 90,
      "P": 150,
      "K": 150,
      "CB": 95,
      "LB": 100,
      "SS": 90,
      "DT": 125
    },
    "desc": "Determines how successful this player is at finding his way around blockers and avoiding being fooled by ball carrier fakes.",
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": 0,
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -2.7,
      "speed": 0,
      "agility": 0,
      "confidence": -0.3,
      "strength": 0
    }
  },
  "break_run_block": {
    "priority": 1,
    "position_base_price": {},
    "name": "Break Run Blk",
    "height": -0.25,
    "full_name": "Breaking Run Blocks",
    "group": "Defense",
    "position_multiplier": {
      "DE": 105,
      "LB": 95,
      "FS": 120,
      "CB": 130,
      "SS": 110,
      "DT": 100
    },
    "desc": "The ability to maneuver or break free from a run blocker.",
    "weight": 0.025,
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS"],
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -0.35,
      "speed": -0.35,
      "agility": -2,
      "confidence": -0.3,
      "strength": 0
    }
  },
  "conditioning": {
    "priority": 7,
    "position_base_price": {},
    "name": "Conditioning",
    "height": 0,
    "group": "Physical",
    "position_multiplier": {
      "FS": 100,
      "TE": 110,
      "HB": 100,
      "K": 180,
      "CB": 100,
      "FB": 110,
      "LB": 105,
      "C": 130,
      "SS": 105,
      "DT": 130,
      "DE": 120,
      "P": 180,
      "QB": 130,
      "G": 125,
      "OT": 120,
      "WR": 110
    },
    "desc": "Determines how quickly this player becomes winded, and how much overall energy he has.",
    "positions": ["QB", "FB", "HB", "TE", "WR", "OT", "G", "C", "DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": 0.05,
    "base_price": 1.25,
    "level": 0,
    "attributes": {
      "stamina": -2.9,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -0.1,
      "strength": 0
    }
  },
  "tackle_technique": {
    "priority": 1,
    "position_base_price": {},
    "name": "Tackling Tech",
    "height": -0.5,
    "full_name": "Tackling Technique",
    "group": "Tackling",
    "position_multiplier": {
      "DE": 100,
      "FS": 100,
      "P": 140,
      "K": 140,
      "CB": 100,
      "LB": 90,
      "SS": 110,
      "DT": 110
    },
    "desc": "Determines how successful this player is at initiating quality tackles and bringing the ball carrier down.",
    "weight": 0.05,
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": -0.25,
      "awareness": -0.5,
      "speed": 0,
      "agility": -1.75,
      "confidence": -0.25,
      "strength": -0.25
    }
  },
  "catch_hands": {
    "priority": 3,
    "position_base_price": {},
    "name": "Receiving Hands",
    "height": -0.5,
    "group": "Receiving",
    "position_multiplier": {
      "TE": 105,
      "HB": 110,
      "FB": 120,
      "WR": 100
    },
    "desc": "The ability to catch a pass successfully and maintain speed when catching in stride.",
    "positions": ["FB", "HB", "TE", "WR"],
    "weight": 0.025,
    "base_price": 1.75,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -1,
      "speed": 0,
      "agility": -0.75,
      "confidence": -1,
      "strength": -0.25
    }
  },
  "catch_grip": {
    "priority": 5,
    "position_base_price": {},
    "name": "Receiving Grip",
    "height": 0.75,
    "group": "Receiving",
    "position_multiplier": {
      "TE": 90,
      "HB": 100,
      "FB": 100,
      "WR": 130
    },
    "desc": "The ability to hold on to the ball when being tackled while catching a pass.",
    "positions": ["FB", "HB", "TE", "WR"],
    "weight": -0.05,
    "base_price": 1.75,
    "level": 0,
    "attributes": {
      "stamina": -0.25,
      "awareness": -0.25,
      "speed": 0,
      "agility": 0,
      "confidence": -1,
      "strength": -1.5
    }
  },
  "return_awareness": {
    "priority": 4,
    "position_base_price": {},
    "name": "Return Awr",
    "height": 0,
    "full_name": "Return Awareness",
    "group": "Carrying",
    "position_multiplier": {
      "FS": 130,
      "TE": 120,
      "HB": 100,
      "CB": 110,
      "FB": 120,
      "SS": 150,
      "WR": 100
    },
    "desc": "The ability to see defenders and find rushing lanes when playing kick or punt returner, or when returning a fumble or interception.",
    "weight": 0,
    "positions": ["FB", "HB", "TE", "WR", "CB", "FS", "SS"],
    "base_price": 1.5,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -3,
      "speed": 0,
      "agility": 0,
      "confidence": 0,
      "strength": 0
    }
  },
  "man_coverage_awareness": {
    "priority": 1,
    "position_base_price": {},
    "name": "Man Awareness",
    "height": 0,
    "full_name": "Man Coverage Awareness",
    "group": "Pass Coverage",
    "position_multiplier": {
      "LB": 115,
      "FS": 110,
      "CB": 90,
      "SS": 120
    },
    "desc": "Determines how quickly this player reacts to incoming passes or rushing plays, and how well he avoids being fooled by coverage fake out moves, when in man coverage.",
    "weight": 0,
    "positions": ["LB", "CB", "FS", "SS"],
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -3,
      "speed": 0,
      "agility": 0,
      "confidence": 0,
      "strength": 0
    }
  },
  "pass_consistency": {
    "priority": 4,
    "position_base_price": {},
    "name": "Pass Consistency",
    "height": 0,
    "group": "Passing",
    "position_multiplier": {
      "QB": 100
    },
    "desc": "The ability to keep calm and not throw bad passes under pressure.",
    "positions": ["QB"],
    "weight": 0,
    "base_price": 2.5,
    "level": 0,
    "attributes": {
      "stamina": -0.3,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -2.7,
      "strength": 0
    }
  },
  "footwork": {
    "priority": 2,
    "position_base_price": {},
    "name": "Footwork",
    "height": 0.5,
    "group": "Physical",
    "position_multiplier": {
      "FS": 90,
      "TE": 105,
      "HB": 100,
      "K": 140,
      "CB": 95,
      "FB": 105,
      "LB": 100,
      "C": 115,
      "SS": 100,
      "DT": 120,
      "DE": 110,
      "P": 140,
      "QB": 100,
      "G": 100,
      "OT": 95,
      "WR": 100
    },
    "desc": "The ability to backpedal and sidestep quickly.",
    "positions": ["QB", "FB", "HB", "TE", "WR", "OT", "G", "C", "DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": 0.025,
    "base_price": 2.25,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -0.25,
      "speed": 0,
      "agility": -2.5,
      "confidence": -0.25,
      "strength": 0
    }
  },
  "punt_hands": {
    "priority": 1,
    "position_base_price": {},
    "name": "Punt Hands",
    "height": -0.25,
    "group": "Punting",
    "position_multiplier": {
      "P": 100
    },
    "desc": "The ability to cleanly catch a punt snap.Influences release timing and punt quality.",
    "positions": ["P"],
    "weight": 0,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -1.75,
      "speed": 0,
      "agility": -1,
      "confidence": -0.25,
      "strength": 0
    }
  },
  "intimidation": {
    "priority": 3,
    "position_base_price": {},
    "name": "Intimidation",
    "height": -0.25,
    "group": "Mental",
    "position_multiplier": {
      "FS": 130,
      "TE": 110,
      "HB": 130,
      "K": 190,
      "CB": 150,
      "FB": 100,
      "LB": 90,
      "C": 100,
      "SS": 110,
      "DT": 90,
      "DE": 90,
      "P": 180,
      "QB": 140,
      "G": 100,
      "OT": 100,
      "WR": 150
    },
    "desc": "Increases the amount of morale and energy this player causes opponents to lose during hard hitting interactions, such as tackling, blocking or power rushing.Also increases pressure on the QB if this player is pass rushing.",
    "positions": ["QB", "FB", "HB", "TE", "WR", "OT", "G", "C", "DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": -0.05,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": -0.5,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -1.5,
      "strength": -1
    }
  },
  "zone_coverage_awareness": {
    "priority": 2,
    "position_base_price": {},
    "name": "Zone Awareness",
    "height": 0,
    "full_name": "Zone Coverage Awareness",
    "group": "Pass Coverage",
    "position_multiplier": {
      "LB": 100,
      "FS": 90,
      "CB": 110,
      "SS": 90
    },
    "desc": "Determines how quickly this player reacts to incoming passes or rushing plays, and how well he avoids being fooled by coverage or pump fake moves, when in zone coverage.",
    "weight": 0,
    "positions": ["LB", "CB", "FS", "SS"],
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -3,
      "speed": 0,
      "agility": 0,
      "confidence": 0,
      "strength": 0
    }
  },
  "pass_power": {
    "priority": 3,
    "position_base_price": {},
    "name": "Pass Power",
    "height": 0,
    "group": "Passing",
    "position_multiplier": {
      "QB": 100
    },
    "desc": "The ability to throw passes faster and further.",
    "positions": ["QB"],
    "weight": 0,
    "base_price": 3.5,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -0.25,
      "strength": -2.75
    }
  },
  "pass_rush_deflection": {
    "priority": 4,
    "position_base_price": {},
    "name": "Pass Rush Defl",
    "height": -0.5,
    "full_name": "Pass Rush Deflection",
    "group": "Pass Rushing",
    "position_multiplier": {
      "DE": 110,
      "LB": 100,
      "FS": 140,
      "CB": 140,
      "SS": 130,
      "DT": 115
    },
    "desc": "The ability to deflect nearby passes while pass rushing.",
    "weight": 0.025,
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS"],
    "base_price": 1.75,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -2,
      "speed": 0,
      "agility": -1,
      "confidence": 0,
      "strength": 0
    }
  },
  "quickness": {
    "priority": 3,
    "position_base_price": {},
    "name": "Quickness",
    "height": 0,
    "group": "Physical",
    "position_multiplier": {
      "FS": 100,
      "TE": 120,
      "HB": 100,
      "K": 120,
      "CB": 95,
      "FB": 120,
      "LB": 100,
      "C": 140,
      "SS": 110,
      "DT": 130,
      "DE": 110,
      "P": 120,
      "QB": 120,
      "G": 130,
      "OT": 110,
      "WR": 95
    },
    "desc": "The ability to change direction quickly.",
    "positions": ["QB", "FB", "HB", "TE", "WR", "OT", "G", "C", "DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": 0.05,
    "base_price": 3.2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": -0.1,
      "agility": -2.9,
      "confidence": 0,
      "strength": 0
    }
  },
  "balance": {
    "priority": 1,
    "position_base_price": {},
    "name": "Balance",
    "height": 0.5,
    "group": "Physical",
    "position_multiplier": {
      "FS": 110,
      "TE": 110,
      "HB": 100,
      "K": 140,
      "CB": 120,
      "FB": 100,
      "LB": 100,
      "C": 95,
      "SS": 100,
      "DT": 100,
      "DE": 110,
      "P": 140,
      "QB": 120,
      "G": 100,
      "OT": 110,
      "WR": 120
    },
    "desc": "The ability to stay upright and regain balance after being knocked off balance.",
    "positions": ["QB", "FB", "HB", "TE", "WR", "OT", "G", "C", "DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": -0.05,
    "base_price": 1.5,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": 0,
      "agility": -2.25,
      "confidence": -0.75,
      "strength": 0
    }
  },
  "vertical": {
    "priority": 5,
    "position_base_price": {},
    "name": "Vertical",
    "height": -0.25,
    "group": "Physical",
    "position_multiplier": {
      "FS": 90,
      "TE": 100,
      "HB": 110,
      "K": 130,
      "CB": 90,
      "FB": 120,
      "LB": 110,
      "C": 150,
      "SS": 110,
      "DT": 140,
      "DE": 135,
      "P": 130,
      "QB": 130,
      "G": 150,
      "OT": 140,
      "WR": 90
    },
    "desc": "Determines how high this player can jump vertically.",
    "positions": ["FB", "HB", "TE", "WR", "DT", "DE", "LB", "CB", "FS", "SS"],
    "weight": 0.03,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": 0,
      "agility": -2.5,
      "confidence": -0.5,
      "strength": 0
    }
  },
  "pass_carry_power": {
    "priority": 7,
    "position_base_price": {},
    "name": "Drop Back Power",
    "height": 0,
    "group": "Passing",
    "position_multiplier": {
      "QB": 100
    },
    "desc": "The ability to break free from sack tacklers.",
    "positions": ["QB"],
    "weight": -0.025,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": -0.5,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -1,
      "strength": -1.5
    }
  },
  "punt_accuracy": {
    "priority": 2,
    "position_base_price": {},
    "name": "Punt Accuracy",
    "height": 0,
    "group": "Punting",
    "position_multiplier": {
      "P": 100
    },
    "desc": "The ability to successfully hit a coffin corner target or pin the ball deep with a punt.",
    "positions": ["P"],
    "weight": 0.025,
    "base_price": 4,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -1,
      "speed": 0,
      "agility": -1.75,
      "confidence": -0.25,
      "strength": 0
    }
  },
  "hold_ground": {
    "priority": 3,
    "position_base_price": {},
    "name": "Hold Ground",
    "height": 0.25,
    "group": "Defense",
    "position_multiplier": {
      "DE": 95,
      "LB": 100,
      "FS": 115,
      "CB": 140,
      "SS": 100,
      "DT": 90
    },
    "desc": "Determines how successful this player is at pushing back or pancaking a run blocker, and his ability to hold his ground when being pushed.",
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS"],
    "weight": -0.025,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -1,
      "strength": -2
    }
  },
  "kickoff_power": {
    "priority": 4,
    "position_base_price": {},
    "name": "Kickoff Power",
    "height": 0,
    "group": "Kicking",
    "position_multiplier": {
      "K": 100
    },
    "desc": "Determines how hard this player can kick the ball off of a tee for a kickoff.Influences kickoff distance.",
    "positions": ["K"],
    "weight": -0.025,
    "base_price": 2.5,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": -0.5,
      "agility": 0,
      "confidence": -0.5,
      "strength": -2
    }
  },
  "pass_awareness": {
    "priority": 8,
    "position_base_price": {},
    "name": "Pass Awareness",
    "height": -0.25,
    "full_name": "Passing Awareness",
    "group": "Passing",
    "position_multiplier": {
      "QB": 100
    },
    "desc": "Determines how successful this player is at seeing open receivers and going through his checkdowns quickly.",
    "weight": 0,
    "positions": ["QB"],
    "base_price": 2.75,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -3,
      "speed": 0,
      "agility": 0,
      "confidence": 0,
      "strength": 0
    }
  },
  "blitz_awareness": {
    "priority": 2,
    "position_base_price": {},
    "name": "Blitz Awr",
    "height": 0,
    "full_name": "Blitz Awareness",
    "group": "Defense",
    "position_multiplier": {
      "DE": 110,
      "LB": 90,
      "FS": 115,
      "CB": 130,
      "SS": 100,
      "DT": 110
    },
    "desc": "Determines how quickly this player will react to the ball being passed, pitched or handed off when rushing the QB.",
    "weight": 0,
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS"],
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -3,
      "speed": 0,
      "agility": 0,
      "confidence": 0,
      "strength": 0
    }
  },
  "carry_power": {
    "priority": 2,
    "position_base_price": {},
    "name": "Power Running",
    "height": 0,
    "group": "Carrying",
    "position_multiplier": {
      "TE": 100,
      "HB": 100,
      "QB": 150,
      "FB": 90,
      "WR": 140
    },
    "desc": "Determines how successful this player is at breaking tackles and fighting out extra yardage.",
    "positions": ["QB", "FB", "HB", "TE", "WR"],
    "weight": -0.05,
    "base_price": 4.25,
    "level": 0,
    "attributes": {
      "stamina": -0.5,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -0.5,
      "strength": -2
    }
  },
  "pass_block_power": {
    "priority": 2,
    "position_base_price": {
      "C": 3.5,
      "G": 3.5,
      "OT": 3.5
    },
    "name": "Pass Blk Power",
    "height": 0.5,
    "full_name": "Pass Blocking Power",
    "group": "Blocking",
    "position_multiplier": {
      "C": 100,
      "TE": 120,
      "HB": 150,
      "FB": 120,
      "G": 95,
      "OT": 95
    },
    "desc": "Determines how far this player can push back a defender while pass blocking.",
    "weight": -0.025,
    "positions": ["FB", "HB", "TE", "OT", "G", "C"],
    "base_price": 2.5,
    "level": 0,
    "attributes": {
      "stamina": -0.5,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -0.5,
      "strength": -2
    }
  },
  "catch_awareness": {
    "priority": 6,
    "position_base_price": {},
    "name": "Rec Awareness",
    "height": -0.25,
    "full_name": "Receiving Awareness",
    "group": "Receiving",
    "position_multiplier": {
      "TE": 100,
      "HB": 115,
      "FB": 120,
      "WR": 100
    },
    "desc": "Determines how quickly this player will react to the location of an errant pass, and how adept he is at finding spots to jump or dive for passes to avoid defenders.",
    "weight": 0,
    "positions": ["FB", "HB", "TE", "WR"],
    "base_price": 1.25,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -3,
      "speed": 0,
      "agility": 0,
      "confidence": 0,
      "strength": 0
    }
  },
  "kick_accuracy": {
    "priority": 1,
    "position_base_price": {},
    "name": "Kick Accuracy",
    "height": 0,
    "group": "Kicking",
    "position_multiplier": {
      "K": 100
    },
    "desc": "Determines how successful this player is at hitting a field goal target or hit a good angle on kickoffs.",
    "positions": ["K"],
    "weight": 0.025,
    "base_price": 4,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -1,
      "speed": 0,
      "agility": -1.75,
      "confidence": -0.25,
      "strength": 0
    }
  },
  "pass_grip": {
    "priority": 5,
    "position_base_price": {},
    "name": "Drop Back Grip",
    "height": 0.25,
    "group": "Passing",
    "position_multiplier": {
      "QB": 100
    },
    "desc": "Determines how successful this player is at not fumbling the ball when being sacked.",
    "positions": ["QB"],
    "weight": -0.025,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": -0.4,
      "awareness": -0.1,
      "speed": 0,
      "agility": 0,
      "confidence": -0.8,
      "strength": -1.7
    }
  },
  "run_block_technique": {
    "priority": 4,
    "position_base_price": {
      "C": 3.5,
      "G": 3.5,
      "OT": 3.5
    },
    "name": "Run Blk Tech",
    "height": -0.5,
    "full_name": "Run Blocking Technique",
    "group": "Blocking",
    "position_multiplier": {
      "C": 95,
      "TE": 100,
      "HB": 110,
      "FB": 100,
      "G": 90,
      "OT": 100,
      "WR": 120
    },
    "desc": "Determines how successful this player is at initiating and holding a run block.",
    "weight": 0.025,
    "positions": ["FB", "HB", "TE", "WR", "OT", "G", "C"],
    "base_price": 2.5,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -0.25,
      "speed": 0,
      "agility": -2,
      "confidence": -0.25,
      "strength": -0.5
    }
  },
  "heart": {
    "priority": 2,
    "position_base_price": {},
    "name": "Heart",
    "height": 0,
    "group": "Mental",
    "position_multiplier": {
      "FS": 110,
      "TE": 110,
      "HB": 100,
      "K": 100,
      "CB": 110,
      "FB": 110,
      "LB": 95,
      "C": 100,
      "SS": 100,
      "DT": 95,
      "DE": 100,
      "P": 100,
      "QB": 90,
      "G": 100,
      "OT": 100,
      "WR": 115
    },
    "desc": "Reduces how quickly this player loses morale from bad plays or giving up points.",
    "positions": ["QB", "FB", "HB", "TE", "WR", "OT", "G", "C", "DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": 0,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": 0,
      "agility": 0,
      "confidence": -3,
      "strength": 0
    }
  },
  "catch_in_traffic": {
    "priority": 4,
    "position_base_price": {},
    "name": "Catch in Traffic",
    "height": -0.5,
    "full_name": "Catching in Traffic",
    "group": "Receiving",
    "position_multiplier": {
      "TE": 100,
      "HB": 110,
      "FB": 120,
      "WR": 115
    },
    "desc": "The ability to fight off defenders when trying to catch a pass.Improves receiver's chance to catch the ball and reduces defender's chance to intercept when both players are going for the pass.",
    "weight": -0.05,
    "positions": ["FB", "HB", "TE", "WR"],
    "base_price": 1.75,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -0.25,
      "speed": 0,
      "agility": 0,
      "confidence": -1.25,
      "strength": -1.5
    }
  },
  "coverage_technique": {
    "priority": 3,
    "position_base_price": {},
    "name": "Coverage Tech",
    "height": 0,
    "full_name": "Coverage Technique",
    "group": "Pass Coverage",
    "position_multiplier": {
      "LB": 120,
      "FS": 100,
      "CB": 90,
      "SS": 110
    },
    "desc": "The ability to keep up with the receiver when he makes cuts and changes direction.",
    "weight": 0.05,
    "positions": ["LB", "CB", "FS", "SS"],
    "base_price": 1.5,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -0.5,
      "speed": -0.5,
      "agility": -1.75,
      "confidence": -0.25,
      "strength": 0
    }
  },
  "lead_block_awareness": {
    "priority": 8,
    "position_base_price": {
      "C": 1.8,
      "G": 1.8,
      "OT": 1.8
    },
    "name": "Lead Blk Awr",
    "height": 0,
    "full_name": "Lead Block Awareness",
    "group": "Blocking",
    "position_multiplier": {
      "TE": 110,
      "HB": 120,
      "FB": 90,
      "G": 100,
      "OT": 115
    },
    "desc": "The ability to find and react to defenders while lead blocking.",
    "weight": 0,
    "positions": ["FB", "HB", "TE", "OT", "G"],
    "base_price": 1.3,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -2.5,
      "speed": -0.25,
      "agility": -0.25,
      "confidence": 0,
      "strength": 0
    }
  },
  "tackle_grip": {
    "priority": 4,
    "position_base_price": {},
    "name": "Tackling Grip",
    "height": 0.5,
    "group": "Tackling",
    "position_multiplier": {
      "DE": 100,
      "FS": 110,
      "P": 140,
      "K": 140,
      "CB": 125,
      "LB": 100,
      "SS": 100,
      "DT": 100
    },
    "desc": "The ability to hold on to to a powerful ball carrier while he tries to shake free.",
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": 0.025,
    "base_price": 1,
    "level": 0,
    "attributes": {
      "stamina": -0.25,
      "awareness": 0,
      "speed": 0,
      "agility": -0.25,
      "confidence": -1,
      "strength": -1.5
    }
  },
  "sprinting": {
    "priority": 4,
    "position_base_price": {},
    "name": "Sprinting",
    "height": 0,
    "group": "Physical",
    "position_multiplier": {
      "FS": 95,
      "TE": 110,
      "HB": 100,
      "K": 130,
      "CB": 90,
      "FB": 115,
      "LB": 110,
      "C": 140,
      "SS": 110,
      "DT": 130,
      "DE": 115,
      "P": 130,
      "QB": 120,
      "G": 135,
      "OT": 125,
      "WR": 90
    },
    "desc": "Determines how fast this player can run at full speed.",
    "positions": ["QB", "FB", "HB", "TE", "WR", "OT", "G", "C", "DT", "DE", "LB", "CB", "FS", "SS", "K", "P"],
    "weight": 0.05,
    "base_price": 3.4,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": 0,
      "speed": -3,
      "agility": 0,
      "confidence": 0,
      "strength": 0
    }
  },
  "pass_rush_technique": {
    "priority": 1,
    "position_base_price": {},
    "name": "Pass Rush Tech",
    "height": -0.25,
    "full_name": "Pass Rush Technique",
    "group": "Pass Rushing",
    "position_multiplier": {
      "DE": 95,
      "LB": 110,
      "FS": 140,
      "CB": 140,
      "SS": 120,
      "DT": 110
    },
    "desc": "The ability to maneuver or break free from a pass blocker.",
    "weight": 0.05,
    "positions": ["DT", "DE", "LB", "CB", "FS", "SS"],
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -0.3,
      "speed": -0.8,
      "agility": -1.9,
      "confidence": 0,
      "strength": 0
    }
  },
  "coverage_deflection": {
    "priority": 4,
    "position_base_price": {},
    "name": "Deflecting",
    "height": -0.5,
    "group": "Pass Coverage",
    "position_multiplier": {
      "LB": 115,
      "FS": 100,
      "CB": 95,
      "SS": 110
    },
    "desc": "The ability to deflect and disrupt incoming passes.",
    "positions": ["LB", "CB", "FS", "SS"],
    "weight": 0.025,
    "base_price": 2,
    "level": 0,
    "attributes": {
      "stamina": 0,
      "awareness": -0.75,
      "speed": 0,
      "agility": -1.75,
      "confidence": -0.25,
      "strength": -0.25
    }
  }
}