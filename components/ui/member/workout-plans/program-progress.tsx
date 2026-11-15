import { textColor } from "@/lib/text-helper";

interface ProgramProps {
  currentSession: number;
  targetSession: number;
}

const progressBarStyles = {
  a: "w-[2%] border-(--visit-one)",
  b: "w-[4%] border-(--visit-one)",
  c: "w-[6%] border-(--visit-one)",
  d: "w-[8%] border-(--visit-one)",
  e: "w-[10%] border-(--visit-one)",
  f: "w-[12%] border-(--visit-one)",
  g: "w-[14%] border-(--visit-one)",
  h: "w-[16%] border-(--visit-one)",
  i: "w-[18%] border-(--visit-one)",
  j: "w-[20%] border-(--visit-one)",
  k: "w-[22%] border-(--visit-one)",
  l: "w-[24%] border-(--visit-one)",
  m: "w-[26%] border-(--visit-one)",
  n: "w-[28%] border-(--visit-one)",
  o: "w-[30%] border-(--visit-one)",
  p: "w-[32%] border-(--visit-one)",
  q: "w-[34%] border-(--visit-two)",
  r: "w-[36%] border-(--visit-two)",
  s: "w-[38%] border-(--visit-two)",
  t: "w-[40%] border-(--visit-two)",
  u: "w-[42%] border-(--visit-two)",
  v: "w-[44%] border-(--visit-two)",
  w: "w-[46%] border-(--visit-two)",
  x: "w-[48%] border-(--visit-two)",
  y: "w-[50%] border-(--visit-three)",
  aa: "w-[52%] border-(--visit-three)",
  ab: "w-[54%] border-(--visit-three)",
  ac: "w-[56%] border-(--visit-three)",
  ad: "w-[58%] border-(--visit-three)",
  ae: "w-[60%] border-(--visit-three)",
  af: "w-[62%] border-(--visit-three)",
  ag: "w-[64%] border-(--visit-three)",
  ah: "w-[66%] border-(--visit-three)",
  ai: "w-[68%] border-(--visit-three)",
  aj: "w-[70%] border-(--visit-three)",
  ak: "w-[72%] border-(--visit-three)",
  al: "w-[74%] border-(--visit-four)",
  am: "w-[76%] border-(--visit-four)",
  an: "w-[78%] border-(--visit-four)",
  ao: "w-[80%] border-(--visit-four)",
  ap: "w-[82%] border-(--visit-four)",
  aq: "w-[84%] border-(--visit-five)",
  ar: "w-[86%] border-(--visit-five)",
  as: "w-[88%] border-(--visit-five)",
  at: "w-[90%] border-(--visit-five)",
  au: "w-[92%] border-(--visit-five)",
  av: "w-[94%] border-(--visit-five)",
  aw: "w-[96%] border-(--visit-five)",
  ax: "w-[98%] border-(--visit-five)",
  ay: "w-[100%] border-(--visit-six)",
};

export default function ProgramProgress({
  currentSession,
  targetSession,
}: ProgramProps) {
  const percentage = (currentSession / targetSession) * 100;

  let progressBar: string;

  switch (true) {
    case percentage >= 100:
      progressBar = progressBarStyles.ay;
      break;
    case percentage > 98:
      progressBar = progressBarStyles.ax;
      break;
    case percentage > 96:
      progressBar = progressBarStyles.aw;
      break;
    case percentage > 94:
      progressBar = progressBarStyles.av;
      break;
    case percentage > 92:
      progressBar = progressBarStyles.au;
      break;
    case percentage > 90:
      progressBar = progressBarStyles.at;
      break;
    case percentage > 88:
      progressBar = progressBarStyles.as;
      break;
    case percentage > 86:
      progressBar = progressBarStyles.ar;
      break;
    case percentage > 84:
      progressBar = progressBarStyles.aq;
      break;
    case percentage > 82:
      progressBar = progressBarStyles.ap;
      break;
    case percentage > 80:
      progressBar = progressBarStyles.ao;
      break;
    case percentage > 78:
      progressBar = progressBarStyles.an;
      break;
    case percentage > 76:
      progressBar = progressBarStyles.am;
      break;
    case percentage > 74:
      progressBar = progressBarStyles.al;
      break;
    case percentage > 72:
      progressBar = progressBarStyles.ak;
      break;
    case percentage > 70:
      progressBar = progressBarStyles.aj;
      break;
    case percentage > 68:
      progressBar = progressBarStyles.ai;
      break;
    case percentage > 66:
      progressBar = progressBarStyles.ah;
      break;
    case percentage > 64:
      progressBar = progressBarStyles.ag;
      break;
    case percentage > 62:
      progressBar = progressBarStyles.af;
      break;
    case percentage > 60:
      progressBar = progressBarStyles.ae;
      break;
    case percentage > 58:
      progressBar = progressBarStyles.ad;
      break;
    case percentage > 56:
      progressBar = progressBarStyles.ac;
      break;
    case percentage > 54:
      progressBar = progressBarStyles.ab;
      break;
    case percentage > 52:
      progressBar = progressBarStyles.aa;
      break;
    case percentage > 50:
      progressBar = progressBarStyles.y;
      break;
    case percentage > 48:
      progressBar = progressBarStyles.x;
      break;
    case percentage > 46:
      progressBar = progressBarStyles.w;
      break;
    case percentage > 44:
      progressBar = progressBarStyles.v;
      break;
    case percentage > 42:
      progressBar = progressBarStyles.u;
      break;
    case percentage > 40:
      progressBar = progressBarStyles.t;
      break;
    case percentage > 38:
      progressBar = progressBarStyles.s;
      break;
    case percentage > 36:
      progressBar = progressBarStyles.r;
      break;
    case percentage > 34:
      progressBar = progressBarStyles.q;
      break;
    case percentage > 32:
      progressBar = progressBarStyles.p;
      break;
    case percentage > 30:
      progressBar = progressBarStyles.o;
      break;
    case percentage > 28:
      progressBar = progressBarStyles.n;
      break;
    case percentage > 26:
      progressBar = progressBarStyles.m;
      break;
    case percentage > 24:
      progressBar = progressBarStyles.l;
      break;
    case percentage > 22:
      progressBar = progressBarStyles.k;
      break;
    case percentage > 20:
      progressBar = progressBarStyles.j;
      break;
    case percentage > 18:
      progressBar = progressBarStyles.i;
      break;
    case percentage > 16:
      progressBar = progressBarStyles.h;
      break;
    case percentage > 14:
      progressBar = progressBarStyles.g;
      break;
    case percentage > 12:
      progressBar = progressBarStyles.f;
      break;
    case percentage > 10:
      progressBar = progressBarStyles.e;
      break;
    case percentage > 8:
      progressBar = progressBarStyles.d;
      break;
    case percentage > 6:
      progressBar = progressBarStyles.c;
      break;
    case percentage > 4:
      progressBar = progressBarStyles.b;
      break;
    case percentage > 2:
      progressBar = progressBarStyles.a;
      break;
    default:
      progressBar = "w-0 border-(--bar-low)/1";
  }

  return (
    <div>
      <span className={textColor}>Plan completion</span>
      <span className="flex justify-start items-center w-full border border-(--carbon-black)/30 rounded-full bg-(--dim-grey)/40">
        <span className={`border-2 rounded-full ${progressBar}`} />
      </span>
    </div>
  );
}

// todo: create a different progress bar for 32 for the 8 weeks plan at 4 sessions per week
