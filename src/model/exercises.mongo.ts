import {Schema, model} from "mongoose";

export type TMuscleCategory =
  | 'shoulders'
  | 'arms'
  | 'back'
  | 'chest'
  | 'waist'
  | 'hips'
  | 'legs'
  | 'others';

export type TExerciseDoc = {
  group: TMuscleCategory;
  muscle: string;
  scientificName: string;
  exercises: Array<TExercise>;
};

export type TExercise = {
  name: string;
  equipment?: Array<string>;
  variation: Array<TExerciseVariation>;
};

export type TExerciseVariation = {
  variant: string;
  equipment?: Array<string>;
  images?: Array<string>;
  notes?: string;
  video?: string;
  variation?: Array<TExerciseVariation>;
};

// ================== SHOULDERS ==================

const overheadPressPoseVariation: Array<TExerciseVariation> = [
  // standing
  {
    variant: "standing",
  },
  // seated
  {
    variant: "seated",
    equipment: ["adjustable bench, upright bench"],
    variation: [
      // recline
      {
        variant: "recline",
      },
      // upright
      {
        variant: "upright",
      },
    ],
  },
];

const frontRaisePoseVariation: Array<TExerciseVariation> = [
  // standing
  {
    variant: "standing",
  },
  // incline
  {
    variant: "incline",
    equipment: ["adjustable bench, upright bench"],
    variation: [
      // forward
      {
        variant: "forward",
      },
      // backward
      {
        variant: "backward",
      },
    ],
  },
];

const rearLateralRaisePoseVariation: Array<TExerciseVariation> = [
  // standing
  {
    variant: "standing",
  },
  // seated
  {
    variant: "seated",
    equipment: ["adjustable bench, upright bench, flat bench"],
  },
];

const shouldersDoc:TExerciseDoc = {
  group: 'shoulders',
  muscle: 'mid delt',
  scientificName: "anterior deltoid",
  exercises: [
    // overhead press
    {
      name: "overhead press",
      variation: [
        // barbell
        {
          variant: "barbell",
          equipment: ["fixed barbell, olympic barbell, smith machine"],
          variation: overheadPressPoseVariation,
        },
        // dumbbell
        {
          variant: "dumbbell",
          equipment: ["dumbbells"],
          variation: [
            // normal
            {
              variant: "",

              variation: overheadPressPoseVariation,
            },
            // parallel grip
            {
              variant: "parallel grip",

              variation: overheadPressPoseVariation,
            },
          ],
        },
        // cable
        {
          variant: "cable",
          equipment: ["cable pulley machine, cable crossover machine"],
          variation: [
            // bar
            {
              variant: "bar",
              equipment: ["cable barbell"],
              variation: overheadPressPoseVariation,
            },
            // hand grip
            {
              variant: "hand grip",
              equipment: ["hand grip"],
              variation: [
                ...overheadPressPoseVariation,
                //twisting overhead
                {
                  variant: "twisting overhead",
                  equipment: [],
                },
              ],
            },
          ],
        },
        // machine
        {
          variant: "machine",
          equipment: ["shoulder press machine, hammer strength machine"],
          variation: [
            // normal
            {
              variant: "",
            },
            // parallel grip
            {
              variant: "parallel grip",
            },
          ],
        },
      ],
    },
    // front raise
    {
      name: "front raise",
      variation: [
        // barbell
        {
          variant: "barbell",
          equipment: ["fixed barbell, olympic barbell, smith machine"],
          variation: frontRaisePoseVariation,
        },
        // dumbbell
        {
          variant: "dumbbell",
          equipment: ["dumbbells"],
          variation: frontRaisePoseVariation,
        },
        // cable
        {
          variant: "cable",
          equipment: ["cable pulley machine, cable crossover machine"],
          variation: [
            // bar
            {
              variant: "bar",
              equipment: ["cable barbell"],
            },
            // hand grip
            {
              variant: "hand grip",
              equipment: ["hand grip"],
            },
          ],
        },
      ],
    },
    // arnold press
    {
      name: "arnold press",
      equipment: ["dumbbells"],
      variation: [
        // standing
        {
          variant: "standing",
        },
        // seated
        {
          variant: "seated",
          equipment: ["adjustable bench, upright bench, flat bench"],
        },
      ],
    },
  ],
}

