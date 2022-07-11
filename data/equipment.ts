import {Schema, model} from "mongoose";

export type TEquipmentDoc = {
  category: TEquipmentCategories;
  equipment: Array<TEquipment>
}

export type TEquipmentCategories =
  | 'barbells'
  | 'benches'
  | 'cardio'
  | 'weights'
  | 'machines'
  | 'racks'
  | 'cableAttachments'
  | 'others';

export type TEquipment = {
  name: string;
  weights?: Array<string>;
};

const weightsDoc:TEquipmentDoc = {
  category: 'weights',
  equipment: [
    {
      name: "dumbbells",
      weights: []
    },
    { 
      name: 'kettlebells',
      weights: []
    },
    { 
      name: 'medicine ball',
      weights: []
    },
    {
      name: 'weight plates',
      weights: []
    },
]
}

const barbellsDoc:TEquipmentDoc = {
  category: 'barbells',
  equipment: [
    { name: 'ez curl barbell'},
    { name: 'tricep barbell'},
    { name: 'fixed barbell'},
    { 
        name: 'olympic barbell',
        weights: ['15kg', '20kg']
    },
    { name: 'trap barbell'},
    { name: ''},

],
}

const benchesDoc:TEquipmentDoc = {
  category: 'benches',
  equipment: [
    { name: 'abdominal bench'},
    { name: 'flat bench press'},
    { name: 'flat bench'},
    { name: 'incline bench'},
    { name: 'adjustable bench'},
    { name: 'incline/decline bench'},
    { name: 'preacher bench'},
    { name: 'hyper extension bench'},
    { name: 'incline bench press'},
    { name: 'decline bench press'},
    { name: 'adjustable bench press'},
]
}

const racksDoc:TEquipmentDoc = {
  category: 'racks',
  equipment: [
    { name: 'dipping station'},
    { name: 'pull up bar'},
    { name: 'power tower'},
    { name: 'power rack'},
    { name: 'squat rack'},
    { name: 't-bar row platform'},
    { name: ''},


]
}

const machinesDoc:TEquipmentDoc = {
  category: 'machines',
  equipment: [
    { name: 'ab coaster'},
    { name: 'ab crunch machine'},
    { name: 'cable crossover machine'},
    { name: 'cable pulley machine'},
    { name: 'cable row machine'},
    { name: 'calf raise machine'},
    { name: 'glute ham developer'},
    { name: 'leg abduction/adduction machine'},
    { name: 'leg/hamstring curl machine'},
    { name: 'leg extension machine'},
    { name: 'leg press machine'},
    { name: 'chest press machine'},
    { name: 'bench press machine'},
    { name: 'hammer strength machine'},
    { name: 'lat pulldown machine'},
    { name: 'chest/pec fly machine'},
    { name: 'pec deck machine'},
    { name: 'pilates machine'},
    { name: 'reverse hyper machine'},
    { name: 'hack squat machine'},
    { name: 'smith machine'},
    { name: 'bicep curl machine'},
    { name: 'seated row machine'},
    { name: 'shoulder press machine'},
    { name: 'lateral raise machine'},
    { name: 'rear lateral raise machine'},
    { name: 'incline lever row machine'},
    { name: 'seated dip machine'},
    { name: 'incline fly machine'},
    { name: 'incline bench press machine'},
    { name: 'assisted pull-up/dip machine'},
    { name: 'tricep pushdown machine'},
    { name: ''},
    { name: ''},
    { name: ''},
    { name: ''},
    { name: ''},
              ]
}

const cableAttachmentsDoc:TEquipmentDoc = {
  category: 'cableAttachments',
  equipment: [
    { name: 'cable hand grip' },
    { name: 'cable double d row bar' },
    { name: 'cable multi exercise revolving bar' },
    { name: 'cable tricep rope' },
    { name: 'cable v-bar' },
    { name: 'cable straight bar' },
    { name: 'cable barbell' },
    { name: 'cable row bar' },
    { name: 'cable revolving row bar' },
    { name: 'cable ankle cuffs' },
]
}

const cardioDoc:TEquipmentDoc = {
  category: 'cardio',
  equipment: [
    { name: 'spin bike'},
    { name: 'elliptical machine'},
    { name: 'rowing machine'},
    { name: 'recumbent bike'},
    { name: 'stationary bike'},
    { name: 'treadmill'},

],
}

const othersDoc:TEquipmentDoc = {
  category: 'others',
  equipment: [
    { name: 'ab roller wheel'},
    { name: 'stability ball'},
    { name: 'battle ropes'},
    { name: 'blocks'},
    { name: 'climbing rope'},
    { name: 'hand grip exerciser'},
    { name: 'jump rope'},
    { name: 'yoga mat'},
    { name: 'agility ladder'},
    { name: 'cones'},
    { name: 'dragging sled'},
    { name: 'jump box'},
    { name: 'plyo boxes'},
    { name: 'gymnastic rings'},
    { name: 'trampoline'},
    { name: 'sliders'},
    { name: 'push up bars'},
    { name: 'suspension trainer'},
    { name: 'resistance bands'},
    { name: 'punching bag'},
    { name: 'foam roller'},
    { name: ''},
    { name: ''},
    { name: ''},
    
] 
}

function addFreeWeightsToEquipment() {
  // TODO: add weights to weightsDoc
}

export const equipmentCollection = [
  weightsDoc,
  barbellsDoc,
  benchesDoc,
  racksDoc,
  machinesDoc,
  cableAttachmentsDoc,
  cardioDoc,
  othersDoc
]

const equipmentDbSchema = new Schema<TEquipmentDoc>({
  category: String,
  equipment: Array<TEquipment>,
})

export const equipmentModel = model<TEquipmentDoc>('Equipment', equipmentDbSchema)