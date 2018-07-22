# Gilded Rose Refactoring Kata

This Kata was originally created by Terry Hughes (http://twitter.com/TerryHughes). It is already on GitHub [here](https://github.com/NotMyself/GildedRose). See also [Bobby Johnson's description of the kata](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/).

# Angus Pettifer's refactored version:

## Set up

- Fork and clone this repo
- Navigate to the JS directory in your command line
- Run `node` to open the JS REPL
- Run the following commands:

```
.load ./src/gilded_rose.js
.load ./src/gilded_rose_sulfuras.js
.load ./src/gilded_rose_aged_brie.js
.load ./src/gilded_rose_backstage_pass.js
.load ./src/gilded_rose_foo.js
.load ./src/quality_controller.js
```
For item, add item of your choice from:
- 'Sulfuras, Hand of Ragnaros'
- "Aged Brie"
- "Backstage passes to a TAFKAL80ETC concert"
- anything else (referred to below as 'foo')
Feel free to choose any quality or sell in date

```
var item = "foo"
var sellIn = 5
var quality = 10
const gildedRose = new Shop([ new Item(item, sellIn, quality) ]);
const items = gildedRose.update()
```
View the updates:
```
items[0].sellIn
items[0].quality
```

#### Running tests
Run `open SpecRunner.html`

## My process

You can read the detailed version of my process on my Medium blog [here](https://medium.com/@angus.pettifer/gilded-rose-the-approach-of-a-maker-c9cc3607499e)

The shortened version is:

Step 1 Rough-and-ready diagram to get my head into the problem

Step 2 Create a suite of feature tests that passed using the legacy code base

Step 3 More detailed diagram:
<img src="/js/assets/images/Gilded_rose_diagram_2.png" width="750px" />

Step 4 TDD each item in their respective classes according to the above diagram

Step 5 TDD the 'Update Quality' class

Step 6 Extract update quality behaviour from individual item classes into update quality class

Step 7 Incorporate my code into the original code base (there were some parts of the original code base that I was not allowed to change)

Step 8 Refactor