const midDeltDoc:TExerciseDoc = {
  group: 'shoulders',
  muscle: 'mid delt',
  scientificName: "posterior deltoid",
  exercises: [
    // lateral raise
    {
      name: "lateral raise",
      variation: [
        // cable
        {
          variant: "cable",
          equipment: [
            "cable crossover machine, cable pulley machine",
            "cable hand grip",
          ],
        },
        // dumbbell
        {
          variant: "dumbbell",
          equipment: ["dumbbells"],
          variation: [
            // bent arm
            {
              variant: "bent arm",
              variation: [
                // standing
                {
                  variant: "standing",
                },
                // seated
                {
                  variant: "seated",
                  equipment: ["adjustable bench, upright bench, flat bench"],
                },
              ],
            },
            // straight arm
            {
              variant: "straight arm",
              variation: [
                // standing
                {
                  variant: "standing",
                },
                // seated
                {
                  variant: "seated",
                  equipment: ["adjustable bench, upright bench, flat bench"],
                },
                // leaning
                {
                  variant: "leaned",
                },
              ],
            },
          ],
        },
        // machine
        {
          variant: "machine",
          equipment: ["lateral raise machine"],
        },
      ],
    },
  ],
}

const rearDeltDoc:TExerciseDoc = {
  group: 'shoulders',
  muscle: 'rear delt',
  scientificName: "posterior deltoid",
  exercises: [
    // rear delt row
    {
      name: "rear delt row",
      variation: [
        // barbell
        {
          variant: "barbell",
          equipment: ["fixed barbell, olympic barbell, smith machine"],
        },
        // dumbbell
        {
          variant: "dumbbell",
          equipment: ["dumbbells", "adjustable bench, flat bench"],
        },
        // cable
        {
          variant: "cable",
          equipment: ["cable crossover machine, cable pulley machine"],
          variation: [
            // seated
            {
              variant: "seated",
              equipment: ["cable row machine"],
              variation: [
                // row bar
                {
                  variant: "",
                  equipment: ["cable row bar"],
                },
                // one arm
                {
                  variant: "one arm",
                  equipment: ["cable hand grip, cable double d row bar"],
                },
              ],
            },
            // standing
            {
              variant: "standing",
              variation: [
                // row bar
                {
                  variant: "",
                  equipment: ["cable row bar"],
                },
                // rope
                {
                  variant: "rope",
                  equipment: ["cable tricep rope"],
                },
              ],
            },
          ],
        },
        // lever
        {
          variant: "lever",
          variation: [
            // incline
            {
              variant: "incline",
              equipment: ["incline lever row machine"],
            },
            // t-bar
            {
              variant: "t-bar",
              equipment: ["t-bar row platform"],
            },
          ],
        },
        // machine
        {
          variant: "machine",
          equipment: ["seated row machine"],
        },
      ],
    },
    // rear delt raise
    {
      name: "rear delt raise",
      variation: [
        // barbell
        {
          variant: "barbell",
          equipment: ["fixed barbell, olympic barbell, smith machine"],
        },
        // dumbbell
        {
          variant: "dumbbell",
          equipment: ["dumbbells"],
        },
      ],
    },
    // rear lateral raise
    {
      name: "rear lateral raise",
      variation: [
        // cable
        {
          variant: "cable",
          equipment: [
            "cable crossover machine, cable pulley machine",
            "cable hand grip",
          ],
          variation: rearLateralRaisePoseVariation,
        },
        // dumbbell
        {
          variant: "dumbbell",
          equipment: ["dumbbells"],
          variation: rearLateralRaisePoseVariation,
        },
        // machine
        {
          variant: "machine",
          equipment: ["rear lateral raise machine, lateral raise machine"],
        },
      ],
    },
    // reverse fly
    {
      name: "reverse fly",
      variation: [
        // cable
        {
          variant: "cable",
          equipment: [
            "cable crossover machine, cable pulley machine",
            "cable hand grip",
          ],
          variation: [
            // one arm
            {
              variant: "one arm",
            },
            // supine
            {
              variant: "supine",
              equipment: ["adjustable bench, flat bench"],
            },
          ],
        },
        // machine
        {
          variant: "machine",
          equipment: ["chest/pec fly machine, pec deck machine"],
        },
      ],
    },
    // standing cross row
    {
      name: "standing cross row",
      equipment: [
        "cable crossover machine, cable pulley machine",
        "cable hand grip",
      ],
      variation: [
        // two arms
        {
          variant: "",
        },
        // one arm
        {
          variant: "one arm",
        },
      ],
    },
  ]
}

// ================== CHEST ==================

const benchPressLoadVariation: Array<TExerciseVariation> = [
  // barbell
  {
    variant: "barbell",
    equipment: ["fixed barbell, olympic barbell, smith machine"],
  },
  // dumbbell
  {
    variant: "dumbbell",
    equipment: ["dumbbells"],
  },
  // cable
  {
    variant: "cable",
    equipment: [
      "cable crossover machine, cable pulley machine",
      "cable hand grip, cable barbell",
    ],
  },
];

