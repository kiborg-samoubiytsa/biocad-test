const colors = {
  negativeCharged: "#fc9cac",
  positiveCharged: "#bb99ff",
  polarUncharged: "#80bfff",
  glycine: "#c4c4c4",
  cysteine: "#ffea00",
  hydrophobic: "#67e4a6",
  noColor: "transparent",
};

const symbolsMap: Record<string, string> = {
  a: colors["hydrophobic"],
  r: colors["positiveCharged"],
  n: colors["polarUncharged"],
  d: colors["negativeCharged"],
  c: colors["cysteine"],
  e: colors["negativeCharged"],
  q: colors["polarUncharged"],
  g: colors["glycine"],
  h: colors["polarUncharged"],
  i: colors["hydrophobic"],
  l: colors["hydrophobic"],
  k: colors["positiveCharged"],
  m: colors["hydrophobic"],
  f: colors["hydrophobic"],
  p: colors["hydrophobic"],
  s: colors["polarUncharged"],
  t: colors["polarUncharged"],
  w: colors["hydrophobic"],
  y: colors["hydrophobic"],
  v: colors["hydrophobic"],
  "-": colors["noColor"],
};

export default symbolsMap;
