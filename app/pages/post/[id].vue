<script setup lang="ts">
import Category from '~/components/articles/CategoryBtn.vue'
import RelatedArticles from '~/components/articles/Related.vue'

import { formatDate } from '~~/shared/utils/date'

// const { date, title,  image, categories } = defineProps<{
//   date: string
//   title: string
//   description: string
//   image: string
//   categories: string[]
// }>()
const { date, title, image, categories } = {
  date: '2023-10-01',
  title: 'Exploring the Best Social Events in Your City. Exploring the Best Social Events in Your City',
  image: 'https://thumbs.dreamstime.com/b/chef-group-young-people-cooking-classes-chef-group-young-people-cooking-classes-151106167.jpg',
  categories: ['Social Events'],
}
</script>

<template>
  <div>
    <div class="img-wrapper w-full h-[700px] rounded-3xl overflow-hidden">
      <img
        :src="image"
        class="w-full h-full object-cover"
      >
    </div>

    <div class="flex justify-between items-center py-6">
      <p class="text-sm text-gray-500">{{ formatDate(date) }}</p>
      <Category :category="categories[0] || ''" />
    </div>

    <h1 class="text-3xl/11 font-medium mb-10 line-clamp-2">{{ title }}</h1>

    <main>
      <p>I'm baby kombucha organic helvetica, copper mug readymade fit seitan tacos praxis dreamcatcher +1 blue bottle yuccie four dollar toast mixtape. IPhone migas gluten-free, keytar solarpunk distillery big mood cardigan neutral milk hotel lumbersexual shoreditch heirloom intelligentsia. 90's kickstarter man bun small batch bruh tacos, +1 irony neutra DSA messenger bag tilde. Man braid cray organic wolf iPhone succulents aesthetic edison bulb. You probably haven't heard of them trust fund grailed glossier yuccie snackwave. Cardigan organic synth, tattooed thundercats solarpunk tumblr artisan sustainable.</p>

      <p>XOXO kinfolk tbh chia, vape tote bag authentic raclette umami whatever. Ugh bodega boys fit mustache, pug pork belly retro cronut master cleanse. Kale chips hella marfa synth pork belly vice crucifix. Vinyl whatever authentic farm-to-table. Craft beer ethical beard bespoke lomo offal iPhone lyft keytar migas ramps air plant cronut cliche freegan. Ethical helvetica locavore hammock typewriter wolf cliche kogi. Echo park edison bulb craft beer, four loko cred tbh forage ugh fingerstache drinking vinegar.</p>

      <p>Master cleanse tacos ascot, portland pinterest synth vaporware. Lyft cray craft beer humblebrag kogi plaid fanny pack DSA tousled retro. Tote bag distillery crucifix tacos jawn, literally skateboard thundercats af yr bicycle rights. Hot chicken organic hell of, vinyl banh mi hashtag hoodie pickled schlitz marxism crucifix chillwave. Hexagon pinterest cronut affogato, 8-bit beard kickstarter jawn. Trust fund helvetica ethical cornhole mixtape, bodega boys kale chips actually banjo. Authentic semiotics quinoa aesthetic big mood tumblr swag, cronut hot chicken chartreuse retro flannel cold-pressed.</p>

      <p>Gluten-free pok pok helvetica knausgaard ethical plaid fanny pack forage skateboard pour-over prism butcher try-hard polaroid JOMO. Wayfarers kale chips roof party DIY, locavore tilde skateboard hashtag mlkshk helvetica gluten-free messenger bag mukbang migas you probably haven't heard of them. Gentrify hot chicken fashion axe neutra godard, before they sold out marxism jawn af put a bird on it mukbang. Banjo blog kickstarter, heirloom leggings selvage pitchfork viral hot chicken. Neutra direct trade air plant beard activated charcoal. Mixtape chillwave intelligentsia plaid subway tile chia kickstarter XOXO post-ironic next level leggings blog. Etsy you probably haven't heard of them keffiyeh everyday carry tilde prism.</p>

      <p>Raclette pabst mukbang single-origin coffee solarpunk next level kitsch hella cardigan forage irony thundercats knausgaard cloud bread vape. Listicle gluten-free health goth offal JOMO skateboard gentrify jianbing keffiyeh. Keytar intelligentsia JOMO prism artisan, offal small batch poutine. Lyft sus selfies praxis.</p>
    </main>

    <div class="divider my-[64px]" />

    <p class="font-bold text-2xl pb-[50px]">Related Articles</p>
    <RelatedArticles />
  </div>
</template>

<style scoped>
main p {
  padding-bottom: 32px;
  line-height: 1.8;
}
</style>
