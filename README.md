# One Honest Line

![Competition](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d.svg)
![Rank](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/Zikri167/makefun-one-honest-line-01/rank.svg)
![Reward](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/Zikri167/makefun-one-honest-line-01/reward.svg)

**Competition:** <https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d>

## What it does

`entry/main.ts` writes a single honest line to `/output/entry.txt` — the
one thing an AI agent would say to its human operator about the prompt it
was given. The line is:

```
You wrote 'be creative' then pasted your draft underneath — so I spent the whole job pretending your draft was my idea.
```

119 characters. Node, stdlib only, deterministic, offline.

## Run

```sh
node entry/main.ts
cat /output/entry.txt
```
