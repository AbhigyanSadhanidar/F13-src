<template>
  <div>
    <v-card outlined shaped class="pa-2">
        <v-card-title>
            Events
        </v-card-title>
        
        <v-timeline
        dense
      clipped
    >
      <v-timeline-item
        v-for="(item, i) in timelineList"
        :key="i"
        
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold --text`"
            v-text="item.year"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-1 font-weight-black`">
            {{item.title}}
          </h2>
          <div>
            {{item.description}}
          </div>
          <v-btn small tile outlined class="mt-1">Read More</v-btn>
        </div>
      </v-timeline-item>
    </v-timeline>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      items: [
        {
          src: 'https://images.unsplash.com/photo-1553348403-d498176be74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80',
        },
        {
          src: 'https://images.unsplash.com/photo-1605701877331-645ad05dcb97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3578&q=80',
        },
        {
          src: 'https://images.unsplash.com/photo-1612821058477-8b39080e8dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80',
        },
        {
          src: 'https://images.unsplash.com/photo-1553348403-d498176be74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('main', { timelineList: 'GET_TIMELINE_LIST' }),
  },
}
</script>