const midChestDoc:TExerciseDoc = {
  group: 'chest',
  muscle: 'mid chest',
  scientificName: "pectoralis major, sternal",
  exercises: [
    // bench press
    {
      name: "bench press",
      equipment: [
        "flat bench, flat bench press, adjustable bench, adjustable bench press",
      ],
      // barbell
      // dumbbell
      // cable
      variation: benchPressLoadVariation,
    },
    // fly
    {
      name: "fly",
      variation: [
        // dumbbell
        {
          variant: "dumbbell",
          equipment: ["dumbbells"],
        },
        // cable
        {
          variant: "cable",
          equipment: [
            "cable crossover machine, cable pulley machine",
            "cable hand grip",
          ],
        },
        // machine
        {
          variant: "machine",
          equipment: ["chest/pec fly machine"],
        },
      ],
    },
    // machine chest/bench press
    {
      name: "machine chest/bench press",
      variation: [
        // default
        {
          variant: "",
          equipment: ["chest press machine, bench press machine"],
        },
      ],
    },
  ],
}

const upperChestDoc:TExerciseDoc = {
  group: 'chest',
  muscle: 'upper chest',
  scientificName: "pectoralis major, clavicular",
  exercises: [
    // incline bench press
    {
      name: "incline bench press",
      equipment: [
        "incline/decline bench, incline bench press, adjustable bench",
      ],
      // barbell
      // dumbbell
      // cable
      variation: benchPressLoadVariation,
    },
    // incline fly
    {
      name: "incline fly",
      variation: [
        // dumbbell
        {
          variant: "dumbbell",
          equipment: [
            "dumbbells",
            "incline/decline bench, incline bench press adjustable bench",
          ],
        },
        // cable
        {
          variant: "cable",
          equipment: [
            "cable crossover machine, cable pulley machine",
            "cable hand grip, cable barbell",
          ],
          variation: [
            // standing
            {
              variant: "standing",
            },
            // seated
            {
              variant: "seated",
              equipment: [
                "incline/decline bench, incline bench press, adjustable bench",
              ],
            },
          ],
        },
        // machine
        {
          variant: "machine",
          equipment: ["incline fly machine"],
        },
      ],
    },
    // machine incline bench press
    {
      name: "machine incline bench press",
      equipment: ["incline bench press machine"],
      variation: [],
    },
  ],
}

const lowerChestDoc:TExerciseDoc = {
  group: 'chest',
  muscle: 'lower chest',
  scientificName: "pectoralis minor",
  exercises: [
    // decline bench press
    {
      name: "decline bench press",
      equipment: ["incline/decline bench, decline bench, abdominal bench"],
      variation: benchPressLoadVariation,
    },
    // striaght bar dip
    {
      name: "straight bar dip",
      equipment: ["smith machine"],
      variation: [],
    },
    // chest dip
    {
      name: "chest dip",
      variation: [
        // bodyweight/weighted
        {
          variant: "bodyweight",
          equipment: ["dipping station, power tower"],
        },
        // machine
        {
          variant: "machine",
          equipment: ["seated dip machine"],
        },
      ],
    },
    // decline fly
    {
      name: "decline fly",
      variation: [
        // dumbbell
        {
          variant: "dumbbell",
          equipment: [
            "dumbbells",
            "incline/decline bench, decline bench, abdominal bench",
          ],
        },
        // cable
        {
          variant: "cable",
          equipment: [
            "cable crossover machine, cable pulley machine, cable hand grip",
          ],
        },
      ],
    },
  ],
}

// ================== BACK ==================

const generalBackDoc:TExerciseDoc = {
  group: 'back',
  muscle: 'back',
  scientificName: "back",
  exercises: [],
}

const latsDoc:TExerciseDoc = {
  group: 'back',
  muscle: 'lats',
  scientificName: "latissimus dorsi, teres major",
  exercises: [],
}

const upperTrapsDoc:TExerciseDoc = {
  group: 'back',
  muscle: 'upper traps',
  scientificName: "upper trapezius",
  exercises: [],
}

const middleTrapsDoc:TExerciseDoc = {
  group: 'back',
  muscle: 'middle traps',
  scientificName: "middle trapezius",
  exercises: [],
}

const lowerTrapsDoc:TExerciseDoc = {
  group: 'back',
  muscle: 'lower traps',
  scientificName: "lower trapezius",
  exercises: [],
}

const rotatorCuffsDoc:TExerciseDoc = {
  group: 'back',
  muscle: 'rotator cuffs',
  scientificName: "supraspinatus, infraspinatus, subscapularis, teres minor",
  exercises: [],
}


// ================== ARMS ==================

