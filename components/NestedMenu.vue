<template>
  <div>
    <template v-for="item in items">
              <v-hover :key="item.id">
                <v-btn v-if="item.children" flat slot-scope="{ hover }" style="position: relative;">
                  Item {{item.id}}
                  <!-- <NestedMenu :items="item.children" v-if="hover"></NestedMenu> -->
                  <!-- Remove this v-list and use NestedMenu component -->
                  <v-list dense class="nested-menu" v-if="hover">
                    <v-hover v-for="child1 in item.children" :key="child1.id">
                      <v-list-tile v-if="child1.children" slot-scope="{ hover }">
                        <v-list-tile-title>Item {{child1.id}}</v-list-tile-title>
                        <v-list-tile-action class="justify-end">></v-list-tile-action>
                        <v-list dense class="nested-menu" v-if="hover">
                          <v-hover v-for="child2 in child1.children" :key="child2.id">
                            <v-list-tile v-if="child2.children" slot-scope="{ hover }">
                              <v-list-tile-title>Item {{child2.id}}</v-list-tile-title>
                              <v-list-tile-action class="justify-end">></v-list-tile-action>
                              <v-list dense class="nested-menu" v-if="hover">
                                <v-hover v-for="child3 in child2.children" :key="child3.id">
                                  <v-list-tile v-if="child3.children" slot-scope="{ hover }">
                                    <v-list-tile-title>Item {{child3.id}}</v-list-tile-title>
                                    <v-list-tile-action class="justify-end">></v-list-tile-action>
                                    <v-list dense class="nested-menu" v-if="hover">
                                      <v-hover v-for="child4 in child3.children" :key="child4.id">
                                        <v-list-tile v-if="child4.children" slot-scope="{ hover }">
                                          <v-list-tile-title>Item {{child4.id}}</v-list-tile-title>
                                          <v-list-tile-action class="justify-end">></v-list-tile-action>
                                        </v-list-tile>
                                        <v-list-tile v-else>
                                          <v-list-tile-title>Item {{child4.id}}</v-list-tile-title>
                                        </v-list-tile>
                                      </v-hover>
                                    </v-list>
                                  </v-list-tile>
                                  <v-list-tile v-else>
                                    <v-list-tile-title>Item {{child3.id}}</v-list-tile-title>
                                  </v-list-tile>
                                </v-hover>
                              </v-list>
                            </v-list-tile>
                            <v-list-tile v-else>
                              <v-list-tile-title>Item {{child2.id}}</v-list-tile-title>
                            </v-list-tile>
                          </v-hover>
                        </v-list>
                      </v-list-tile>
                      <v-list-tile v-else>
                        <v-list-tile-title>Item {{child1.id}}</v-list-tile-title>
                      </v-list-tile>
                    </v-hover>
                  </v-list>
                </v-btn>

                <v-btn v-else flat>Item {{item.id}}</v-btn>
              </v-hover>
            </template>
  </div>
</template>

<script>
export default {
  components: { NestedMenu: () => import("@/components/NestedMenu") },
  props: ["items"]
};
</script>

<style screen="media">
.v-btn__content {
  position: relative;
}

.v-list__tile {
  position: relative;
}

.v-list--dense .v-list__tile:not(.v-list__tile--avatar) {
  height: 28px;
}

.v-list__tile__action {
  min-width: 32px;
}

.nested-menu {
  position: absolute;
  top: calc(100% + 16px);
  right: -16px;
  border: 2px solid darkgrey;

  & & {
    top: 0;
    right: initial;
    left: 100%;
  }
}
</style>
