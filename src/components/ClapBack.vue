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
                <label for="txtFill">Emoji fillers</label>
                <md-input name="txtFill" id="txtFill" v-model="form.txtFill"></md-input>
              </md-field>
              <md-field class="hide">
                <md-select>

                </md-select>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-alignment-bottom-left">
            <div class="md-layout-item">
              <h3 class="md-layout">Text options</h3>
              <div class="md-layout">
                <md-switch v-on:change="textOptChange('allCaps')" v-model="form.options.allCaps">ALL CAPS</md-switch>
                <md-switch v-on:change="textOptChange('randomCase')" v-model="form.options.randomCase">RanDoM CAsE
                </md-switch>
                <md-switch v-on:change="textOptChange('titleCase')" v-model="form.options.titleCase">Title Case
                </md-switch>
              </div>
            </div>
            <div class="md-layout-item">
              <h3 class="md-layout">Emoji options</h3>
              <div class="md-layout">
                <md-switch v-model="form.options.randomEmoji">Randomize</md-switch>
                <md-switch v-model="form.options.punctuate">Punctuate</md-switch>
                <md-switch class="hide" v-model="form.options.keepSlackmoji">Keep slackmoji</md-switch>
              </div>
            </div>
          </div>

        </md-card-content>
        <md-card-actions>
          <md-button class="hide">Copy to clipboard</md-button>
          <md-button v-on:click="submit">Clap it out</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  import TextService from '../services/TextService'
  import EmojiService from '../services/EmojiService'
  import {toArray} from 'stringz'
  /** Titles
   * yasss
   * slay
   * preach
   * 🔥🔥🔥
   * 💁‍♀️
   * get it
   * 🤣🤣🤣
   */

  /** Emoji groups
   * (junk food) :pizza::hamburger::fries::hotdog::pretzel::bacon::taco:
   * (monkeys) :monkey_face::monkey::speak_no_evil::hear_no_evil::see_no_evil:
   * (silly faces) :wink::yum::face_with_rolling_eyes::smirk::sleeping::upside_down_face::shushing_face::face_with_hand_over_mouth::face_with_monocle:
   * (clap) 👏
   * (Dollar sign) 💲
   * (Money) 💲🤑💸💰
   */
  export default {
    name: 'ClapBack',
    data: () => ({
      title: 'Need a sassy comeback? Get started here⬇',
      sassyText: '',
      form: {
        txtMain: '',
        txtFill: '👏',
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
    methods: {
      textOptChange(t) {
        if (t !== 'allCaps') this.form.options.allCaps = false;
        if (t !== 'randomCase') this.form.options.randomCase = false;
        if (t !== 'titleCase') this.form.options.titleCase = false;
      },
      submit() {
        let txt;
        const main = this.form.txtMain;
        txt = main;
        if (this.form.options.titleCase) txt = TextService.titleCase(main);
        if (this.form.options.randomCase) txt = TextService.randomCase(main);
        if (this.form.options.allCaps) txt = TextService.capitalize(main);

        const emojiOpt = {
          text: txt,
          emojis: toArray(this.form.txtFill),
          randomize: this.form.options.randomEmoji
        };
        if (this.form.options.punctuate) {
          txt = EmojiService.punctuate(emojiOpt);
        } else {
          txt = EmojiService.clapback(emojiOpt);
        }

        this.sassyText = txt;
      }
    }
  }
</script>

<style scoped>
  .breathe {
    margin-left: 1em;
    margin-right: 1em;
  }

  .hide {
    visibility: hidden;
  }
</style>
