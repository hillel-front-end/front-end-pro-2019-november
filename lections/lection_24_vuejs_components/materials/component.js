
Vue.component('app-button', {
    props:  {
        foo: Object,
        className: String
    },
    data() {
        return {
            name: 'Gallery'
        }
    },
    methods: {
        onClick() {
    
            console.log('click from app-button');
            this.$emit('myClick', this.foo);
        }
    },
    template: `
        <span @click="onClick" :class="['navigation__item', className]">
            {{foo? foo.name : 'Foo'}}
        </span>
    `
})

Vue.component('navigation', {
    data() {
        return {
            buttons: [
                {name: 'Main'},
                {name: 'Contacts'},
                {name: 'Email'}
            ]
        }
    },
    methods: {
        callOnMyClick(foo) {
            console.log('call from navigation', foo);
        }
    },
    template: `
        <div class="navigation">
            <app-button 
                @myClick="callOnMyClick"
                v-for="buttonItem in buttons" 
                :foo="buttonItem" />
        </div>
    `
});



Vue.component('main-app', {
    data() {
        return {
            appName: 'Hello world'
        }
    },
    template: `
    <div>
        <header>
            <navigation />
            <app-button 
            :className="'button_className'"
            :foo="{name: 'Candidates'}"/>
        </header>
    </div>
      `
}); // comp-name, config

new Vue({
    el:'#app',
    data: {
      name: "Valera",
      list: ["red"]
    }
});


