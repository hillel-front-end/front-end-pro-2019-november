console.log('Lection 23 __ VUE INTRO __');

/*
1. Instance
2. {{}} Interpolations (https://ru.vuejs.org/v2/guide/syntax.html)
3. Expression in nterpolations({{?:}})
3. directives: 
    * v-html="'String with html value'"
    * v-bind:disabled="boolean"
    * v-bind:href="url"
    * v-model
    * v-if="boolean" - v-else-if="boolean" - v-else
    * v-show="boolean"
    * v-for - loop (Work like  for-in), (value, name, index)

4. styles directives:
   * v-bind:class="{ 'class-name as string': Boolean, 'another-class-name': Boolean variable, .., }"
   * v-bind:class="['activeClass', errorClassAsVar]"
   * v-bind:style="{ cssPropName: activeColorAsVar, fontSize: n + 'px', matgin: '10px' }"
5. v-on:click,mousenove .. (@click)

6. $set(vm.items, indexOfItem, newValue)
*/

// window.onload = () => {
    var config = {
        el: '#app',
        data: {
            foo: '123123',
            size: 15,
            bool:true,
            textAsHTML: 'Hello <a href="#">world</a>',
            url: 'https://www.google.com/',
            requestData: {name:''},
            goods: [{label:'Milk'}, {label:'Juice'}, {label:'Beer'}],
            inc(event) {
              console.log('123', event);
               vue.size +=1;

            //    vue.requestData.a = '123';
            //    vue.$set(vue.requestData, 'a', '123')
            }
        }
    };

    let vue = new Vue(config);

// }