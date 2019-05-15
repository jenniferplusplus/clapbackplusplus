<template>
  <div class="md-layout md-alignment-center">
    <form novalidate class="md-layout-item md-size-75">
      <md-card>
        <md-card-header>
          <div class="md-title">{{title}}</div>
          <div><h2>{{sassyText}}</h2></div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-alignment-top-left">
            <md-field class="md-layout-item md-size-65 md-small-size-100 breathe">
              <label for="txtMain">Make it sassy</label>
              <md-input name="txtMain" id="txtMain" v-model="form.txtMain"></md-input>
            </md-field>
            <div class="md-layout-item">
              <md-field>
                <label for="txtFill">👏</label>
                <md-input name="txtFill" id="txtFill" v-model="form.txtFill"></md-input>
              </md-field>
              <md-field>
                <md-select>

                </md-select>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-alignment-bottom-left">
            <div class="md-layout-item">
              <h3 class="md-layout">Text options</h3>
              <div class="md-layout">
                <md-switch v-model="form.options.allCaps">ALL CAPS</md-switch>
                <md-switch v-model="form.options.randomCase">RanDoM CAsE</md-switch>
                <md-switch v-model="form.options.titleCase">Title Case</md-switch>
              </div>
            </div>
            <div class="md-layout-item">
              <h3 class="md-layout">Emoji options</h3>
              <div class="md-layout">
                <md-switch v-model="form.options.randomEmoji">Randomize</md-switch>
                <md-switch v-model="form.options.keepSlackmoji">Keep slackmoji</md-switch>
                <md-switch v-model="form.options.punctuate">Punctuate</md-switch>
              </div>
            </div>
          </div>

        </md-card-content>
        <md-card-actions>
          <md-button>Copy to clipboard</md-button>
          <md-button>Clap it out</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'ClapBack',
    data: () => ({
      title: 'Need a sassy comeback? Get started here⬇',
      form: {
        txtMain: '',
        options: {
          allCaps: false,
          randomCase: false,
          titleCase: false,
          randomEmoji: false,
          keepSlackmoji: false,
          punctuate: false
        }
      }
    }),
    methods: {}
  }
</script>

<style scoped>
  .breathe {
    margin-left: 1em;
    margin-right: 1em;
  }
</style>
