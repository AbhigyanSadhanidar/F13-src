<template>
  <div app>
    <v-app-bar fixed app height="80" class="elevation-1 hidden-sm-and-down primary" eager>
      <v-img id="change-cursor" @click="$router.push('/')" max-height="80" max-width="280" class="ml-0" :src="require('~/static/src.png')"></v-img>
  
      <v-spacer />
      <!-- <v-btn
          large
          title
          text
          v-for="(item, index) in items"
          :key="index"
          :href="item.link"
          >{{ item.name }}</v-btn
        > -->
  
      <v-toolbar-items>
        <!-- <v-btn  small text class="white--text font-weight-bold text-capitalize body-2"  @click="mainDialog()">See Summit 2022</v-btn> -->
        <!-- <v-btn  small text class="white--text font-weight-bold text-capitalize body-2"  to="/tenders">Tenders</v-btn> -->
        <v-menu offset-y open-on-hover :close-on-content-click="closeOnCon" transition="slide-x-transition" v-for="(item, index) in items" :key="index">
  
          <template v-slot:activator="{ on }">
            <v-btn class="white--text font-weight-bold text-capitalize body-2 mx-1" :href="item.link" v-on="on" :target="item.target" small text v-if="item.choice == true">
              {{item.name}}
            </v-btn>
            <v-btn v-else small text :href="item.link" :target="item.target" class="white--text font-weight-bold text-capitalize body-2">{{item.name}}</v-btn>
  
          </template>
  
  
  
  
  
          <v-list shaped style="background-color:rgba(29, 58, 124, 1);">
            <v-list-group v-for="(sub, subIndex) in item.options" :key="subIndex" link>
              <template v-slot:activator>
  
                <v-list-item v-if="sub.subMenu == true" :href="sub.redirect">
                  <v-list-item-title v-text="sub.name" class="text-left white--text"></v-list-item-title>
                </v-list-item>
  
                <v-list-item v-else :href="sub.redirect" :target="sub.target">
                  <v-list-item-title v-text="sub.name" class="text-left white--text"></v-list-item-title>
                </v-list-item>
  
  
  
              </template>
  
              <template v-slot:appendIcon>
                <v-icon v-if="sub.subMenu == true" small color="white">mdi-chevron-down</v-icon>
                <v-icon v-else small color="white"></v-icon>
              </template>
  
  
  
              <v-list-item v-if="sub.subMenu == true" v-for="(child,index) in sub.subMenuOptions" :key="index" :href="child.redirect" :target="child.target">
                <v-list-item-content>
                  <v-list-item-title v-text="child.name" class="text-left white--text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
  
          </v-list>
  
  
  
        </v-menu>
      </v-toolbar-items>
  
  
  
    </v-app-bar>
  
    <v-app-bar fixed height="80" app class="primary elevation-0 hidden-md-and-up" style="top: 0px; z-index: 4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
      <v-img max-height="80" max-width="280" :src="require('~/static/src.png')"></v-img>
    </v-app-bar>
  
    <v-navigation-drawer v-model="drawer" temporary fixed>
      <v-list dense shaped>
        <v-list-group v-for="(item, index) in items" :key="index" link>
          <template v-slot:activator>
            <v-list-item-content v-if="item.choice == true">
              <v-list-item-title v-text="item.name" class="text-left textColor--text"></v-list-item-title>
            </v-list-item-content>
  
            <v-list-item-content v-else @click="$router.push(item.link)">
              <v-list-item-title v-text="item.name" class="text-left textColor--text"></v-list-item-title>
            </v-list-item-content>
          </template>
  
          <template v-slot:appendIcon>
            <v-icon v-if="item.choice == true" small>mdi-chevron-down</v-icon>
            <!-- <v-icon v-else small>mdi-open-in-new</v-icon> -->
          </template>
  
  
  
          <v-list-item v-if="item.choice == true" v-for="(child,index) in item.options" :key="index" :href="child.redirect" :target="child.target">
            <v-list-item-content>
              <v-list-item-title v-text="child.name" class="text-left textColor--text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
  
      </v-list>
    </v-navigation-drawer>
    <StartupDialog/>
  </div>
  </template>
  
  <script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        //dialog:false,
        drawer: false,
        fixed: false,
        closeOnCon: false,
        scrollInvoked: 0,
  
      }
    },
    computed: {
      ...mapGetters('main', {
        items: 'GET_MENU_LIST',
        appBarColor: "GET_APPBAR_COLOR",
        dialog:"GET_MAIN_DIALOG"
      }),
    },
    methods: {
      onScroll() {
        this.scrollInvoked++
        console.log("OK")
        consolog.log(this.scrollInvoked)
      },
      mainDialog(){
        this.$store.commit('main/SET_MAIN_DIALOG')
      }
    }
  }
  </script>
  
  <style media="screen">
  #change-cursor {
    cursor: pointer !important;
  }
  
  .v-expansion-panel::before {
    box-shadow: none;
  }
  
  .v-list-item--link:hover{
    color:orange !important;
    background-color: orange !important;
  }
  </style>
  