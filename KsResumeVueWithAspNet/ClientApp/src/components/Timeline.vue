<template>
  <div>
    <h2 class="timeline-header">Where I've been</h2>
    <div class="timeline-wrapper">
    <v-timeline class="timeline">
      <v-timeline-item
      v-for="(ex, i) in Experience"
      :key="i"
      :color="'#E09145'"
      class="timeline-object"
      >
        <template v-slot:opposite>
          <span class="timeline-date" v-text="ex.date"></span>
        </template>
        <div>
          <h2 class="timeline-item-header" v-text="ex.title"></h2>
        </div>
      </v-timeline-item>
    </v-timeline>

        <v-row class="panel-wrapper">
          <v-expansion-panels flat class="ex-panels" popout>
            <v-expansion-panel
            v-for="(ex, i) in Experience"
            :key="i"
            class="ex-panel"
             >
              <v-expansion-panel-header
              class="ex-header"
              v-text="ex.title">
              </v-expansion-panel-header>
              <v-expansion-panel-content
               class="ex-content"
              v-text="ex.description"
              >
              </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>

  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'timeline',
  data: () => ({
    Experience: [
      {
        title: 'Tele2',
        date: '2013 June',
        description: `My career at Tele2 started as an part-time employee at the store in Farsta Centrum.
                      Here I was given an opportunity to get a real education in sales and customer
                      service. During my time at Tele2 I expanded my problem-solving ability, which I later
                      had good use of as a developer. After spending some time in the store in Farsta, I
                      chose to test work as a Promoter for Intel.`,
        show: false,
      },
      {
        title: 'Intel promoter',
        date: '2015 November',
        description: `As a Promoter, my job was to visit various electronics chains and market Intel
                      hardware. It was both to staff and customers. I answered any questions and helped
                      to and products designed after the customer's wishes.`,
        show: false,
      },
      {
        title: 'Tele2',
        date: '2016 Februari',
        description: `After my time as a Promoter,
                      I returned to Tele2 but in the store at Götgatan. In 2017, I switched store again to the one at
                      Götgatsbacken where I worked full time until 2018 when I left the job to start my
                      developer career.`,
        show: false,
      },
      {
        title: 'Academy by Academic Work',
        date: '2018 August',
        description: `After my time as a Promoter, I returned to Tele2 but in the store at Götgatan.
                      In 2017, I switched store again to the one at
                      Götgatsbacken where I worked full time until 2018 when I left the job to start my
                      developer career.`,
        show: false,
      },
      {
        title: 'Academic Work',
        date: '2018 October',
        description: `I have finished the Academy's Accelerated Learning Program in C # .NET.
                      Accelerated Learning is a fast track to a new career for ambitious and driven
                      people with the right ability to acquire new knowledge. The training method
                      focuses on practical learning with high tempo, agile teamwork and continuous
                      feedback dialogue. Education is always based on speciöc tasks that are relevant
                      to the professional role. This makes the learning process extremely eföcient and
                      the consultants can contribute as junior IT consultants from the örst day after the
                      training.`,
        show: false,
      },
      {
        title: 'YalloTrade AB',
        date: '2019 Mars',
        description: `I was recruited by Yallotrade from Academic Work as a developer. Here I had to
                      strengthen my skills in what I had experience in the past. I also got to learn new
                      tools: AngularJS, Nhibernate, etc. Yallotrade used agile working methods where we
                      worked together to achieve the goals. Through standups, breakdowns and analysis
                      meetings, the entire team was included in each other's tasks, thus creating better
                      collaboration.`,
        show: false,
      },
      {
        title: 'Hantverksdata',
        date: '2019 December',
        description: `During my time as a developer at Hantverksdata, I got to work with everything
                      from developing new services for customers and the internet, integrating different
                      APIs into their own systems, refactoring code and starting a project to explore the
                      possibilities with blazar. I personally have developed a lot as a system developer
                      during my time at Hantverksdata and am constantly curious about new possibilities.`,
        show: false,
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>

.timeline {
  max-width: 40vw;
  margin: auto;
  margin-top: 5vh;
  order: 1;
}
.timeline-wrapper {
  margin-left: 10vw;
  margin-top:10vh;
  display: flex;
}
.timeline-date {
  font-size: 24px;
}

.timeline-object {
  padding: 2vh;
}

.timeline-header {
  font-size: 60px;
  color:var(--accent);
  font-weight: 500;
  padding-left:10vw ;
}
.timeline-item-header {
  color:var(--accent);
  font-size: 30px;
  font-weight: 500;
}
.ex-panels {
  max-width: 30vw;
}

.ex-panel {
  background-color: rgba($color: #000000, $alpha: 0.0) !important;
}

.panel-wrapper {
  max-width: 30vw;
}

.ex-header {
  font-size:1.2rem;
}

.ex-content{
  padding-left:1vw;
  padding-right:1vw ;
}

.timeline-description{
  font-size: 1em;
}

</style>
