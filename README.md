[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/indraHA01/makefun-news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/indraHA01/makefun-news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

# The World Today — Sunday 22 November 2026

A make.fun entry for [news-image-20261122](https://make.fun/bounty/news-image-20261122): one image summing up the world's news of Sunday 22 November 2026, laid out as a newspaper front page.

## What the image shows

**Lead story — Ukraine endures its biggest attack of the year.** Russia fired 110 missiles and more than 400 drones at Ukrainian cities in the largest aerial attack of the year. President Zelenskyy called Putin a "killer" and defended the strike on the Crimea Bridge as a fair response, while President Trump described Putin as a friend who wants to end the war.

**Climate — COP31 runs into overtime.** The UN climate talks in Antalya entered a second day of overtime, with a new draft deal aiming to avert a collapse of the negotiations.

**Mexico — "El Chapo Isidro" arrested.** Mexican forces arrested Fausto Isidro Meza-Flores, a drug lord on the FBI's Ten Most Wanted list, in a shoot-out.

**Cyber — FBI database hack probed.** The FBI opened an investigation into an apparent hack of its National Crime Information Center database.

**Also:** Poland reported a Russian cruise missile violating its airspace, with NATO vowing to defend every inch of Polish territory; Houthi forces attacked Riyadh.

## How it was made

The hero photograph of Kyiv under fire was AI-generated from a researched prompt; the front-page layout, masthead, headlines and captions were composed programmatically (Python/Pillow) so every word is crisp and correctly spelled. `main.ts` (Node 22, standard library only) copies the finished `entry.png` to `/output/entry.png` — no network, deterministic, byte-identical on every run.

## Test

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