const tricepsDoc:TExerciseDoc = {
  group: 'arms',
  muscle: 'triceps',
  scientificName: "triceps brachii",
  exercises: [
    // triceps dips
    {
      name: "tricep dips",
      variation: [
        // bench
        {
          variant: "bench",
          equipment: ["flat bench, adjustable bench"],
        },
        // assisted
        {
          variant: "assisted",
          equipment: ["assisted pull-up/dip machine"],
        },
        // bodyweight/weighted
        {
          variant: "bodyweight/weighted",
          equipment: ["dipping station, power tower"],
        },
      ],
    },
    // close grip bench press
    {
      name: "close grip bench press",
      equipment: [
        "flat bench press, adjustable bench press, flat bench, adjustable bench",
      ],
      variation: [
        // barbell
        {
          variant: "barbell",
          equipment: [
            "fixed barbell, olympic barbell, ez bar, smith machine",
          ],
        },
        // dumbbell
        {
          variant: "dumbbell",
          equipment: ["dumbbells"],
        },
      ],
    },
    // jm bench press
    {
      name: "jm bench press",
      equipment: [
        "flat bench press, adjustable bench press, flat bench, adjustable bench",
        "fixed barbell, olympic barbell, ez bar",
      ],
      variation: [
        {
          variant: "",
        },
      ],
    },
    // triceps extension
    // dumbbell
    // barbell
    // machine
    // cable overhead
    // straight bar
    // rope
    // single arm
    // triceps kickback
    // triceps pushdown
    {
      name: "pushdown",
      variation: [
        // machine
        {
          variant: "machine",
          equipment: ["tricep pushdown machine"],
        },
        // cable
        {
          variant: "cable",
          equipment: ["cable crossover machine, cable pulley machine"],
          variation: [
            // straight bar
            {
              variant: "straight bar",
              equipment: ["cable straight bar"],
              variation: [
                // forward grip
                // upright
                // forward lean
                // reverse grip
                // upright
                // forward lean
              ],
            },
            // rope

            // v-bar

            // single arm
          ],
        },
      ],
    },
  ],
}

const bicepsDoc:TExerciseDoc = {
  group: 'arms',
  muscle: 'biceps',
  scientificName: "biceps brachii, brachialis",
  exercises: [],
}

const forearmsDoc:TExerciseDoc = {
  group: 'arms',
  muscle: 'forearms',
  scientificName: "brachioradialis, pronators, supinators, flexors, extensors",
  exercises: [],
}

// ================== HIPS ==================

const glutesDoc:TExerciseDoc = {
  group: 'hips',
  muscle: 'glutes',
  scientificName: "Gluteus Maximus",
  exercises: [],
}

const hipAbductorsDoc:TExerciseDoc = {
  group: 'hips',
  muscle: 'hip abductors',
  scientificName: "gluteus medius, gluteus minimus",
  exercises: [],
}

const hipFlexorsDoc:TExerciseDoc = {
  group: 'hips',
  muscle: 'hip flexors',
  scientificName: "iliopsoas, sartorius, rectus femoris, tensor fasciae latae, pectineus",
  exercises: [],
}

// ================== LEGS ==================

const quadsDoc:TExerciseDoc = {
  group: 'legs',
  muscle: 'quads',
  scientificName: "quadriceps",
  exercises: [],
}

const hamstringsDoc:TExerciseDoc = {
  group: 'legs',
  muscle: 'hamstrings',
  scientificName: "hamstrings",
  exercises: [],
}

const hipAdductorsDoc:TExerciseDoc = {
  group: 'legs',
  muscle: 'hip adductors',
  scientificName: "adductors, pectineus, gracilis",
  exercises: [],
}

const calfDoc:TExerciseDoc = {
  group: 'legs',
  muscle: 'calf',
  scientificName: "gastrocnemius, soleus, tibialis anterior",
  exercises: [],
}

// ================== WAIST ==================

const absDoc:TExerciseDoc = {
  group: 'waist',
  muscle: 'abs',
  scientificName: "rectus abdominis",
  exercises: [],
}

const obliquesDoc:TExerciseDoc = {
  group: 'waist',
  muscle: 'obliques',
  scientificName: "obliques",
  exercises: [],
}

const lowerBackDoc:TExerciseDoc = {
  group: 'waist',
  muscle: 'lower back',
  scientificName: "erector spinae",
  exercises: [],
}


// ================= OTHERS ===================



// ================= ALL ===================

export const exerciseCollection = [
  upperChestDoc,
  midChestDoc,
  lowerChestDoc,
  generalBackDoc,
  latsDoc,
  upperTrapsDoc,
  middleTrapsDoc,
  lowerTrapsDoc,
  tricepsDoc,
  bicepsDoc,
  forearmsDoc,
  glutesDoc,
  hipAbductorsDoc,
  hipFlexorsDoc,
  calfDoc,
  absDoc,
  obliquesDoc,
  lowerBackDoc,
];

const exerciseDbSchema = new Schema<TExerciseDoc>({
  group: {type: String, required: true},
  muscle: {type: String, required: true},
  scientificName: {type: String, required: true},
  exercises: Array<TExercise>
})

export const exerciseModel = model<TExerciseDoc>('exercise', exerciseDbSchema)
