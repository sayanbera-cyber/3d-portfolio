export type WorkCategory = 'All' | 'Birds' | 'Mammals' | 'Reptiles' | 'Insects' | 'Portraits' | 'Achievements' | 'Places & creative';
export type Work = {
  image: string; name: string; category: Exclude<WorkCategory, 'All'>; width: number; height: number;
  title?: string; species?: string; scientificName?: string; date?: string; location?: string;
  caption?: string; story?: string; camera?: string; lens?: string; focalLength?: string;
  aperture?: string; shutterSpeed?: string; iso?: number; featured?: boolean; localPhotoId?: string;
};
const originalWork: Work[] = [
  {
    "image": "/Images/1000303134.jpg",
    "name": "1000303134",
    "category": "Portraits",
    "width": 4000,
    "height": 6000
  },
  {
    "image": "/Images/DSC_0003.jpg",
    "name": "DSC_0003",
    "category": "Birds",
    "width": 1615,
    "height": 1503
  },
  {
    "image": "/Images/DSC_0010.jpg",
    "name": "DSC_0010",
    "category": "Birds",
    "width": 6000,
    "height": 4000
  },
  {
    "image": "/Images/DSC_0014.jpg",
    "name": "DSC_0014",
    "category": "Birds",
    "width": 2210,
    "height": 2453
  },
  {
    "image": "/Images/DSC_0021 (2)-DeNoiseAI-clear.jpg",
    "name": "DSC_0021 (2)-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2397,
    "height": 2997
  },
  {
    "image": "/Images/DSC_0024.jpg",
    "name": "DSC_0024",
    "category": "Birds",
    "width": 6000,
    "height": 4000
  },
  {
    "image": "/Images/DSC_0033.jpg",
    "name": "DSC_0033",
    "category": "Birds",
    "width": 6000,
    "height": 4000
  },
  {
    "image": "/Images/DSC_0035 (1).jpg",
    "name": "DSC_0035 (1)",
    "category": "Birds",
    "width": 2897,
    "height": 3864
  },
  {
    "image": "/Images/DSC_0035.jpg",
    "name": "DSC_0035",
    "category": "Birds",
    "width": 2897,
    "height": 3864
  },
  {
    "image": "/Images/DSC_0036.jpg",
    "name": "DSC_0036",
    "category": "Birds",
    "width": 6000,
    "height": 4000
  },
  {
    "image": "/Images/DSC_0050.jpg",
    "name": "DSC_0050",
    "category": "Portraits",
    "width": 4000,
    "height": 6000
  },
  {
    "image": "/Images/DSC_0057.jpg",
    "name": "DSC_0057",
    "category": "Birds",
    "width": 2427,
    "height": 2280
  },
  {
    "image": "/Images/DSC_0087.jpg",
    "name": "DSC_0087",
    "category": "Birds",
    "width": 3298,
    "height": 3018
  },
  {
    "image": "/Images/DSC_0106 (1).jpg",
    "name": "DSC_0106 (1)",
    "category": "Birds",
    "width": 3353,
    "height": 4192
  },
  {
    "image": "/Images/DSC_0106.jpg",
    "name": "DSC_0106",
    "category": "Birds",
    "width": 3353,
    "height": 4192
  },
  {
    "image": "/Images/DSC_0114 (1).jpg",
    "name": "DSC_0114 (1)",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_0114.jpg",
    "name": "DSC_0114",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_0124.jpg",
    "name": "DSC_0124",
    "category": "Birds",
    "width": 1493,
    "height": 2654
  },
  {
    "image": "/Images/DSC_0157 (1).jpg",
    "name": "DSC_0157 (1)",
    "category": "Birds",
    "width": 3155,
    "height": 2524
  },
  {
    "image": "/Images/DSC_0157 (2).jpg",
    "name": "DSC_0157 (2)",
    "category": "Birds",
    "width": 2332,
    "height": 2915
  },
  {
    "image": "/Images/DSC_0236.jpg",
    "name": "DSC_0236",
    "category": "Birds",
    "width": 3112,
    "height": 3640
  },
  {
    "image": "/Images/DSC_0240.jpg",
    "name": "DSC_0240",
    "category": "Birds",
    "width": 6000,
    "height": 4000
  },
  {
    "image": "/Images/DSC_0256-DeNoiseAI-clear.jpg",
    "name": "DSC_0256-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2999,
    "height": 3749
  },
  {
    "image": "/Images/DSC_0260-DeNoiseAI-denoise.jpg",
    "name": "DSC_0260-DeNoiseAI-denoise",
    "category": "Birds",
    "width": 3564,
    "height": 2462
  },
  {
    "image": "/Images/DSC_0269 (1).jpg",
    "name": "DSC_0269 (1)",
    "category": "Birds",
    "width": 1676,
    "height": 2096
  },
  {
    "image": "/Images/DSC_0269.jpg",
    "name": "DSC_0269",
    "category": "Birds",
    "width": 2988,
    "height": 2485
  },
  {
    "image": "/Images/DSC_0285.jpg",
    "name": "DSC_0285",
    "category": "Places & creative",
    "width": 4000,
    "height": 6000
  },
  {
    "image": "/Images/DSC_0290.jpg",
    "name": "DSC_0290",
    "category": "Portraits",
    "width": 3733,
    "height": 6000
  },
  {
    "image": "/Images/DSC_0297.jpg",
    "name": "DSC_0297",
    "category": "Birds",
    "width": 6000,
    "height": 4000
  },
  {
    "image": "/Images/DSC_0514-DeNoiseAI-clear.jpg",
    "name": "DSC_0514-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2485,
    "height": 3106
  },
  {
    "image": "/Images/DSC_0514.jpg",
    "name": "DSC_0514",
    "category": "Birds",
    "width": 2485,
    "height": 3106
  },
  {
    "image": "/Images/DSC_0589-DeNoiseAI-clear.jpg",
    "name": "DSC_0589-DeNoiseAI-clear",
    "category": "Birds",
    "width": 1486,
    "height": 1857
  },
  {
    "image": "/Images/DSC_0589.jpg",
    "name": "DSC_0589",
    "category": "Birds",
    "width": 1486,
    "height": 1857
  },
  {
    "image": "/Images/DSC_0603-DeNoiseAI-clear (1).jpg",
    "name": "DSC_0603-DeNoiseAI-clear (1)",
    "category": "Birds",
    "width": 1831,
    "height": 2289
  },
  {
    "image": "/Images/DSC_0603-DeNoiseAI-clear.jpg",
    "name": "DSC_0603-DeNoiseAI-clear",
    "category": "Birds",
    "width": 1831,
    "height": 2289
  },
  {
    "image": "/Images/DSC_0603.jpg",
    "name": "DSC_0603",
    "category": "Birds",
    "width": 1831,
    "height": 2289
  },
  {
    "image": "/Images/DSC_1083 (1).jpg",
    "name": "DSC_1083 (1)",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_1083.jpg",
    "name": "DSC_1083",
    "category": "Birds",
    "width": 2338,
    "height": 2922
  },
  {
    "image": "/Images/DSC_1119.jpg",
    "name": "DSC_1119",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_1125.jpg",
    "name": "DSC_1125",
    "category": "Portraits",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_1179.jpg",
    "name": "DSC_1179",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_1180.jpg",
    "name": "DSC_1180",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_1308.jpg",
    "name": "DSC_1308",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_1434.jpg",
    "name": "DSC_1434",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_1457.jpg",
    "name": "DSC_1457",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_1468.jpg",
    "name": "DSC_1468",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_1475.jpg",
    "name": "DSC_1475",
    "category": "Portraits",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_1478.jpg",
    "name": "DSC_1478",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_1625 (1).jpg",
    "name": "DSC_1625 (1)",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_1765-DeNoiseAI-clear.jpg",
    "name": "DSC_1765-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_1765.jpg",
    "name": "DSC_1765",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_1775 (1)-DeNoiseAI-clear.jpg",
    "name": "DSC_1775 (1)-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2605,
    "height": 3257
  },
  {
    "image": "/Images/DSC_1775 (1).jpg",
    "name": "DSC_1775 (1)",
    "category": "Birds",
    "width": 2605,
    "height": 3257
  },
  {
    "image": "/Images/DSC_1776.jpg",
    "name": "DSC_1776",
    "category": "Birds",
    "width": 2729,
    "height": 3409
  },
  {
    "image": "/Images/DSC_1793 (1).jpg",
    "name": "DSC_1793 (1)",
    "category": "Birds",
    "width": 3169,
    "height": 3962
  },
  {
    "image": "/Images/DSC_1793.jpg",
    "name": "DSC_1793",
    "category": "Birds",
    "width": 3169,
    "height": 3962
  },
  {
    "image": "/Images/DSC_1806 (1).jpg",
    "name": "DSC_1806 (1)",
    "category": "Birds",
    "width": 2652,
    "height": 3316
  },
  {
    "image": "/Images/DSC_1824 (1).jpg",
    "name": "DSC_1824 (1)",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_1824.jpg",
    "name": "DSC_1824",
    "category": "Birds",
    "width": 2560,
    "height": 3200
  },
  {
    "image": "/Images/DSC_1938-Enhanced-NR (1).jpg",
    "name": "DSC_1938-Enhanced-NR (1)",
    "category": "Birds",
    "width": 3113,
    "height": 2539
  },
  {
    "image": "/Images/DSC_1942-Enhanced-NR.jpg",
    "name": "DSC_1942-Enhanced-NR",
    "category": "Birds",
    "width": 3251,
    "height": 2707
  },
  {
    "image": "/Images/DSC_1953.jpg",
    "name": "DSC_1953",
    "category": "Birds",
    "width": 2785,
    "height": 3481
  },
  {
    "image": "/Images/DSC_1994.jpg",
    "name": "DSC_1994",
    "category": "Birds",
    "width": 2720,
    "height": 3399
  },
  {
    "image": "/Images/DSC_2110 (1)-DeNoiseAI-clear.jpg",
    "name": "DSC_2110 (1)-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3396,
    "height": 2717
  },
  {
    "image": "/Images/DSC_2110 (1).jpg",
    "name": "DSC_2110 (1)",
    "category": "Birds",
    "width": 3396,
    "height": 2717
  },
  {
    "image": "/Images/DSC_2110 (2).jpg",
    "name": "DSC_2110 (2)",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_2110 (3).jpg",
    "name": "DSC_2110 (3)",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_2110-DeNoiseAI-clear.jpg",
    "name": "DSC_2110-DeNoiseAI-clear",
    "category": "Birds",
    "width": 1964,
    "height": 2948
  },
  {
    "image": "/Images/DSC_2110.jpg",
    "name": "DSC_2110",
    "category": "Birds",
    "width": 1964,
    "height": 2948
  },
  {
    "image": "/Images/DSC_2121 (1).jpg",
    "name": "DSC_2121 (1)",
    "category": "Birds",
    "width": 2650,
    "height": 3312
  },
  {
    "image": "/Images/DSC_2121-DeNoiseAI-clear.jpg",
    "name": "DSC_2121-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2650,
    "height": 3312
  },
  {
    "image": "/Images/DSC_2121.jpg",
    "name": "DSC_2121",
    "category": "Birds",
    "width": 2650,
    "height": 3312
  },
  {
    "image": "/Images/DSC_2147-DeNoiseAI-clear.jpg",
    "name": "DSC_2147-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3171,
    "height": 3964
  },
  {
    "image": "/Images/DSC_2147.jpg",
    "name": "DSC_2147",
    "category": "Birds",
    "width": 3171,
    "height": 3964
  },
  {
    "image": "/Images/DSC_2151.jpg",
    "name": "DSC_2151",
    "category": "Birds",
    "width": 2583,
    "height": 3229
  },
  {
    "image": "/Images/DSC_2185 (1).jpg",
    "name": "DSC_2185 (1)",
    "category": "Birds",
    "width": 2351,
    "height": 3017
  },
  {
    "image": "/Images/DSC_2185 (2).jpg",
    "name": "DSC_2185 (2)",
    "category": "Birds",
    "width": 4475,
    "height": 2984
  },
  {
    "image": "/Images/DSC_2185-DeNoiseAI-clear.jpg",
    "name": "DSC_2185-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2351,
    "height": 3017
  },
  {
    "image": "/Images/DSC_2185.jpg",
    "name": "DSC_2185",
    "category": "Birds",
    "width": 2351,
    "height": 3017
  },
  {
    "image": "/Images/DSC_2275.jpg",
    "name": "DSC_2275",
    "category": "Birds",
    "width": 2770,
    "height": 3463
  },
  {
    "image": "/Images/DSC_24671-DeNoiseAI-clear.jpg",
    "name": "DSC_24671-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2949,
    "height": 3545
  },
  {
    "image": "/Images/DSC_2639.jpg",
    "name": "DSC_2639",
    "category": "Birds",
    "width": 2885,
    "height": 3606
  },
  {
    "image": "/Images/DSC_2731-DeNoiseAI-clear.jpg",
    "name": "DSC_2731-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3249,
    "height": 3311
  },
  {
    "image": "/Images/DSC_2731.jpg",
    "name": "DSC_2731",
    "category": "Birds",
    "width": 3249,
    "height": 3311
  },
  {
    "image": "/Images/DSC_2742.jpg",
    "name": "DSC_2742",
    "category": "Birds",
    "width": 2696,
    "height": 3372
  },
  {
    "image": "/Images/DSC_2769.jpg",
    "name": "DSC_2769",
    "category": "Birds",
    "width": 3711,
    "height": 4638
  },
  {
    "image": "/Images/DSC_2771.jpg",
    "name": "DSC_2771",
    "category": "Birds",
    "width": 3165,
    "height": 3955
  },
  {
    "image": "/Images/DSC_2799 (1).jpg",
    "name": "DSC_2799 (1)",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_2799-DeNoiseAI-clear.jpg",
    "name": "DSC_2799-DeNoiseAI-clear",
    "category": "Birds",
    "width": 1929,
    "height": 3051
  },
  {
    "image": "/Images/DSC_2799.jpg",
    "name": "DSC_2799",
    "category": "Birds",
    "width": 1929,
    "height": 3051
  },
  {
    "image": "/Images/DSC_2989.jpg",
    "name": "DSC_2989",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_3018.jpg",
    "name": "DSC_3018",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_3033.jpg",
    "name": "DSC_3033",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_3083.jpg",
    "name": "DSC_3083",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_3297~2.NEF.jpg",
    "name": "DSC_3297~2.NEF",
    "category": "Birds",
    "width": 3712,
    "height": 5044
  },
  {
    "image": "/Images/DSC_3549.jpg",
    "name": "DSC_3549",
    "category": "Portraits",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_3646.jpg",
    "name": "DSC_3646",
    "category": "Birds",
    "width": 2187,
    "height": 2733
  },
  {
    "image": "/Images/DSC_3670-DeNoiseAI-clear.jpg",
    "name": "DSC_3670-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3172,
    "height": 3965
  },
  {
    "image": "/Images/DSC_3676 (1)-DeNoiseAI-clear.jpg",
    "name": "DSC_3676 (1)-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3060,
    "height": 3825
  },
  {
    "image": "/Images/DSC_3676 (1).jpg",
    "name": "DSC_3676 (1)",
    "category": "Birds",
    "width": 3060,
    "height": 3825
  },
  {
    "image": "/Images/DSC_3728-DeNoiseAI-clear.jpg",
    "name": "DSC_3728-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3711,
    "height": 4640
  },
  {
    "image": "/Images/DSC_3765-DeNoiseAI-clear.jpg",
    "name": "DSC_3765-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3228,
    "height": 4035
  },
  {
    "image": "/Images/DSC_3765.jpg",
    "name": "DSC_3765",
    "category": "Birds",
    "width": 3228,
    "height": 4035
  },
  {
    "image": "/Images/DSC_3829-DeNoiseAI-clear.jpg",
    "name": "DSC_3829-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3967,
    "height": 3173
  },
  {
    "image": "/Images/DSC_3829.jpg",
    "name": "DSC_3829",
    "category": "Birds",
    "width": 3967,
    "height": 3173
  },
  {
    "image": "/Images/DSC_3851 (1).jpg",
    "name": "DSC_3851 (1)",
    "category": "Birds",
    "width": 2836,
    "height": 3547
  },
  {
    "image": "/Images/DSC_4279 (1).jpg",
    "name": "DSC_4279 (1)",
    "category": "Birds",
    "width": 3096,
    "height": 4240
  },
  {
    "image": "/Images/DSC_4398.jpg",
    "name": "DSC_4398",
    "category": "Birds",
    "width": 2183,
    "height": 2730
  },
  {
    "image": "/Images/DSC_4443-DeNoiseAI-clear.jpg",
    "name": "DSC_4443-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3130,
    "height": 3913
  },
  {
    "image": "/Images/DSC_4443.jpg",
    "name": "DSC_4443",
    "category": "Birds",
    "width": 3130,
    "height": 3913
  },
  {
    "image": "/Images/DSC_4577 (1).jpg",
    "name": "DSC_4577 (1)",
    "category": "Birds",
    "width": 3331,
    "height": 4312
  },
  {
    "image": "/Images/DSC_4577.jpg",
    "name": "DSC_4577",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_4649 (1).jpg",
    "name": "DSC_4649 (1)",
    "category": "Birds",
    "width": 2980,
    "height": 3726
  },
  {
    "image": "/Images/DSC_4685 (1).jpg",
    "name": "DSC_4685 (1)",
    "category": "Birds",
    "width": 2120,
    "height": 2648
  },
  {
    "image": "/Images/DSC_4685 (2).jpg",
    "name": "DSC_4685 (2)",
    "category": "Birds",
    "width": 3737,
    "height": 3019
  },
  {
    "image": "/Images/DSC_4685.jpg",
    "name": "DSC_4685",
    "category": "Birds",
    "width": 4306,
    "height": 2870
  },
  {
    "image": "/Images/DSC_4790.jpg",
    "name": "DSC_4790",
    "category": "Birds",
    "width": 3711,
    "height": 4640
  },
  {
    "image": "/Images/DSC_4812-DeNoiseAI-clear.jpg",
    "name": "DSC_4812-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3342,
    "height": 4178
  },
  {
    "image": "/Images/DSC_4812.jpg",
    "name": "DSC_4812",
    "category": "Birds",
    "width": 3342,
    "height": 4178
  },
  {
    "image": "/Images/DSC_4813 (1).jpg",
    "name": "DSC_4813 (1)",
    "category": "Birds",
    "width": 2158,
    "height": 2697
  },
  {
    "image": "/Images/DSC_4813.jpg",
    "name": "DSC_4813",
    "category": "Birds",
    "width": 1981,
    "height": 2476
  },
  {
    "image": "/Images/DSC_5294.jpg",
    "name": "DSC_5294",
    "category": "Birds",
    "width": 2301,
    "height": 2877
  },
  {
    "image": "/Images/DSC_5356 (2)-DeNoiseAI-clear.jpg",
    "name": "DSC_5356 (2)-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3114,
    "height": 3392
  },
  {
    "image": "/Images/DSC_5417 (1).jpg",
    "name": "DSC_5417 (1)",
    "category": "Birds",
    "width": 4823,
    "height": 3445
  },
  {
    "image": "/Images/DSC_5417.jpg",
    "name": "DSC_5417",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_5474.jpg",
    "name": "DSC_5474",
    "category": "Birds",
    "width": 2781,
    "height": 3477
  },
  {
    "image": "/Images/DSC_5716.jpg",
    "name": "DSC_5716",
    "category": "Birds",
    "width": 3381,
    "height": 4227
  },
  {
    "image": "/Images/DSC_5722 (1)-DeNoiseAI-clear.jpg",
    "name": "DSC_5722 (1)-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3212,
    "height": 4016
  },
  {
    "image": "/Images/DSC_5722 (1).jpg",
    "name": "DSC_5722 (1)",
    "category": "Birds",
    "width": 3212,
    "height": 4016
  },
  {
    "image": "/Images/DSC_5760.jpg",
    "name": "DSC_5760",
    "category": "Birds",
    "width": 4167,
    "height": 3427
  },
  {
    "image": "/Images/DSC_5892.jpg",
    "name": "DSC_5892",
    "category": "Birds",
    "width": 3371,
    "height": 4215
  },
  {
    "image": "/Images/DSC_5893.jpg",
    "name": "DSC_5893",
    "category": "Birds",
    "width": 3570,
    "height": 4462
  },
  {
    "image": "/Images/DSC_5976.jpg",
    "name": "DSC_5976",
    "category": "Birds",
    "width": 3088,
    "height": 3860
  },
  {
    "image": "/Images/DSC_6029.jpg",
    "name": "DSC_6029",
    "category": "Birds",
    "width": 3296,
    "height": 4120
  },
  {
    "image": "/Images/DSC_6030 (1).jpg",
    "name": "DSC_6030 (1)",
    "category": "Birds",
    "width": 3296,
    "height": 4120
  },
  {
    "image": "/Images/DSC_6036.jpg",
    "name": "DSC_6036",
    "category": "Birds",
    "width": 3296,
    "height": 4120
  },
  {
    "image": "/Images/DSC_6041 (1).jpg",
    "name": "DSC_6041 (1)",
    "category": "Birds",
    "width": 3266,
    "height": 4082
  },
  {
    "image": "/Images/DSC_6041 (2).jpg",
    "name": "DSC_6041 (2)",
    "category": "Birds",
    "width": 3266,
    "height": 4082
  },
  {
    "image": "/Images/DSC_6041.jpg",
    "name": "DSC_6041",
    "category": "Birds",
    "width": 3266,
    "height": 4082
  },
  {
    "image": "/Images/DSC_6110.jpg",
    "name": "DSC_6110",
    "category": "Birds",
    "width": 3120,
    "height": 3900
  },
  {
    "image": "/Images/DSC_6138 (1).jpg",
    "name": "DSC_6138 (1)",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_6138.jpg",
    "name": "DSC_6138",
    "category": "Birds",
    "width": 2920,
    "height": 3446
  },
  {
    "image": "/Images/DSC_6146 (1).jpg",
    "name": "DSC_6146 (1)",
    "category": "Birds",
    "width": 3339,
    "height": 4173
  },
  {
    "image": "/Images/DSC_6146.jpg",
    "name": "DSC_6146",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_6278.jpg",
    "name": "DSC_6278",
    "category": "Birds",
    "width": 3458,
    "height": 4323
  },
  {
    "image": "/Images/DSC_6285.jpg",
    "name": "DSC_6285",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_6403.jpg",
    "name": "DSC_6403",
    "category": "Birds",
    "width": 3324,
    "height": 4155
  },
  {
    "image": "/Images/DSC_6409.jpg",
    "name": "DSC_6409",
    "category": "Birds",
    "width": 3324,
    "height": 4155
  },
  {
    "image": "/Images/DSC_7090-DeNoiseAI-clear.jpg",
    "name": "DSC_7090-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3123,
    "height": 4281
  },
  {
    "image": "/Images/DSC_7090.jpg",
    "name": "DSC_7090",
    "category": "Birds",
    "width": 3123,
    "height": 4281
  },
  {
    "image": "/Images/DSC_7142-DeNoiseAI-clear.jpg",
    "name": "DSC_7142-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3027,
    "height": 3784
  },
  {
    "image": "/Images/DSC_7142.jpg",
    "name": "DSC_7142",
    "category": "Birds",
    "width": 3027,
    "height": 3784
  },
  {
    "image": "/Images/DSC_7404-DeNoiseAI-clear.jpg",
    "name": "DSC_7404-DeNoiseAI-clear",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_7404.jpg",
    "name": "DSC_7404",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_7410-DeNoiseAI-clear.jpg",
    "name": "DSC_7410-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2435,
    "height": 3044
  },
  {
    "image": "/Images/DSC_7410.jpg",
    "name": "DSC_7410",
    "category": "Birds",
    "width": 2435,
    "height": 3044
  },
  {
    "image": "/Images/DSC_7501.jpg",
    "name": "DSC_7501",
    "category": "Birds",
    "width": 3331,
    "height": 4164
  },
  {
    "image": "/Images/DSC_7568 (1).jpg",
    "name": "DSC_7568 (1)",
    "category": "Birds",
    "width": 3823,
    "height": 3711
  },
  {
    "image": "/Images/DSC_7568 (2).jpg",
    "name": "DSC_7568 (2)",
    "category": "Birds",
    "width": 5071,
    "height": 3712
  },
  {
    "image": "/Images/DSC_7576 (1).jpg",
    "name": "DSC_7576 (1)",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_7576-DeNoiseAI-denoise.jpg",
    "name": "DSC_7576-DeNoiseAI-denoise",
    "category": "Birds",
    "width": 2982,
    "height": 3728
  },
  {
    "image": "/Images/DSC_7576.jpg",
    "name": "DSC_7576",
    "category": "Birds",
    "width": 2982,
    "height": 3728
  },
  {
    "image": "/Images/DSC_7687 (1).jpg",
    "name": "DSC_7687 (1)",
    "category": "Birds",
    "width": 1478,
    "height": 1848
  },
  {
    "image": "/Images/DSC_7687 (2).jpg",
    "name": "DSC_7687 (2)",
    "category": "Birds",
    "width": 1479,
    "height": 1849
  },
  {
    "image": "/Images/DSC_7687 (3).jpg",
    "name": "DSC_7687 (3)",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_7687 (4).jpg",
    "name": "DSC_7687 (4)",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_7687.jpg",
    "name": "DSC_7687",
    "category": "Birds",
    "width": 2047,
    "height": 2558
  },
  {
    "image": "/Images/DSC_7728-DeNoiseAI-clear.jpg",
    "name": "DSC_7728-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2644,
    "height": 3306
  },
  {
    "image": "/Images/DSC_7733 (1)-DeNoiseAI-clear.jpg",
    "name": "DSC_7733 (1)-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2555,
    "height": 3193
  },
  {
    "image": "/Images/DSC_7880.jpg",
    "name": "DSC_7880",
    "category": "Birds",
    "width": 2678,
    "height": 3348
  },
  {
    "image": "/Images/DSC_7916 (1).jpg",
    "name": "DSC_7916 (1)",
    "category": "Birds",
    "width": 1749,
    "height": 2185
  },
  {
    "image": "/Images/DSC_7963.jpg",
    "name": "DSC_7963",
    "category": "Birds",
    "width": 2969,
    "height": 3711
  },
  {
    "image": "/Images/DSC_7969-DeNoiseAI-clear.jpg",
    "name": "DSC_7969-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2587,
    "height": 3234
  },
  {
    "image": "/Images/DSC_7969.jpg",
    "name": "DSC_7969",
    "category": "Birds",
    "width": 2587,
    "height": 3234
  },
  {
    "image": "/Images/DSC_8057.jpg",
    "name": "DSC_8057",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_8080 (1).jpg",
    "name": "DSC_8080 (1)",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_8080-DeNoiseAI-clear.jpg",
    "name": "DSC_8080-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2953,
    "height": 3438
  },
  {
    "image": "/Images/DSC_8080.jpg",
    "name": "DSC_8080",
    "category": "Birds",
    "width": 2953,
    "height": 3438
  },
  {
    "image": "/Images/DSC_8178-DeNoiseAI-clear.jpg",
    "name": "DSC_8178-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2717,
    "height": 3397
  },
  {
    "image": "/Images/DSC_8178.jpg",
    "name": "DSC_8178",
    "category": "Birds",
    "width": 2717,
    "height": 3397
  },
  {
    "image": "/Images/DSC_8194 (1).jpg",
    "name": "DSC_8194 (1)",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_8194.jpg",
    "name": "DSC_8194",
    "category": "Birds",
    "width": 3711,
    "height": 4640
  },
  {
    "image": "/Images/DSC_8213.jpg",
    "name": "DSC_8213",
    "category": "Birds",
    "width": 3321,
    "height": 4151
  },
  {
    "image": "/Images/DSC_8216.jpg",
    "name": "DSC_8216",
    "category": "Mammals",
    "width": 3235,
    "height": 4045
  },
  {
    "image": "/Images/DSC_8244.jpg",
    "name": "DSC_8244",
    "category": "Birds",
    "width": 2939,
    "height": 3674
  },
  {
    "image": "/Images/DSC_8258 (1).jpg",
    "name": "DSC_8258 (1)",
    "category": "Reptiles",
    "width": 3394,
    "height": 4189
  },
  {
    "image": "/Images/DSC_8258-DeNoiseAI-clear (1).jpg",
    "name": "DSC_8258-DeNoiseAI-clear (1)",
    "category": "Birds",
    "width": 3394,
    "height": 4189
  },
  {
    "image": "/Images/DSC_8258-DeNoiseAI-clear.jpg",
    "name": "DSC_8258-DeNoiseAI-clear",
    "category": "Reptiles",
    "width": 3710,
    "height": 4639
  },
  {
    "image": "/Images/DSC_8258.jpg",
    "name": "DSC_8258",
    "category": "Reptiles",
    "width": 3710,
    "height": 4639
  },
  {
    "image": "/Images/DSC_8267 (1).jpg",
    "name": "DSC_8267 (1)",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_8267-DeNoiseAI-clear.jpg",
    "name": "DSC_8267-DeNoiseAI-clear",
    "category": "Birds",
    "width": 3592,
    "height": 4347
  },
  {
    "image": "/Images/DSC_8267.jpg",
    "name": "DSC_8267",
    "category": "Birds",
    "width": 3592,
    "height": 4347
  },
  {
    "image": "/Images/DSC_8273.jpg",
    "name": "DSC_8273",
    "category": "Birds",
    "width": 2910,
    "height": 3638
  },
  {
    "image": "/Images/DSC_8329.jpg",
    "name": "DSC_8329",
    "category": "Birds",
    "width": 3126,
    "height": 3907
  },
  {
    "image": "/Images/DSC_8482.jpg",
    "name": "DSC_8482",
    "category": "Birds",
    "width": 2968,
    "height": 3711
  },
  {
    "image": "/Images/DSC_8584.jpg",
    "name": "DSC_8584",
    "category": "Birds",
    "width": 3527,
    "height": 4409
  },
  {
    "image": "/Images/DSC_8661-DeNoiseAI-clear.jpg",
    "name": "DSC_8661-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2230,
    "height": 2788
  },
  {
    "image": "/Images/DSC_8661.jpg",
    "name": "DSC_8661",
    "category": "Birds",
    "width": 2230,
    "height": 2788
  },
  {
    "image": "/Images/DSC_9044.jpg",
    "name": "DSC_9044",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_9056-DeNoiseAI-clear.jpg",
    "name": "DSC_9056-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2356,
    "height": 2945
  },
  {
    "image": "/Images/DSC_9056.jpg",
    "name": "DSC_9056",
    "category": "Birds",
    "width": 2356,
    "height": 2945
  },
  {
    "image": "/Images/DSC_9067.jpg",
    "name": "DSC_9067",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/DSC_9113 (1).jpg",
    "name": "DSC_9113 (1)",
    "category": "Birds",
    "width": 4898,
    "height": 3712
  },
  {
    "image": "/Images/DSC_9113 (2).jpg",
    "name": "DSC_9113 (2)",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_9113 (3).jpg",
    "name": "DSC_9113 (3)",
    "category": "Birds",
    "width": 3430,
    "height": 3430
  },
  {
    "image": "/Images/DSC_9113 (4).jpg",
    "name": "DSC_9113 (4)",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_9113.jpg",
    "name": "DSC_9113",
    "category": "Birds",
    "width": 3879,
    "height": 3506
  },
  {
    "image": "/Images/DSC_9249.jpg",
    "name": "DSC_9249",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_9250 (1).jpg",
    "name": "DSC_9250 (1)",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_9250.jpg",
    "name": "DSC_9250",
    "category": "Birds",
    "width": 2970,
    "height": 3712
  },
  {
    "image": "/Images/DSC_9385.jpg",
    "name": "DSC_9385",
    "category": "Birds",
    "width": 2550,
    "height": 3188
  },
  {
    "image": "/Images/DSC_9704 (1).jpg",
    "name": "DSC_9704 (1)",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_9704-DeNoiseAI-clear.jpg",
    "name": "DSC_9704-DeNoiseAI-clear",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_9704.jpg",
    "name": "DSC_9704",
    "category": "Birds",
    "width": 5568,
    "height": 3712
  },
  {
    "image": "/Images/DSC_9768-DeNoiseAI-clear.jpg",
    "name": "DSC_9768-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2122,
    "height": 2653
  },
  {
    "image": "/Images/DSC_9768.jpg",
    "name": "DSC_9768",
    "category": "Birds",
    "width": 2122,
    "height": 2653
  },
  {
    "image": "/Images/DSC_9777 (1)-DeNoiseAI-clear.jpg",
    "name": "DSC_9777 (1)-DeNoiseAI-clear",
    "category": "Birds",
    "width": 2536,
    "height": 3170
  },
  {
    "image": "/Images/DSC_9777 (1).jpg",
    "name": "DSC_9777 (1)",
    "category": "Birds",
    "width": 2536,
    "height": 3170
  },
  {
    "image": "/Images/DSC_9863 (2).jpg",
    "name": "DSC_9863 (2)",
    "category": "Birds",
    "width": 2815,
    "height": 3519
  },
  {
    "image": "/Images/DSC_9863.jpg",
    "name": "DSC_9863",
    "category": "Birds",
    "width": 3712,
    "height": 5568
  },
  {
    "image": "/Images/Hitube_5vpzoA0HsL_2025_10_10_23_52_35.jpg",
    "name": "Hitube_5vpzoA0HsL_2025_10_10_23_52_35",
    "category": "Insects",
    "width": 1280,
    "height": 960
  },
  {
    "image": "/Images/IMG20250813151310 (1).jpg",
    "name": "IMG20250813151310 (1)",
    "category": "Places & creative",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/IMG20250813151310 (2).jpg",
    "name": "IMG20250813151310 (2)",
    "category": "Places & creative",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/IMG20250813151310.jpg",
    "name": "IMG20250813151310",
    "category": "Places & creative",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/IMG_20250701_214143.jpg",
    "name": "IMG_20250701_214143",
    "category": "Birds",
    "width": 3268,
    "height": 4088
  },
  {
    "image": "/Images/IMG_20250701_214549 (1).jpg",
    "name": "IMG_20250701_214549 (1)",
    "category": "Birds",
    "width": 2724,
    "height": 3792
  },
  {
    "image": "/Images/IMG_20250810_160049.jpg",
    "name": "IMG_20250810_160049",
    "category": "Portraits",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/IMG_20251009_185624.jpg",
    "name": "IMG_20251009_185624",
    "category": "Birds",
    "width": 2980,
    "height": 3728
  },
  {
    "image": "/Images/IMG_20251020_195649.jpg",
    "name": "IMG_20251020_195649",
    "category": "Places & creative",
    "width": 4096,
    "height": 3072
  },
  {
    "image": "/Images/IMG_20251021_203444 (1).jpg",
    "name": "IMG_20251021_203444 (1)",
    "category": "Places & creative",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/IMG_20251021_203444 (2).jpg",
    "name": "IMG_20251021_203444 (2)",
    "category": "Places & creative",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/IMG_20251022_190258 (1).jpg",
    "name": "IMG_20251022_190258 (1)",
    "category": "Places & creative",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/IMG_20251022_190258.jpg",
    "name": "IMG_20251022_190258",
    "category": "Places & creative",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/IMG_20251023_183034.jpg",
    "name": "IMG_20251023_183034",
    "category": "Places & creative",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/IMG_20260820_081443.jpg",
    "name": "IMG_20260820_081443",
    "category": "Places & creative",
    "width": 1536,
    "height": 2048
  },
  {
    "image": "/Images/Red Munia-DeNoiseAI-clear.jpg",
    "name": "Red Munia-DeNoiseAI-clear",
    "category": "Birds",
    "width": 1479,
    "height": 1849
  },
  {
    "image": "/Images/Sagnik bera_20240706_204957_0000-DeNoiseAI-clear.png",
    "name": "Sagnik bera_20240706_204957_0000-DeNoiseAI-clear",
    "category": "Birds",
    "width": 4765,
    "height": 3998
  },
  {
    "image": "/Images/Sagnik/sagnik1.jpg",
    "name": "sagnik1",
    "category": "Portraits",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/Sagnik/sagnik2.jpg",
    "name": "sagnik2",
    "category": "Portraits",
    "width": 4000,
    "height": 6000
  },
  {
    "image": "/Images/Sagnik/sagnik3.jpg",
    "name": "sagnik3",
    "category": "Portraits",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/Sagnik/sagnik4.jpg",
    "name": "sagnik4",
    "category": "Portraits",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/Sagnik/sagnik5.jpg",
    "name": "sagnik5",
    "category": "Portraits",
    "width": 3072,
    "height": 4096
  },
  {
    "image": "/Images/Sagnik/sagnik6.jpg",
    "name": "sagnik6",
    "category": "Portraits",
    "width": 3072,
    "height": 4096
  }
];
export const importedMedia: Work[] = [
  {
    "image": "/Images/Media-Imports/17865570696435572.jpg",
    "name": "17865570696435572",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17871247434507500.jpg",
    "name": "17871247434507500",
    "category": "Birds",
    "width": 1440,
    "height": 1199,
    "title": "Osprey - 17871247434507500",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/17875700481683515.jpg",
    "name": "17875700481683515",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17878100538528157.jpg",
    "name": "17878100538528157",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17879853795425861.jpg",
    "name": "17879853795425861",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17889702582569342.jpg",
    "name": "17889702582569342",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17893998399664588.jpg",
    "name": "17893998399664588",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17898085695304666.jpg",
    "name": "17898085695304666",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
  },
  {
    "image": "/Images/Media-Imports/17899411218351826.jpg",
    "name": "17899411218351826",
    "category": "Birds",
    "width": 1440,
    "height": 1174,
    "title": "Osprey - 17899411218351826",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/17900950383341455.jpg",
    "name": "17900950383341455",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17901075447549314.jpg",
    "name": "17901075447549314",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17915532162436997.jpg",
    "name": "17915532162436997",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17925053877295559.jpg",
    "name": "17925053877295559",
    "category": "Birds",
    "width": 1440,
    "height": 1184,
  },
  {
    "image": "/Images/Media-Imports/17925904302292842.jpg",
    "name": "17925904302292842",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17940492585319958.jpg",
    "name": "17940492585319958",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17953073880247780.jpg",
    "name": "17953073880247780",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17953487775012615.jpg",
    "name": "17953487775012615",
    "category": "Birds",
    "width": 1440,
    "height": 1743,
  },
  {
    "image": "/Images/Media-Imports/17962131711216003.jpg",
    "name": "17962131711216003",
    "category": "Places & creative",
    "width": 1080,
    "height": 810,
  },
  {
    "image": "/Images/Media-Imports/17962257693177714.jpg",
    "name": "17962257693177714",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17972129181095328.jpg",
    "name": "17972129181095328",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
    "title": "Osprey - 17972129181095328",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/17976261795075914.jpg",
    "name": "17976261795075914",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
  },
  {
    "image": "/Images/Media-Imports/17976905438928409.jpg",
    "name": "17976905438928409",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
  },
  {
    "image": "/Images/Media-Imports/17977560339091521.jpg",
    "name": "17977560339091521",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17983203051107314.jpg",
    "name": "17983203051107314",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17994976112858188.jpg",
    "name": "17994976112858188",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17997204611807022.jpg",
    "name": "17997204611807022",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18001600139785555.jpg",
    "name": "18001600139785555",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18002416073889274.jpg",
    "name": "18002416073889274",
    "category": "Birds",
    "width": 1440,
    "height": 1467,
  },
  {
    "image": "/Images/Media-Imports/18004492490850761.jpg",
    "name": "18004492490850761",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18005755043810840.jpg",
    "name": "18005755043810840",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18006558356697252.jpg",
    "name": "18006558356697252",
    "category": "Birds",
    "width": 1350,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18015553958681973.jpg",
    "name": "18015553958681973",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18018038657857027.jpg",
    "name": "18018038657857027",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
    "title": "Osprey - 18018038657857027",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18021154514908759.jpg",
    "name": "18021154514908759",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18032514812835757.jpg",
    "name": "18032514812835757",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18036644024837788.jpg",
    "name": "18036644024837788",
    "category": "Places & creative",
    "width": 1080,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18046514840651443.jpg",
    "name": "18046514840651443",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18055150142775822.jpg",
    "name": "18055150142775822",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18071342501424916.jpg",
    "name": "18071342501424916",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18071399486225003.jpg",
    "name": "18071399486225003",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18074004233263503.jpg",
    "name": "18074004233263503",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18076803824437570.jpg",
    "name": "18076803824437570",
    "category": "Birds",
    "width": 1440,
    "height": 1174,
    "title": "Osprey - 18076803824437570",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18077385299380562.jpg",
    "name": "18077385299380562",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
  },
  {
    "image": "/Images/Media-Imports/18085997444212613.jpg",
    "name": "18085997444212613",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18088922402167922.jpg",
    "name": "18088922402167922",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18091019459113857.jpg",
    "name": "18091019459113857",
    "category": "Insects",
    "width": 1440,
    "height": 1569,
  },
  {
    "image": "/Images/Media-Imports/18093564872079826.jpg",
    "name": "18093564872079826",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18098280338078583.jpg",
    "name": "18098280338078583",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18101046530270627.jpg",
    "name": "18101046530270627",
    "category": "Places & creative",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18101816632902027.jpg",
    "name": "18101816632902027",
    "category": "Birds",
    "width": 1440,
    "height": 1801,
  },
  {
    "image": "/Images/Media-Imports/18102133568295905.jpg",
    "name": "18102133568295905",
    "category": "Birds",
    "width": 1439,
    "height": 1184,
  },
  {
    "image": "/Images/Media-Imports/18102312598673280.jpg",
    "name": "18102312598673280",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18108419990050383.jpg",
    "name": "18108419990050383",
    "category": "Birds",
    "width": 1440,
    "height": 1798,
  },
  {
    "image": "/Images/Media-Imports/18109315490112463.jpg",
    "name": "18109315490112463",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18110022754641103.jpg",
    "name": "18110022754641103",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18110731525972224.jpg",
    "name": "18110731525972224",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
  },
  {
    "image": "/Images/Media-Imports/18116388976477180.jpg",
    "name": "18116388976477180",
    "category": "Birds",
    "width": 1440,
    "height": 1743,
  },
  {
    "image": "/Images/Media-Imports/18116870959928277.jpg",
    "name": "18116870959928277",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18117100219915507.jpg",
    "name": "18117100219915507",
    "category": "Portraits",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18119018605811710.jpg",
    "name": "18119018605811710",
    "category": "Places & creative",
    "width": 1440,
    "height": 1080,
  },
  {
    "image": "/Images/Media-Imports/18122482573838776.jpg",
    "name": "18122482573838776",
    "category": "Birds",
    "width": 1440,
    "height": 1921,
  },
  {
    "image": "/Images/Media-Imports/18126015724513350.jpg",
    "name": "18126015724513350",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18127945900673762.jpg",
    "name": "18127945900673762",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
    "title": "Osprey - 18127945900673762",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18129971893649329.jpg",
    "name": "18129971893649329",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18130016239704980.jpg",
    "name": "18130016239704980",
    "category": "Birds",
    "width": 810,
    "height": 1080,
  },
  {
    "image": "/Images/Media-Imports/18133702033527625.jpg",
    "name": "18133702033527625",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18133990072594407.jpg",
    "name": "18133990072594407",
    "category": "Birds",
    "width": 1440,
    "height": 1801,
  },
  {
    "image": "/Images/Media-Imports/18136088470456589.jpg",
    "name": "18136088470456589",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18136217098720832.jpg",
    "name": "18136217098720832",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18141013324572196.jpg",
    "name": "18141013324572196",
    "category": "Birds",
    "width": 1440,
    "height": 1921,
  },
  {
    "image": "/Images/Media-Imports/18142456393458291.jpg",
    "name": "18142456393458291",
    "category": "Birds",
    "width": 1440,
    "height": 1199,
    "title": "Osprey - 18142456393458291",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18146522146546044.jpg",
    "name": "18146522146546044",
    "category": "Portraits",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18161502046461859.jpg",
    "name": "18161502046461859",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18162238735480251.jpg",
    "name": "18162238735480251",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18168170887386460.jpg",
    "name": "18168170887386460",
    "category": "Birds",
    "width": 1440,
    "height": 1798,
  },
  {
    "image": "/Images/Media-Imports/18168178207418749.jpg",
    "name": "18168178207418749",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18181900741418337.jpg",
    "name": "18181900741418337",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18185814064397273.jpg",
    "name": "18185814064397273",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18209887138360470.jpg",
    "name": "18209887138360470",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18211696450322119.jpg",
    "name": "18211696450322119",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18225625975324276.jpg",
    "name": "18225625975324276",
    "category": "Birds",
    "width": 1440,
    "height": 1921,
  },
  {
    "image": "/Images/Media-Imports/18307861702268284.jpg",
    "name": "18307861702268284",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18330241435264595.jpg",
    "name": "18330241435264595",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18371406421231519.jpg",
    "name": "18371406421231519",
    "category": "Birds",
    "width": 1440,
    "height": 1302,
  },
  {
    "image": "/Images/Media-Imports/18389613781207613.jpg",
    "name": "18389613781207613",
    "category": "Mammals",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18405223396087042.jpg",
    "name": "18405223396087042",
    "category": "Portraits",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18419610076146937.jpg",
    "name": "18419610076146937",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
    "title": "Osprey - 18419610076146937",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18463885177112556.jpg",
    "name": "18463885177112556",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18466548859137241.jpg",
    "name": "18466548859137241",
    "category": "Birds",
    "width": 1080,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18557341768000788.jpg",
    "name": "18557341768000788",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17865325644646659.jpg",
    "name": "17865325644646659",
    "category": "Birds",
    "width": 1440,
    "height": 1302,
  },
  {
    "image": "/Images/Media-Imports/17873326938681771.jpg",
    "name": "17873326938681771",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17876195667592239.jpg",
    "name": "17876195667592239",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17892429408558540.jpg",
    "name": "17892429408558540",
    "category": "Birds",
    "width": 1440,
    "height": 1801,
  },
  {
    "image": "/Images/Media-Imports/17894850390387853.jpg",
    "name": "17894850390387853",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17896430202507831.jpg",
    "name": "17896430202507831",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17901938184484198.jpg",
    "name": "17901938184484198",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17909097783459715.jpg",
    "name": "17909097783459715",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17909154471281242.jpg",
    "name": "17909154471281242",
    "category": "Places & creative",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17915347173260828.jpg",
    "name": "17915347173260828",
    "category": "Places & creative",
    "width": 1080,
    "height": 810,
  },
  {
    "image": "/Images/Media-Imports/17916046161429206.jpg",
    "name": "17916046161429206",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17919061134143886.jpg",
    "name": "17919061134143886",
    "category": "Birds",
    "width": 1440,
    "height": 1184,
  },
  {
    "image": "/Images/Media-Imports/17925640953390277.jpg",
    "name": "17925640953390277",
    "category": "Portraits",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17933276751299919.jpg",
    "name": "17933276751299919",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17933341077301308.jpg",
    "name": "17933341077301308",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17948729595192641.jpg",
    "name": "17948729595192641",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17951491104269692.jpg",
    "name": "17951491104269692",
    "category": "Places & creative",
    "width": 1080,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17960235447191023.jpg",
    "name": "17960235447191023",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17965282368175686.jpg",
    "name": "17965282368175686",
    "category": "Birds",
    "width": 1440,
    "height": 1921,
  },
  {
    "image": "/Images/Media-Imports/17972443380154819.jpg",
    "name": "17972443380154819",
    "category": "Birds",
    "width": 810,
    "height": 1080,
  },
  {
    "image": "/Images/Media-Imports/17974842261120396.jpg",
    "name": "17974842261120396",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17981680569027049.jpg",
    "name": "17981680569027049",
    "category": "Birds",
    "width": 1440,
    "height": 1174,
    "title": "Osprey - 17981680569027049",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/17983389366113718.jpg",
    "name": "17983389366113718",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17995685417801857.jpg",
    "name": "17995685417801857",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
    "title": "Osprey - 17995685417801857",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18000610049837673.jpg",
    "name": "18000610049837673",
    "category": "Birds",
    "width": 1440,
    "height": 940,
  },
  {
    "image": "/Images/Media-Imports/18003894593986773.jpg",
    "name": "18003894593986773",
    "category": "Birds",
    "width": 1440,
    "height": 1798,
  },
  {
    "image": "/Images/Media-Imports/18004257173780124.jpg",
    "name": "18004257173780124",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18004323860762684.jpg",
    "name": "18004323860762684",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18012558335942073.jpg",
    "name": "18012558335942073",
    "category": "Portraits",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18024009263687520.jpg",
    "name": "18024009263687520",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18046757519777465.jpg",
    "name": "18046757519777465",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
  },
  {
    "image": "/Images/Media-Imports/18049894118507875.jpg",
    "name": "18049894118507875",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18051736571620610.jpg",
    "name": "18051736571620610",
    "category": "Places & creative",
    "width": 1440,
    "height": 1080,
  },
  {
    "image": "/Images/Media-Imports/18052094351569115.jpg",
    "name": "18052094351569115",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18052711190571104.jpg",
    "name": "18052711190571104",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
    "title": "Osprey - 18052711190571104",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18053576852794541.jpg",
    "name": "18053576852794541",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18057663821765441.jpg",
    "name": "18057663821765441",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18058350452553443.jpg",
    "name": "18058350452553443",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18060983198309008.jpg",
    "name": "18060983198309008",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18062100179765749.jpg",
    "name": "18062100179765749",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18064361324583664.jpg",
    "name": "18064361324583664",
    "category": "Mammals",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18064755980568685.jpg",
    "name": "18064755980568685",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18068111825711837.jpg",
    "name": "18068111825711837",
    "category": "Insects",
    "width": 1440,
    "height": 1569,
  },
  {
    "image": "/Images/Media-Imports/18069944672309799.jpg",
    "name": "18069944672309799",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18070088933492102.jpg",
    "name": "18070088933492102",
    "category": "Birds",
    "width": 1153,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18071067974573791.jpg",
    "name": "18071067974573791",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18072229097432293.jpg",
    "name": "18072229097432293",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18072342128217885.jpg",
    "name": "18072342128217885",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18076646525416775.jpg",
    "name": "18076646525416775",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18080350058227592.jpg",
    "name": "18080350058227592",
    "category": "Birds",
    "width": 1440,
    "height": 1801,
  },
  {
    "image": "/Images/Media-Imports/18081350501705650.jpg",
    "name": "18081350501705650",
    "category": "Birds",
    "width": 576,
    "height": 720,
  },
  {
    "image": "/Images/Media-Imports/18082205803908421.jpg",
    "name": "18082205803908421",
    "category": "Birds",
    "width": 1440,
    "height": 1199,
    "title": "Osprey - 18082205803908421",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18083715947236936.jpg",
    "name": "18083715947236936",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
    "title": "Osprey - 18083715947236936",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18085094363004338.jpg",
    "name": "18085094363004338",
    "category": "Places & creative",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18086176334209952.jpg",
    "name": "18086176334209952",
    "category": "Portraits",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18086789465226206.jpg",
    "name": "18086789465226206",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18088319558185345.jpg",
    "name": "18088319558185345",
    "category": "Places & creative",
    "width": 540,
    "height": 720,
  },
  {
    "image": "/Images/Media-Imports/18088364906695322.jpg",
    "name": "18088364906695322",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18088491161231797.jpg",
    "name": "18088491161231797",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18093968792205339.jpg",
    "name": "18093968792205339",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18093968846278848.jpg",
    "name": "18093968846278848",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
    "title": "Osprey - 18093968846278848",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18095018237239245.jpg",
    "name": "18095018237239245",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18097373293752617.jpg",
    "name": "18097373293752617",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18098088962248234.jpg",
    "name": "18098088962248234",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18099068600191100.jpg",
    "name": "18099068600191100",
    "category": "Portraits",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18101142224249398.jpg",
    "name": "18101142224249398",
    "category": "Portraits",
    "width": 540,
    "height": 720,
  },
  {
    "image": "/Images/Media-Imports/18101450939622089.jpg",
    "name": "18101450939622089",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18103647676804298.jpg",
    "name": "18103647676804298",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18105830317833005.jpg",
    "name": "18105830317833005",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18106749649796454.jpg",
    "name": "18106749649796454",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18107035937115443.jpg",
    "name": "18107035937115443",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18107181913948152.jpg",
    "name": "18107181913948152",
    "category": "Birds",
    "width": 1440,
    "height": 1798,
  },
  {
    "image": "/Images/Media-Imports/18108375695013884.jpg",
    "name": "18108375695013884",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18108470156072796.jpg",
    "name": "18108470156072796",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18108805966841232.jpg",
    "name": "18108805966841232",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
    "title": "Osprey - 18108805966841232",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18110195810013312.jpg",
    "name": "18110195810013312",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18110882914999967.jpg",
    "name": "18110882914999967",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18112128691974419.jpg",
    "name": "18112128691974419",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18113331127770849.jpg",
    "name": "18113331127770849",
    "category": "Places & creative",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18113695366978503.jpg",
    "name": "18113695366978503",
    "category": "Birds",
    "width": 540,
    "height": 720,
  },
  {
    "image": "/Images/Media-Imports/18114939331549223.jpg",
    "name": "18114939331549223",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18115156070315546.jpg",
    "name": "18115156070315546",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18117029158754289.jpg",
    "name": "18117029158754289",
    "category": "Birds",
    "width": 1080,
    "height": 1350,
  },
  {
    "image": "/Images/Media-Imports/18117692605903449.jpg",
    "name": "18117692605903449",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18126500320751779.jpg",
    "name": "18126500320751779",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18126543832737076.jpg",
    "name": "18126543832737076",
    "category": "Places & creative",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18126951088781603.jpg",
    "name": "18126951088781603",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18128585662671142.jpg",
    "name": "18128585662671142",
    "category": "Birds",
    "width": 1440,
    "height": 1921,
  },
  {
    "image": "/Images/Media-Imports/18131422966649701.jpg",
    "name": "18131422966649701",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18132658777735183.jpg",
    "name": "18132658777735183",
    "category": "Places & creative",
    "width": 1080,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18142828732564018.jpg",
    "name": "18142828732564018",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
    "title": "Osprey - 18142828732564018",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18145754701535971.jpg",
    "name": "18145754701535971",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18157535029489296.jpg",
    "name": "18157535029489296",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18159954961416023.jpg",
    "name": "18159954961416023",
    "category": "Birds",
    "width": 1440,
    "height": 1801,
  },
  {
    "image": "/Images/Media-Imports/18171056047443300.jpg",
    "name": "18171056047443300",
    "category": "Portraits",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18174804769362658.jpg",
    "name": "18174804769362658",
    "category": "Birds",
    "width": 1440,
    "height": 1743,
  },
  {
    "image": "/Images/Media-Imports/18197860399368254.jpg",
    "name": "18197860399368254",
    "category": "Birds",
    "width": 707,
    "height": 720,
  },
  {
    "image": "/Images/Media-Imports/18212257156344881.jpg",
    "name": "18212257156344881",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
    "title": "Osprey - 18212257156344881",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18225068566328791.jpg",
    "name": "18225068566328791",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18328122754249234.jpg",
    "name": "18328122754249234",
    "category": "Birds",
    "width": 1440,
    "height": 1798,
  },
  {
    "image": "/Images/Media-Imports/18364070236232927.jpg",
    "name": "18364070236232927",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18414676135176200.jpg",
    "name": "18414676135176200",
    "category": "Birds",
    "width": 1440,
    "height": 1163,
  },
  {
    "image": "/Images/Media-Imports/18424801714149247.jpg",
    "name": "18424801714149247",
    "category": "Places & creative",
    "width": 1080,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18439173346120946.jpg",
    "name": "18439173346120946",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
  },
  {
    "image": "/Images/Media-Imports/18554528725078967.jpg",
    "name": "18554528725078967",
    "category": "Birds",
    "width": 1440,
    "height": 1921,
  },
  {
    "image": "/Images/Media-Imports/18612309229011423.jpg",
    "name": "18612309229011423",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17855045892505239.jpg",
    "name": "17855045892505239",
    "category": "Birds",
    "width": 1440,
    "height": 1743,
  },
  {
    "image": "/Images/Media-Imports/18067415657520748.jpg",
    "name": "18067415657520748",
    "category": "Insects",
    "width": 1440,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18078430085040985.jpg",
    "name": "18078430085040985",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18104019409618966.jpg",
    "name": "18104019409618966",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
  },
  {
    "image": "/Images/Media-Imports/18107468554612943.jpg",
    "name": "18107468554612943",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18123292420512864.jpg",
    "name": "18123292420512864",
    "category": "Birds",
    "width": 1440,
    "height": 1054,
  },
  {
    "image": "/Images/Media-Imports/18156625531397959.jpg",
    "name": "18156625531397959",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18294161053257505.jpg",
    "name": "18294161053257505",
    "category": "Birds",
    "width": 1440,
    "height": 1743,
  },
  {
    "image": "/Images/Media-Imports/17931539895115691.jpg",
    "name": "17931539895115691",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17949281823052353.jpg",
    "name": "17949281823052353",
    "category": "Birds",
    "width": 1439,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18055193327306129.jpg",
    "name": "18055193327306129",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18059373071215315.jpg",
    "name": "18059373071215315",
    "category": "Birds",
    "width": 1309,
    "height": 940,
  },
  {
    "image": "/Images/Media-Imports/18065939402425711.jpg",
    "name": "18065939402425711",
    "category": "Places & creative",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18100117741706518.jpg",
    "name": "18100117741706518",
    "category": "Insects",
    "width": 1439,
    "height": 1301,
  },
  {
    "image": "/Images/Media-Imports/18102038293670844.jpg",
    "name": "18102038293670844",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18121037440472835.jpg",
    "name": "18121037440472835",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18159351223399268.jpg",
    "name": "18159351223399268",
    "category": "Birds",
    "width": 1440,
    "height": 940,
  },
  {
    "image": "/Images/Media-Imports/18207958903312807.jpg",
    "name": "18207958903312807",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18394050658127949.jpg",
    "name": "18394050658127949",
    "category": "Birds",
    "width": 1439,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18546006427017996.jpg",
    "name": "18546006427017996",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/17911538205127646.jpg",
    "name": "17911538205127646",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
    "title": "Osprey - 17911538205127646",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/17967371216842621.jpg",
    "name": "17967371216842621",
    "category": "Birds",
    "width": 1440,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17987302115863687.jpg",
    "name": "17987302115863687",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18012659318803679.jpg",
    "name": "18012659318803679",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18048390323473235.jpg",
    "name": "18048390323473235",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
    "title": "Osprey - 18048390323473235",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18088596169788942.jpg",
    "name": "18088596169788942",
    "category": "Birds",
    "width": 1440,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17870388234520423.jpg",
    "name": "17870388234520423",
    "category": "Birds",
    "width": 1080,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17904602217339733.jpg",
    "name": "17904602217339733",
    "category": "Birds",
    "width": 1122,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17936873889120274.jpg",
    "name": "17936873889120274",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17969800646997691.jpg",
    "name": "17969800646997691",
    "category": "Birds",
    "width": 1440,
    "height": 1199,
    "title": "Osprey - 17969800646997691",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/17985197135926960.jpg",
    "name": "17985197135926960",
    "category": "Birds",
    "width": 1122,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17986459052929703.jpg",
    "name": "17986459052929703",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18011502239666545.jpg",
    "name": "18011502239666545",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18032446490565535.jpg",
    "name": "18032446490565535",
    "category": "Birds",
    "width": 1413,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18082870036934991.jpg",
    "name": "18082870036934991",
    "category": "Birds",
    "width": 1440,
    "height": 1199,
    "title": "Osprey - 18082870036934991",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18088224580858663.jpg",
    "name": "18088224580858663",
    "category": "Birds",
    "width": 1080,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18090068261317892.jpg",
    "name": "18090068261317892",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18090241075990457.jpg",
    "name": "18090241075990457",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18107916889673974.jpg",
    "name": "18107916889673974",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18186845251357094.jpg",
    "name": "18186845251357094",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18296494024272285.jpg",
    "name": "18296494024272285",
    "category": "Birds",
    "width": 1413,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18546985075062387.jpg",
    "name": "18546985075062387",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18003629993849751.jpg",
    "name": "18003629993849751",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18080732900049690.jpg",
    "name": "18080732900049690",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17917201560318341.jpg",
    "name": "17917201560318341",
    "category": "Birds",
    "width": 1440,
    "height": 1801,
  },
  {
    "image": "/Images/Media-Imports/17937488226176169.jpg",
    "name": "17937488226176169",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17943949383135078.jpg",
    "name": "17943949383135078",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18028317137795981.jpg",
    "name": "18028317137795981",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18059923922341511.jpg",
    "name": "18059923922341511",
    "category": "Birds",
    "width": 1440,
    "height": 1174,
    "title": "Osprey - 18059923922341511",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18068347991557541.jpg",
    "name": "18068347991557541",
    "category": "Birds",
    "width": 1440,
    "height": 1467,
  },
  {
    "image": "/Images/Media-Imports/18076750607398804.jpg",
    "name": "18076750607398804",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18091765160115204.jpg",
    "name": "18091765160115204",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18093426098008778.jpg",
    "name": "18093426098008778",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
    "title": "Osprey - 18093426098008778",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18114512503633500.jpg",
    "name": "18114512503633500",
    "category": "Birds",
    "width": 1350,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18357982237225544.jpg",
    "name": "18357982237225544",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18570539977013275.jpg",
    "name": "18570539977013275",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17880007596553012.jpg",
    "name": "17880007596553012",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17887009734472615.jpg",
    "name": "17887009734472615",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17938099656193987.jpg",
    "name": "17938099656193987",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18082514816620917.jpg",
    "name": "18082514816620917",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18086545055366048.jpg",
    "name": "18086545055366048",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18095113265140270.jpg",
    "name": "18095113265140270",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18096194267109091.jpg",
    "name": "18096194267109091",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18100073764960766.jpg",
    "name": "18100073764960766",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18109763266876356.jpg",
    "name": "18109763266876356",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18133133881479573.jpg",
    "name": "18133133881479573",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18387315718094743.jpg",
    "name": "18387315718094743",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18438749263142815.jpg",
    "name": "18438749263142815",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17880200892590399.jpg",
    "name": "17880200892590399",
    "category": "Birds",
    "width": 1440,
    "height": 960,
  },
  {
    "image": "/Images/Media-Imports/17889606516515480.jpg",
    "name": "17889606516515480",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
  },
  {
    "image": "/Images/Media-Imports/17937511971249960.jpg",
    "name": "17937511971249960",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17939267400232887.jpg",
    "name": "17939267400232887",
    "category": "Birds",
    "width": 1440,
    "height": 1799,
  },
  {
    "image": "/Images/Media-Imports/17989681202805914.jpg",
    "name": "17989681202805914",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17998371992955511.jpg",
    "name": "17998371992955511",
    "category": "Birds",
    "width": 1153,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18015338867688303.jpg",
    "name": "18015338867688303",
    "category": "Birds",
    "width": 1151,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18082814552098788.jpg",
    "name": "18082814552098788",
    "category": "Birds",
    "width": 1440,
    "height": 1184,
  },
  {
    "image": "/Images/Media-Imports/18089025223994339.jpg",
    "name": "18089025223994339",
    "category": "Birds",
    "width": 1439,
    "height": 1184,
  },
  {
    "image": "/Images/Media-Imports/18126071875613221.jpg",
    "name": "18126071875613221",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18179969029386375.jpg",
    "name": "18179969029386375",
    "category": "Birds",
    "width": 1440,
    "height": 960,
  },
  {
    "image": "/Images/Media-Imports/18189831958330382.jpg",
    "name": "18189831958330382",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18426606727122395.jpg",
    "name": "18426606727122395",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18592120249061330.jpg",
    "name": "18592120249061330",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/17892588084537152.jpg",
    "name": "17892588084537152",
    "category": "Birds",
    "width": 1440,
    "height": 1163,
  },
  {
    "image": "/Images/Media-Imports/17973270687100767.jpg",
    "name": "17973270687100767",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18094748789204650.jpg",
    "name": "18094748789204650",
    "category": "Birds",
    "width": 1440,
    "height": 1801,
  },
  {
    "image": "/Images/Media-Imports/18103600583088506.jpg",
    "name": "18103600583088506",
    "category": "Birds",
    "width": 1152,
    "height": 1440,
  },
  {
    "image": "/Images/Media-Imports/18097647941245328.jpg",
    "name": "18097647941245328",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18099967661239631.jpg",
    "name": "18099967661239631",
    "category": "Birds",
    "width": 1440,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18118120849885360.jpg",
    "name": "18118120849885360",
    "category": "Birds",
    "width": 1080,
    "height": 1350,
  },
  {
    "image": "/Images/Media-Imports/18086158376654703.jpg",
    "name": "18086158376654703",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18162460714477506.jpg",
    "name": "18162460714477506",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/17895635625609366.jpg",
    "name": "17895635625609366",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18417676651152322.jpg",
    "name": "18417676651152322",
    "category": "Birds",
    "width": 1440,
    "height": 1800,
  },
  {
    "image": "/Images/Media-Imports/18407600773142933.jpg",
    "name": "18407600773142933",
    "category": "Portraits",
    "width": 1080,
    "height": 1080,
  },
  {
    "image": "/Images/Media-Imports/18069601262010478.jpg",
    "name": "18069601262010478",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18084292708945073.jpg",
    "name": "18084292708945073",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18085295020938810.jpg",
    "name": "18085295020938810",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18098197324689127.jpg",
    "name": "18098197324689127",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18105068998626635.jpg",
    "name": "18105068998626635",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18296675206283284.jpg",
    "name": "18296675206283284",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17897815470185885.jpg",
    "name": "17897815470185885",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17906011452279195.jpg",
    "name": "17906011452279195",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17915961336227865.jpg",
    "name": "17915961336227865",
    "category": "Portraits",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/17974489256951809.jpg",
    "name": "17974489256951809",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18006338435661346.jpg",
    "name": "18006338435661346",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18012821633805999.jpg",
    "name": "18012821633805999",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18020395262790099.jpg",
    "name": "18020395262790099",
    "category": "Portraits",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18031706180746949.jpg",
    "name": "18031706180746949",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18077926595173628.jpg",
    "name": "18077926595173628",
    "category": "Birds",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/18092121772809941.jpg",
    "name": "18092121772809941",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18094406083871304.jpg",
    "name": "18094406083871304",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18101166307708790.jpg",
    "name": "18101166307708790",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18138929827460589.jpg",
    "name": "18138929827460589",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18156964051415310.jpg",
    "name": "18156964051415310",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18177083701363180.jpg",
    "name": "18177083701363180",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18537679000024240.jpg",
    "name": "18537679000024240",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17905297938314404.jpg",
    "name": "17905297938314404",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17958389322004879.jpg",
    "name": "17958389322004879",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17966697119990118.jpg",
    "name": "17966697119990118",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18050111939693234.jpg",
    "name": "18050111939693234",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18073393019593742.jpg",
    "name": "18073393019593742",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18074343650362169.jpg",
    "name": "18074343650362169",
    "category": "Portraits",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/18089437636781865.jpg",
    "name": "18089437636781865",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18114362119597161.jpg",
    "name": "18114362119597161",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17858418321585686.jpg",
    "name": "17858418321585686",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17871188049507194.jpg",
    "name": "17871188049507194",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17872297422499645.jpg",
    "name": "17872297422499645",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17884765602426498.jpg",
    "name": "17884765602426498",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17999658458848546.jpg",
    "name": "17999658458848546",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18033797198549930.jpg",
    "name": "18033797198549930",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18037134947526105.jpg",
    "name": "18037134947526105",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18049029542475198.jpg",
    "name": "18049029542475198",
    "category": "Places & creative",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/18055955672367620.jpg",
    "name": "18055955672367620",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18057506570664353.jpg",
    "name": "18057506570664353",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18060325601315749.jpg",
    "name": "18060325601315749",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18062591978558936.jpg",
    "name": "18062591978558936",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18079013942585308.jpg",
    "name": "18079013942585308",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18080830289206305.jpg",
    "name": "18080830289206305",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18085720811032872.jpg",
    "name": "18085720811032872",
    "category": "Portraits",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18091863865807537.jpg",
    "name": "18091863865807537",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18096835537920396.jpg",
    "name": "18096835537920396",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18102729454757307.jpg",
    "name": "18102729454757307",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18124959547558855.jpg",
    "name": "18124959547558855",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18131286391503317.jpg",
    "name": "18131286391503317",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18402577498131949.jpg",
    "name": "18402577498131949",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18549505786031955.jpg",
    "name": "18549505786031955",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18551420437061045.jpg",
    "name": "18551420437061045",
    "category": "Portraits",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18551716804019103.jpg",
    "name": "18551716804019103",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17892183888309497.jpg",
    "name": "17892183888309497",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18053350391491066.jpg",
    "name": "18053350391491066",
    "category": "Places & creative",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/17935167612247048.jpg",
    "name": "17935167612247048",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17912959170370556.jpg",
    "name": "17912959170370556",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18092515880343344.jpg",
    "name": "18092515880343344",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18105367562090789.jpg",
    "name": "18105367562090789",
    "category": "Birds",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/17891026011398835.jpg",
    "name": "17891026011398835",
    "category": "Places & creative",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/17898284685487370.jpg",
    "name": "17898284685487370",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17959525764005124.jpg",
    "name": "17959525764005124",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17961485451157297.jpg",
    "name": "17961485451157297",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
    "title": "Osprey - 17961485451157297",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/17989720538828712.jpg",
    "name": "17989720538828712",
    "category": "Places & creative",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/18000915578770819.jpg",
    "name": "18000915578770819",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18009704054926443.jpg",
    "name": "18009704054926443",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18012273023867587.jpg",
    "name": "18012273023867587",
    "category": "Places & creative",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/18085815158643634.jpg",
    "name": "18085815158643634",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18085915520554423.jpg",
    "name": "18085915520554423",
    "category": "Birds",
    "width": 1080,
    "height": 1920,
  },
  {
    "image": "/Images/Media-Imports/18109479227472352.jpg",
    "name": "18109479227472352",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
    "title": "Osprey - 18109479227472352",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18117389710666846.jpg",
    "name": "18117389710666846",
    "category": "Birds",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/18120117613655168.jpg",
    "name": "18120117613655168",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18122411395756827.jpg",
    "name": "18122411395756827",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18142722118474197.jpg",
    "name": "18142722118474197",
    "category": "Birds",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/18143858842534432.jpg",
    "name": "18143858842534432",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18219296347331313.jpg",
    "name": "18219296347331313",
    "category": "Places & creative",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/18332517994283137.jpg",
    "name": "18332517994283137",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18571574893070323.jpg",
    "name": "18571574893070323",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17895616554593017.jpg",
    "name": "17895616554593017",
    "category": "Places & creative",
    "width": 1440,
    "height": 2560,
  },
  {
    "image": "/Images/Media-Imports/17954894031213666.jpg",
    "name": "17954894031213666",
    "category": "Places & creative",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/17961931011169830.jpg",
    "name": "17961931011169830",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18080940287707831.jpg",
    "name": "18080940287707831",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
    "title": "Osprey - 18080940287707831",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/18102640201935621.jpg",
    "name": "18102640201935621",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
  },
  {
    "image": "/Images/Media-Imports/18108807473030661.jpg",
    "name": "18108807473030661",
    "category": "Birds",
    "width": 1260,
    "height": 2240,
    "title": "Osprey - 18108807473030661",
    "species": "Osprey",
    "date": "24 December 2025",
    "location": "Purbasthali, West Bengal, India",
    "caption": "Osprey photograph from the newly supplied media folder, included with the Purbasthali field story."
  },
  {
    "image": "/Images/Media-Imports/17887721559682182.jpg",
    "name": "17887721559682182",
    "category": "Places & creative",
    "width": 1206,
    "height": 2144,
  },
  {
    "image": "/Images/Media-Imports/17901556389665101.jpg",
    "name": "17901556389665101",
    "category": "Places & creative",
    "width": 1206,
    "height": 2144,
  },
  {
    "image": "/Images/Media-Imports/18105498821215927.jpg",
    "name": "18105498821215927",
    "category": "Places & creative",
    "width": 1206,
    "height": 2144,
  },
  {
    "image": "/Images/Media-Imports/18142595842589066.jpg",
    "name": "18142595842589066",
    "category": "Places & creative",
    "width": 1206,
    "height": 2144,
  },
  {
    "image": "/Images/Media-Imports/18189723784405033.jpg",
    "name": "18189723784405033",
    "category": "Places & creative",
    "width": 1206,
    "height": 2144,
  },
  {
    "image": "/Images/Media-Imports/18197917678381484.jpg",
    "name": "18197917678381484",
    "category": "Places & creative",
    "width": 1206,
    "height": 2144,
  },
  {
    "image": "/Images/Media-Imports/18354935941216894.jpg",
    "name": "18354935941216894",
    "category": "Places & creative",
    "width": 1206,
    "height": 2144,
  },
  {
    "image": "/Images/Media-Imports/18211634206361429.jpg",
    "name": "18211634206361429",
    "category": "Birds",
    "width": 1206,
    "height": 2144,
  }
];

const achievementAssetIds = new Set(['18101046530270627', '18126543832737076', '17891026011398835', '18117100219915507', '18099068600191100', '17925640953390277']);
for (const item of importedMedia) if (achievementAssetIds.has(item.name)) item.category = 'Achievements';

export const work: Work[] = [...originalWork, ...importedMedia];
export const sagnikPortraits = [
  { image: '/Images/Sagnik/sagnik1.jpg', alt: 'Sagnik Bera in the field, portrait 1' },
  { image: '/Images/Sagnik/sagnik2.jpg', alt: 'Sagnik Bera in the field, portrait 2' },
  { image: '/Images/Sagnik/sagnik3.jpg', alt: 'Sagnik Bera in the field, portrait 3' },
  { image: '/Images/Sagnik/sagnik4.jpg', alt: 'Sagnik Bera in the field, portrait 4' },
  { image: '/Images/Sagnik/sagnik5.jpg', alt: 'Sagnik Bera in the field, portrait 5' },
  { image: '/Images/Sagnik/sagnik6.jpg', alt: 'Sagnik Bera in the field, portrait 6' },
 ] as const;
