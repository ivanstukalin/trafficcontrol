import Vue from 'vue';
import VueRouter from 'vue-router';
import dir from '@/config.js';
import TrafficLight from '@/components/TrafficLight';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/yellow'
    },
    {
      name: 'Red signal',
      path: dir.red.path,
      props: {
        lightNumber: dir.red.id,
        startTime:dir.red.time
      },
      component: TrafficLight,
    },
    {
      name: 'Yellow signal',
      path: dir.yellow.path,
      props: {
        lightNumber: dir.yellow.id,
        startTime: dir.yellow.time
      },
      component: TrafficLight
    },
    {
      name: 'Green signal',
      path: dir.green.path,
      props: {
        lightNumber: dir.green.id,
        startTime: dir.green.time
      },
      component: TrafficLight
    }
  ]
});
