(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PlaylistDetail"],{"2fdb":function(t,e,a){"use strict";var s=a("5ca1"),n=a("d2c8"),r="includes";s(s.P+s.F*a("5147")(r),"String",{includes:function(t){return!!~n(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"3b85":function(t,e,a){"use strict";var s=a("94a9"),n=a.n(s);n.a},"3c45":function(t,e,a){},5147:function(t,e,a){var s=a("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[s]=!1,!"/./"[t](e)}catch(n){}}return!0}},6762:function(t,e,a){"use strict";var s=a("5ca1"),n=a("c366")(!0);s(s.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"94a9":function(t,e,a){},c17f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.playlist.id?a("div",{staticClass:"playlist-detail"},[a("DetailHeader",{ref:"header",attrs:{playlist:t.playlist,songs:t.songs}}),a("div",{staticClass:"tabs-wrap"},[a("Tabs",{attrs:{tabs:t.tabs,type:"theme"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}}),a("el-input",{directives:[{name:"show",rawName:"v-show",value:t.activeTab===t.SONG_IDX,expression:"activeTab === SONG_IDX"}],staticClass:"input",class:t.getInputCls(),attrs:{placeholder:"搜索歌单音乐","prefix-icon":"el-icon-search"},on:{blur:t.onInputBlur,focus:t.onInputFocus},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1),t.searchValue&&!t.filteredSongs.length?a("div",{staticClass:"empty"},[t._v("\n    未能找到和\n    "),a("span",{staticClass:"keyword"},[t._v("“"+t._s(t.searchValue)+"”")]),t._v("\n    相关的任何音乐\n  ")]):t._e(),a("SongTable",{directives:[{name:"show",rawName:"v-show",value:t.activeTab===t.SONG_IDX,expression:"activeTab === SONG_IDX"}],staticClass:"table",attrs:{highlightText:t.searchValue,songs:t.filteredSongs}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTab===t.COMMENT_IDX,expression:"activeTab === COMMENT_IDX"}],staticClass:"comments"},[a("Comments",{attrs:{id:t.id,type:"playlist"},on:{update:t.onCommentsUpdate}})],1)],1):t._e()},n=[],r=(a("6762"),a("2fdb"),a("c5f6"),a("96cf"),a("3b8d")),i=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.playlist.id?a("div",{staticClass:"header"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:t.$utils.genImgUrl(t.playlist.coverImgUrl,400)}})]),a("div",{staticClass:"content"},[a("div",{staticClass:"title-wrap"},[a("p",{staticClass:"title"},[t._v(t._s(t.playlist.name))])]),a("div",{staticClass:"creator-wrap"},[a("img",{staticClass:"avatar",attrs:{src:t.playlist.creator.avatarUrl}}),a("p",{staticClass:"creator"},[t._v(t._s(t.playlist.creator.nickname))]),a("p",{staticClass:"create-time"},[t._v("\n                "+t._s(t.$utils.formatDate(t.playlist.createTime,"yyyy-MM-dd"))+" 创建\n            ")])]),a("div",{staticClass:"action-wrap"},[a("NButton",{staticClass:"button",on:{click:t.playAll}},[a("Icon",{staticClass:"icon middle",attrs:{color:"white",type:"play-round"}}),a("span",{staticClass:"middle"},[t._v("播放全部")])],1)],1),a("div",{staticClass:"desc-wrap"},[t.tagsText?a("p",{staticClass:"desc"},[a("span",[t._v("标签："+t._s(t.tagsText))])]):t._e(),t.playlist.description?a("p",{staticClass:"desc"},[a("span",{staticClass:"value"},[t._v("简介："+t._s(t.playlist.description))])]):t._e()])])]):t._e()}),c=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),l=a("e7e6");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach(function(e){Object(o["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var d={props:{playlist:{type:Object,default:function(){return{}}},songs:{type:Array,default:function(){return[]}}},methods:p({playAll:function(){this.startSong(this.songs[0]),this.setPlaylist(this.songs)}},Object(l["c"])(["setPlaylist"]),{},Object(l["a"])(["startSong"])),computed:{tagsText:function(){return this.playlist.tags.join("/")}}},f=d,h=(a("3b85"),a("2877")),v=Object(h["a"])(f,i,c,!1,null,"ce216430",null),m=v.exports,b=a("a110"),g=a("961b"),y=a("ed08"),w=a("365c"),O=500,C=0,_=1,T={metaInfo:function(){return{title:this.playlist.name}},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.SONG_IDX=C,this.COMMENT_IDX=_;case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),data:function(){return{tabs:["歌曲列表","评论"],activeTab:C,playlist:{},songs:[],searchValue:"",inputFocus:!1}},methods:{init:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["f"])({id:this.id});case 2:e=t.sent,a=e.playlist,this.playlist=a,this.genSonglist(a);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),genSonglist:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var a,s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.trackIds.map(function(t){var e=t.id;return e}),t.next=3,Object(w["w"])(a.slice(0,O));case 3:s=t.sent,n=s.songs.map(function(t){var e=t.id,a=t.name,s=t.al,n=t.ar,r=t.mv,i=t.dt;return Object(y["createSong"])({id:e,name:a,artists:n,duration:i,mvId:r,albumName:s.name,img:s.picUrl})}),this.songs=n;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onCommentsUpdate:function(t){var e=t.total;this.tabs.splice(_,1,"评论(".concat(e,")"))},onInputFocus:function(){this.inputFocus=!0},onInputBlur:function(){this.inputFocus=!1},getInputCls:function(){return this.inputFocus?"":"inactive"},scrollToHeader:function(){var t=this.$refs.header;t&&Object(y["scrollInto"])(t.$el)}},computed:{id:function(){return Number(this.$route.params.id)},filteredSongs:function(){var t=this;return this.songs.filter(function(e){var a=e.name,s=e.artistsText,n=e.albumName;return"".concat(a).concat(s).concat(n).toLowerCase().includes(t.searchValue.toLowerCase())})}},watch:{id:{handler:function(){this.searchValue="",this.init(),this.scrollToHeader()},immediate:!0}},components:{DetailHeader:m,SongTable:b["a"],Comments:g["a"]}},j=T,x=(a("f35a"),Object(h["a"])(j,s,n,!1,null,"5a426748",null));e["default"]=x.exports},d2c8:function(t,e,a){var s=a("aae3"),n=a("be13");t.exports=function(t,e,a){if(s(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(n(t))}},f35a:function(t,e,a){"use strict";var s=a("3c45"),n=a.n(s);n.a}}]);