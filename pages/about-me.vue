<script setup lang="ts">
import { Ref } from 'vue'

const ageNumber: Ref<number> = ref(0)
const ageString: Ref<string> = ref('')

const animateAgeString = () => {
  const maxNumber = Math.floor((new Date().getFullYear() - 1988) / 10) * 10
  const newNumber = ageNumber.value + 1
  const incTimingInMs = 50

  let newString = `${newNumber}ish years old`

  if (newNumber < maxNumber) {
    setTimeout(() => {
      animateAgeString()
    }, incTimingInMs)

    newString = `${newNumber} year old`
  }

  ageNumber.value = newNumber
  ageString.value = newString
}

const aboutMeIntroItems: Ref<
  { slug: string; image: string; content: string; classes: string[] }[]
> = ref([
  {
    slug: 'computer',
    image: 'imac.svg',
    content: `Sitting / standing in front of a
          <em class="text-yellow">different</em> computer to play
          video games`,
    classes: ['bg-blue'],
  },
  {
    slug: 'house',
    image: 'house.svg',
    content: `Just hanging out around the house with the family`,
    classes: ['bg-purple'],
  },
  {
    slug: 'bbq',
    image: 'smoker.svg',
    content: `Cooking up some BBQ in the backyard`,
    classes: ['bg-teal'],
  },
])

const technologies = ref([
  {
    slug: 'coldfusion',
    image: 'coldfusion.svg',
    title: `Coldfusion`,
    description: `I have built both APIs as well as fully featured server rendered apps in Coldfusion on Lucee both with and without Commandbox & Taffy.`,
    classes: ['bg-brands-coldfusion'],
    subtechs: [{ label: 'Lucee' }, { label: 'Commandbox' }, { label: 'Taffy' }],
  },
  {
    slug: 'javascript',
    image: 'javascript.svg',
    title: `Javascript`,
    description: `Most of the work that I do is in javascript of some sort, whether that be vanilla js or jQuery on legacy items or Vue and node in newer products.`,
    classes: ['bg-brands-javascript'],
    subtechs: [{ label: 'Typescript' }, { label: 'Vue' }, { label: 'Node' }],
  },
  {
    slug: 'css',
    image: 'css.svg',
    title: `CSS`,
    description: `Despite being a descriptive language rather than a programming one, I do tend to do a decent amount of CSS with and without UI libraries`,
    classes: ['bg-brands-css'],
    subtechs: [{ label: 'SCSS' }, { label: 'Tailwind' }],
  },
])

const socialLinks: Ref<{ slug: string; url: string; label: string; rel?: string }[]> =
  ref([
    {
      slug: 'twitter',
      label: 'Twitter',
      url: 'http://www.twitter.com/ryanoceros',
    },
    {
      slug: 'mastodon',
      label: 'Mastodon',
      url: 'https://mastodon.social/@ryantaggart',
      rel: 'me',
    },
    {
      slug: 'dribble',
      label: 'Dribble',
      url: 'http://www.dribbble.com/ryantaggart',
    },
  ])

onMounted(() => {
  animateAgeString()
})
</script>

