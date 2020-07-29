(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{378:function(_,v,a){"use strict";a.r(v);var t=a(18),e=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[_._v("#")]),_._v(" 环境变量")]),_._v(" "),a("p",[_._v("V2Ray 提供以下环境变量以供修改 V2Ray 的一些底层配置。")]),_._v(" "),a("h2",{attrs:{id:"每个连接的缓存大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每个连接的缓存大小"}},[_._v("#")]),_._v(" 每个连接的缓存大小")]),_._v(" "),a("ul",[a("li",[_._v("名称："),a("code",[_._v("v2ray.ray.buffer.size")]),_._v(" 或 "),a("code",[_._v("V2RAY_RAY_BUFFER_SIZE")]),_._v("。")]),_._v(" "),a("li",[_._v("单位：MBytes。")]),_._v(" "),a("li",[_._v("默认值：在 x86、amd64、arm64 和 s390x 上为 2，其它平台上禁用该缓存。")]),_._v(" "),a("li",[_._v("特殊值：0 表示缓存无上限。")])]),_._v(" "),a("p",[a("strong",[_._v("已过时，请使用本地策略中的 bufferSize")])]),_._v(" "),a("p",[_._v("对于一个代理连接，当上下游网络速度有差距时，V2Ray 会缓存一部分数据，以减小对网络传输的影响。这个配置设置了缓存的大小，越大的缓存会占用更多的内存，也会使网络性能越好。")]),_._v(" "),a("h2",{attrs:{id:"资源文件路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源文件路径"}},[_._v("#")]),_._v(" 资源文件路径")]),_._v(" "),a("ul",[a("li",[_._v("名称："),a("code",[_._v("v2ray.location.asset")]),_._v(" 或 "),a("code",[_._v("V2RAY_LOCATION_ASSET")]),_._v("。")]),_._v(" "),a("li",[_._v("默认值：和 v2ray 文件同路径。")])]),_._v(" "),a("p",[_._v("这个环境变量指定了一个文件夹位置，这个文件夹应当包含 geoip.dat 和 geosite.dat 文件。")]),_._v(" "),a("h2",{attrs:{id:"配置文件位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件位置"}},[_._v("#")]),_._v(" 配置文件位置")]),_._v(" "),a("ul",[a("li",[_._v("名称："),a("code",[_._v("v2ray.location.config")]),_._v(" 或 "),a("code",[_._v("V2RAY_LOCATION_CONFIG")]),_._v("。")]),_._v(" "),a("li",[_._v("默认值：和 v2ray 文件同路径。")])]),_._v(" "),a("p",[_._v("这个环境变量指定了一个文件夹位置，这个文件夹应当包含 config.json 文件。")]),_._v(" "),a("h2",{attrs:{id:"多配置目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多配置目录"}},[_._v("#")]),_._v(" 多配置目录")]),_._v(" "),a("ul",[a("li",[_._v("名称："),a("code",[_._v("v2ray.location.confdir")]),_._v(" 或 "),a("code",[_._v("V2RAY_LOCATION_CONFDIR")]),_._v("。")]),_._v(" "),a("li",[_._v("默认值："),a("code",[_._v('""')]),_._v("。")])]),_._v(" "),a("p",[_._v("V2Ray 4.23.0 开始增加的多配置文件目录项。这个目录内的 "),a("code",[_._v(".json")]),_._v(" 文件会按文件名顺序读取，作为多配置选项。")]),_._v(" "),a("h2",{attrs:{id:"分散读取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分散读取"}},[_._v("#")]),_._v(" 分散读取")]),_._v(" "),a("ul",[a("li",[_._v("名称："),a("code",[_._v("v2ray.buf.readv")]),_._v(" 或 "),a("code",[_._v("V2RAY_BUF_READV")]),_._v("。")]),_._v(" "),a("li",[_._v("默认值："),a("code",[_._v("auto")]),_._v("。")])]),_._v(" "),a("p",[_._v("V2Ray 3.37 开始使用 Scatter/Gather IO，这一特性可以在大流量（超过 100 MByte/s）的时候依然使用较低的内存。可选的值有 "),a("code",[_._v("auto")]),_._v("、"),a("code",[_._v("enable")]),_._v(" 和 "),a("code",[_._v("disable")]),_._v("。")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("enable")]),_._v("：强制开启分散读取特性。")]),_._v(" "),a("li",[a("code",[_._v("disable")]),_._v("：强制关闭分散读取特性。")]),_._v(" "),a("li",[a("code",[_._v("auto")]),_._v("：仅在 Windows、macOS 和 Linux，并且 CPU 平台为 x86、AMD64 和 s390x 时，开启此特性。")])]),_._v(" "),a("p",[_._v("在流量没有达到 100 MByte/s 时，开启与否在内存使用上没有明显的差异。")])])}),[],!1,null,null,null);v.default=e.exports}}]);