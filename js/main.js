// new Vue({ })で空のビューインスタンス作成。var app =はつけてもつけなくてもいい。慣例としてappやvmが使われる。ビューインスタンスを変数化（var 変数名)することでコンソールからアクセスできる
var app = new Vue({ 
  // #appの部分が対象
  el: '#app',
  data:{
    // ◆A：インラインイベントハンドラ 
    counter: 0,
    // ◆イベントハンドラに引数を渡す
    message: '',
    message2: ''
  },
  // ◆ B：メソッドイベントハンドラ 
  methods:{
    clickHandler:function(){
      this.counter++
    },
    // ◆ イベントオブジェクトの参照
    // 引数eventは任意でOK
    clickHandler2:function(event){
      this.counter++
      console.log(event)
      console.log(event.target.tagName)
      console.log(event.target.innerHTML)
      console.log(event.target.type)
    },
    // ◆イベントハンドラに引数を渡す
    // 引数messageは任意でOK
    clickHandler3:function(message){
      // 左辺のmessageはdataの中で定義した物、右辺は引数
      this.message = message
    },
    // ◆$event
    clickHandler4:function($event, message){
      // 左辺のmessageはdataの中で定義した物、右辺は引数
      this.message = message
      console.log($event)
    },
    // ◆イベント修飾子(.once)
    clickHandler5:function(){
      this.message2 = new Date().toLocaleTimeString()
    },
    // ◆キー修飾子
    clear:function(){
      this.message = ''
    },
    // ◆システム修飾子
    clickHandler6:function(){
      alert('shift + click')
    },
    // ◆v-on省略記法
    clickHandler7:function(){
      alert('clicked!')
    }



  }
})