<!--- Featured work block -->
<template>
  <div class="bg-blue-dark bg-opacity-50 pt-6 pb-12 relative overflow-hidden pb-20">
    <div class="container mx-auto px-5 relative">
      <div class="opacity-25 absolute inset-0">
        <DinoBackground />
      </div>

      <div class="z-10 relative">
        <h3 class="text-5xl text-blue-dark font-serif font-bold my-8">About Me</h3>
        <Divider size="large" />
        <p class="text-3xl text-blue-dark font-serif font-bold leading-relaxed">
          My name is Ryan Taggart, and I am a
          <span class="text-yellow">{{ ageString }}</span> Full stack developer from
          Jacksonville, Florida.
        </p>
      </div>
    </div>
  </div>

  <div class="bg-blue-dark edge--top">
    <div class="container mx-auto relative py-6 text-white mb-10">
      <h2 class="text-4xl font-serif font-bold leading-relaxed">In my downtime</h2>
      <Divider />
      <p class="text-2xl font-serif leading-relaxed">
        When I'm not sitting / standing in front of a computer coding I enjoy:
      </p>
    </div>

    <div
      class="flex flex-wrap text-center text-white font-serif font-bold leading-relaxed text-2xl"
    >
      <div
        v-for="item in aboutMeIntroItems"
        :key="item.slug"
        class="sm:basis-full md:basis-1/3 flex flex-col relative align-center justify-center py-12 pb-24"
        :class="item.classes"
      >
        <div class="absolute inset-0 opacity-25 flex align-center justify-center">
          <img :src="`/img/${item.image}`" class="w-full" />
        </div>

        <p class="p-4 py-16 relative z-10" v-html="item.content"></p>
      </div>
    </div>
  </div>

  <div class="bg-yellow-light py-16 edge--top--reverse">
    <div class="container mx-auto px-5">
      <h2 class="text-4xl text-blue-dark font-serif font-bold leading-relaxed">
        The type of work I enjoy
      </h2>
      <Divider />
      <p class="text-2xl text-blue-dark font-serif leading-relaxed">
        The thing that really excites me about the full stack work I do is being able to
        take something fully from concept to functional product.
      </p>
      <p class="text-2xl text-blue-dark font-serif leading-relaxed mt-6">
        Most of my day to day coding involves:
      </p>
    </div>

    <div
      class="flex flex-wrap text-center text-white font-serif font-bold leading-relaxed text-2xl mt-12"
    >
      <div
        v-for="item in technologies"
        :key="item.slug"
        class="sm:basis-full md:basis-1/3 flex flex-col relative justify-center py-12 pb-36"
        :class="item.classes"
      >
        <div class="absolute inset-0 opacity-25 flex align-center justify-center">
          <img :src="`/img/${item.image}`" class="w-full" />
        </div>

        <div class="relative z-10 p-4 flex-1">
          <p class="text-fs-xl">{{ item.title }}</p>
          <p class="text-lg">{{ item.description }}</p>
        </div>

        <div class="relative z-10 flex gap-8 px-4 mt-8 flex-wrap">
          <div
            v-for="subtech in item.subtechs"
            :key="subtech.label"
            class="bg-black bg-opacity-75 rounded flex-1 px-4"
          >
            {{ subtech.label }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-teal-light py-24 edge--top--reverse -mt-24">
    <div class="container mx-auto px-5">
      <h2 class="text-4xl text-black font-serif font-bold leading-relaxed -mt-8">
        And I am a
        <span class="text-teal strikethrough">
          <span class="line-through">tortured</span> optimistic Jaguars</span
        >
        fan.
      </h2>
      <Divider />
      <p class="text-2xl text-black font-serif leading-relaxed">
        In Trevor Lawrence all things are possible, even Waffle House (and a 20 point
        deficit).
      </p>
      <p class="text-2xl text-black font-serif leading-relaxed">
        Miles Jack <strong>wasn't</strong> down.
        <strong class="text-teal">DUUUUUVAL</strong>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
// mixin
@mixin angle($pseudo, $flip: false, $angle: 1.5deg) {
  // Possible values for $pseudo are: before, after, both
  @if $pseudo == 'before' or $pseudo == 'after' or $pseudo == 'both' {
    position: relative;
    z-index: 1;
    $selector: if($pseudo == 'both', '&:before,&:after', '&:#{$pseudo}');

    #{$selector} {
      background: inherit;
      content: '';
      display: block;
      height: 50%;
      left: 0;
      position: absolute;
      right: 0;
      z-index: -1;
      -webkit-backface-visibility: hidden; // for Chrome Windows
    }

    @if $pseudo == 'before' {
      #{$selector} {
        top: 0;

        @if $flip {
          transform: skewY($angle * -1);
          transform-origin: 0 0;
        } @else {
          transform: skewY($angle);
          transform-origin: 100% 0;
        }
      }
    }

    @if $pseudo == 'after' {
      #{$selector} {
        bottom: 0;

        @if $flip {
          transform: skewY($angle);
          transform-origin: 0 100%;
        } @else {
          transform: skewY($angle * -1);
          transform-origin: 100%;
        }
      }
    }

    @if $pseudo == 'both' {
      &:before {
        top: 0;

        @if $flip {
          transform: skewY($angle * -1);
          transform-origin: 0 0;
        } @else {
          transform: skewY($angle);
          transform-origin: 100% 0;
        }
      }

      &:after {
        bottom: 0;

        @if $flip {
          transform: skewY($angle);
          transform-origin: 0 0;
        } @else {
          transform: skewY($angle * -1);
          transform-origin: 100%;
        }
      }
    }
  }
}

// slanted edges here
.edge--bottom {
  @include angle(after);
}

.edge--bottom--reverse {
  @include angle(after, true);
}

.edge--top {
  @include angle(before);
}

.edge--top--reverse {
  @include angle(before, true);
}

.edge--both {
  @include angle(both);
}

.edge--both--reverse {
  @include angle(both, true);
}
</style>
