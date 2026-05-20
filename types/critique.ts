export type CritiqueDimension = {
  name: string;
  score: number;
  verdict: string;
  notes: string[];
  fixes: string[];
};

export type CritiqueResponse = {
  overall_score: number;
  one_line_verdict: string;
  dish_identified: string;
  shot_type: string;
  dimensions: {
    composition: CritiqueDimension;
    lighting: CritiqueDimension;
    colour: CritiqueDimension;
    styling: CritiqueDimension;
    focus_sharpness: CritiqueDimension;
    appetite_appeal: CritiqueDimension;
  };
  reshoot_priority: string[];
  if_you_only_do_one_thing: string;
};

export type CritiqueError = {
  error: string;
  message: string;
};
